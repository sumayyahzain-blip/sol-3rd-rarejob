import {
    Box,
    Container,
    Title,
    Text,
    SimpleGrid,
    Paper,
    ThemeIcon,
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
    },
    {
        icon: IconDeviceDesktop,
        title: 'Computer Literate',
        description: 'Must be knowledgeable in basic computer processes.',
    },
    {
        icon: IconMessageLanguage,
        title: 'English Fluency',
        description: 'Fluent in both oral and written English.',
    },
    {
        icon: IconBriefcase,
        title: 'No Experience Needed',
        description: 'Beginners are welcome to apply.',
    },
];

const requirements = [
    { icon: IconHeadset, title: 'Headset', description: 'Noise-cancelling with microphone.' },
    { icon: IconDeviceDesktop, title: 'PC Specs', description: 'Win 11, 8GB RAM, Core i3+.' },
    { icon: IconDeviceDesktop, title: 'Environment', description: 'Quiet room with good lighting.' },
    { icon: IconWifi, title: 'Internet', description: 'At least 5 Mbps download speed.' },
    { icon: IconClock, title: 'Schedule', description: 'Peak hours: 8am-5pm PST.' },
    { icon: IconId, title: 'Tax ID', description: 'Valid TIN required.' },
];

export function Requirements() {
    return (
        <Box id="requirements" py={80} style={{ background: '#ffffff' }}>
            <Container size="lg">
                <Stack align="center" gap="lg" mb={50}>
                    <Title order={2} ta="center" style={{ fontSize: '2rem', fontWeight: 700, color: '#0f172a' }}>
                        Qualifications & Requirements
                    </Title>
                    <Text size="lg" c="#64748b" ta="center" maw={550}>
                        Here's what you need to get started as a RareJob tutor.
                    </Text>
                </Stack>

                {/* Qualifications */}
                <Text size="sm" fw={600} mb="lg" ta="center" style={{ color: '#2563EB', letterSpacing: '1px' }}>
                    QUALIFICATIONS
                </Text>
                <SimpleGrid cols={{ base: 1, sm: 2, md: 4 }} spacing="lg" mb={50}>
                    {qualifications.map((item) => (
                        <Paper key={item.title} p="lg" ta="center" radius="md"
                            style={{ background: '#f8fafc', border: '1px solid #e2e8f0' }}>
                            <ThemeIcon size={48} radius="xl" mb="md" style={{ background: '#dbeafe' }}>
                                <item.icon size={24} color="#2563EB" />
                            </ThemeIcon>
                            <Text fw={600} c="#0f172a" mb="xs">{item.title}</Text>
                            <Text size="sm" c="#64748b">{item.description}</Text>
                        </Paper>
                    ))}
                </SimpleGrid>

                <Divider my="xl" color="#e2e8f0" />

                {/* Requirements */}
                <Text size="sm" fw={600} mb="lg" ta="center" mt={40} style={{ color: '#2563EB', letterSpacing: '1px' }}>
                    REQUIREMENTS
                </Text>
                <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="lg">
                    {requirements.map((item) => (
                        <Paper key={item.title} p="md" radius="md"
                            style={{ background: '#f8fafc', border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <ThemeIcon size={40} radius="md" style={{ background: '#dbeafe' }}>
                                <item.icon size={20} color="#2563EB" />
                            </ThemeIcon>
                            <Box>
                                <Text fw={600} c="#0f172a" size="sm">{item.title}</Text>
                                <Text size="xs" c="#64748b">{item.description}</Text>
                            </Box>
                        </Paper>
                    ))}
                </SimpleGrid>
            </Container>
        </Box>
    );
}
