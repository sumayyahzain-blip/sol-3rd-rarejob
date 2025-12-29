import { useState } from 'react';
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
    Rating,
    TextInput,
    Select,
    Card,
    ThemeIcon,
    Divider,
    Modal,
} from '@mantine/core';
import {
    IconSearch,
    IconStar,
    IconCalendar,
    IconClock,
    IconLanguage,
    IconBriefcase,
    IconHeart,
    IconVideo,
} from '@tabler/icons-react';

const tutors = [
    {
        id: 1,
        name: 'Maria Santos',
        avatar: 'MS',
        rating: 4.9,
        reviews: 342,
        specialty: ['Business English', 'TOEIC Prep'],
        experience: '5 years',
        rate: '₱150/lesson',
        bio: 'Specializing in Business English for corporate professionals. Patient and encouraging teaching style.',
        availability: 'Mon-Fri, 6AM-10PM',
        lessonsCompleted: 2840,
    },
    {
        id: 2,
        name: 'John David Reyes',
        avatar: 'JD',
        rating: 4.8,
        reviews: 256,
        specialty: ['Conversation', 'Grammar'],
        experience: '3 years',
        rate: '₱120/lesson',
        bio: 'Fun and engaging lessons focused on building confidence in everyday conversations.',
        availability: 'Daily, 8AM-12MN',
        lessonsCompleted: 1920,
    },
    {
        id: 3,
        name: 'Ana Marie Cruz',
        avatar: 'AC',
        rating: 5.0,
        reviews: 189,
        specialty: ['Kids English', 'Phonics'],
        experience: '4 years',
        rate: '₱130/lesson',
        bio: 'Expert in teaching children with creative, game-based learning methods.',
        availability: 'Weekdays, 3PM-9PM',
        lessonsCompleted: 1560,
    },
    {
        id: 4,
        name: 'Michael Torres',
        avatar: 'MT',
        rating: 4.7,
        reviews: 412,
        specialty: ['IELTS Prep', 'Academic English'],
        experience: '6 years',
        rate: '₱180/lesson',
        bio: 'Certified IELTS trainer with high success rate. Structured approach to test preparation.',
        availability: 'Mon-Sat, 9AM-9PM',
        lessonsCompleted: 3200,
    },
    {
        id: 5,
        name: 'Sarah Garcia',
        avatar: 'SG',
        rating: 4.9,
        reviews: 298,
        specialty: ['Travel English', 'Pronunciation'],
        experience: '4 years',
        rate: '₱140/lesson',
        bio: 'Perfect for travelers! Focus on practical phrases and natural pronunciation.',
        availability: 'Daily, 6AM-2PM',
        lessonsCompleted: 2100,
    },
    {
        id: 6,
        name: 'Robert Lim',
        avatar: 'RL',
        rating: 4.8,
        reviews: 167,
        specialty: ['IT English', 'Technical Writing'],
        experience: '5 years',
        rate: '₱160/lesson',
        bio: 'Former software engineer. Great with IT professionals needing technical English skills.',
        availability: 'Weeknights, 6PM-11PM',
        lessonsCompleted: 1340,
    },
];

const specialties = ['All', 'Business English', 'TOEIC Prep', 'Conversation', 'IELTS Prep', 'Kids English', 'Travel English'];

export function TutorProfiles() {
    const [search, setSearch] = useState('');
    const [specialty, setSpecialty] = useState('All');
    const [selectedTutor, setSelectedTutor] = useState(null);
    const [bookingModal, setBookingModal] = useState(false);

    const filteredTutors = tutors.filter(tutor => {
        const matchesSearch = tutor.name.toLowerCase().includes(search.toLowerCase());
        const matchesSpecialty = specialty === 'All' || tutor.specialty.includes(specialty);
        return matchesSearch && matchesSpecialty;
    });

    return (
        <Box style={{ minHeight: '100vh', background: '#f8fafc', paddingTop: 80 }}>
            <Container size="xl" py="xl">
                <Stack align="center" gap="lg" mb="xl">
                    <Badge size="lg" variant="light" color="blue">Meet Our Team</Badge>
                    <Title order={2} ta="center" style={{ fontSize: '2rem', fontWeight: 700, color: '#0f172a' }}>
                        Find Your Perfect <Text span c="#2563EB">Tutor</Text>
                    </Title>
                    <Text size="lg" c="#64748b" ta="center" maw={550}>
                        Browse our certified English tutors and book a trial lesson today.
                    </Text>
                </Stack>

                {/* Filters */}
                <Paper p="lg" radius="md" mb="xl" style={{ background: '#ffffff', border: '1px solid #e2e8f0' }}>
                    <Group>
                        <TextInput placeholder="Search tutors..." leftSection={<IconSearch size={16} />} value={search}
                            onChange={(e) => setSearch(e.target.value)} style={{ flex: 1 }}
                            styles={{ input: { background: '#f8fafc', border: '1px solid #e2e8f0' } }} />
                        <Select data={specialties} value={specialty} onChange={setSpecialty} placeholder="Specialty"
                            leftSection={<IconBriefcase size={16} />} style={{ width: 200 }}
                            styles={{ input: { background: '#f8fafc', border: '1px solid #e2e8f0' } }} />
                        <Button color="blue">Search</Button>
                    </Group>
                </Paper>

                {/* Tutor Grid */}
                <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="lg">
                    {filteredTutors.map((tutor) => (
                        <Card key={tutor.id} p="lg" radius="md" style={{ background: '#ffffff', border: '1px solid #e2e8f0' }}>
                            <Group justify="space-between" mb="md">
                                <Group>
                                    <Avatar size="lg" radius="xl" color="blue">{tutor.avatar}</Avatar>
                                    <Box>
                                        <Text fw={600} c="#0f172a">{tutor.name}</Text>
                                        <Group gap={4}>
                                            <IconStar size={14} color="#f59e0b" fill="#f59e0b" />
                                            <Text size="sm" c="#64748b">{tutor.rating} ({tutor.reviews})</Text>
                                        </Group>
                                    </Box>
                                </Group>
                                <Button variant="subtle" color="gray" size="xs"><IconHeart size={16} /></Button>
                            </Group>

                            <Group gap="xs" mb="md">
                                {tutor.specialty.map((s) => (
                                    <Badge key={s} size="sm" variant="light" color="blue">{s}</Badge>
                                ))}
                            </Group>

                            <Text size="sm" c="#64748b" mb="md" lineClamp={2}>{tutor.bio}</Text>

                            <Divider my="sm" />

                            <Group justify="space-between" mb="md">
                                <Group gap="xs">
                                    <IconClock size={14} color="#64748b" />
                                    <Text size="xs" c="#64748b">{tutor.experience}</Text>
                                </Group>
                                <Text size="sm" fw={600} c="#2563EB">{tutor.rate}</Text>
                            </Group>

                            <Group grow>
                                <Button variant="light" color="blue" onClick={() => setSelectedTutor(tutor)}>View Profile</Button>
                                <Button color="blue" leftSection={<IconVideo size={16} />}
                                    onClick={() => { setSelectedTutor(tutor); setBookingModal(true); }}>Book</Button>
                            </Group>
                        </Card>
                    ))}
                </SimpleGrid>

                {/* Booking Modal */}
                <Modal opened={bookingModal} onClose={() => setBookingModal(false)} title="Book a Lesson" centered size="md">
                    {selectedTutor && (
                        <Stack gap="md">
                            <Group>
                                <Avatar size="lg" radius="xl" color="blue">{selectedTutor.avatar}</Avatar>
                                <Box>
                                    <Text fw={600}>{selectedTutor.name}</Text>
                                    <Text size="sm" c="#64748b">{selectedTutor.rate}</Text>
                                </Box>
                            </Group>
                            <Text size="sm" c="#64748b">Availability: {selectedTutor.availability}</Text>
                            <Select label="Select Date" placeholder="Choose a date" data={['Today', 'Tomorrow', 'This Week']}
                                leftSection={<IconCalendar size={16} />} />
                            <Select label="Select Time" placeholder="Choose a time" data={['9:00 AM', '10:00 AM', '2:00 PM', '6:00 PM']}
                                leftSection={<IconClock size={16} />} />
                            <Button color="blue" fullWidth size="md">Confirm Booking</Button>
                        </Stack>
                    )}
                </Modal>
            </Container>
        </Box>
    );
}
