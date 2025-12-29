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
    Badge,
    Button,
    Progress,
    ThemeIcon,
    Card,
    ActionIcon,
    Divider,
} from '@mantine/core';
import {
    IconCalendar,
    IconClock,
    IconBook,
    IconTrendingUp,
    IconMessage,
    IconVideo,
    IconArrowRight,
    IconStar,
    IconFlame,
    IconTarget,
    IconLogout,
} from '@tabler/icons-react';

const upcomingLessons = [
    { tutor: 'Maria S.', time: 'Today, 3:00 PM', topic: 'Business Vocabulary', avatar: 'MS' },
    { tutor: 'John D.', time: 'Tomorrow, 10:00 AM', topic: 'Grammar Review', avatar: 'JD' },
];

const recentChats = [
    { tutor: 'Maria S.', lastMessage: 'Great job on today\'s lesson!', time: '2h ago' },
    { tutor: 'RareJob Assistant', lastMessage: 'Would you like to practice more?', time: '5h ago' },
];

const stats = [
    { label: 'Lessons Completed', value: '24', icon: IconBook, color: '#2563EB' },
    { label: 'Study Streak', value: '7 days', icon: IconFlame, color: '#ef4444' },
    { label: 'Hours Practiced', value: '18.5', icon: IconClock, color: '#22c55e' },
    { label: 'Level', value: 'Intermediate', icon: IconTrendingUp, color: '#f59e0b' },
];

export function UserDashboard({ onLogout }) {
    return (
        <Box style={{ minHeight: '100vh', background: '#f8fafc', paddingTop: 80 }}>
            <Container size="xl" py="xl">
                {/* Header */}
                <Group justify="space-between" mb="xl">
                    <Box>
                        <Title order={2} c="#0f172a">Welcome back, Student! 👋</Title>
                        <Text c="#64748b">Ready for today's English practice?</Text>
                    </Box>
                    <Group>
                        <Button variant="light" color="blue" leftSection={<IconVideo size={18} />}>
                            Start Lesson
                        </Button>
                        <ActionIcon variant="subtle" color="gray" size="lg" onClick={onLogout}>
                            <IconLogout size={20} />
                        </ActionIcon>
                    </Group>
                </Group>

                {/* Stats */}
                <SimpleGrid cols={{ base: 2, md: 4 }} spacing="lg" mb="xl">
                    {stats.map((stat) => (
                        <Paper key={stat.label} p="lg" radius="md" style={{ background: '#ffffff', border: '1px solid #e2e8f0' }}>
                            <Group justify="space-between">
                                <Box>
                                    <Text size="xs" c="#64748b" tt="uppercase">{stat.label}</Text>
                                    <Text size="xl" fw={700} c="#0f172a">{stat.value}</Text>
                                </Box>
                                <ThemeIcon size={48} radius="md" style={{ background: `${stat.color}20` }}>
                                    <stat.icon size={24} color={stat.color} />
                                </ThemeIcon>
                            </Group>
                        </Paper>
                    ))}
                </SimpleGrid>

                <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xl">
                    {/* Upcoming Lessons */}
                    <Paper p="lg" radius="md" style={{ background: '#ffffff', border: '1px solid #e2e8f0' }}>
                        <Group justify="space-between" mb="lg">
                            <Title order={4} c="#0f172a">Upcoming Lessons</Title>
                            <Button variant="subtle" size="xs" rightSection={<IconArrowRight size={14} />}>View All</Button>
                        </Group>
                        <Stack gap="md">
                            {upcomingLessons.map((lesson, i) => (
                                <Card key={i} p="md" radius="md" style={{ background: '#f8fafc', border: '1px solid #e2e8f0' }}>
                                    <Group justify="space-between">
                                        <Group>
                                            <Avatar size="md" radius="xl" color="blue">{lesson.avatar}</Avatar>
                                            <Box>
                                                <Text fw={600} c="#0f172a">{lesson.tutor}</Text>
                                                <Text size="sm" c="#64748b">{lesson.topic}</Text>
                                            </Box>
                                        </Group>
                                        <Box ta="right">
                                            <Badge color="blue" variant="light">{lesson.time}</Badge>
                                            <Button size="xs" variant="light" mt="xs">Join</Button>
                                        </Box>
                                    </Group>
                                </Card>
                            ))}
                            <Button variant="outline" color="blue" fullWidth>Book New Lesson</Button>
                        </Stack>
                    </Paper>

                    {/* Learning Progress */}
                    <Paper p="lg" radius="md" style={{ background: '#ffffff', border: '1px solid #e2e8f0' }}>
                        <Group justify="space-between" mb="lg">
                            <Title order={4} c="#0f172a">Learning Progress</Title>
                            <Badge color="green" variant="light"><IconTarget size={12} /> This Week</Badge>
                        </Group>
                        <Stack gap="lg">
                            <Box>
                                <Group justify="space-between" mb="xs">
                                    <Text size="sm" c="#0f172a">Speaking</Text>
                                    <Text size="sm" c="#64748b">75%</Text>
                                </Group>
                                <Progress value={75} color="blue" size="md" radius="xl" />
                            </Box>
                            <Box>
                                <Group justify="space-between" mb="xs">
                                    <Text size="sm" c="#0f172a">Vocabulary</Text>
                                    <Text size="sm" c="#64748b">60%</Text>
                                </Group>
                                <Progress value={60} color="green" size="md" radius="xl" />
                            </Box>
                            <Box>
                                <Group justify="space-between" mb="xs">
                                    <Text size="sm" c="#0f172a">Grammar</Text>
                                    <Text size="sm" c="#64748b">45%</Text>
                                </Group>
                                <Progress value={45} color="yellow" size="md" radius="xl" />
                            </Box>
                            <Box>
                                <Group justify="space-between" mb="xs">
                                    <Text size="sm" c="#0f172a">Listening</Text>
                                    <Text size="sm" c="#64748b">80%</Text>
                                </Group>
                                <Progress value={80} color="cyan" size="md" radius="xl" />
                            </Box>
                        </Stack>
                    </Paper>

                    {/* Recent Chats */}
                    <Paper p="lg" radius="md" style={{ background: '#ffffff', border: '1px solid #e2e8f0' }}>
                        <Group justify="space-between" mb="lg">
                            <Title order={4} c="#0f172a">Recent Messages</Title>
                            <Button variant="subtle" size="xs" rightSection={<IconArrowRight size={14} />}>View All</Button>
                        </Group>
                        <Stack gap="md">
                            {recentChats.map((chat, i) => (
                                <Group key={i} style={{ cursor: 'pointer' }}>
                                    <Avatar size="md" radius="xl" color="blue">{chat.tutor[0]}</Avatar>
                                    <Box flex={1}>
                                        <Text fw={600} c="#0f172a" size="sm">{chat.tutor}</Text>
                                        <Text size="xs" c="#64748b" lineClamp={1}>{chat.lastMessage}</Text>
                                    </Box>
                                    <Text size="xs" c="#94a3b8">{chat.time}</Text>
                                </Group>
                            ))}
                        </Stack>
                    </Paper>

                    {/* Quick Actions */}
                    <Paper p="lg" radius="md" style={{ background: '#ffffff', border: '1px solid #e2e8f0' }}>
                        <Title order={4} c="#0f172a" mb="lg">Quick Actions</Title>
                        <SimpleGrid cols={2} spacing="md">
                            <Button variant="light" color="blue" leftSection={<IconCalendar size={18} />} style={{ height: 60 }}>
                                Schedule Lesson
                            </Button>
                            <Button variant="light" color="green" leftSection={<IconMessage size={18} />} style={{ height: 60 }}>
                                Practice Chat
                            </Button>
                            <Button variant="light" color="orange" leftSection={<IconBook size={18} />} style={{ height: 60 }}>
                                Study Materials
                            </Button>
                            <Button variant="light" color="violet" leftSection={<IconStar size={18} />} style={{ height: 60 }}>
                                Rate Tutors
                            </Button>
                        </SimpleGrid>
                    </Paper>
                </SimpleGrid>
            </Container>
        </Box>
    );
}
