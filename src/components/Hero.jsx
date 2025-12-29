import {
    Box,
    Container,
    Title,
    Text,
    Button,
    Group,
    Stack,
    Badge,
    SimpleGrid,
} from '@mantine/core';
import { IconArrowRight } from '@tabler/icons-react';

export function Hero() {
    return (
        <Box
            id="about"
            style={{
                minHeight: '90vh',
                display: 'flex',
                alignItems: 'center',
                paddingTop: '80px',
                background: '#ffffff',
            }}
        >
            <Container size="xl">
                <SimpleGrid cols={{ base: 1, md: 2 }} spacing={60}>
                    {/* Left Side - Content */}
                    <Stack justify="center" gap="lg">
                        {/* Badge */}
                        <Box>
                            <Badge
                                size="lg"
                                radius="xl"
                                style={{
                                    background: '#dbeafe',
                                    color: '#2563EB',
                                    padding: '10px 16px',
                                    textTransform: 'none',
                                    fontWeight: 500,
                                }}
                            >
                                ✨ Join 34,000+ Tutors Worldwide
                            </Badge>
                        </Box>

                        {/* Headline */}
                        <Title
                            order={1}
                            style={{
                                fontSize: 'clamp(2.25rem, 5vw, 3.5rem)',
                                fontWeight: 700,
                                lineHeight: 1.2,
                                color: '#0f172a',
                                letterSpacing: '-1px',
                            }}
                        >
                            Become a Home-Based
                            <br />
                            <Text span style={{ color: '#2563EB' }}>
                                English Tutor
                            </Text>
                        </Title>

                        {/* Subheadline */}
                        <Text
                            size="lg"
                            style={{
                                color: '#475569',
                                lineHeight: 1.7,
                                maxWidth: 480,
                            }}
                        >
                            Transform lives through education. Work flexibly from home,
                            teach Japanese students, and be part of Japan's leading online English school.
                        </Text>

                        {/* CTA Buttons */}
                        <Group gap="md" mt="md">
                            <Button
                                size="lg"
                                radius="xl"
                                rightSection={<IconArrowRight size={18} />}
                                component="a"
                                href="#register"
                                style={{
                                    background: '#2563EB',
                                    padding: '0 28px',
                                    height: 52,
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.background = '#1d4ed8'}
                                onMouseLeave={(e) => e.currentTarget.style.background = '#2563EB'}
                            >
                                Start Your Journey
                            </Button>
                            <Button
                                size="lg"
                                radius="xl"
                                variant="outline"
                                component="a"
                                href="#requirements"
                                style={{
                                    borderColor: '#e2e8f0',
                                    color: '#475569',
                                    height: 52,
                                    background: 'white',
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.borderColor = '#2563EB';
                                    e.currentTarget.style.color = '#2563EB';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.borderColor = '#e2e8f0';
                                    e.currentTarget.style.color = '#475569';
                                }}
                            >
                                Requirements
                            </Button>
                        </Group>
                    </Stack>

                    {/* Right Side - Image */}
                    <Box
                        style={{
                            position: 'relative',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        {/* Soft blob background */}
                        <Box
                            style={{
                                position: 'absolute',
                                width: '100%',
                                height: '100%',
                                background: 'radial-gradient(ellipse at center, #dbeafe 0%, transparent 70%)',
                                filter: 'blur(40px)',
                                zIndex: 0,
                            }}
                        />

                        {/* Image */}
                        <Box
                            component="img"
                            src={`${import.meta.env.BASE_URL}hero-bg-people.png`}
                            alt="RareJob Tutors"
                            style={{
                                width: '100%',
                                maxWidth: 550,
                                height: 'auto',
                                borderRadius: 16,
                                position: 'relative',
                                zIndex: 1,
                                boxShadow: '0 20px 50px rgba(0, 0, 0, 0.1)',
                            }}
                        />
                    </Box>
                </SimpleGrid>
            </Container>
        </Box>
    );
}
