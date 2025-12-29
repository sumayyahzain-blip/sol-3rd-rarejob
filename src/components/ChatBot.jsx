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
    Badge
} from '@mantine/core';
import {
    IconMessageCircle,
    IconX,
    IconSend,
    IconRobot,
    IconUser,
    IconSparkles
} from '@tabler/icons-react';

// Predefined AI responses for common questions
const aiResponses = {
    greetings: [
        "Hello! 👋 Welcome to RareJob! I'm your AI assistant. How can I help you today?",
        "Hi there! I'm RareJob's virtual assistant. Feel free to ask me anything about becoming an online English tutor!",
    ],
    requirements: `To become a RareJob tutor, you need:
📋 **Basic Requirements:**
• Be at least 18 years old
• Be computer literate
• Fluent in English (oral and written)
• Have a stable internet connection (5 Mbps+)
• Have a quiet workspace with good lighting

📄 **Valid IDs Accepted:**
National ID, Passport, Driver's License, PRC ID, and more!`,

    salary: `💰 **Earning Potential:**
• Competitive hourly rates
• Get paid every two weeks
• Performance bonuses available
• Rate increases based on performance

The exact rate depends on your experience and evaluation during the application process.`,

    schedule: `⏰ **Flexible Schedule:**
• Peak hours: 8:00 AM - 5:00 PM (PST)
• You can teach 24/7 based on availability
• Minimum teaching hours per week may apply
• You control your own schedule!`,

    process: `📝 **Application Process:**
1. Submit your application form
2. Wait for the initial screening
3. Complete online assessment
4. Attend live demo lesson
5. Start teaching!

The process typically takes 1-2 weeks.`,

    equipment: `🖥️ **Required Equipment:**
• PC/Laptop (Core i3+, 6GB RAM+)
• Noise-cancelling headset with mic
• Stable internet (5 Mbps download)
• Webcam (720p or higher)
• Quiet room with plain background`,

    default: `I'm here to help! You can ask me about:
• 📋 Requirements to become a tutor
• 💰 Salary and payment
• ⏰ Schedule and flexibility
• 📝 Application process
• 🖥️ Equipment needed

Or visit our FAQ page for more details!`,
};

function getAIResponse(message) {
    const lowerMessage = message.toLowerCase();

    if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
        return aiResponses.greetings[Math.floor(Math.random() * aiResponses.greetings.length)];
    }
    if (lowerMessage.includes('require') || lowerMessage.includes('qualification') || lowerMessage.includes('need')) {
        return aiResponses.requirements;
    }
    if (lowerMessage.includes('salary') || lowerMessage.includes('pay') || lowerMessage.includes('earn') || lowerMessage.includes('money')) {
        return aiResponses.salary;
    }
    if (lowerMessage.includes('schedule') || lowerMessage.includes('time') || lowerMessage.includes('hours') || lowerMessage.includes('flexible')) {
        return aiResponses.schedule;
    }
    if (lowerMessage.includes('process') || lowerMessage.includes('apply') || lowerMessage.includes('how') || lowerMessage.includes('step')) {
        return aiResponses.process;
    }
    if (lowerMessage.includes('equipment') || lowerMessage.includes('computer') || lowerMessage.includes('laptop') || lowerMessage.includes('headset')) {
        return aiResponses.equipment;
    }

    return aiResponses.default;
}

// Animated Robot Icon Component
function AnimatedRobotIcon({ size = 28 }) {
    return (
        <Box
            style={{
                position: 'relative',
                width: size,
                height: size,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            {/* Main robot icon */}
            <IconRobot
                size={size}
                style={{
                    animation: 'robotBounce 2s ease-in-out infinite',
                }}
            />
            {/* Sparkle effects */}
            <IconSparkles
                size={size * 0.5}
                style={{
                    position: 'absolute',
                    top: -4,
                    right: -4,
                    color: '#fbbf24',
                    animation: 'sparkle 1.5s ease-in-out infinite',
                }}
            />
        </Box>
    );
}

export function ChatBot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        {
            id: 1,
            type: 'bot',
            text: "Hello! 👋 I'm RareJob AI Assistant. How can I help you today?"
        },
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const scrollRef = useRef(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
        }
    }, [messages]);

    const handleSend = () => {
        if (!inputValue.trim()) return;

        // Add user message
        const userMessage = {
            id: Date.now(),
            type: 'user',
            text: inputValue,
        };
        setMessages(prev => [...prev, userMessage]);
        setInputValue('');
        setIsTyping(true);

        // Simulate AI thinking and respond
        setTimeout(() => {
            const botResponse = {
                id: Date.now() + 1,
                type: 'bot',
                text: getAIResponse(inputValue),
            };
            setMessages(prev => [...prev, botResponse]);
            setIsTyping(false);
        }, 1000 + Math.random() * 1000);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    return (
        <>
            {/* Chat Button with Animation */}
            <Box
                style={{
                    position: 'fixed',
                    bottom: 24,
                    right: 24,
                    zIndex: 1000,
                }}
            >
                <Transition mounted={!isOpen} transition="scale" duration={200}>
                    {(styles) => (
                        <Box
                            onClick={() => setIsOpen(true)}
                            style={{
                                ...styles,
                                cursor: 'pointer',
                                position: 'relative',
                            }}
                        >
                            {/* Pulsing ring effect */}
                            <Box
                                style={{
                                    position: 'absolute',
                                    inset: -8,
                                    borderRadius: '50%',
                                    background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.3), rgba(236, 72, 153, 0.3))',
                                    animation: 'pulse-ring 2s ease-out infinite',
                                }}
                            />

                            {/* Main button */}
                            <ActionIcon
                                size={64}
                                radius="xl"
                                variant="gradient"
                                gradient={{ from: 'violet', to: 'pink', deg: 135 }}
                                style={{
                                    boxShadow: '0 8px 32px rgba(139, 92, 246, 0.5)',
                                    animation: 'float 3s ease-in-out infinite',
                                }}
                            >
                                <AnimatedRobotIcon size={28} />
                            </ActionIcon>

                            {/* Notification Badge */}
                            <Badge
                                size="sm"
                                variant="filled"
                                color="green"
                                style={{
                                    position: 'absolute',
                                    top: -4,
                                    right: -4,
                                    animation: 'pulse 2s ease-in-out infinite',
                                    boxShadow: '0 0 10px rgba(34, 197, 94, 0.5)',
                                }}
                            >
                                AI
                            </Badge>

                            {/* Chat bubble hint */}
                            <Paper
                                p="xs"
                                radius="lg"
                                style={{
                                    position: 'absolute',
                                    right: 72,
                                    top: '50%',
                                    transform: 'translateY(-50%)',
                                    background: 'rgba(15, 15, 35, 0.95)',
                                    border: '1px solid rgba(255, 255, 255, 0.1)',
                                    whiteSpace: 'nowrap',
                                    animation: 'slideIn 0.5s ease-out',
                                }}
                            >
                                <Text size="xs" c="white" fw={500}>
                                    💬 Need help? Chat with me!
                                </Text>
                            </Paper>
                        </Box>
                    )}
                </Transition>
            </Box>

            {/* Chat Window */}
            <Transition mounted={isOpen} transition="slide-up" duration={300}>
                {(styles) => (
                    <Paper
                        style={{
                            ...styles,
                            position: 'fixed',
                            bottom: 24,
                            right: 24,
                            width: 380,
                            height: 520,
                            zIndex: 1001,
                            background: 'rgba(15, 15, 35, 0.95)',
                            backdropFilter: 'blur(20px)',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            borderRadius: 20,
                            overflow: 'hidden',
                            display: 'flex',
                            flexDirection: 'column',
                        }}
                    >
                        {/* Header */}
                        <Box
                            p="md"
                            style={{
                                background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.3), rgba(236, 72, 153, 0.3))',
                                borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                            }}
                        >
                            <Group justify="space-between">
                                <Group gap="sm">
                                    <Avatar
                                        size="md"
                                        radius="xl"
                                        style={{
                                            background: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
                                        }}
                                    >
                                        <IconRobot size={20} style={{ animation: 'robotBounce 2s ease-in-out infinite' }} />
                                    </Avatar>
                                    <Box>
                                        <Text size="sm" fw={600} c="white">RareJob AI Assistant</Text>
                                        <Group gap={4}>
                                            <Box
                                                style={{
                                                    width: 8,
                                                    height: 8,
                                                    borderRadius: '50%',
                                                    background: '#22c55e',
                                                    animation: 'pulse 1.5s ease-in-out infinite',
                                                }}
                                            />
                                            <Text size="xs" c="gray.4">Online • Ready to help</Text>
                                        </Group>
                                    </Box>
                                </Group>
                                <ActionIcon
                                    variant="subtle"
                                    color="gray"
                                    radius="xl"
                                    onClick={() => setIsOpen(false)}
                                >
                                    <IconX size={18} />
                                </ActionIcon>
                            </Group>
                        </Box>

                        {/* Messages */}
                        <ScrollArea
                            flex={1}
                            p="md"
                            viewportRef={scrollRef}
                            styles={{
                                viewport: { padding: '12px' },
                            }}
                        >
                            <Stack gap="md">
                                {messages.map((msg) => (
                                    <Group
                                        key={msg.id}
                                        justify={msg.type === 'user' ? 'flex-end' : 'flex-start'}
                                        align="flex-end"
                                        gap="xs"
                                    >
                                        {msg.type === 'bot' && (
                                            <Avatar
                                                size="sm"
                                                radius="xl"
                                                style={{
                                                    background: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
                                                }}
                                            >
                                                <IconRobot size={14} />
                                            </Avatar>
                                        )}
                                        <Paper
                                            p="sm"
                                            radius="lg"
                                            maw="80%"
                                            style={{
                                                background: msg.type === 'user'
                                                    ? 'linear-gradient(135deg, #8b5cf6, #ec4899)'
                                                    : 'rgba(255, 255, 255, 0.08)',
                                                borderBottomRightRadius: msg.type === 'user' ? 4 : 16,
                                                borderBottomLeftRadius: msg.type === 'bot' ? 4 : 16,
                                            }}
                                        >
                                            <Text
                                                size="sm"
                                                c="white"
                                                style={{
                                                    whiteSpace: 'pre-line',
                                                    lineHeight: 1.5,
                                                }}
                                            >
                                                {msg.text}
                                            </Text>
                                        </Paper>
                                        {msg.type === 'user' && (
                                            <Avatar
                                                size="sm"
                                                radius="xl"
                                                color="cyan"
                                                variant="filled"
                                            >
                                                <IconUser size={14} />
                                            </Avatar>
                                        )}
                                    </Group>
                                ))}

                                {/* Typing indicator */}
                                {isTyping && (
                                    <Group gap="xs">
                                        <Avatar
                                            size="sm"
                                            radius="xl"
                                            style={{
                                                background: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
                                            }}
                                        >
                                            <IconRobot size={14} />
                                        </Avatar>
                                        <Paper
                                            p="sm"
                                            radius="lg"
                                            style={{
                                                background: 'rgba(255, 255, 255, 0.08)',
                                            }}
                                        >
                                            <Group gap={4}>
                                                <Box className="typing-dot" style={{ width: 8, height: 8, borderRadius: '50%', background: '#8b5cf6', animation: 'typing 1s ease-in-out infinite' }} />
                                                <Box className="typing-dot" style={{ width: 8, height: 8, borderRadius: '50%', background: '#8b5cf6', animation: 'typing 1s ease-in-out infinite 0.2s' }} />
                                                <Box className="typing-dot" style={{ width: 8, height: 8, borderRadius: '50%', background: '#8b5cf6', animation: 'typing 1s ease-in-out infinite 0.4s' }} />
                                            </Group>
                                        </Paper>
                                    </Group>
                                )}
                            </Stack>
                        </ScrollArea>

                        {/* Input */}
                        <Box
                            p="md"
                            style={{
                                borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                            }}
                        >
                            <Group gap="xs">
                                <TextInput
                                    placeholder="Type your message..."
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    onKeyPress={handleKeyPress}
                                    radius="xl"
                                    flex={1}
                                    styles={{
                                        input: {
                                            background: 'rgba(255, 255, 255, 0.05)',
                                            border: '1px solid rgba(255, 255, 255, 0.1)',
                                            color: 'white',
                                            '&::placeholder': {
                                                color: 'var(--mantine-color-gray-5)',
                                            },
                                        },
                                    }}
                                />
                                <ActionIcon
                                    size="lg"
                                    radius="xl"
                                    variant="gradient"
                                    gradient={{ from: 'violet', to: 'pink', deg: 135 }}
                                    onClick={handleSend}
                                    disabled={!inputValue.trim()}
                                >
                                    <IconSend size={18} />
                                </ActionIcon>
                            </Group>
                        </Box>
                    </Paper>
                )}
            </Transition>

            {/* Animation styles */}
            <style>{`
        @keyframes typing {
          0%, 100% { opacity: 0.3; transform: translateY(0); }
          50% { opacity: 1; transform: translateY(-4px); }
        }
        
        @keyframes robotBounce {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          25% { transform: translateY(-2px) rotate(-5deg); }
          75% { transform: translateY(-2px) rotate(5deg); }
        }
        
        @keyframes sparkle {
          0%, 100% { opacity: 1; transform: scale(1) rotate(0deg); }
          50% { opacity: 0.5; transform: scale(1.2) rotate(180deg); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        
        @keyframes pulse-ring {
          0% { transform: scale(1); opacity: 0.5; }
          100% { transform: scale(1.4); opacity: 0; }
        }
        
        @keyframes slideIn {
          0% { opacity: 0; transform: translateY(-50%) translateX(10px); }
          100% { opacity: 1; transform: translateY(-50%) translateX(0); }
        }
      `}</style>
        </>
    );
}
