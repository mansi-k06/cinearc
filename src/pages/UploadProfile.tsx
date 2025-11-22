import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IoArrowBack, IoCamera, IoPerson } from 'react-icons/io5';
import { ThemedView } from '../components/ThemedView';
import { ThemedText } from '../components/ThemedText';
import { getCurrentUser } from '../data/mockData';
import styles from './UploadProfile.module.css';

const UploadProfile: React.FC = () => {
  const navigate = useNavigate();
  const user = getCurrentUser();
  
  const [formData, setFormData] = useState({
    name: user?.name || '',
    profession: user?.type === 'creator' ? user.profession || '' : '',
    location: user?.location || '',
    email: user?.email || '',
    phone: user?.phone || '',
    bio: user?.bio || '',
    skills: user && user.type === 'creator' ? user.skills.map(s => s.name) : [] as string[],
  });
  const [currentSkill, setCurrentSkill] = useState('');
  
  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name,
        profession: user.type === 'creator' ? user.profession || '' : '',
        location: user.location || '',
        email: user.email,
        phone: user.phone || '',
        bio: user.bio || '',
        skills: user.type === 'creator' ? user.skills.map(s => s.name) : [],
      });
    }
  }, [user]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddSkill = () => {
    if (currentSkill.trim() && !formData.skills.includes(currentSkill.trim())) {
      setFormData({
        ...formData,
        skills: [...formData.skills, currentSkill.trim()],
      });
      setCurrentSkill('');
    }
  };

  const handleRemoveSkill = (skill: string) => {
    setFormData({
      ...formData,
      skills: formData.skills.filter((s) => s !== skill),
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Static data - profile would be updated in mockData in real app
    navigate('/profile');
  };

  return (
    <ThemedView className={styles.container}>
      <div className={styles.header}>
        <Link to="/profile" className={styles.backButton}>
          <IoArrowBack /> Back
        </Link>
        <ThemedText as="h1" className={styles.title}>
          Edit Profile
        </ThemedText>
      </div>
      <main className={styles.main}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.avatarSection}>
            <div className={styles.avatar}>
              <IoPerson size={64} />
            </div>
            <button type="button" className={styles.avatarButton}>
              <IoCamera /> Change Photo
            </button>
          </div>
          <div className={styles.formGrid}>
            <div className={styles.inputGroup}>
              <label htmlFor="name" className={styles.label}>
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                className={styles.input}
                required
              />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="profession" className={styles.label}>
                Profession
              </label>
              <select
                id="profession"
                name="profession"
                value={formData.profession}
                onChange={handleChange}
                className={styles.input}
                required
              >
                <option value="">Select profession</option>
                <option value="filmmaker">Filmmaker</option>
                <option value="editor">Editor</option>
                <option value="cinematographer">Cinematographer</option>
                <option value="director">Director</option>
                <option value="producer">Producer</option>
              </select>
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="location" className={styles.label}>
                Location
              </label>
              <input
                id="location"
                name="location"
                type="text"
                value={formData.location}
                onChange={handleChange}
                className={styles.input}
                required
              />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="email" className={styles.label}>
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className={styles.input}
                required
              />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="phone" className={styles.label}>
                Phone
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                className={styles.input}
              />
            </div>
            <div className={styles.inputGroupFull}>
              <label htmlFor="bio" className={styles.label}>
                Bio
              </label>
              <textarea
                id="bio"
                name="bio"
                value={formData.bio}
                onChange={handleChange}
                className={styles.textarea}
                rows={5}
                placeholder="Tell us about yourself..."
              />
            </div>
            <div className={styles.inputGroupFull}>
              <label htmlFor="skills" className={styles.label}>
                Skills
              </label>
              <div className={styles.skillsInput}>
                <input
                  id="skills"
                  type="text"
                  value={currentSkill}
                  onChange={(e) => setCurrentSkill(e.target.value)}
                  className={styles.input}
                  placeholder="Add a skill..."
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      handleAddSkill();
                    }
                  }}
                />
                <button type="button" onClick={handleAddSkill} className={styles.addSkillButton}>
                  Add
                </button>
              </div>
              <div className={styles.skillsList}>
                {formData.skills.map((skill, index) => (
                  <span key={index} className={styles.skillTag}>
                    {skill}
                    <button
                      type="button"
                      onClick={() => handleRemoveSkill(skill)}
                      className={styles.removeSkillButton}
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className={styles.formActions}>
            <button type="submit" className={styles.submitButton}>
              Save Changes
            </button>
            <Link to="/profile" className={styles.cancelButton}>
              Cancel
            </Link>
          </div>
        </form>
      </main>
    </ThemedView>
  );
};

export default UploadProfile;

