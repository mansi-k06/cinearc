import React, { ReactNode } from 'react';
import styles from './ThemedText.module.css';

interface ThemedTextProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  as?: 'span' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

export const ThemedText: React.FC<ThemedTextProps> = ({ 
  children, 
  className = '', 
  style,
  as: Component = 'span'
}) => {
  return (
    <Component className={`${styles.themedText} ${className}`} style={style}>
      {children}
    </Component>
  );
};

