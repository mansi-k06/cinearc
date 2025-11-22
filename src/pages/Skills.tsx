import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoArrowBack, IoAdd, IoCheckmarkCircle, IoTrash } from 'react-icons/io5';
import { ThemedView } from '../components/ThemedView';
import { ThemedText } from '../components/ThemedText';
import { getCurrentUser } from '../data/mockData';
import { Skill } from '../types';
import styles from './Skills.module.css';

const Skills: React.FC = () => {
  const user = getCurrentUser();
  const initialSkills = user && user.type === 'creator' ? user.skills : [];
  const [skills, setSkills] = useState<Skill[]>(initialSkills);

  const [showAddForm, setShowAddForm] = useState(false);
  const [newSkill, setNewSkill] = useState({ name: '', level: 'intermediate' as Skill['level'], yearsOfExperience: 0 });

  const handleAddSkill = (e: React.FormEvent) => {
    e.preventDefault();
    if (newSkill.name.trim()) {
      setSkills([...skills, { ...newSkill, id: Date.now().toString() }]);
      setNewSkill({ name: '', level: 'intermediate', yearsOfExperience: 0 });
      setShowAddForm(false);
    }
  };

  const handleDeleteSkill = (id: string) => {
    setSkills(skills.filter((skill) => skill.id !== id));
  };

  const getLevelColor = (level: Skill['level']) => {
    switch (level) {
      case 'expert':
        return '#34C759';
      case 'advanced':
        return '#007AFF';
      case 'intermediate':
        return '#FF9500';
      case 'beginner':
        return '#FF3B30';
      default:
        return '#666666';
    }
  };

  return (
    <ThemedView className={styles.container}>
      <div className={styles.header}>
        <Link to="/homepage" className={styles.backButton}>
          <IoArrowBack /> Back
        </Link>
        <ThemedText as="h1" className={styles.title}>
          Skills
        </ThemedText>
        <button
          className={styles.addButton}
          onClick={() => setShowAddForm(!showAddForm)}
        >
          <IoAdd /> Add Skill
        </button>
      </div>
      <main className={styles.main}>
        {showAddForm && (
          <div className={styles.addForm}>
            <form onSubmit={handleAddSkill} className={styles.form}>
              <div className={styles.inputGroup}>
                <label htmlFor="skillName" className={styles.label}>
                  Skill Name
                </label>
                <input
                  id="skillName"
                  type="text"
                  value={newSkill.name}
                  onChange={(e) => setNewSkill({ ...newSkill, name: e.target.value })}
                  className={styles.input}
                  required
                />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="skillLevel" className={styles.label}>
                  Level
                </label>
                <select
                  id="skillLevel"
                  value={newSkill.level}
                  onChange={(e) => setNewSkill({ ...newSkill, level: e.target.value as Skill['level'] })}
                  className={styles.input}
                >
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
                  <option value="expert">Expert</option>
                </select>
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="years" className={styles.label}>
                  Years of Experience
                </label>
                <input
                  id="years"
                  type="number"
                  min="0"
                  value={newSkill.yearsOfExperience}
                  onChange={(e) => setNewSkill({ ...newSkill, yearsOfExperience: parseInt(e.target.value) || 0 })}
                  className={styles.input}
                />
              </div>
              <div className={styles.formActions}>
                <button type="submit" className={styles.submitButton}>
                  Add Skill
                </button>
                <button
                  type="button"
                  onClick={() => setShowAddForm(false)}
                  className={styles.cancelButton}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}
        <div className={styles.skillsList}>
          {skills.map((skill) => (
            <div key={skill.id} className={styles.skillCard}>
              <div className={styles.skillInfo}>
                <ThemedText as="h3" className={styles.skillName}>
                  {skill.name}
                </ThemedText>
                <div className={styles.skillDetails}>
                  <span
                    className={styles.skillLevel}
                    style={{ color: getLevelColor(skill.level) }}
                  >
                    <IoCheckmarkCircle /> {skill.level.charAt(0).toUpperCase() + skill.level.slice(1)}
                  </span>
                  <ThemedText className={styles.skillYears}>
                    {skill.yearsOfExperience} {skill.yearsOfExperience === 1 ? 'year' : 'years'} of experience
                  </ThemedText>
                </div>
              </div>
              <button
                className={styles.deleteButton}
                onClick={() => handleDeleteSkill(skill.id)}
              >
                <IoTrash />
              </button>
            </div>
          ))}
        </div>
      </main>
    </ThemedView>
  );
};

export default Skills;

