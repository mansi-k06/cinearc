import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { IoArrowBack, IoSearch, IoPerson, IoMail } from 'react-icons/io5';
import { ThemedView } from '../components/ThemedView';
import { ThemedText } from '../components/ThemedText';
import { mockUsers, currentUserId } from '../data/mockData';
import styles from './PeopleList.module.css';

const PeopleList: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Filter out current user and only show creators
  const people = useMemo(() => {
    return mockUsers
      .filter(user => user.id !== currentUserId && user.type === 'creator')
      .map(user => ({
        id: user.id,
        name: user.name,
        profession: user.profession || 'Unknown',
        location: user.location || 'Unknown',
        skills: user.type === 'creator' ? (user.skills?.map(s => s.name) || []) : [],
        avatar: user.avatar,
      }));
  }, []);

  const filteredPeople = useMemo(() => {
    return people.filter(
      (person) =>
        person.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        person.profession.toLowerCase().includes(searchQuery.toLowerCase()) ||
        person.skills.some((skill) => skill.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  }, [people, searchQuery]);

  return (
    <ThemedView className={styles.container}>
      <div className={styles.header}>
        <Link to="/homepage" className={styles.backButton}>
          <IoArrowBack /> Back
        </Link>
        <ThemedText as="h1" className={styles.title}>
          Discover People
        </ThemedText>
      </div>
      <main className={styles.main}>
        <div className={styles.searchContainer}>
          <div className={styles.searchBox}>
            <IoSearch className={styles.searchIcon} />
            <input
              type="text"
              placeholder="Search by name, profession, or skills..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={styles.searchInput}
            />
          </div>
        </div>
        <div className={styles.peopleGrid}>
          {filteredPeople.map((person) => (
            <div key={person.id} className={styles.personCard}>
              <div className={styles.avatar}>
                <IoPerson size={48} />
              </div>
              <ThemedText as="h3" className={styles.personName}>
                {person.name}
              </ThemedText>
              <ThemedText className={styles.personProfession}>
                {person.profession}
              </ThemedText>
              <ThemedText className={styles.personLocation}>
                {person.location}
              </ThemedText>
              <div className={styles.skillsList}>
                {person.skills.map((skill, index) => (
                  <span key={index} className={styles.skillTag}>
                    {skill}
                  </span>
                ))}
              </div>
              <Link to="/chat" className={styles.contactButton}>
                <IoMail /> Contact
              </Link>
            </div>
          ))}
        </div>
      </main>
    </ThemedView>
  );
};

export default PeopleList;

