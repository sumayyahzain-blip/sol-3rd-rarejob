import { useState, useEffect } from 'react';
import {
    Box,
    Group,
    Text,
    Button,
    Burger,
    Drawer,
    Stack,
    useMantineTheme
} from '@mantine/core';
import { useDisclosure, useWindowScroll } from '@mantine/hooks';
import { IconBrandTelegram } from '@tabler/icons-react';

const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Benefits', href: '#benefits' },
    { label: 'Apply', href: '#register' },
    { label: 'Contact', href: '#footer' },
];

export function Header() {
    const [opened, { toggle, close }] = useDisclosure(false);
    const [scroll] = useWindowScroll();
    const theme = useMantineTheme();

    const isScrolled = scroll.y > 50;

    return (
        <>
            <Box
                component="header"
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    zIndex: 1000,
                    padding: '1rem 2rem',
                    transition: 'all 0.3s ease',
                    background: isScrolled
                        ? 'rgba(15, 15, 35, 0.9)'
                        : 'transparent',
                    backdropFilter: isScrolled ? 'blur(16px)' : 'none',
                    borderBottom: isScrolled
                        ? '1px solid rgba(255, 255, 255, 0.1)'
                        : 'none',
                }}
            >
                <Group justify="space-between" maw={1280} mx="auto">
                    {/* Logo */}
                    <Group gap="xs">
                        <Box
                            style={{
                                width: 40,
                                height: 40,
                                borderRadius: '50%',
                                background: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <IconBrandTelegram size={24} color="white" />
                        </Box>
                        <Text
                            size="xl"
                            fw={800}
                            style={{
                                letterSpacing: '-0.5px',
                                background: 'linear-gradient(135deg, #ffffff 0%, #a78bfa 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                            }}
                        >
                            RareJob
                        </Text>
                    </Group>

                    {/* Desktop Navigation */}
                    <Group gap="xl" visibleFrom="sm">
                        {navLinks.map((link) => (
                            <Text
                                key={link.label}
                                component="a"
                                href={link.href}
                                size="sm"
                                fw={500}
                                c="gray.4"
                                style={{
                                    textDecoration: 'none',
                                    transition: 'color 0.2s ease',
                                    cursor: 'pointer',
                                }}
                                onMouseEnter={(e) => e.target.style.color = '#8b5cf6'}
                                onMouseLeave={(e) => e.target.style.color = ''}
                            >
                                {link.label}
                            </Text>
                        ))}
                    </Group>

                    {/* Desktop CTA */}
                    <Group gap="md" visibleFrom="sm">
                        <Button
                            variant="subtle"
                            color="gray.4"
                            radius="xl"
                        >
                            Log In
                        </Button>
                        <Button
                            variant="gradient"
                            gradient={{ from: 'violet', to: 'pink', deg: 135 }}
                            radius="xl"
                            component="a"
                            href="#register"
                            style={{
                                boxShadow: '0 4px 20px rgba(139, 92, 246, 0.4)',
                            }}
                        >
                            Apply Now ✨
                        </Button>
                    </Group>

                    {/* Mobile Burger */}
                    <Burger
                        opened={opened}
                        onClick={toggle}
                        hiddenFrom="sm"
                        color="white"
                    />
                </Group>
            </Box>

            {/* Mobile Drawer */}
            <Drawer
                opened={opened}
                onClose={close}
                size="100%"
                padding="xl"
                hiddenFrom="sm"
                styles={{
                    body: {
                        background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a3e 100%)',
                        height: '100%',
                    },
                    header: {
                        background: 'transparent',
                    },
                }}
            >
                <Stack gap="xl" mt="xl">
                    {navLinks.map((link) => (
                        <Text
                            key={link.label}
                            component="a"
                            href={link.href}
                            size="xl"
                            fw={600}
                            c="white"
                            onClick={close}
                            style={{ textDecoration: 'none' }}
                        >
                            {link.label}
                        </Text>
                    ))}
                    <Button
                        variant="gradient"
                        gradient={{ from: 'violet', to: 'pink', deg: 135 }}
                        size="lg"
                        radius="xl"
                        component="a"
                        href="#register"
                        onClick={close}
                        mt="xl"
                    >
                        Apply Now ✨
                    </Button>
                </Stack>
            </Drawer>
        </>
    );
}
