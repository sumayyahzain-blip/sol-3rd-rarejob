import {
    Box,
    Container,
    Title,
    Text,
    SimpleGrid,
    Paper,
    ThemeIcon,
    Badge,
    Stack
} from '@mantine/core';
import {
    IconTrendingUp,
    IconUsers,
    IconClock,
    IconBook,
    IconHeadset,
    IconStar
} from '@tabler/icons-react';

const benefits = [
    {
        icon: IconTrendingUp,
        title: 'We Are Still Growing',
        description: 'Be part of a company that continues to expand and create opportunities for tutors worldwide.',
        color: 'violet',
    },
    {
        icon: IconUsers,
        title: 'Active Students',
        description: 'Connect with thousands of motivated Japanese students eager to learn English from you.',
        color: 'cyan',
    },
    {
        icon: IconClock,
        title: 'Flexible Schedule',
        description: 'Work when it suits you best. Choose your own hours and maintain perfect work-life balance.',
        color: 'pink',
    },
    {
        icon: IconBook,
        title: 'Original Materials',
        description: 'Access professionally designed teaching materials to deliver high-quality lessons.',
        color: 'violet',
    },
    {
        icon: IconHeadset,
        title: 'Reliable Support',
        description: 'Our dedicated support team is always ready to help you with any questions or concerns.',
        color: 'cyan',
    },
    {
        icon: IconStar,
        title: 'Career Growth',
        description: 'Training programs, performance bonuses, and advancement opportunities await you.',
        color: 'pink',
    },
];

export function Benefits() {
    return (
        <Box
            id="benefits"
            py={100}
            style={{
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            {/* Background with geometric pattern */}
            <Box
                style={{
                    position: 'absolute',
                    inset: 0,
                    zIndex: 0,
                    background: `
            linear-gradient(180deg, rgba(15, 15, 35, 0) 0%, rgba(26, 26, 62, 0.5) 50%, rgba(15, 15, 35, 0) 100%),
            radial-gradient(ellipse 100% 50% at 50% 0%, rgba(139, 92, 246, 0.1), transparent),
            radial-gradient(ellipse 100% 50% at 50% 100%, rgba(6, 182, 212, 0.08), transparent)
          `,
                }}
            />

            {/* Hexagonal pattern overlay */}
            <Box
                style={{
                    position: 'absolute',
                    inset: 0,
                    zIndex: 0,
                    opacity: 0.4,
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0L60 17.32v34.64L30 69.28 0 51.96V17.32z' fill='none' stroke='%238b5cf6' stroke-width='0.5' stroke-opacity='0.1'/%3E%3C/svg%3E")`,
                    backgroundSize: '60px 60px',
                }}
            />

            {/* Glowing lines */}
            <Box
                style={{
                    position: 'absolute',
                    top: 0,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: 1,
                    height: '100%',
                    background: 'linear-gradient(180deg, transparent, rgba(139, 92, 246, 0.3), transparent)',
                }}
            />

            <Container size="lg" style={{ position: 'relative', zIndex: 1 }}>
                <Stack align="center" gap="lg" mb={60}>
                    <Badge
                        size="lg"
                        variant="light"
                        color="violet"
                        style={{
                            textTransform: 'uppercase',
                            letterSpacing: '1px',
                        }}
                    >
                        Why Choose Us
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
                        Why <Text span className="gradient-text">RareJob</Text>? 🚀
                    </Title>

                    <Text
                        size="lg"
                        c="gray.4"
                        ta="center"
                        maw={600}
                    >
                        Join Japan's most trusted online English school and enjoy the benefits of flexible, rewarding work.
                    </Text>
                </Stack>

                <SimpleGrid
                    cols={{ base: 1, sm: 2, lg: 3 }}
                    spacing="xl"
                >
                    {benefits.map((benefit, index) => (
                        <Paper
                            key={benefit.title}
                            className={`glass glass-hover animate-fade-in animate-delay-${index + 1}`}
                            p="xl"
                            style={{
                                background: 'rgba(255, 255, 255, 0.03)',
                                border: '1px solid rgba(255, 255, 255, 0.08)',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                opacity: 0,
                                backdropFilter: 'blur(20px)',
                            }}
                        >
                            <ThemeIcon
                                size={60}
                                radius="xl"
                                variant="gradient"
                                gradient={
                                    benefit.color === 'violet'
                                        ? { from: 'violet', to: 'pink', deg: 135 }
                                        : benefit.color === 'cyan'
                                            ? { from: 'cyan', to: 'violet', deg: 135 }
                                            : { from: 'pink', to: 'violet', deg: 135 }
                                }
                                mb="md"
                                style={{
                                    boxShadow: benefit.color === 'violet'
                                        ? '0 8px 24px rgba(139, 92, 246, 0.3)'
                                        : benefit.color === 'cyan'
                                            ? '0 8px 24px rgba(6, 182, 212, 0.3)'
                                            : '0 8px 24px rgba(236, 72, 153, 0.3)',
                                }}
                            >
                                <benefit.icon size={28} stroke={1.5} />
                            </ThemeIcon>

                            <Text size="lg" fw={700} c="white" mb="xs">
                                {benefit.title}
                            </Text>

                            <Text size="sm" c="gray.4" style={{ lineHeight: 1.7 }}>
                                {benefit.description}
                            </Text>
                        </Paper>
                    ))}
                </SimpleGrid>
            </Container>
        </Box>
    );
}
