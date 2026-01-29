import { useState, useEffect } from 'react';
import { Box } from '@mantine/core';
import { Header } from './components/Header';
import Hero from './components/Hero';
import { Services } from './components/Services';
import { Testimonials } from './components/Testimonials';
import { Requirements } from './components/Requirements';
import { FAQ } from './components/FAQ';
import { ApplicationMap } from './components/ApplicationMap';
import { RegistrationForm } from './components/RegistrationForm';
import { Footer } from './components/Footer';
import { ChatBot } from './components/ChatBot';
import { SocialButtons } from './components/SocialButtons';
import { ChatAdminDashboard } from './components/ChatAdminDashboard';
import { LoginPage } from './components/LoginPage';
import { UserDashboard } from './components/UserDashboard';
import { TutorProfiles } from './components/TutorProfiles';

function App() {
    const [currentPage, setCurrentPage] = useState('home');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const handleHashChange = () => {
            const hash = window.location.hash.replace('#', '');
            if (hash === 'admin') setCurrentPage('admin');
            else if (hash === 'login') setCurrentPage('login');
            else if (hash === 'dashboard') setCurrentPage('dashboard');
            else if (hash === 'tutors') setCurrentPage('tutors');
            else setCurrentPage('home');
        };
        handleHashChange();
        window.addEventListener('hashchange', handleHashChange);
        return () => window.removeEventListener('hashchange', handleHashChange);
    }, []);

    const handleLogin = () => {
        setIsLoggedIn(true);
        window.location.hash = 'dashboard';
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        window.location.hash = '';
    };

    // Login Page
    if (currentPage === 'login') {
        return (
            <Box style={{ minHeight: '100vh', background: '#f8fafc' }}>
                <Header />
                <LoginPage onLogin={handleLogin} />
            </Box>
        );
    }

    // User Dashboard
    if (currentPage === 'dashboard') {
        return (
            <Box style={{ minHeight: '100vh', background: '#f8fafc' }}>
                <Header />
                <UserDashboard onLogout={handleLogout} />
                <ChatBot />
            </Box>
        );
    }

    // Tutor Profiles
    if (currentPage === 'tutors') {
        return (
            <Box style={{ minHeight: '100vh', background: '#f8fafc' }}>
                <Header />
                <TutorProfiles />
                <ChatBot />
            </Box>
        );
    }

    // Admin Dashboard
    if (currentPage === 'admin') {
        return (
            <Box style={{ minHeight: '100vh', background: '#f8fafc' }}>
                <Header />
                <ChatAdminDashboard />
            </Box>
        );
    }

    // Main Landing Page
    return (
        <Box style={{ minHeight: '100vh', background: '#ffffff' }}>
            <Header />
            <main>
                <Hero />
                <Services />
                <Testimonials />
                <Requirements />
                <FAQ />
                <ApplicationMap />
                <RegistrationForm />
            </main>
            <Footer />
            <SocialButtons />
            <ChatBot />
        </Box>
    );
}

export default App;
