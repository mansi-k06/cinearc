import React from 'react';
import { Link } from 'react-router-dom';
import { IoArrowBack, IoBook, IoPlay, IoTime, IoPerson } from 'react-icons/io5';
import { ThemedView } from '../components/ThemedView';
import { ThemedText } from '../components/ThemedText';
import { mockTutorials } from '../data/mockData';
import styles from './Tutorials.module.css';

const Tutorials: React.FC = () => {
  const tutorials = mockTutorials;

  return (
    <ThemedView className={styles.container}>
      <div className={styles.header}>
        <Link to="/homepage" className={styles.backButton}>
          <IoArrowBack /> Back
        </Link>
        <ThemedText as="h1" className={styles.title}>
          Tutorials
        </ThemedText>
      </div>
      <main className={styles.main}>
        <div className={styles.tutorialsGrid}>
          {tutorials.map((tutorial) => (
            <div key={tutorial.id} className={styles.tutorialCard}>
              <div className={styles.thumbnail}>
                {tutorial.thumbnail ? (
                  <img src={tutorial.thumbnail} alt={tutorial.title} className={styles.thumbnailImage} />
                ) : (
                  <IoBook size={64} />
                )}
                <div className={styles.playOverlay}>
                  <IoPlay size={32} />
                </div>
                <div className={styles.category}>
                  {tutorial.category}
                </div>
              </div>
              <div className={styles.tutorialInfo}>
                <ThemedText as="h3" className={styles.tutorialTitle}>
                  {tutorial.title}
                </ThemedText>
                <div className={styles.tutorialMeta}>
                  <div className={styles.metaItem}>
                    <IoPerson />
                    <ThemedText className={styles.metaText}>{tutorial.instructor}</ThemedText>
                  </div>
                  <div className={styles.metaItem}>
                    <IoTime />
                    <ThemedText className={styles.metaText}>{tutorial.duration}</ThemedText>
                  </div>
                </div>
                <ThemedText className={styles.views}>
                  {tutorial.views.toLocaleString()} views
                </ThemedText>
                <button className={styles.watchButton}>
                  <IoPlay /> Watch Tutorial
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </ThemedView>
  );
};

export default Tutorials;

