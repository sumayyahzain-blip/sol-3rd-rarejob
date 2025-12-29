import {
    Box,
    Container,
    Title,
    Text,
    Button,
    Group,
    Badge,
    Stack,
    SimpleGrid,
    Paper
} from '@mantine/core';
import { IconArrowRight, IconSparkles } from '@tabler/icons-react';

const stats = [
    { value: '75M+', label: 'Lessons Delivered' },
    { value: '34K+', label: 'Active Tutors' },
    { value: '15+', label: 'Years Experience' },
];

export function Hero() {
    return (
        <Box
            id="about"
            style={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                paddingTop: '100px',
                paddingBottom: '60px',
                position: 'relative',
                overflow: 'hidden',
                // Photorealistic background with heavy gradient overlay for text readability
                background: `linear-gradient(to right, rgba(15, 15, 35, 0.95) 0%, rgba(15, 15, 35, 0.8) 50%, rgba(15, 15, 35, 0.7) 100%), url('/hero-bg-people.png')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center 20%', // Focus on faces
                backgroundAttachment: 'fixed',
            }}
        >
            {/* Grid pattern overlay */}
            <Box
                style={{
                    position: 'absolute',
                    inset: 0,
                    zIndex: 0,
                    backgroundImage: `
            linear-gradient(rgba(139, 92, 246, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139, 92, 246, 0.05) 1px, transparent 1px)
          `,
                    backgroundSize: '40px 40px',
                    maskImage: 'radial-gradient(ellipse 80% 60% at 50% 50%, black 40%, transparent 100%)',
                }}
            />

            {/* Floating orbs */}
            <Box
                className="animate-float"
                style={{
                    position: 'absolute',
                    top: '15%',
                    right: '15%',
                    width: 400,
                    height: 400,
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 60%)',
                    filter: 'blur(60px)',
                }}
            />
            <Box
                className="animate-float"
                style={{
                    position: 'absolute',
                    bottom: '10%',
                    left: '10%',
                    width: 300,
                    height: 300,
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(236, 72, 153, 0.15) 0%, transparent 60%)',
                    filter: 'blur(50px)',
                    animationDelay: '1.5s',
                }}
            />

            <Container size="lg" style={{ position: 'relative', zIndex: 1 }}>
                <Stack align="center" gap="xl">
                    {/* Badge */}
                    <Badge
                        size="lg"
                        variant="gradient"
                        gradient={{ from: 'violet.9', to: 'pink.9', deg: 135 }}
                        leftSection={<IconSparkles size={14} />}
                        style={{
                            padding: '12px 20px',
                            textTransform: 'none',
                            fontSize: '14px',
                            boxShadow: '0 4px 20px rgba(139, 92, 246, 0.3)',
                        }}
                    >
                        Join 34,000+ Tutors Worldwide
                    </Badge>

                    {/* Main Heading */}
                    <Title
                        order={1}
                        ta="center"
                        style={{
                            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                            fontWeight: 900,
                            lineHeight: 1.1,
                            letterSpacing: '-2px',
                            textShadow: '0 4px 30px rgba(0, 0, 0, 0.5)',
                        }}
                    >
                        <Text span c="white">BE A HOME-BASED</Text>
                        <br />
                        <Text
                            span
                            className="gradient-text"
                            style={{
                                display: 'inline-block',
                                fontSize: '1.1em', // Slightly larger to emphasize
                                position: 'relative',
                            }}
                        >
                            ENGLISH TUTOR
                            {/* Underline accent */}
                            <Box
                                style={{
                                    position: 'absolute',
                                    bottom: 8,
                                    left: 0,
                                    right: 0,
                                    height: 12,
                                    background: 'rgba(236, 72, 153, 0.3)',
                                    zIndex: -1,
                                    transform: 'skew(-10deg)',
                                }}
                            />
                        </Text>
                        <Text span c="white"> NOW </Text>
                        <Text span style={{ fontSize: '0.8em' }}>✨</Text>
                    </Title>

                    {/* Description */}
                    <Text
                        size="xl"
                        c="gray.4"
                        ta="center"
                        maw={600}
                        style={{ lineHeight: 1.7 }}
                    >
                        Transform lives through education. Work flexibly from home,
                        teach Japaense students, and be part of Japan's leading online English school.
                    </Text>

                    {/* CTA Buttons */}
                    <Group gap="md" mt="md">
                        <Button
                            size="xl"
                            variant="gradient"
                            gradient={{ from: 'violet', to: 'pink', deg: 135 }}
                            radius="xl"
                            rightSection={<IconArrowRight size={20} />}
                            component="a"
                            href="#register"
                            style={{
                                boxShadow: '0 8px 32px rgba(139, 92, 246, 0.4)',
                                padding: '0 32px',
                                height: 56,
                            }}
                        >
                            Start Your Journey
                        </Button>
                        <Button
                            size="xl"
                            variant="outline"
                            color="gray.4"
                            radius="xl"
                            component="a"
                            href="#requirements"
                            style={{
                                borderColor: 'rgba(255, 255, 255, 0.2)',
                                height: 56,
                                backdropFilter: 'blur(10px)',
                                background: 'rgba(255, 255, 255, 0.05)',
                            }}
                        >
                            Requirements
                        </Button>
                    </Group>

                    {/* Stats */}
                    <SimpleGrid
                        cols={{ base: 1, xs: 3 }}
                        spacing="xl"
                        mt={60}
                    >
                        {stats.map((stat, index) => (
                            <Paper
                                key={stat.label}
                                className={`glass animate-fade-in animate-delay-${index + 1}`}
                                p="xl"
                                ta="center"
                                style={{
                                    background: 'rgba(255, 255, 255, 0.03)',
                                    border: '1px solid rgba(255, 255, 255, 0.08)',
                                    opacity: 0,
                                    backdropFilter: 'blur(20px)',
                                }}
                            >
                                <Text
                                    size="2.5rem"
                                    fw={900}
                                    className="gradient-text"
                                    style={{ lineHeight: 1 }}
                                >
                                    {stat.value}
                                </Text>
                                <Text size="sm" c="gray.5" mt="xs">
                                    {stat.label}
                                </Text>
                            </Paper>
                        ))}
                    </SimpleGrid>
                </Stack>
            </Container>
        </Box>
    );
}
