import React from 'react';
import { Link } from 'react-router-dom';
import { IoArrowBack, IoCamera, IoLocation, IoMail, IoCall, IoBriefcase, IoPerson } from 'react-icons/io5';
import { ThemedView } from '../components/ThemedView';
import { ThemedText } from '../components/ThemedText';
import { getCurrentUser } from '../data/mockData';
import styles from './Profile.module.css';

const Profile: React.FC = () => {
  const user = getCurrentUser();
  
  if (!user || user.type !== 'creator') {
    return (
      <ThemedView className={styles.container}>
        <ThemedText>User not found</ThemedText>
      </ThemedView>
    );
  }

  const profile = user;

  return (
    <ThemedView className={styles.container}>
      <div className={styles.header}>
        <Link to="/homepage" className={styles.backButton}>
          <IoArrowBack /> Back
        </Link>
        <ThemedText as="h1" className={styles.title}>
          Profile
        </ThemedText>
        <Link to="/upload-profile" className={styles.editButton}>
          Edit Profile
        </Link>
      </div>
      <main className={styles.main}>
        <div className={styles.profileCard}>
          <div className={styles.avatarSection}>
            <div className={styles.avatar}>
              <IoPerson size={64} />
            </div>
            <button className={styles.avatarButton}>
              <IoCamera /> Change Photo
            </button>
          </div>
          <div className={styles.infoSection}>
            <ThemedText as="h2" className={styles.name}>
              {profile.name}
            </ThemedText>
            <div className={styles.profession}>
              <IoBriefcase /> {profile.profession}
            </div>
            {profile.location && (
              <div className={styles.location}>
                <IoLocation /> {profile.location}
              </div>
            )}
            {profile.bio && (
              <ThemedText className={styles.bio}>
                {profile.bio}
              </ThemedText>
            )}
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <IoMail /> {profile.email}
              </div>
              {profile.phone && (
                <div className={styles.contactItem}>
                  <IoCall /> {profile.phone}
                </div>
              )}
            </div>
            {profile.skills && profile.skills.length > 0 && (
              <div className={styles.skillsSection}>
                <ThemedText as="h3" className={styles.skillsTitle}>
                  Skills
                </ThemedText>
                <div className={styles.skillsList}>
                  {profile.skills.map((skill) => (
                    <span key={skill.id} className={styles.skillTag}>
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </ThemedView>
  );
};

export default Profile;

