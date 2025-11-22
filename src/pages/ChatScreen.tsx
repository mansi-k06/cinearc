import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { IoArrowBack, IoSend, IoPerson } from 'react-icons/io5';
import { ThemedView } from '../components/ThemedView';
import { ThemedText } from '../components/ThemedText';
import { mockMessages, currentUserId, getUserById } from '../data/mockData';
import styles from './ChatScreen.module.css';

const ChatScreen: React.FC = () => {
  // Get messages for the first chat (demo)
  const chatMessages = useMemo(() => {
    return mockMessages.map(msg => ({
      id: msg.id,
      text: msg.text,
      sender: msg.senderId === currentUserId ? 'me' as const : 'other' as const,
      timestamp: new Date(msg.timestamp).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
    }));
  }, []);

  // Get the other participant (demo - first chat)
  const otherParticipant = useMemo(() => {
    const chat = mockMessages.find(msg => msg.senderId !== currentUserId || msg.receiverId !== currentUserId);
    if (!chat) return null;
    const otherId = chat.senderId === currentUserId ? chat.receiverId : chat.senderId;
    return getUserById(otherId);
  }, []);

  const [inputText, setInputText] = useState('');

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputText.trim()) {
      // Static data - message would be added to mockMessages in real app
      setInputText('');
    }
  };

  return (
    <ThemedView className={styles.container}>
      <div className={styles.header}>
        <Link to="/homepage" className={styles.backButton}>
          <IoArrowBack /> Back
        </Link>
        <div className={styles.chatHeader}>
          <div className={styles.avatar}>
            <IoPerson size={24} />
          </div>
          <ThemedText as="h2" className={styles.chatTitle}>
            {otherParticipant?.name || 'Unknown User'}
          </ThemedText>
        </div>
      </div>
      <div className={styles.messagesContainer}>
        <div className={styles.messages}>
          {chatMessages.map((message) => (
            <div
              key={message.id}
              className={`${styles.message} ${message.sender === 'me' ? styles.messageMe : styles.messageOther}`}
            >
              <ThemedText className={styles.messageText}>{message.text}</ThemedText>
              <ThemedText className={styles.messageTime}>{message.timestamp}</ThemedText>
            </div>
          ))}
        </div>
      </div>
      <form onSubmit={handleSend} className={styles.inputContainer}>
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Type a message..."
          className={styles.input}
        />
        <button type="submit" className={styles.sendButton}>
          <IoSend />
        </button>
      </form>
    </ThemedView>
  );
};

export default ChatScreen;

