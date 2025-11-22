// User Types
export interface User {
  id: string;
  name: string;
  email: string;
  type: 'creator' | 'client';
  profession?: string;
  company?: string;
  location?: string;
  phone?: string;
  bio?: string;
  avatar?: string;
  createdAt: string;
}

// Creator Profile
export interface CreatorProfile extends User {
  type: 'creator';
  profession: string;
  skills: Skill[];
  clips: Clip[];
  tutorials: Tutorial[];
}

// Client Profile
export interface ClientProfile extends User {
  type: 'client';
  company: string;
}

// Skill Types
export interface Skill {
  id: string;
  name: string;
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  yearsOfExperience: number;
}

// Clip Types
export interface Clip {
  id: string;
  title: string;
  thumbnail: string;
  videoUrl: string;
  duration: string;
  views: number;
  uploadDate: string;
  creatorId: string;
}

// Tutorial Types
export interface Tutorial {
  id: string;
  title: string;
  instructor: string;
  instructorId: string;
  duration: string;
  category: string;
  thumbnail: string;
  videoUrl: string;
  views: number;
  description?: string;
}

// Contract/Job Types
export interface Contract {
  id: string;
  title: string;
  description: string;
  clientId: string;
  creatorId?: string;
  status: 'pending' | 'active' | 'completed' | 'cancelled';
  deadline: string;
  budget: string;
  createdAt: string;
  updatedAt: string;
}

// Message Types
export interface Message {
  id: string;
  senderId: string;
  receiverId: string;
  text: string;
  timestamp: string;
  read: boolean;
}

// Chat Types
export interface Chat {
  id: string;
  participants: string[];
  lastMessage?: Message;
  updatedAt: string;
}

