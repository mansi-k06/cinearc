import React, { ReactNode } from 'react';
import styles from './ThemedView.module.css';

interface ThemedViewProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const ThemedView: React.FC<ThemedViewProps> = ({ 
  children, 
  className = '', 
  style 
}) => {
  return (
    <div className={`${styles.themedView} ${className}`} style={style}>
      {children}
    </div>
  );
};

