'use client';

import { useState, useEffect, useRef, useCallback } from 'react';

interface WebSocketHookOptions {
  url: string;
  onOpen?: (event: WebSocketEventMap['open']) => void;
  onMessage?: (event: WebSocketEventMap['message']) => void;
  onClose?: (event: WebSocketEventMap['close']) => void;
  onError?: (event: WebSocketEventMap['error']) => void;
  reconnectInterval?: number;
  reconnectAttempts?: number;
  autoConnect?: boolean;
}

interface WebSocketHookReturn {
  sendMessage: (message: string | ArrayBufferLike | Blob | ArrayBufferView) => void;
  lastMessage: WebSocketEventMap['message'] | null;
  readyState: number;
  connect: () => void;
  disconnect: () => void;
}

/**
 * Custom hook for managing WebSocket connections with reconnect functionality
 */
export const useWebSocket = ({
  url,
  onOpen,
  onMessage,
  onClose,
  onError,
  reconnectInterval = 5000,
  reconnectAttempts = 5,
  autoConnect = true
}: WebSocketHookOptions): WebSocketHookReturn => {
  const [lastMessage, setLastMessage] = useState<WebSocketEventMap['message'] | null>(null);
  const [readyState, setReadyState] = useState<number>(WebSocket.CLOSED);
  
  const socketRef = useRef<WebSocket | null>(null);
  const reconnectTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const reconnectAttemptsRef = useRef<number>(0);
  
  // Cleanup function to close WebSocket and clear timeouts
  const cleanup = useCallback(() => {
    if (reconnectTimeoutRef.current) {
      clearTimeout(reconnectTimeoutRef.current);
      reconnectTimeoutRef.current = null;
    }
    
    if (socketRef.current) {
      socketRef.current.close();
      socketRef.current = null;
    }
  }, []);
  
  // Connect function to establish WebSocket connection
  const connect = useCallback(() => {
    cleanup();
    
    try {
      // For demo purposes, we'll simulate a WebSocket with mock data
      // In a real implementation, you would use a real WebSocket endpoint
      if (process.env.NODE_ENV === 'development') {
        // Create a mock WebSocket for development
        const mockSocket = {
          readyState: WebSocket.OPEN,
          close: () => {
            setReadyState(WebSocket.CLOSED);
            if (onClose) onClose({ type: 'close', target: mockSocket } as any);
          },
          send: (message: any) => {
            console.log('Mock WebSocket message sent:', message);
          }
        } as unknown as WebSocket;
        
        socketRef.current = mockSocket;
        setReadyState(WebSocket.OPEN);
        
        if (onOpen) onOpen({ type: 'open', target: mockSocket } as any);
        
        // Simulate receiving data periodically
        const intervalId = setInterval(() => {
          const mockMessage = {
            data: JSON.stringify({
              type: 'data',
              timestamp: new Date().toISOString(),
              heartRate: Math.floor(Math.random() * 30) + 60, // 60-90 bpm
              motion: Math.random().toFixed(2),
              seizure: Math.random() > 0.95 ? 1 : 0 // Rare seizure events
            }),
            type: 'message',
            target: mockSocket
          } as unknown as MessageEvent;
          
          setLastMessage(mockMessage);
          if (onMessage) onMessage(mockMessage);
        }, 5000);
        
        // Cleanup function for the mock socket
        return () => {
          clearInterval(intervalId);
          mockSocket.close();
        };
      } else {
        // Create a real WebSocket for production
        const socket = new WebSocket(url);
        socketRef.current = socket;
        
        socket.onopen = (event) => {
          setReadyState(socket.readyState);
          reconnectAttemptsRef.current = 0;
          if (onOpen) onOpen(event);
        };
        
        socket.onmessage = (event) => {
          setLastMessage(event);
          if (onMessage) onMessage(event);
        };
        
        socket.onclose = (event) => {
          setReadyState(socket.readyState);
          
          // Attempt to reconnect if not explicitly closed by user
          if (reconnectAttemptsRef.current < reconnectAttempts) {
            reconnectAttemptsRef.current++;
            reconnectTimeoutRef.current = setTimeout(() => {
              connect();
            }, reconnectInterval);
          }
          
          if (onClose) onClose(event);
        };
        
        socket.onerror = (event) => {
          if (onError) onError(event);
        };
      }
    } catch (error) {
      console.error('Error connecting to WebSocket:', error);
    }
  }, [url, onOpen, onMessage, onClose, onError, reconnectInterval, reconnectAttempts, cleanup]);
  
  // Initialize WebSocket connection when hook is mounted
  useEffect(() => {
    if (autoConnect) {
      connect();
    }
    
    // Cleanup when component unmounts
    return cleanup;
  }, [connect, autoConnect, cleanup]);
  
  // Function to send messages over WebSocket
  const sendMessage = useCallback((message: string | ArrayBufferLike | Blob | ArrayBufferView) => {
    if (socketRef.current && socketRef.current.readyState === WebSocket.OPEN) {
      socketRef.current.send(message);
    } else {
      console.warn('WebSocket is not connected');
    }
  }, []);
  
  // Function to manually disconnect WebSocket
  const disconnect = useCallback(() => {
    cleanup();
  }, [cleanup]);
  
  return {
    sendMessage,
    lastMessage,
    readyState,
    connect,
    disconnect
  };
}; 