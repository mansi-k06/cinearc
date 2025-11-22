import React from 'react';
import { Link } from 'react-router-dom';
import { IoArrowBack, IoMoon, IoSunny, IoNotifications, IoLockClosed, IoPerson, IoLogOut } from 'react-icons/io5';
import { ThemedView } from '../components/ThemedView';
import { ThemedText } from '../components/ThemedText';
import { useTheme } from '../contexts/ThemeContext';
import styles from './Settings.module.css';

const Settings: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [notifications, setNotifications] = React.useState(true);

  return (
    <ThemedView className={styles.container}>
      <div className={styles.header}>
        <Link to="/homepage" className={styles.backButton}>
          <IoArrowBack /> Back
        </Link>
        <ThemedText as="h1" className={styles.title}>
          Settings
        </ThemedText>
      </div>
      <main className={styles.main}>
        <div className={styles.settingsList}>
          <div className={styles.settingsSection}>
            <ThemedText as="h2" className={styles.sectionTitle}>
              Appearance
            </ThemedText>
            <div className={styles.settingItem}>
              <div className={styles.settingInfo}>
                <div className={styles.settingIcon}>
                  {theme === 'dark' ? <IoMoon /> : <IoSunny />}
                </div>
                <div>
                  <ThemedText className={styles.settingName}>Dark Mode</ThemedText>
                  <ThemedText className={styles.settingDescription}>
                    Toggle between light and dark theme
                  </ThemedText>
                </div>
              </div>
              <button
                className={`${styles.toggleButton} ${theme === 'dark' ? styles.toggleButtonActive : ''}`}
                onClick={toggleTheme}
                aria-label="Toggle dark mode"
              >
                <div className={`${styles.toggleSlider} ${theme === 'dark' ? styles.toggleSliderActive : ''}`} />
              </button>
            </div>
          </div>

          <div className={styles.settingsSection}>
            <ThemedText as="h2" className={styles.sectionTitle}>
              Notifications
            </ThemedText>
            <div className={styles.settingItem}>
              <div className={styles.settingInfo}>
                <div className={styles.settingIcon}>
                  <IoNotifications />
                </div>
                <div>
                  <ThemedText className={styles.settingName}>Push Notifications</ThemedText>
                  <ThemedText className={styles.settingDescription}>
                    Receive notifications for messages and updates
                  </ThemedText>
                </div>
              </div>
              <button
                className={`${styles.toggleButton} ${notifications ? styles.toggleButtonActive : ''}`}
                onClick={() => setNotifications(!notifications)}
                aria-label="Toggle notifications"
              >
                <div className={`${styles.toggleSlider} ${notifications ? styles.toggleSliderActive : ''}`} />
              </button>
            </div>
          </div>

          <div className={styles.settingsSection}>
            <ThemedText as="h2" className={styles.sectionTitle}>
              Account
            </ThemedText>
            <Link to="/upload-profile" className={styles.settingItem}>
              <div className={styles.settingInfo}>
                <div className={styles.settingIcon}>
                  <IoPerson />
                </div>
                <div>
                  <ThemedText className={styles.settingName}>Edit Profile</ThemedText>
                  <ThemedText className={styles.settingDescription}>
                    Update your profile information
                  </ThemedText>
                </div>
              </div>
            </Link>
            <div className={styles.settingItem}>
              <div className={styles.settingInfo}>
                <div className={styles.settingIcon}>
                  <IoLockClosed />
                </div>
                <div>
                  <ThemedText className={styles.settingName}>Change Password</ThemedText>
                  <ThemedText className={styles.settingDescription}>
                    Update your account password
                  </ThemedText>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.settingsSection}>
            <div className={styles.settingItem}>
              <div className={styles.settingInfo}>
                <div className={styles.settingIcon}>
                  <IoLogOut />
                </div>
                <div>
                  <ThemedText className={styles.settingName}>Logout</ThemedText>
                  <ThemedText className={styles.settingDescription}>
                    Sign out of your account
                  </ThemedText>
                </div>
              </div>
              <button className={styles.logoutButton}>
                Logout
              </button>
            </div>
          </div>
        </div>
      </main>
    </ThemedView>
  );
};

export default Settings;

