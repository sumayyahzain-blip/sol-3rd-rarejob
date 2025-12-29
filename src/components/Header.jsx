import { useState } from 'react';
import {
    Box,
    Group,
    Text,
    Button,
    Burger,
    Drawer,
    Stack,
} from '@mantine/core';
import { useDisclosure, useWindowScroll } from '@mantine/hooks';

const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Benefits', href: '#services' },
    { label: 'Apply', href: '#register' },
    { label: 'Contact', href: '#footer' },
];

export function Header() {
    const [opened, { toggle, close }] = useDisclosure(false);
    const [scroll] = useWindowScroll();

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
                    padding: '0.75rem 2rem',
                    transition: 'all 0.3s ease',
                    background: '#ffffff',
                    borderBottom: isScrolled
                        ? '1px solid #f1f5f9'
                        : '1px solid transparent',
                    boxShadow: isScrolled
                        ? '0 1px 3px rgba(0, 0, 0, 0.05)'
                        : 'none',
                }}
            >
                <Group justify="space-between" maw={1280} mx="auto">
                    {/* Logo */}
                    <Group gap="xs">
                        <Text
                            size="xl"
                            fw={700}
                            style={{
                                color: '#2563EB',
                                letterSpacing: '-0.5px',
                            }}
                        >
                            RareJob
                        </Text>
                    </Group>

                    {/* Desktop Navigation */}
                    <Group gap={32} visibleFrom="sm">
                        {navLinks.map((link) => (
                            <Text
                                key={link.label}
                                component="a"
                                href={link.href}
                                size="sm"
                                fw={500}
                                style={{
                                    color: '#475569',
                                    textDecoration: 'none',
                                    transition: 'color 0.2s ease',
                                    cursor: 'pointer',
                                }}
                                onMouseEnter={(e) => e.target.style.color = '#2563EB'}
                                onMouseLeave={(e) => e.target.style.color = '#475569'}
                            >
                                {link.label}
                            </Text>
                        ))}
                    </Group>

                    {/* Desktop CTA */}
                    <Group gap="md" visibleFrom="sm">
                        <Button
                            size="md"
                            radius="xl"
                            component="a"
                            href="#register"
                            style={{
                                background: '#2563EB',
                                color: 'white',
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.background = '#1d4ed8'}
                            onMouseLeave={(e) => e.currentTarget.style.background = '#2563EB'}
                        >
                            Apply Now
                        </Button>
                    </Group>

                    {/* Mobile Burger */}
                    <Burger
                        opened={opened}
                        onClick={toggle}
                        hiddenFrom="sm"
                        color="#0f172a"
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
                    body: { background: '#ffffff', height: '100%' },
                    header: { background: '#ffffff' },
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
                            c="#0f172a"
                            onClick={close}
                            style={{ textDecoration: 'none' }}
                        >
                            {link.label}
                        </Text>
                    ))}
                    <Button
                        size="lg"
                        radius="xl"
                        component="a"
                        href="#register"
                        onClick={close}
                        mt="xl"
                        style={{ background: '#2563EB' }}
                    >
                        Apply Now
                    </Button>
                </Stack>
            </Drawer>
        </>
    );
}
