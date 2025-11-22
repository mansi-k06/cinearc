import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ThemedView } from '../components/ThemedView';
import { ThemedText } from '../components/ThemedText';
import styles from './Login.module.css';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState<'creator' | 'client'>('creator');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Static data - authentication would be handled by backend in real app
    if (userType === 'creator') {
      navigate('/homepage');
    } else {
      navigate('/homepage-for-clients');
    }
  };

  return (
    <ThemedView className={styles.container}>
      <div className={styles.formContainer}>
        <ThemedText as="h1" className={styles.title}>
          Login
        </ThemedText>
        <div className={styles.userTypeToggle}>
          <button
            className={`${styles.toggleButton} ${userType === 'creator' ? styles.active : ''}`}
            onClick={() => setUserType('creator')}
          >
            Creator
          </button>
          <button
            className={`${styles.toggleButton} ${userType === 'client' ? styles.active : ''}`}
            onClick={() => setUserType('client')}
          >
            Client
          </button>
        </div>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputGroup}>
            <label htmlFor="email" className={styles.label}>
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles.input}
              required
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="password" className={styles.label}>
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={styles.input}
              required
            />
          </div>
          <button type="submit" className={styles.submitButton}>
            Login
          </button>
        </form>
        <div className={styles.footer}>
          <ThemedText>Don't have an account? </ThemedText>
          <Link to={userType === 'creator' ? '/signup-creator' : '/signup-client'} className={styles.link}>
            Sign up
          </Link>
        </div>
      </div>
    </ThemedView>
  );
};

export default Login;

