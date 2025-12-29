import { Box } from '@mantine/core';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Requirements } from './components/Requirements';
import { ApplicationMap } from './components/ApplicationMap';
import { RegistrationForm } from './components/RegistrationForm';
import { Footer } from './components/Footer';
import { ChatBot } from './components/ChatBot';
import { SocialButtons } from './components/SocialButtons';

function App() {
    return (
        <Box style={{ minHeight: '100vh' }}>
            {/* Background pattern */}
            <div className="bg-pattern" />

            {/* Header */}
            <Header />

            {/* Main Content */}
            <main>
                <Hero />
                <Requirements />
                <ApplicationMap />
                <RegistrationForm />
            </main>

            {/* Footer */}
            <Footer />

            {/* Floating Elements */}
            <SocialButtons />
            <ChatBot />
        </Box>
    );
}

export default App;
