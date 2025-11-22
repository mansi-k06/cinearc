import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ThemedView } from '../components/ThemedView';
import { ThemedText } from '../components/ThemedText';
import styles from './Splash.module.css';

const Splash: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate splash screen delay
    const timer = setTimeout(() => {
      navigate('/');
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <ThemedView className={styles.container}>
      <div className={styles.content}>
        <ThemedText as="h1" className={styles.logo}>
          Cinearc
        </ThemedText>
        <ThemedText className={styles.tagline}>
          Networking Platform for Filmmakers
        </ThemedText>
        <div className={styles.loader}></div>
      </div>
    </ThemedView>
  );
};

export default Splash;

