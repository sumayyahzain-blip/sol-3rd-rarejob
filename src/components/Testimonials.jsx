import {
    Box,
    Container,
    Title,
    Text,
    Paper,
    SimpleGrid,
    Group,
    Stack,
    Avatar,
    Rating,
    Badge,
    ThemeIcon,
} from '@mantine/core';
import { IconQuote, IconStar } from '@tabler/icons-react';

const testimonials = [
    {
        name: 'Yuki Tanaka',
        role: 'Business Professional',
        country: 'Japan',
        avatar: 'YT',
        rating: 5,
        text: 'RareJob helped me prepare for my international presentation. My tutor Maria was incredibly patient and taught me business vocabulary I use every day!',
    },
    {
        name: 'Kenji Yamamoto',
        role: 'University Student',
        country: 'Japan',
        avatar: 'KY',
        rating: 5,
        text: 'I was scared to speak English, but the tutors here are so encouraging. After 3 months, I passed my TOEIC exam with a high score!',
    },
    {
        name: 'Sakura Ito',
        role: 'IT Engineer',
        country: 'Japan',
        avatar: 'SI',
        rating: 5,
        text: 'The flexible schedule is perfect for my busy work life. I can practice English during my lunch break or late at night. Highly recommended!',
    },
    {
        name: 'Hiroshi Sato',
        role: 'Company Manager',
        country: 'Japan',
        avatar: 'HS',
        rating: 5,
        text: 'Our entire team uses RareJob. The quality of tutors and their professionalism have significantly improved our global communication.',
    },
];

export function Testimonials() {
    return (
        <Box py={80} style={{ background: '#ffffff' }}>
            <Container size="lg">
                <Stack align="center" gap="lg" mb={50}>
                    <Badge size="lg" variant="light" color="blue">Success Stories</Badge>
                    <Title order={2} ta="center" style={{ fontSize: '2rem', fontWeight: 700, color: '#0f172a' }}>
                        What Our <Text span c="#2563EB">Students</Text> Say
                    </Title>
                    <Text size="lg" c="#64748b" ta="center" maw={550}>
                        Join thousands of satisfied learners who improved their English with RareJob.
                    </Text>
                </Stack>

                <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="xl">
                    {testimonials.map((item) => (
                        <Paper key={item.name} p="xl" radius="md" style={{ background: '#f8fafc', border: '1px solid #e2e8f0', position: 'relative' }}>
                            <ThemeIcon size={40} radius="xl" style={{ background: '#dbeafe', position: 'absolute', top: -10, right: 20 }}>
                                <IconQuote size={20} color="#2563EB" />
                            </ThemeIcon>
                            <Group gap="sm" mb="md">
                                <Avatar size="lg" radius="xl" color="blue">{item.avatar}</Avatar>
                                <Box>
                                    <Text fw={600} c="#0f172a">{item.name}</Text>
                                    <Text size="sm" c="#64748b">{item.role}, {item.country}</Text>
                                </Box>
                            </Group>
                            <Rating value={item.rating} readOnly mb="md" />
                            <Text size="sm" c="#475569" style={{ lineHeight: 1.7, fontStyle: 'italic' }}>
                                "{item.text}"
                            </Text>
                        </Paper>
                    ))}
                </SimpleGrid>

                <Paper p="xl" mt="xl" radius="md" style={{ background: '#2563EB', textAlign: 'center' }}>
                    <Group justify="center" gap="xl">
                        <Box>
                            <Text size="2rem" fw={700} c="white">34,000+</Text>
                            <Text size="sm" c="rgba(255,255,255,0.8)">Active Tutors</Text>
                        </Box>
                        <Box>
                            <Text size="2rem" fw={700} c="white">500,000+</Text>
                            <Text size="sm" c="rgba(255,255,255,0.8)">Students Worldwide</Text>
                        </Box>
                        <Box>
                            <Text size="2rem" fw={700} c="white">4.8★</Text>
                            <Text size="sm" c="rgba(255,255,255,0.8)">Average Rating</Text>
                        </Box>
                        <Box>
                            <Text size="2rem" fw={700} c="white">17+ Years</Text>
                            <Text size="sm" c="rgba(255,255,255,0.8)">Since 2007</Text>
                        </Box>
                    </Group>
                </Paper>
            </Container>
        </Box>
    );
}
