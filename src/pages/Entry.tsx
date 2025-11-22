import React from 'react';
import { Link } from 'react-router-dom';
import { 
  IoHome, 
  IoPerson, 
  IoChatbubbles, 
  IoPeople, 
  IoDocumentText, 
  IoVideocam, 
  IoBook, 
  IoBriefcase, 
  IoSettings,
  IoLogIn,
  IoPersonAdd,
  IoArrowBack
} from 'react-icons/io5';
import { ThemedView } from '../components/ThemedView';
import { ThemedText } from '../components/ThemedText';
import styles from './Entry.module.css';

interface RouteCard {
  path: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  category: 'auth' | 'main' | 'profile' | 'other';
}

const Entry: React.FC = () => {
  const routes: RouteCard[] = [
    // Authentication
    {
      path: '/login',
      title: 'Login',
      description: 'Sign in to your account',
      icon: <IoLogIn />,
      category: 'auth',
    },
    {
      path: '/signup-creator',
      title: 'Creator Signup',
      description: 'Join as a filmmaker, editor, or cinematographer',
      icon: <IoPersonAdd />,
      category: 'auth',
    },
    {
      path: '/signup-client',
      title: 'Client Signup',
      description: 'Join as a client looking for talent',
      icon: <IoPersonAdd />,
      category: 'auth',
    },
    // Main Pages
    {
      path: '/homepage',
      title: 'Creator Homepage',
      description: 'Dashboard for creators with contracts, clips, and more',
      icon: <IoHome />,
      category: 'main',
    },
    {
      path: '/homepage-for-clients',
      title: 'Client Homepage',
      description: 'Dashboard for clients to manage jobs and find talent',
      icon: <IoHome />,
      category: 'main',
    },
    {
      path: '/people',
      title: 'People List',
      description: 'Discover and browse talented creators',
      icon: <IoPeople />,
      category: 'main',
    },
    {
      path: '/contract',
      title: 'Contracts & Jobs',
      description: 'Manage your contracts and job listings',
      icon: <IoDocumentText />,
      category: 'main',
    },
    {
      path: '/clips',
      title: 'Clips Gallery',
      description: 'View and manage your video clips portfolio',
      icon: <IoVideocam />,
      category: 'main',
    },
    {
      path: '/tutorials',
      title: 'Tutorials',
      description: 'Learn from industry professionals',
      icon: <IoBook />,
      category: 'main',
    },
    {
      path: '/chat',
      title: 'Chat Screen',
      description: 'Message and communicate with others',
      icon: <IoChatbubbles />,
      category: 'main',
    },
    // Profile
    {
      path: '/profile',
      title: 'Profile',
      description: 'View your profile and information',
      icon: <IoPerson />,
      category: 'profile',
    },
    {
      path: '/upload-profile',
      title: 'Edit Profile',
      description: 'Update your profile information and skills',
      icon: <IoPerson />,
      category: 'profile',
    },
    {
      path: '/skills',
      title: 'Skills',
      description: 'Manage and showcase your professional skills',
      icon: <IoBriefcase />,
      category: 'profile',
    },
    // Other
    {
      path: '/settings',
      title: 'Settings',
      description: 'Configure your account settings and preferences',
      icon: <IoSettings />,
      category: 'other',
    },
    {
      path: '/splash',
      title: 'Splash Screen',
      description: 'App loading screen',
      icon: <IoHome />,
      category: 'other',
    },
  ];

  const categories = {
    auth: { title: 'Authentication', color: '#007AFF' },
    main: { title: 'Main Features', color: '#34C759' },
    profile: { title: 'Profile Management', color: '#FF9500' },
    other: { title: 'Other', color: '#5856D6' },
  };

  const groupedRoutes = routes.reduce((acc, route) => {
    if (!acc[route.category]) {
      acc[route.category] = [];
    }
    acc[route.category].push(route);
    return acc;
  }, {} as Record<string, RouteCard[]>);

  return (
    <ThemedView className={styles.container}>
      <header className={styles.header}>
        <Link to="/" className={styles.backButton}>
          <IoArrowBack /> Back to Home
        </Link>
        <ThemedText as="h1" className={styles.title}>
          Explore All Routes
        </ThemedText>
        <ThemedText className={styles.subtitle}>
          Click on any card to navigate to that page
        </ThemedText>
      </header>

      <main className={styles.main}>
        {Object.entries(groupedRoutes).map(([category, categoryRoutes]) => (
          <section key={category} className={styles.categorySection}>
            <div className={styles.categoryHeader}>
              <ThemedText as="h2" 
                className={styles.categoryTitle}
                style={{ color: categories[category as keyof typeof categories].color }}
              >
                {categories[category as keyof typeof categories].title}
              </ThemedText>
            </div>
            <div className={styles.routesGrid}>
              {categoryRoutes.map((route) => (
                <Link
                  key={route.path}
                  to={route.path}
                  className={styles.routeCard}
                >
                  <div className={styles.cardIcon} style={{ color: categories[category as keyof typeof categories].color }}>
                    {route.icon}
                  </div>
                  <ThemedText as="h3" className={styles.cardTitle}>
                    {route.title}
                  </ThemedText>
                  <ThemedText className={styles.cardDescription}>
                    {route.description}
                  </ThemedText>
                  <ThemedText className={styles.cardPath}>
                    {route.path}
                  </ThemedText>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </main>
    </ThemedView>
  );
};

export default Entry;

