import { User, CreatorProfile, ClientProfile, Contract, Message, Chat, Clip, Tutorial, Skill } from '../types';

// Mock Users
export const mockUsers: (CreatorProfile | ClientProfile)[] = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john.doe@example.com',
    type: 'creator',
    profession: 'Filmmaker',
    location: 'Los Angeles, CA',
    phone: '+1 (555) 123-4567',
    bio: 'Passionate filmmaker with 10+ years of experience in creating compelling visual stories.',
    avatar: '',
    createdAt: '2023-01-15',
    skills: [
      { id: '1', name: 'Cinematography', level: 'advanced', yearsOfExperience: 5 },
      { id: '2', name: 'Video Editing', level: 'expert', yearsOfExperience: 8 },
      { id: '3', name: 'Color Grading', level: 'intermediate', yearsOfExperience: 3 },
      { id: '4', name: 'Directing', level: 'advanced', yearsOfExperience: 6 },
    ],
    clips: [],
    tutorials: [],
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    type: 'creator',
    profession: 'Editor',
    location: 'New York, NY',
    phone: '+1 (555) 234-5678',
    bio: 'Professional video editor specializing in narrative films and documentaries.',
    avatar: '',
    createdAt: '2023-02-20',
    skills: [
      { id: '5', name: 'Video Editing', level: 'expert', yearsOfExperience: 10 },
      { id: '6', name: 'Color Grading', level: 'advanced', yearsOfExperience: 7 },
      { id: '7', name: 'Motion Graphics', level: 'intermediate', yearsOfExperience: 4 },
    ],
    clips: [],
    tutorials: [],
  },
  {
    id: '3',
    name: 'Mike Johnson',
    email: 'mike.johnson@example.com',
    type: 'creator',
    profession: 'Cinematographer',
    location: 'Los Angeles, CA',
    phone: '+1 (555) 345-6789',
    bio: 'Award-winning cinematographer with expertise in both digital and film formats.',
    avatar: '',
    createdAt: '2023-03-10',
    skills: [
      { id: '8', name: 'Cinematography', level: 'expert', yearsOfExperience: 12 },
      { id: '9', name: 'Lighting', level: 'expert', yearsOfExperience: 10 },
      { id: '10', name: 'Camera Operation', level: 'advanced', yearsOfExperience: 8 },
    ],
    clips: [],
    tutorials: [],
  },
  {
    id: '4',
    name: 'Sarah Williams',
    email: 'sarah.williams@example.com',
    type: 'creator',
    profession: 'Director',
    location: 'Chicago, IL',
    phone: '+1 (555) 456-7890',
    bio: 'Independent film director known for character-driven narratives.',
    avatar: '',
    createdAt: '2023-04-05',
    skills: [
      { id: '11', name: 'Directing', level: 'expert', yearsOfExperience: 15 },
      { id: '12', name: 'Screenwriting', level: 'advanced', yearsOfExperience: 10 },
      { id: '13', name: 'Production', level: 'intermediate', yearsOfExperience: 5 },
    ],
    clips: [],
    tutorials: [],
  },
  {
    id: '5',
    name: 'ABC Studios',
    email: 'contact@abcstudios.com',
    type: 'client',
    company: 'ABC Studios',
    location: 'Los Angeles, CA',
    phone: '+1 (555) 111-2222',
    bio: 'Production company specializing in commercial and corporate video content.',
    avatar: '',
    createdAt: '2023-01-01',
  },
  {
    id: '6',
    name: 'XYZ Records',
    email: 'info@xyzrecords.com',
    type: 'client',
    company: 'XYZ Records',
    location: 'New York, NY',
    phone: '+1 (555) 222-3333',
    bio: 'Record label producing music videos for emerging artists.',
    avatar: '',
    createdAt: '2023-02-15',
  },
];

// Mock Contracts
export const mockContracts: Contract[] = [
  {
    id: '1',
    title: 'Short Film Production',
    description: 'We need a cinematographer for an independent short film project. Shooting will take place over 5 days in Los Angeles.',
    clientId: '5',
    creatorId: '1',
    status: 'active',
    deadline: '2024-03-15',
    budget: '$5,000',
    createdAt: '2024-01-10',
    updatedAt: '2024-01-15',
  },
  {
    id: '2',
    title: 'Music Video Editing',
    description: 'Looking for an experienced editor to edit a 3-minute music video. Raw footage will be provided.',
    clientId: '6',
    creatorId: '2',
    status: 'pending',
    deadline: '2024-02-28',
    budget: '$2,500',
    createdAt: '2024-01-20',
    updatedAt: '2024-01-20',
  },
  {
    id: '3',
    title: 'Commercial Cinematography',
    description: 'High-end commercial shoot requiring expert cinematography skills. 2-day shoot in studio.',
    clientId: '5',
    creatorId: '3',
    status: 'completed',
    deadline: '2024-01-20',
    budget: '$8,000',
    createdAt: '2023-12-15',
    updatedAt: '2024-01-20',
  },
  {
    id: '4',
    title: 'Documentary Film Direction',
    description: 'Seeking an experienced director for a feature-length documentary project.',
    clientId: '6',
    status: 'pending',
    deadline: '2024-04-30',
    budget: '$15,000',
    createdAt: '2024-01-25',
    updatedAt: '2024-01-25',
  },
];

// Mock Messages
export const mockMessages: Message[] = [
  {
    id: '1',
    senderId: '5',
    receiverId: '1',
    text: 'Hello! Are you available for a project?',
    timestamp: '2024-01-15T10:30:00Z',
    read: true,
  },
  {
    id: '2',
    senderId: '1',
    receiverId: '5',
    text: 'Hi! Yes, I would be interested. Can you tell me more about it?',
    timestamp: '2024-01-15T10:32:00Z',
    read: true,
  },
  {
    id: '3',
    senderId: '5',
    receiverId: '1',
    text: "It's a short film project. We need a cinematographer.",
    timestamp: '2024-01-15T10:33:00Z',
    read: true,
  },
  {
    id: '4',
    senderId: '1',
    receiverId: '5',
    text: 'That sounds great! When would the shoot be?',
    timestamp: '2024-01-15T10:35:00Z',
    read: false,
  },
];

// Mock Chats
export const mockChats: Chat[] = [
  {
    id: '1',
    participants: ['1', '5'],
    lastMessage: mockMessages[mockMessages.length - 1],
    updatedAt: '2024-01-15T10:35:00Z',
  },
  {
    id: '2',
    participants: ['1', '6'],
    updatedAt: '2024-01-10T14:20:00Z',
  },
];

// Mock Clips
export const mockClips: Clip[] = [
  {
    id: '1',
    title: 'Short Film - The Journey',
    thumbnail: 'https://via.placeholder.com/640x360/007AFF/FFFFFF?text=Short+Film',
    videoUrl: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
    duration: '5:32',
    views: 1250,
    uploadDate: '2024-01-15',
    creatorId: '1',
  },
  {
    id: '2',
    title: 'Music Video - Summer Vibes',
    thumbnail: 'https://via.placeholder.com/640x360/34C759/FFFFFF?text=Music+Video',
    videoUrl: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
    duration: '3:45',
    views: 890,
    uploadDate: '2024-01-10',
    creatorId: '1',
  },
  {
    id: '3',
    title: 'Commercial - Brand Campaign',
    thumbnail: 'https://via.placeholder.com/640x360/FF9500/FFFFFF?text=Commercial',
    videoUrl: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
    duration: '0:30',
    views: 2100,
    uploadDate: '2024-01-05',
    creatorId: '1',
  },
  {
    id: '4',
    title: 'Documentary Trailer - Urban Stories',
    thumbnail: 'https://via.placeholder.com/640x360/5856D6/FFFFFF?text=Documentary',
    videoUrl: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
    duration: '2:15',
    views: 3200,
    uploadDate: '2023-12-20',
    creatorId: '2',
  },
  {
    id: '5',
    title: 'Wedding Film - Sarah & John',
    thumbnail: 'https://via.placeholder.com/640x360/FF3B30/FFFFFF?text=Wedding',
    videoUrl: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
    duration: '4:20',
    views: 1850,
    uploadDate: '2024-01-12',
    creatorId: '2',
  },
  {
    id: '6',
    title: 'Corporate Video - Tech Startup',
    thumbnail: 'https://via.placeholder.com/640x360/007AFF/FFFFFF?text=Corporate',
    videoUrl: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
    duration: '2:45',
    views: 950,
    uploadDate: '2024-01-08',
    creatorId: '3',
  },
  {
    id: '7',
    title: 'Cinematic Reel 2024',
    thumbnail: 'https://via.placeholder.com/640x360/34C759/FFFFFF?text=Cinematic',
    videoUrl: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
    duration: '3:15',
    views: 4200,
    uploadDate: '2024-01-01',
    creatorId: '3',
  },
  {
    id: '8',
    title: 'Indie Film - The Last Light',
    thumbnail: 'https://via.placeholder.com/640x360/FF9500/FFFFFF?text=Indie+Film',
    videoUrl: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
    duration: '6:50',
    views: 3100,
    uploadDate: '2023-12-15',
    creatorId: '4',
  },
];

// Mock Tutorials
export const mockTutorials: Tutorial[] = [
  {
    id: '1',
    title: 'Advanced Color Grading Techniques',
    instructor: 'John Doe',
    instructorId: '1',
    duration: '45 min',
    category: 'Editing',
    thumbnail: 'https://via.placeholder.com/640x360/007AFF/FFFFFF?text=Color+Grading',
    videoUrl: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
    views: 3200,
    description: 'Learn professional color grading techniques using industry-standard software.',
  },
  {
    id: '2',
    title: 'Cinematography Basics',
    instructor: 'Jane Smith',
    instructorId: '2',
    duration: '1h 20min',
    category: 'Cinematography',
    thumbnail: 'https://via.placeholder.com/640x360/34C759/FFFFFF?text=Cinematography',
    videoUrl: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
    views: 5100,
    description: 'Master the fundamentals of cinematography, from composition to lighting.',
  },
  {
    id: '3',
    title: 'Video Editing Workflow',
    instructor: 'Mike Johnson',
    instructorId: '3',
    duration: '30 min',
    category: 'Editing',
    thumbnail: 'https://via.placeholder.com/640x360/FF9500/FFFFFF?text=Editing',
    videoUrl: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
    views: 2800,
    description: 'Streamline your editing workflow with these time-saving techniques.',
  },
  {
    id: '4',
    title: 'Directing Actors',
    instructor: 'Sarah Williams',
    instructorId: '4',
    duration: '1h 15min',
    category: 'Directing',
    thumbnail: 'https://via.placeholder.com/640x360/5856D6/FFFFFF?text=Directing',
    videoUrl: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
    views: 1900,
    description: 'Learn how to effectively communicate with actors and get the best performances.',
  },
  {
    id: '5',
    title: 'Lighting for Film',
    instructor: 'Mike Johnson',
    instructorId: '3',
    duration: '55 min',
    category: 'Cinematography',
    thumbnail: 'https://via.placeholder.com/640x360/FF3B30/FFFFFF?text=Lighting',
    videoUrl: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
    views: 2400,
    description: 'Master the art of lighting to create mood and atmosphere in your films.',
  },
  {
    id: '6',
    title: 'Sound Design Fundamentals',
    instructor: 'John Doe',
    instructorId: '1',
    duration: '40 min',
    category: 'Post-Production',
    thumbnail: 'https://via.placeholder.com/640x360/007AFF/FFFFFF?text=Sound+Design',
    videoUrl: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
    views: 1800,
    description: 'Learn the basics of sound design and audio post-production.',
  },
];

// Current User (for demo purposes)
export const currentUserId = '1'; // John Doe (Creator)

// Helper functions
export const getCurrentUser = (): CreatorProfile | ClientProfile | undefined => {
  return mockUsers.find(user => user.id === currentUserId);
};

export const getUserById = (id: string): CreatorProfile | ClientProfile | undefined => {
  return mockUsers.find(user => user.id === id);
};

export const getContractsByUserId = (userId: string): Contract[] => {
  return mockContracts.filter(
    contract => contract.clientId === userId || contract.creatorId === userId
  );
};

export const getMessagesByChatId = (chatId: string): Message[] => {
  const chat = mockChats.find(c => c.id === chatId);
  if (!chat) return [];
  return mockMessages.filter(
    msg => chat.participants.includes(msg.senderId) && chat.participants.includes(msg.receiverId)
  );
};

export const getClipsByUserId = (userId: string): Clip[] => {
  return mockClips.filter(clip => clip.creatorId === userId);
};

export const getTutorialsByCategory = (category?: string): Tutorial[] => {
  if (!category) return mockTutorials;
  return mockTutorials.filter(tutorial => tutorial.category.toLowerCase() === category.toLowerCase());
};

