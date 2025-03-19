'use client';

import React from 'react';

interface SkeletonProps {
  height?: string | number;
  width?: string | number;
  borderRadius?: string | number;
  className?: string;
  animation?: 'pulse' | 'wave' | 'none';
}

interface SkeletonTextProps extends SkeletonProps {
  lines?: number;
  lastLineWidth?: string | number;
}

export const Skeleton = ({
  height = '1rem',
  width = '100%',
  borderRadius = '0.25rem',
  className = '',
  animation = 'pulse',
}: SkeletonProps) => {
  const animationClass = 
    animation === 'pulse' 
      ? 'animate-pulse' 
      : animation === 'wave' 
        ? 'animate-shimmer' 
        : '';

  return (
    <div
      style={{
        height: typeof height === 'number' ? `${height}px` : height,
        width: typeof width === 'number' ? `${width}px` : width,
        borderRadius: typeof borderRadius === 'number' ? `${borderRadius}px` : borderRadius,
      }}
      className={`bg-gray-200 dark:bg-gray-700 ${animationClass} ${className}`}
      aria-hidden="true"
    />
  );
};

export const SkeletonText = ({
  lines = 3,
  lastLineWidth = '70%',
  height = '1rem',
  className = '',
  animation = 'pulse',
}: SkeletonTextProps) => {
  return (
    <div className="space-y-2">
      {Array.from({ length: lines }).map((_, index) => (
        <Skeleton
          key={index}
          height={height}
          width={index === lines - 1 ? lastLineWidth : '100%'}
          className={className}
          animation={animation}
        />
      ))}
    </div>
  );
};

export const SkeletonCircle = ({
  size = 48,
  className = '',
  animation = 'pulse',
}: {
  size?: number;
  className?: string;
  animation?: 'pulse' | 'wave' | 'none';
}) => {
  return (
    <Skeleton
      height={size}
      width={size}
      borderRadius="50%"
      className={className}
      animation={animation}
    />
  );
};

export const SkeletonAvatar = ({
  size = 48,
  className = '',
  animation = 'pulse',
}: {
  size?: number;
  className?: string;
  animation?: 'pulse' | 'wave' | 'none';
}) => {
  return <SkeletonCircle size={size} className={className} animation={animation} />;
};

export const SkeletonButton = ({
  width = 100,
  height = 40,
  className = '',
  animation = 'pulse',
}: SkeletonProps) => {
  return (
    <Skeleton
      width={width}
      height={height}
      borderRadius="0.375rem"
      className={className}
      animation={animation}
    />
  );
};

export const SkeletonCard = ({
  height = 200,
  className = '',
  animation = 'pulse',
}: SkeletonProps) => {
  return (
    <div className={`rounded-lg overflow-hidden ${className}`}>
      <Skeleton height={height} animation={animation} />
      <div className="p-4 space-y-4">
        <Skeleton height="1.5rem" width="60%" animation={animation} />
        <SkeletonText lines={3} animation={animation} />
      </div>
    </div>
  );
};

export const SkeletonChart = ({
  height = 350,
  className = '',
  animation = 'pulse',
}: SkeletonProps) => {
  return (
    <div className={`rounded-lg overflow-hidden ${className}`}>
      <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
        <Skeleton height="1.5rem" width="40%" animation={animation} className="mb-4" />
        <Skeleton height={height} animation={animation} />
      </div>
    </div>
  );
};

export default Skeleton; 