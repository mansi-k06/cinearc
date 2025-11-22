import React from 'react';
import { Link } from 'react-router-dom';
import { IoHome, IoPerson, IoChatbubbles, IoPeople, IoDocumentText, IoVideocam, IoBook, IoBriefcase, IoSettings } from 'react-icons/io5';
import { ThemedView } from '../components/ThemedView';
import { ThemedText } from '../components/ThemedText';
import { getCurrentUser, getContractsByUserId, getClipsByUserId, currentUserId } from '../data/mockData';
import styles from './HomePage.module.css';

const HomePage: React.FC = () => {
  const user = getCurrentUser();
  const contracts = getContractsByUserId(currentUserId);
  const clips = getClipsByUserId(currentUserId);
  const activeContracts = contracts.filter(c => c.status === 'active').length;
  const pendingContracts = contracts.filter(c => c.status === 'pending').length;

  return (
    <ThemedView className={styles.container}>
      <nav className={styles.navbar}>
        <ThemedText as="h1" className={styles.logo}>
          Cinearc
        </ThemedText>
        <div className={styles.navLinks}>
          <Link to="/homepage" className={styles.navLink}>
            <IoHome /> Home
          </Link>
          <Link to="/people" className={styles.navLink}>
            <IoPeople /> People
          </Link>
          <Link to="/clips" className={styles.navLink}>
            <IoVideocam /> Clips
          </Link>
          <Link to="/tutorials" className={styles.navLink}>
            <IoBook /> Tutorials
          </Link>
          <Link to="/skills" className={styles.navLink}>
            <IoBriefcase /> Skills
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
          <ThemedText as="h2" className={styles.sectionTitle}>
            Welcome Back{user ? `, ${user.name.split(' ')[0]}` : ''}!
          </ThemedText>
          <div className={styles.stats}>
            <div className={styles.statCard}>
              <ThemedText className={styles.statNumber}>{activeContracts}</ThemedText>
              <ThemedText className={styles.statLabel}>Active Contracts</ThemedText>
            </div>
            <div className={styles.statCard}>
              <ThemedText className={styles.statNumber}>{pendingContracts}</ThemedText>
              <ThemedText className={styles.statLabel}>Pending</ThemedText>
            </div>
            <div className={styles.statCard}>
              <ThemedText className={styles.statNumber}>{clips.length}</ThemedText>
              <ThemedText className={styles.statLabel}>Your Clips</ThemedText>
            </div>
          </div>
          <div className={styles.cards}>
            <Link to="/contract" className={styles.card}>
              <IoDocumentText className={styles.cardIcon} />
              <ThemedText as="h3" className={styles.cardTitle}>
                Active Contracts
              </ThemedText>
              <ThemedText className={styles.cardText}>
                View and manage your active contracts
              </ThemedText>
            </Link>
            <Link to="/people" className={styles.card}>
              <IoPeople className={styles.cardIcon} />
              <ThemedText as="h3" className={styles.cardTitle}>
                Discover Talent
              </ThemedText>
              <ThemedText className={styles.cardText}>
                Find filmmakers, editors, and cinematographers
              </ThemedText>
            </Link>
            <Link to="/clips" className={styles.card}>
              <IoVideocam className={styles.cardIcon} />
              <ThemedText as="h3" className={styles.cardTitle}>
                Your Clips
              </ThemedText>
              <ThemedText className={styles.cardText}>
                Showcase your work in your clips gallery
              </ThemedText>
            </Link>
          </div>
        </div>
      </main>
    </ThemedView>
  );
};

export default HomePage;

