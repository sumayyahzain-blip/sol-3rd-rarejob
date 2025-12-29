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
import { IconBrandFacebook, IconBrandTwitter, IconBrandLinkedin } from '@tabler/icons-react';

const footerLinks = [
    { title: 'About Us', links: [{ label: 'About RareJob', href: '#' }, { label: 'Our Mission', href: '#' }, { label: 'Careers', href: '#' }] },
    { title: 'Resources', links: [{ label: 'How It Works', href: '#' }, { label: 'Requirements', href: '#' }, { label: 'FAQs', href: '#faq' }] },
    { title: 'Contact', links: [{ label: 'Contact Us', href: '#' }, { label: 'Support', href: '#' }, { label: 'Blog', href: '#' }] },
];

export function Footer() {
    return (
        <Box id="footer" component="footer" py={60} style={{ background: '#f8fafc', borderTop: '1px solid #e2e8f0' }}>
            <Container size="lg">
                <SimpleGrid cols={{ base: 1, sm: 2, md: 4 }} spacing="xl">
                    <Stack gap="md">
                        <Text size="xl" fw={700} c="#2563EB">RareJob</Text>
                        <Text size="sm" c="#64748b" style={{ lineHeight: 1.7 }}>
                            Japan's leading online English school. Connecting tutors with students since 2007.
                        </Text>
                        <Group gap="xs">
                            <ActionIcon size="lg" radius="sm" variant="light" color="blue">
                                <IconBrandFacebook size={18} />
                            </ActionIcon>
                            <ActionIcon size="lg" radius="sm" variant="light" color="blue">
                                <IconBrandTwitter size={18} />
                            </ActionIcon>
                            <ActionIcon size="lg" radius="sm" variant="light" color="blue">
                                <IconBrandLinkedin size={18} />
                            </ActionIcon>
                        </Group>
                    </Stack>

                    {footerLinks.map((section) => (
                        <Stack key={section.title} gap="sm">
                            <Text size="sm" fw={600} c="#0f172a" tt="uppercase" style={{ letterSpacing: '1px' }}>{section.title}</Text>
                            {section.links.map((link) => (
                                <Anchor key={link.label} href={link.href} size="sm" c="#64748b" underline="never"
                                    style={{ transition: 'color 0.2s ease' }}
                                    onMouseEnter={(e) => e.target.style.color = '#2563EB'}
                                    onMouseLeave={(e) => e.target.style.color = ''}>
                                    {link.label}
                                </Anchor>
                            ))}
                        </Stack>
                    ))}
                </SimpleGrid>

                <Divider my="xl" color="#e2e8f0" />

                <Group justify="space-between" wrap="wrap" gap="md">
                    <Text size="xs" c="#94a3b8">© 2007-2025 RareJob, Inc. All Rights Reserved.</Text>
                    <Group gap="lg">
                        <Anchor size="xs" c="#64748b" href="#">Privacy Policy</Anchor>
                        <Anchor size="xs" c="#64748b" href="#">Terms of Service</Anchor>
                    </Group>
                </Group>
            </Container>
        </Box>
    );
}
