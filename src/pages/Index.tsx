import React from 'react';
import { Link } from 'react-router-dom';
import { IoVideocam, IoPeople, IoDocumentText, IoChatbubbles, IoBriefcase, IoBook, IoArrowForward } from 'react-icons/io5';
import { ThemedView } from '../components/ThemedView';
import { ThemedText } from '../components/ThemedText';
import styles from './Index.module.css';

const Index: React.FC = () => {
  return (
    <ThemedView className={styles.container}>
      <header className={styles.header}>
        <ThemedText as="h1" className={styles.logo}>
          Cinearc
        </ThemedText>
        <div className={styles.headerButtons}>
          <Link to="/login" className={styles.loginButton}>
            Login
          </Link>
        </div>
      </header>
      
      <main className={styles.main}>
        <section className={styles.hero}>
          <ThemedText as="h1" className={styles.heroTitle}>
            Connect. Create. Collaborate.
          </ThemedText>
          <ThemedText as="p" className={styles.heroSubtitle}>
            The premier networking platform for filmmakers, editors, cinematographers, and clients.
            Find talent, showcase your work, and bring your creative visions to life.
          </ThemedText>
          <Link to="/entry" className={styles.ctaButton}>
            Start Now
            <IoArrowForward />
          </Link>
        </section>

        <section className={styles.features}>
          <ThemedText as="h2" className={styles.sectionTitle}>
            Everything You Need to Succeed
          </ThemedText>
          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <IoPeople className={styles.featureIcon} />
              <ThemedText as="h3" className={styles.featureTitle}>
                Discover Talent
              </ThemedText>
              <ThemedText className={styles.featureDescription}>
                Browse through profiles of skilled filmmakers, editors, and cinematographers.
                Find the perfect match for your project.
              </ThemedText>
            </div>

            <div className={styles.featureCard}>
              <IoVideocam className={styles.featureIcon} />
              <ThemedText as="h3" className={styles.featureTitle}>
                Showcase Your Work
              </ThemedText>
              <ThemedText className={styles.featureDescription}>
                Upload and share your best clips. Build a portfolio that showcases your
                unique style and expertise.
              </ThemedText>
            </div>

            <div className={styles.featureCard}>
              <IoDocumentText className={styles.featureIcon} />
              <ThemedText as="h3" className={styles.featureTitle}>
                Manage Contracts
              </ThemedText>
              <ThemedText className={styles.featureDescription}>
                Streamline your workflow with our contract management system.
                Track jobs, deadlines, and budgets all in one place.
              </ThemedText>
            </div>

            <div className={styles.featureCard}>
              <IoChatbubbles className={styles.featureIcon} />
              <ThemedText as="h3" className={styles.featureTitle}>
                Direct Messaging
              </ThemedText>
              <ThemedText className={styles.featureDescription}>
                Communicate seamlessly with clients and creators.
                Build relationships and discuss projects in real-time.
              </ThemedText>
            </div>

            <div className={styles.featureCard}>
              <IoBriefcase className={styles.featureIcon} />
              <ThemedText as="h3" className={styles.featureTitle}>
                Skills Showcase
              </ThemedText>
              <ThemedText className={styles.featureDescription}>
                Highlight your professional skills and experience levels.
                Let potential clients know exactly what you bring to the table.
              </ThemedText>
            </div>

            <div className={styles.featureCard}>
              <IoBook className={styles.featureIcon} />
              <ThemedText as="h3" className={styles.featureTitle}>
                Learn & Grow
              </ThemedText>
              <ThemedText className={styles.featureDescription}>
                Access tutorials from industry professionals.
                Expand your knowledge and stay ahead of the curve.
              </ThemedText>
            </div>
          </div>
        </section>

        <section className={styles.ctaSection}>
          <ThemedText as="h2" className={styles.ctaTitle}>
            Ready to Get Started?
          </ThemedText>
          <ThemedText className={styles.ctaText}>
            Join thousands of filmmakers and clients already using Cinearc to connect and create.
          </ThemedText>
          <Link to="/entry" className={styles.ctaButton}>
            Explore All Features
            <IoArrowForward />
          </Link>
        </section>
      </main>
    </ThemedView>
  );
};

export default Index;
