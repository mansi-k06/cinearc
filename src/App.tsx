import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Index from './pages/Index';
import Entry from './pages/Entry';
import Login from './pages/Login';
import SignupCreator from './pages/SignupCreator';
import SignupClient from './pages/SignupClient';
import HomePage from './pages/HomePage';
import HomePageForClients from './pages/HomePageForClients';
import Profile from './pages/Profile';
import ChatScreen from './pages/ChatScreen';
import PeopleList from './pages/PeopleList';
import Contract from './pages/Contract';
import Clips from './pages/Clips';
import Tutorials from './pages/Tutorials';
import Skills from './pages/Skills';
import UploadProfile from './pages/UploadProfile';
import Settings from './pages/Settings';
import Splash from './pages/Splash';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/entry" element={<Entry />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup-creator" element={<SignupCreator />} />
          <Route path="/signup-client" element={<SignupClient />} />
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/homepage-for-clients" element={<HomePageForClients />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/chat" element={<ChatScreen />} />
          <Route path="/people" element={<PeopleList />} />
          <Route path="/contract" element={<Contract />} />
          <Route path="/clips" element={<Clips />} />
          <Route path="/tutorials" element={<Tutorials />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/upload-profile" element={<UploadProfile />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/splash" element={<Splash />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

