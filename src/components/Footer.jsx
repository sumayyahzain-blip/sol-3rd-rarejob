import {
    Box,
    Container,
    SimpleGrid,
    Text,
    Group,
    Stack,
    ActionIcon,
    Anchor,
    Divider
} from '@mantine/core';
import {
    IconBrandFacebook,
    IconBrandTwitter,
    IconBrandLinkedin,
    IconBrandTelegram,
    IconHeart
} from '@tabler/icons-react';

const footerLinks = [
    {
        title: 'About Us',
        links: [
            { label: 'About RareJob', href: '#' },
            { label: 'Our Mission', href: '#' },
            { label: 'Our Vision', href: '#' },
            { label: 'Company History', href: '#' },
        ],
    },
    {
        title: 'Resources',
        links: [
            { label: 'What is ESL?', href: '#' },
            { label: 'How It Works', href: '#' },
            { label: 'Requirements', href: '#' },
            { label: 'FAQs', href: '#' },
        ],
    },
    {
        title: 'Contact',
        links: [
            { label: 'Contact Us', href: '#' },
            { label: 'RareJob Japan', href: '#' },
            { label: 'Careers', href: '#' },
            { label: 'Blog', href: '#' },
        ],
    },
];

export function Footer() {
    return (
        <Box
            id="footer"
            component="footer"
            py={60}
            style={{
                background: 'rgba(0, 0, 0, 0.3)',
                borderTop: '1px solid rgba(255, 255, 255, 0.05)',
            }}
        >
            <Container size="lg">
                <SimpleGrid cols={{ base: 1, sm: 2, md: 4 }} spacing="xl">
                    {/* Brand Column */}
                    <Stack gap="md">
                        <Group gap="xs">
                            <Box
                                style={{
                                    width: 36,
                                    height: 36,
                                    borderRadius: '50%',
                                    background: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                            >
                                <IconBrandTelegram size={20} color="white" />
                            </Box>
                            <Text size="lg" fw={800} c="white">RareJob</Text>
                        </Group>
                        <Text size="sm" c="gray.5" style={{ lineHeight: 1.7 }}>
                            Japan's leading online English school. Connecting Filipino tutors with Japanese students since 2007.
                        </Text>
                        <Group gap="xs">
                            <ActionIcon
                                size="lg"
                                radius="xl"
                                variant="subtle"
                                color="gray"
                                style={{
                                    background: 'rgba(255, 255, 255, 0.05)',
                                    transition: 'all 0.2s ease',
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.background = 'linear-gradient(135deg, #8b5cf6, #ec4899)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                                }}
                            >
                                <IconBrandFacebook size={18} />
                            </ActionIcon>
                            <ActionIcon
                                size="lg"
                                radius="xl"
                                variant="subtle"
                                color="gray"
                                style={{
                                    background: 'rgba(255, 255, 255, 0.05)',
                                    transition: 'all 0.2s ease',
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.background = 'linear-gradient(135deg, #8b5cf6, #ec4899)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                                }}
                            >
                                <IconBrandTwitter size={18} />
                            </ActionIcon>
                            <ActionIcon
                                size="lg"
                                radius="xl"
                                variant="subtle"
                                color="gray"
                                style={{
                                    background: 'rgba(255, 255, 255, 0.05)',
                                    transition: 'all 0.2s ease',
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.background = 'linear-gradient(135deg, #8b5cf6, #ec4899)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                                }}
                            >
                                <IconBrandLinkedin size={18} />
                            </ActionIcon>
                        </Group>
                    </Stack>

                    {/* Link Columns */}
                    {footerLinks.map((section) => (
                        <Stack key={section.title} gap="sm">
                            <Text size="sm" fw={700} c="white" tt="uppercase" style={{ letterSpacing: '1px' }}>
                                {section.title}
                            </Text>
                            {section.links.map((link) => (
                                <Anchor
                                    key={link.label}
                                    href={link.href}
                                    size="sm"
                                    c="gray.5"
                                    underline="never"
                                    style={{ transition: 'color 0.2s ease' }}
                                    onMouseEnter={(e) => e.target.style.color = '#8b5cf6'}
                                    onMouseLeave={(e) => e.target.style.color = ''}
                                >
                                    {link.label}
                                </Anchor>
                            ))}
                        </Stack>
                    ))}
                </SimpleGrid>

                <Divider
                    my="xl"
                    color="rgba(255, 255, 255, 0.05)"
                />

                <Group justify="space-between" wrap="wrap" gap="md">
                    <Text size="xs" c="gray.6">
                        © 2007-2025 RareJob, Inc. All Rights Reserved.
                    </Text>
                    <Group gap="lg">
                        <Anchor size="xs" c="gray.5" href="#">Privacy Policy</Anchor>
                        <Anchor size="xs" c="gray.5" href="#">Terms of Service</Anchor>
                        <Anchor size="xs" c="gray.5" href="#">Acceptable Use</Anchor>
                    </Group>
                </Group>

                <Text size="xs" c="gray.6" ta="center" mt="xl">
                    Made with <IconHeart size={12} style={{ verticalAlign: 'middle', color: '#ec4899' }} /> using React & Mantine UI
                </Text>
            </Container>
        </Box>
    );
}
