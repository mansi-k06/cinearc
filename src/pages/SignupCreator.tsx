import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ThemedView } from '../components/ThemedView';
import { ThemedText } from '../components/ThemedText';
import styles from './SignupCreator.module.css';

const SignupCreator: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    profession: '',
  });
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    // Static data - signup would be handled by backend in real app
    navigate('/homepage');
  };

  return (
    <ThemedView className={styles.container}>
      <div className={styles.formContainer}>
        <ThemedText as="h1" className={styles.title}>
          Sign Up as Creator
        </ThemedText>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputGroup}>
            <label htmlFor="name" className={styles.label}>
              Full Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              className={styles.input}
              required
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="email" className={styles.label}>
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className={styles.input}
              required
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="profession" className={styles.label}>
              Profession
            </label>
            <select
              id="profession"
              name="profession"
              value={formData.profession}
              onChange={handleChange}
              className={styles.input}
              required
            >
              <option value="">Select profession</option>
              <option value="filmmaker">Filmmaker</option>
              <option value="editor">Editor</option>
              <option value="cinematographer">Cinematographer</option>
              <option value="director">Director</option>
              <option value="producer">Producer</option>
            </select>
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="password" className={styles.label}>
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              className={styles.input}
              required
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="confirmPassword" className={styles.label}>
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className={styles.input}
              required
            />
          </div>
          <button type="submit" className={styles.submitButton}>
            Sign Up
          </button>
        </form>
        <div className={styles.footer}>
          <ThemedText>Already have an account? </ThemedText>
          <Link to="/login" className={styles.link}>
            Login
          </Link>
        </div>
      </div>
    </ThemedView>
  );
};

export default SignupCreator;

