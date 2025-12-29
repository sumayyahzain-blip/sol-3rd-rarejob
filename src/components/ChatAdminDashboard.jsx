import { useState } from 'react';
import {
    Box,
    Container,
    Title,
    Text,
    Paper,
    Group,
    Stack,
    Badge,
    Table,
    ActionIcon,
    TextInput,
    Button,
    Tabs,
    Avatar,
    Progress,
    SimpleGrid,
    ThemeIcon,
    Textarea,
    Modal,
} from '@mantine/core';
import {
    IconSearch,
    IconMessageCircle,
    IconUsers,
    IconTrendingUp,
    IconClock,
    IconEye,
    IconTrash,
    IconPlus,
    IconEdit,
    IconCheck,
} from '@tabler/icons-react';

// Sample conversation data (in production, this would come from a backend)
const sampleConversations = [
    {
        id: 1,
        userId: 'user_12345',
        startTime: '2025-12-29 21:30:15',
        messages: 5,
        topic: 'Requirements',
        status: 'resolved',
        preview: 'What are the requirements to become a tutor?',
    },
    {
        id: 2,
        userId: 'user_12346',
        startTime: '2025-12-29 21:25:42',
        messages: 3,
        topic: 'Salary',
        status: 'resolved',
        preview: 'How much can I earn as a RareJob tutor?',
    },
    {
        id: 3,
        userId: 'user_12347',
        startTime: '2025-12-29 21:20:08',
        messages: 7,
        topic: 'Application Process',
        status: 'resolved',
        preview: 'How do I apply to become a tutor?',
    },
    {
        id: 4,
        userId: 'user_12348',
        startTime: '2025-12-29 21:15:33',
        messages: 2,
        topic: 'Schedule',
        status: 'pending',
        preview: 'What are the peak teaching hours?',
    },
    {
        id: 5,
        userId: 'user_12349',
        startTime: '2025-12-29 21:10:55',
        messages: 4,
        topic: 'Equipment',
        status: 'resolved',
        preview: 'What equipment do I need?',
    },
];

// Sample FAQ data
const sampleFAQs = [
    { id: 1, question: 'What are the requirements to become a RareJob tutor?', category: 'Application', views: 156 },
    { id: 2, question: 'How much can I earn as a tutor?', category: 'Earnings', views: 142 },
    { id: 3, question: 'Do I need teaching experience?', category: 'Application', views: 128 },
    { id: 4, question: 'What equipment do I need?', category: 'Technical', views: 95 },
    { id: 5, question: 'How long is the application process?', category: 'Application', views: 87 },
];

const stats = [
    { label: 'Total Conversations', value: '1,234', icon: IconMessageCircle, change: '+12%' },
    { label: 'Active Users Today', value: '89', icon: IconUsers, change: '+5%' },
    { label: 'Avg Response Time', value: '1.2s', icon: IconClock, change: '-8%' },
    { label: 'Resolution Rate', value: '94%', icon: IconTrendingUp, change: '+3%' },
];

export function ChatAdminDashboard() {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedConversation, setSelectedConversation] = useState(null);
    const [faqModalOpen, setFaqModalOpen] = useState(false);
    const [newFaq, setNewFaq] = useState({ question: '', answer: '', category: '' });

    return (
        <Box style={{ minHeight: '100vh', background: '#f8fafc', paddingTop: 80 }}>
            <Container size="xl" py="xl">
                {/* Header */}
                <Group justify="space-between" mb="xl">
                    <Box>
                        <Title order={2} c="#0f172a">Chat Admin Dashboard</Title>
                        <Text c="#64748b">Monitor conversations, manage FAQs, and view analytics</Text>
                    </Box>
                    <Badge size="lg" color="green" variant="light">
                        Chatbot Online
                    </Badge>
                </Group>

                {/* Stats Cards */}
                <SimpleGrid cols={{ base: 1, sm: 2, md: 4 }} spacing="lg" mb="xl">
                    {stats.map((stat) => (
                        <Paper key={stat.label} p="lg" radius="md" style={{ background: '#ffffff', border: '1px solid #e2e8f0' }}>
                            <Group justify="space-between">
                                <Box>
                                    <Text size="xs" c="#64748b" tt="uppercase" fw={500}>{stat.label}</Text>
                                    <Text size="xl" fw={700} c="#0f172a">{stat.value}</Text>
                                </Box>
                                <ThemeIcon size={48} radius="md" style={{ background: '#dbeafe' }}>
                                    <stat.icon size={24} color="#2563EB" />
                                </ThemeIcon>
                            </Group>
                            <Text size="xs" c={stat.change.startsWith('+') ? 'green' : 'red'} mt="sm">
                                {stat.change} from last week
                            </Text>
                        </Paper>
                    ))}
                </SimpleGrid>

                {/* Main Content Tabs */}
                <Tabs defaultValue="conversations">
                    <Tabs.List mb="lg">
                        <Tabs.Tab value="conversations" leftSection={<IconMessageCircle size={16} />}>
                            Conversations
                        </Tabs.Tab>
                        <Tabs.Tab value="faq" leftSection={<IconEdit size={16} />}>
                            Manage FAQ
                        </Tabs.Tab>
                    </Tabs.List>

                    {/* Conversations Panel */}
                    <Tabs.Panel value="conversations">
                        <Paper p="lg" radius="md" style={{ background: '#ffffff', border: '1px solid #e2e8f0' }}>
                            <Group justify="space-between" mb="lg">
                                <TextInput
                                    placeholder="Search conversations..."
                                    leftSection={<IconSearch size={16} />}
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    style={{ width: 300 }}
                                />
                                <Group>
                                    <Badge color="blue" variant="light">Today: 23</Badge>
                                    <Badge color="gray" variant="light">This Week: 156</Badge>
                                </Group>
                            </Group>

                            <Table striped highlightOnHover>
                                <Table.Thead>
                                    <Table.Tr>
                                        <Table.Th>User ID</Table.Th>
                                        <Table.Th>Time</Table.Th>
                                        <Table.Th>Topic</Table.Th>
                                        <Table.Th>Messages</Table.Th>
                                        <Table.Th>Status</Table.Th>
                                        <Table.Th>Preview</Table.Th>
                                        <Table.Th>Actions</Table.Th>
                                    </Table.Tr>
                                </Table.Thead>
                                <Table.Tbody>
                                    {sampleConversations.map((conv) => (
                                        <Table.Tr key={conv.id}>
                                            <Table.Td>
                                                <Group gap="xs">
                                                    <Avatar size="sm" radius="xl" color="blue">{conv.userId.slice(-2)}</Avatar>
                                                    <Text size="sm">{conv.userId}</Text>
                                                </Group>
                                            </Table.Td>
                                            <Table.Td><Text size="sm" c="#64748b">{conv.startTime}</Text></Table.Td>
                                            <Table.Td><Badge color="blue" variant="light" size="sm">{conv.topic}</Badge></Table.Td>
                                            <Table.Td><Text size="sm">{conv.messages}</Text></Table.Td>
                                            <Table.Td>
                                                <Badge color={conv.status === 'resolved' ? 'green' : 'yellow'} variant="light" size="sm">
                                                    {conv.status}
                                                </Badge>
                                            </Table.Td>
                                            <Table.Td><Text size="sm" c="#64748b" lineClamp={1} maw={200}>{conv.preview}</Text></Table.Td>
                                            <Table.Td>
                                                <Group gap="xs">
                                                    <ActionIcon variant="subtle" color="blue" size="sm">
                                                        <IconEye size={16} />
                                                    </ActionIcon>
                                                    <ActionIcon variant="subtle" color="red" size="sm">
                                                        <IconTrash size={16} />
                                                    </ActionIcon>
                                                </Group>
                                            </Table.Td>
                                        </Table.Tr>
                                    ))}
                                </Table.Tbody>
                            </Table>
                        </Paper>
                    </Tabs.Panel>

                    {/* FAQ Management Panel */}
                    <Tabs.Panel value="faq">
                        <Paper p="lg" radius="md" style={{ background: '#ffffff', border: '1px solid #e2e8f0' }}>
                            <Group justify="space-between" mb="lg">
                                <Title order={4} c="#0f172a">FAQ Management</Title>
                                <Button leftSection={<IconPlus size={16} />} color="blue" onClick={() => setFaqModalOpen(true)}>
                                    Add New FAQ
                                </Button>
                            </Group>

                            <Table striped highlightOnHover>
                                <Table.Thead>
                                    <Table.Tr>
                                        <Table.Th>Question</Table.Th>
                                        <Table.Th>Category</Table.Th>
                                        <Table.Th>Views</Table.Th>
                                        <Table.Th>Actions</Table.Th>
                                    </Table.Tr>
                                </Table.Thead>
                                <Table.Tbody>
                                    {sampleFAQs.map((faq) => (
                                        <Table.Tr key={faq.id}>
                                            <Table.Td><Text size="sm">{faq.question}</Text></Table.Td>
                                            <Table.Td><Badge color="blue" variant="light" size="sm">{faq.category}</Badge></Table.Td>
                                            <Table.Td><Text size="sm">{faq.views}</Text></Table.Td>
                                            <Table.Td>
                                                <Group gap="xs">
                                                    <ActionIcon variant="subtle" color="blue" size="sm">
                                                        <IconEdit size={16} />
                                                    </ActionIcon>
                                                    <ActionIcon variant="subtle" color="red" size="sm">
                                                        <IconTrash size={16} />
                                                    </ActionIcon>
                                                </Group>
                                            </Table.Td>
                                        </Table.Tr>
                                    ))}
                                </Table.Tbody>
                            </Table>
                        </Paper>

                        {/* Topic Analytics */}
                        <Paper p="lg" radius="md" mt="lg" style={{ background: '#ffffff', border: '1px solid #e2e8f0' }}>
                            <Title order={4} c="#0f172a" mb="lg">Popular Topics</Title>
                            <Stack gap="md">
                                {[
                                    { topic: 'Requirements', percent: 35 },
                                    { topic: 'Earnings', percent: 28 },
                                    { topic: 'Application Process', percent: 20 },
                                    { topic: 'Schedule', percent: 12 },
                                    { topic: 'Equipment', percent: 5 },
                                ].map((item) => (
                                    <Box key={item.topic}>
                                        <Group justify="space-between" mb={4}>
                                            <Text size="sm" c="#0f172a">{item.topic}</Text>
                                            <Text size="sm" c="#64748b">{item.percent}%</Text>
                                        </Group>
                                        <Progress value={item.percent} color="blue" size="sm" />
                                    </Box>
                                ))}
                            </Stack>
                        </Paper>
                    </Tabs.Panel>
                </Tabs>

                {/* Add FAQ Modal */}
                <Modal opened={faqModalOpen} onClose={() => setFaqModalOpen(false)} title="Add New FAQ" centered>
                    <Stack gap="md">
                        <TextInput label="Question" placeholder="Enter the FAQ question" />
                        <Textarea label="Answer" placeholder="Enter the answer" rows={4} />
                        <TextInput label="Category" placeholder="e.g., Application, Earnings, Technical" />
                        <Group justify="flex-end" mt="md">
                            <Button variant="light" onClick={() => setFaqModalOpen(false)}>Cancel</Button>
                            <Button color="blue" leftSection={<IconCheck size={16} />}>Save FAQ</Button>
                        </Group>
                    </Stack>
                </Modal>
            </Container>
        </Box>
    );
}
