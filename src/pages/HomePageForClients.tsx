import React from 'react';
import { Link } from 'react-router-dom';
import { IoHome, IoPerson, IoChatbubbles, IoPeople, IoDocumentText, IoAdd, IoSettings } from 'react-icons/io5';
import { ThemedView } from '../components/ThemedView';
import { ThemedText } from '../components/ThemedText';
import styles from './HomePageForClients.module.css';

const HomePageForClients: React.FC = () => {
  return (
    <ThemedView className={styles.container}>
      <nav className={styles.navbar}>
        <ThemedText as="h1" className={styles.logo}>
          Cinearc
        </ThemedText>
        <div className={styles.navLinks}>
          <Link to="/homepage-for-clients" className={styles.navLink}>
            <IoHome /> Home
          </Link>
          <Link to="/people" className={styles.navLink}>
            <IoPeople /> Find Talent
          </Link>
          <Link to="/contract" className={styles.navLink}>
            <IoDocumentText /> Contracts
          </Link>
          <Link to="/chat" className={styles.navLink}>
            <IoChatbubbles /> Messages
          </Link>
          <Link to="/profile" className={styles.navLink}>
            <IoPerson /> Profile
          </Link>
          <Link to="/settings" className={styles.navLink}>
            <IoSettings /> Settings
          </Link>
        </div>
      </nav>
      <main className={styles.main}>
        <div className={styles.content}>
          <div className={styles.header}>
            <ThemedText as="h2" className={styles.sectionTitle}>
              Client Dashboard
            </ThemedText>
            <Link to="/contract" className={styles.createButton}>
              <IoAdd /> Post New Job
            </Link>
          </div>
          <div className={styles.cards}>
            <Link to="/contract" className={styles.card}>
              <IoDocumentText className={styles.cardIcon} />
              <ThemedText as="h3" className={styles.cardTitle}>
                Active Jobs
              </ThemedText>
              <ThemedText className={styles.cardText}>
                Manage your job postings and contracts
              </ThemedText>
            </Link>
            <Link to="/people" className={styles.card}>
              <IoPeople className={styles.cardIcon} />
              <ThemedText as="h3" className={styles.cardTitle}>
                Browse Talent
              </ThemedText>
              <ThemedText className={styles.cardText}>
                Find the perfect creator for your project
              </ThemedText>
            </Link>
            <Link to="/chat" className={styles.card}>
              <IoChatbubbles className={styles.cardIcon} />
              <ThemedText as="h3" className={styles.cardTitle}>
                Messages
              </ThemedText>
              <ThemedText className={styles.cardText}>
                Communicate with creators
              </ThemedText>
            </Link>
          </div>
        </div>
      </main>
    </ThemedView>
  );
};

export default HomePageForClients;

