import {
    Box,
    Container,
    Title,
    Text,
    SimpleGrid,
    Paper,
    ThemeIcon,
} from '@mantine/core';
import {
    IconTrendingUp,
    IconUsers,
    IconClock,
} from '@tabler/icons-react';

const services = [
    {
        icon: IconTrendingUp,
        title: 'Growing Platform',
        description: 'Be part of a company that continues to expand and create opportunities for tutors worldwide.',
    },
    {
        icon: IconUsers,
        title: 'Active Students',
        description: 'Connect with thousands of motivated Japanese students eager to learn English from you.',
    },
    {
        icon: IconClock,
        title: 'Flexible Schedule',
        description: 'Work when it suits you best. Choose your own hours and maintain perfect work-life balance.',
    },
];

export function Services() {
    return (
        <Box
            id="services"
            py={80}
            style={{
                background: '#f8fafc',
            }}
        >
            <Container size="lg">
                <Title
                    order={2}
                    ta="center"
                    mb={50}
                    style={{
                        fontSize: '2rem',
                        fontWeight: 700,
                        color: '#0f172a',
                    }}
                >
                    Why Choose <Text span style={{ color: '#2563EB' }}>RareJob</Text>?
                </Title>

                <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="xl">
                    {services.map((service) => (
                        <Paper
                            key={service.title}
                            p="xl"
                            radius="md"
                            style={{
                                background: '#ffffff',
                                border: '1px solid #e2e8f0',
                                transition: 'all 0.3s ease',
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.08)';
                                e.currentTarget.style.transform = 'translateY(-4px)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.boxShadow = 'none';
                                e.currentTarget.style.transform = 'translateY(0)';
                            }}
                        >
                            <ThemeIcon
                                size={56}
                                radius="md"
                                mb="lg"
                                style={{ background: '#dbeafe' }}
                            >
                                <service.icon size={28} color="#2563EB" />
                            </ThemeIcon>
                            <Text fw={600} size="lg" c="#0f172a" mb="sm">
                                {service.title}
                            </Text>
                            <Text size="sm" c="#64748b" style={{ lineHeight: 1.7 }}>
                                {service.description}
                            </Text>
                        </Paper>
                    ))}
                </SimpleGrid>
            </Container>
        </Box>
    );
}
