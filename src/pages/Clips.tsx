import React from 'react';
import { Link } from 'react-router-dom';
import { IoArrowBack, IoAdd, IoVideocam, IoPlay, IoTrash } from 'react-icons/io5';
import { ThemedView } from '../components/ThemedView';
import { ThemedText } from '../components/ThemedText';
import { getClipsByUserId, currentUserId } from '../data/mockData';
import styles from './Clips.module.css';

const Clips: React.FC = () => {
  const clips = getClipsByUserId(currentUserId);

  return (
    <ThemedView className={styles.container}>
      <div className={styles.header}>
        <Link to="/homepage" className={styles.backButton}>
          <IoArrowBack /> Back
        </Link>
        <ThemedText as="h1" className={styles.title}>
          Clips Gallery
        </ThemedText>
        <button className={styles.uploadButton}>
          <IoAdd /> Upload Clip
        </button>
      </div>
      <main className={styles.main}>
        <div className={styles.clipsGrid}>
          {clips.map((clip) => (
            <div key={clip.id} className={styles.clipCard}>
              <div className={styles.thumbnail}>
                {clip.thumbnail ? (
                  <img src={clip.thumbnail} alt={clip.title} className={styles.thumbnailImage} />
                ) : (
                  <IoVideocam size={64} />
                )}
                <div className={styles.playOverlay}>
                  <IoPlay size={32} />
                </div>
                <div className={styles.duration}>
                  {clip.duration}
                </div>
              </div>
              <div className={styles.clipInfo}>
                <ThemedText as="h3" className={styles.clipTitle}>
                  {clip.title}
                </ThemedText>
                <div className={styles.clipStats}>
                  <ThemedText className={styles.stat}>
                    {clip.views.toLocaleString()} views
                  </ThemedText>
                  <ThemedText className={styles.stat}>
                    {clip.uploadDate}
                  </ThemedText>
                </div>
                <div className={styles.clipActions}>
                  <button className={styles.actionButton}>
                    <IoPlay /> Play
                  </button>
                  <button className={styles.deleteButton}>
                    <IoTrash /> Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </ThemedView>
  );
};

export default Clips;

