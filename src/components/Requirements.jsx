import {
    Box,
    Container,
    Title,
    Text,
    SimpleGrid,
    Paper,
    ThemeIcon,
    Badge,
    Stack,
    Divider
} from '@mantine/core';
import {
    IconUserCheck,
    IconDeviceDesktop,
    IconMessageLanguage,
    IconBriefcase,
    IconHeadset,
    IconWifi,
    IconClock,
    IconId
} from '@tabler/icons-react';

const qualifications = [
    {
        icon: IconUserCheck,
        title: '18 Years and Above',
        description: 'Tutors must be at least 18 years old to apply.',
        color: 'pink',
    },
    {
        icon: IconDeviceDesktop,
        title: 'Computer Literate',
        description: 'Must be knowledgeable in basic computer processes and troubleshooting.',
        color: 'violet',
    },
    {
        icon: IconMessageLanguage,
        title: 'English Fluency',
        description: 'Fluent in both oral and written English communication.',
        color: 'cyan',
    },
    {
        icon: IconBriefcase,
        title: 'No Experience Needed',
        description: 'Tutors with no prior working experience are welcome to apply.',
        color: 'pink',
    },
];

const requirements = [
    {
        icon: IconHeadset,
        title: 'Headset',
        description: 'Noise-cancelling headset with external microphone feature.',
        color: 'cyan',
    },
    {
        icon: IconDeviceDesktop,
        title: 'PC Specification',
        description: 'Laptop/Desktop (Win 11, 8GB RAM, Core i3/Ryzen 5+).',
        color: 'violet',
    },
    {
        icon: IconDeviceDesktop,
        title: 'Teaching Environment',
        description: 'Quiet room with plain white background and good lighting.',
        color: 'pink',
    },
    {
        icon: IconWifi,
        title: 'Internet',
        description: 'At least 5 Mbps download speed & ping < 30ms.',
        color: 'cyan',
    },
    {
        icon: IconClock,
        title: 'Schedule',
        description: 'Available during peak hours (8am-5pm PST). 24/7 teaching available.',
        color: 'violet',
    },
    {
        icon: IconId,
        title: 'Tax ID (TIN)',
        description: 'Must have a valid Tax Identification Number issued in the Philippines.',
        color: 'pink',
    },
];

export function Requirements() {
    return (
        <Box
            id="requirements"
            py={100}
            style={{
                position: 'relative',
                overflow: 'hidden',
                background: `linear-gradient(rgba(15, 15, 35, 0.95), rgba(15, 15, 35, 0.9)), url('/content-bg.png')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed',
            }}
        >
            <Container size="lg" style={{ position: 'relative', zIndex: 1 }}>
                <Stack align="center" gap="lg" mb={60}>
                    <Badge
                        size="lg"
                        variant="light"
                        color="violet"
                        style={{ textTransform: 'uppercase', letterSpacing: '1px' }}
                    >
                        Join Our Team
                    </Badge>

                    <Title
                        order={2}
                        ta="center"
                        c="white"
                        style={{
                            fontSize: 'clamp(2rem, 4vw, 3rem)',
                            fontWeight: 900,
                            textShadow: '0 4px 30px rgba(0, 0, 0, 0.3)',
                        }}
                    >
                        Qualifications <Text span className="gradient-text">& Requirements</Text>
                    </Title>
                </Stack>

                {/* Qualifications Section */}
                <Text size="xl" fw={700} c="white" mb="xl" ta="center">QUALIFICATIONS</Text>
                <SimpleGrid cols={{ base: 1, sm: 2, md: 4 }} spacing="lg" mb={80}>
                    {qualifications.map((item, index) => (
                        <Paper
                            key={item.title}
                            className={`glass glass-hover animate-fade-in animate-delay-${index + 1}`}
                            p="xl"
                            ta="center"
                            style={{
                                background: 'rgba(255, 255, 255, 0.03)',
                                border: '1px solid rgba(255, 255, 255, 0.08)',
                                backdropFilter: 'blur(20px)',
                            }}
                        >
                            <ThemeIcon
                                size={50}
                                radius="50%"
                                variant="gradient"
                                gradient={{ from: item.color, to: 'violet', deg: 135 }}
                                mb="md"
                            >
                                <item.icon size={24} />
                            </ThemeIcon>
                            <Text fw={700} c="white" mb="xs">{item.title}</Text>
                            <Text size="sm" c="gray.4">{item.description}</Text>
                        </Paper>
                    ))}
                </SimpleGrid>

                <Divider my="xl" color="rgba(255,255,255,0.1)" />

                {/* Requirements Section */}
                <Text size="xl" fw={700} c="white" mb="xl" ta="center" mt={60}>REQUIREMENTS</Text>
                <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="xl">
                    {requirements.map((item, index) => (
                        <Paper
                            key={item.title}
                            className={`glass glass-hover animate-fade-in animate-delay-${index + 1}`}
                            p="lg"
                            style={{
                                background: 'rgba(255, 255, 255, 0.03)',
                                border: '1px solid rgba(255, 255, 255, 0.08)',
                                backdropFilter: 'blur(20px)',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '16px'
                            }}
                        >
                            <ThemeIcon
                                size={48}
                                radius="md"
                                variant="light"
                                color={item.color}
                            >
                                <item.icon size={24} />
                            </ThemeIcon>
                            <Box>
                                <Text fw={700} c="white">{item.title}</Text>
                                <Text size="xs" c="gray.4">{item.description}</Text>
                            </Box>
                        </Paper>
                    ))}
                </SimpleGrid>
            </Container>
        </Box>
    );
}
