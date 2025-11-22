# Cinearc Web

A networking platform for filmmakers, editors, cinematographers, and clients. Built with React, TypeScript, and Vite.

## Features

- **Authentication**: Separate login/signup flows for creators and clients
- **Profile Management**: Comprehensive profile system with skills, bio, and portfolio
- **Job Listings**: Contract and job management system
- **Messaging**: Real-time chat functionality
- **Talent Discovery**: Browse and search for filmmakers and creators
- **Clips Gallery**: Showcase your work with video clips
- **Tutorials**: Educational content for filmmakers
- **Skills Showcase**: Display and manage your professional skills
- **Dark Mode**: Theme switching with system preference detection

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **React Icons** - Icon library
- **CSS Modules** - Scoped styling

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
  ├── main.tsx              # Entry point
  ├── App.tsx                # Root component with Router
  ├── components/            # Reusable components
  │   ├── ThemedText.tsx
  │   ├── ThemedView.tsx
  │   └── *.module.css
  ├── pages/                 # Route pages
  │   ├── Index.tsx
  │   ├── Login.tsx
  │   ├── SignupCreator.tsx
  │   ├── SignupClient.tsx
  │   ├── HomePage.tsx
  │   ├── HomePageForClients.tsx
  │   ├── Profile.tsx
  │   ├── ChatScreen.tsx
  │   ├── PeopleList.tsx
  │   ├── Contract.tsx
  │   ├── Clips.tsx
  │   ├── Tutorials.tsx
  │   ├── Skills.tsx
  │   ├── UploadProfile.tsx
  │   ├── Settings.tsx
  │   └── Splash.tsx
  ├── contexts/              # React contexts
  │   └── ThemeContext.tsx
  ├── types/                  # TypeScript types
  │   └── index.ts
  ├── assets/                 # Static assets
  └── index.css              # Global styles
```

## Routing

The application uses React Router for navigation. All routes are defined in `src/App.tsx`:

- `/` - Landing page
- `/login` - Login page
- `/signup-creator` - Creator signup
- `/signup-client` - Client signup
- `/homepage` - Creator dashboard
- `/homepage-for-clients` - Client dashboard
- `/profile` - User profile
- `/chat` - Messaging
- `/people` - Talent discovery
- `/contract` - Contracts and jobs
- `/clips` - Clips gallery
- `/tutorials` - Tutorials
- `/skills` - Skills management
- `/upload-profile` - Edit profile
- `/settings` - Settings
- `/splash` - Splash screen

## Styling

The project uses CSS Modules for component-scoped styling. Global styles and CSS variables are defined in `src/index.css`.

### Theme System

The app supports light and dark themes via CSS variables. Theme preference is stored in localStorage and respects system preferences.

## Development

### Adding New Pages

1. Create a new component in `src/pages/`
2. Add the route in `src/App.tsx`
3. Create a corresponding CSS module file

### Adding New Components

1. Create component in `src/components/`
2. Create CSS module file with `.module.css` extension
3. Import and use in pages

## TypeScript

All components are written in TypeScript with strict type checking. Type definitions are in `src/types/index.ts`.

## Team - Creative Tech Team
## Mansi Kamble & Sanika Nimbalkar