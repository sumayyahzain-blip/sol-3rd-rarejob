import { useState, useRef, useEffect } from 'react';
import {
    Box,
    Paper,
    Text,
    TextInput,
    ActionIcon,
    Stack,
    Group,
    Avatar,
    ScrollArea,
    Transition,
    Badge,
    Button,
} from '@mantine/core';
import {
    IconMessageCircle,
    IconX,
    IconSend,
    IconBooks,
} from '@tabler/icons-react';

// RareJob Assistant AI English Logic
// Uses the "Sandwich Correction Method" for gentle grammar help

const commonCorrections = [
    { wrong: /\bi am (\w+) in /gi, correct: 'I am a $1 at ', topic: 'articles' },
    { wrong: /\bi want learn/gi, correct: 'I want to learn', topic: 'infinitives' },
    { wrong: /\bi am scared to/gi, correct: 'I am afraid to', topic: 'vocabulary' },
    { wrong: /\byesterday i go/gi, correct: 'Yesterday I went', topic: 'past tense' },
    { wrong: /\bi go yesterday/gi, correct: 'I went yesterday', topic: 'past tense' },
    { wrong: /\bhe don't/gi, correct: 'He doesn\'t', topic: 'subject-verb agreement' },
    { wrong: /\bshe don't/gi, correct: 'She doesn\'t', topic: 'subject-verb agreement' },
    { wrong: /\bmore better/gi, correct: 'better', topic: 'comparatives' },
    { wrong: /\bmost best/gi, correct: 'best', topic: 'superlatives' },
    { wrong: /\bi have went/gi, correct: 'I have gone / I went', topic: 'perfect tense' },
];

const conversationTopics = {
    greeting: {
        responses: [
            "Hello! 👋 Welcome to RareJob! I'm your English practice assistant. What would you like to practice today?",
            "Hi there! 👋 I'm here to help you practice English. What's your goal - Business English, daily conversation, or something else?",
        ],
        followUp: "What brings you here today?"
    },
    business: {
        responses: [
            "Business English is very useful for your career! 📚 Many professionals need it for meetings, emails, and presentations.",
        ],
        followUp: "What kind of work do you do?"
    },
    job: {
        responses: [
            "That sounds like an interesting job! Good communication skills are important in any profession.",
        ],
        followUp: "Do you often need to speak English at work?"
    },
    nervous: {
        responses: [
            "It is completely normal to feel nervous! 😊 Many of our students felt that way at first. The best way to build confidence is to practice with a patient teacher.",
        ],
        followUp: "Would you like to see our tutors who specialize in helping nervous beginners?"
    },
    practice: {
        responses: [
            "Great! Let's practice together. I'll help you with grammar and vocabulary as we chat.",
        ],
        followUp: "Tell me about your day. What did you do this morning?"
    },
    default: {
        responses: [
            "That's interesting! Tell me more about that.",
            "I understand! Can you explain a bit more?",
        ],
        followUp: "What else would you like to practice?"
    }
};

function detectGrammarIssue(message) {
    const lowerMessage = message.toLowerCase();
    for (const rule of commonCorrections) {
        if (rule.wrong.test(lowerMessage)) {
            const corrected = message.replace(rule.wrong, rule.correct);
            return { found: true, corrected, topic: rule.topic };
        }
    }
    return { found: false };
}

function getConversationTopic(message) {
    const lowerMessage = message.toLowerCase();
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) return 'greeting';
    if (lowerMessage.includes('business') || lowerMessage.includes('work') || lowerMessage.includes('career')) return 'business';
    if (lowerMessage.includes('manager') || lowerMessage.includes('job') || lowerMessage.includes('company') || lowerMessage.includes('bank')) return 'job';
    if (lowerMessage.includes('scared') || lowerMessage.includes('nervous') || lowerMessage.includes('afraid') || lowerMessage.includes('shy')) return 'nervous';
    if (lowerMessage.includes('practice') || lowerMessage.includes('learn') || lowerMessage.includes('improve')) return 'practice';
    return 'default';
}

function generateResponse(userMessage) {
    const grammarCheck = detectGrammarIssue(userMessage);
    const topic = getConversationTopic(userMessage);
    const topicData = conversationTopics[topic];
    const baseResponse = topicData.responses[Math.floor(Math.random() * topicData.responses.length)];

    let response = '';
    if (grammarCheck.found) {
        response += baseResponse + '\n\n';
        response += `📝 **Small tip:** "${grammarCheck.corrected}"\n\n`;
        response += topicData.followUp;
    } else {
        response = baseResponse + '\n\n' + topicData.followUp;
    }
    return response;
}

const quickPracticeTopics = ['Practice greetings', 'Business English', 'Daily conversation'];

export function ChatBot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { id: 1, type: 'bot', text: "Hello! 👋 I'm **RareJob Assistant**, your English practice partner.\n\nI'm here to help you practice conversational English. Don't worry about making mistakes – I'll gently help you improve!\n\nWhat would you like to practice today?" },
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const scrollRef = useRef(null);

    useEffect(() => {
        if (scrollRef.current) scrollRef.current.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
    }, [messages]);

    const handleSend = (text = inputValue) => {
        if (!text.trim()) return;
        setMessages(prev => [...prev, { id: Date.now(), type: 'user', text }]);
        setInputValue('');
        setIsTyping(true);
        setTimeout(() => {
            setMessages(prev => [...prev, { id: Date.now() + 1, type: 'bot', text: generateResponse(text) }]);
            setIsTyping(false);
        }, 800 + Math.random() * 600);
    };

    const handleKeyPress = (e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleSend(); } };

    const renderText = (text) => {
        const parts = text.split(/(\*\*[^*]+\*\*)/g);
        return parts.map((part, i) => part.startsWith('**') && part.endsWith('**') ? <Text key={i} span fw={700} c="inherit">{part.slice(2, -2)}</Text> : part);
    };

    return (
        <>
            <Box style={{ position: 'fixed', bottom: 24, right: 24, zIndex: 1000 }}>
                <Transition mounted={!isOpen} transition="scale" duration={200}>
                    {(styles) => (
                        <Box onClick={() => setIsOpen(true)} style={{ ...styles, cursor: 'pointer', position: 'relative' }}>
                            <ActionIcon size={60} radius="xl" style={{ background: '#2563EB', boxShadow: '0 4px 20px rgba(37, 99, 235, 0.4)' }}>
                                <IconMessageCircle size={28} color="white" />
                            </ActionIcon>
                            <Badge size="xs" color="green" style={{ position: 'absolute', top: -2, right: -2, padding: '4px 6px' }}>Online</Badge>
                            <Paper p="xs" radius="md" style={{ position: 'absolute', right: 70, top: '50%', transform: 'translateY(-50%)', background: '#ffffff', border: '1px solid #e2e8f0', whiteSpace: 'nowrap', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                                <Text size="xs" c="#0f172a" fw={500}>📚 Practice English with me!</Text>
                            </Paper>
                        </Box>
                    )}
                </Transition>
            </Box>

            <Transition mounted={isOpen} transition="slide-up" duration={300}>
                {(styles) => (
                    <Paper style={{ ...styles, position: 'fixed', bottom: 24, right: 24, width: 380, height: 520, zIndex: 1001, background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: 16, overflow: 'hidden', display: 'flex', flexDirection: 'column', boxShadow: '0 10px 40px rgba(0,0,0,0.15)' }}>
                        <Box p="md" style={{ background: '#2563EB' }}>
                            <Group justify="space-between">
                                <Group gap="sm">
                                    <Avatar size="md" radius="xl" style={{ background: 'rgba(255,255,255,0.2)' }}><IconBooks size={20} color="white" /></Avatar>
                                    <Box>
                                        <Text size="sm" fw={600} c="white">RareJob Assistant</Text>
                                        <Group gap={4}><Box style={{ width: 8, height: 8, borderRadius: '50%', background: '#22c55e' }} /><Text size="xs" c="rgba(255,255,255,0.8)">Online • Replies instantly</Text></Group>
                                    </Box>
                                </Group>
                                <ActionIcon variant="subtle" color="white" radius="xl" onClick={() => setIsOpen(false)}><IconX size={18} /></ActionIcon>
                            </Group>
                        </Box>

                        <ScrollArea flex={1} viewportRef={scrollRef} style={{ background: '#f8fafc' }}>
                            <Stack gap="md" p="md">
                                {messages.map((msg) => (
                                    <Group key={msg.id} justify={msg.type === 'user' ? 'flex-end' : 'flex-start'} align="flex-end" gap="xs">
                                        {msg.type === 'bot' && <Avatar size="sm" radius="xl" style={{ background: '#dbeafe' }}><IconBooks size={14} color="#2563EB" /></Avatar>}
                                        <Paper p="sm" radius="lg" maw="80%" style={{ background: msg.type === 'user' ? '#2563EB' : '#ffffff', border: msg.type === 'bot' ? '1px solid #e2e8f0' : 'none', borderBottomRightRadius: msg.type === 'user' ? 4 : 16, borderBottomLeftRadius: msg.type === 'bot' ? 4 : 16 }}>
                                            <Text size="sm" c={msg.type === 'user' ? 'white' : '#0f172a'} style={{ whiteSpace: 'pre-line', lineHeight: 1.6 }}>{renderText(msg.text)}</Text>
                                        </Paper>
                                    </Group>
                                ))}
                                {isTyping && (
                                    <Group gap="xs">
                                        <Avatar size="sm" radius="xl" style={{ background: '#dbeafe' }}><IconBooks size={14} color="#2563EB" /></Avatar>
                                        <Paper p="sm" radius="lg" style={{ background: '#ffffff', border: '1px solid #e2e8f0' }}>
                                            <Group gap={4}>{[0, 0.2, 0.4].map((delay, i) => <Box key={i} style={{ width: 8, height: 8, borderRadius: '50%', background: '#2563EB', animation: `typing 1s ease-in-out infinite ${delay}s` }} />)}</Group>
                                        </Paper>
                                    </Group>
                                )}
                                {messages.length === 1 && (
                                    <Stack gap="xs" mt="sm">
                                        <Text size="xs" c="#64748b" ta="center">Quick start:</Text>
                                        <Group gap="xs" justify="center">{quickPracticeTopics.map((topic) => <Button key={topic} size="xs" variant="light" color="blue" radius="xl" onClick={() => handleSend(topic)}>{topic}</Button>)}</Group>
                                    </Stack>
                                )}
                            </Stack>
                        </ScrollArea>

                        <Box p="md" style={{ borderTop: '1px solid #e2e8f0', background: '#ffffff' }}>
                            <Group gap="xs">
                                <TextInput placeholder="Type a message..." value={inputValue} onChange={(e) => setInputValue(e.target.value)} onKeyPress={handleKeyPress} radius="xl" flex={1} styles={{ input: { background: '#f8fafc', border: '1px solid #e2e8f0', color: '#0f172a' } }} />
                                <ActionIcon size="lg" radius="xl" style={{ background: '#2563EB' }} onClick={() => handleSend()} disabled={!inputValue.trim()}><IconSend size={18} color="white" /></ActionIcon>
                            </Group>
                            <Text size="xs" c="#94a3b8" ta="center" mt="xs">Powered by RareJob • <a href="#faq" style={{ color: '#2563EB', textDecoration: 'none' }}>View FAQ</a></Text>
                        </Box>
                    </Paper>
                )}
            </Transition>

            <style>{`@keyframes typing { 0%, 100% { opacity: 0.3; transform: translateY(0); } 50% { opacity: 1; transform: translateY(-3px); } }`}</style>
        </>
    );
}
