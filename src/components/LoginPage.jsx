import { useState } from 'react';
import {
    Box,
    Container,
    Title,
    Text,
    Paper,
    TextInput,
    PasswordInput,
    Button,
    Stack,
    Group,
    Divider,
    Anchor,
    ThemeIcon,
    Tabs,
    Checkbox,
} from '@mantine/core';
import {
    IconMail,
    IconLock,
    IconUser,
    IconArrowRight,
    IconBrandGoogle,
    IconBrandFacebook,
} from '@tabler/icons-react';

export function LoginPage({ onLogin }) {
    const [activeTab, setActiveTab] = useState('login');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        await new Promise(resolve => setTimeout(resolve, 1000));
        setLoading(false);
        if (onLogin) onLogin();
    };

    return (
        <Box style={{ minHeight: '100vh', background: '#f8fafc', display: 'flex', alignItems: 'center', paddingTop: 80 }}>
            <Container size="xs">
                <Paper p="xl" radius="md" style={{ background: '#ffffff', border: '1px solid #e2e8f0', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
                    <Group justify="center" mb="lg">
                        <Text size="xl" fw={700} c="#2563EB">RareJob</Text>
                    </Group>

                    <Tabs value={activeTab} onChange={setActiveTab}>
                        <Tabs.List grow mb="lg">
                            <Tabs.Tab value="login">Sign In</Tabs.Tab>
                            <Tabs.Tab value="signup">Sign Up</Tabs.Tab>
                        </Tabs.List>

                        <Tabs.Panel value="login">
                            <form onSubmit={handleSubmit}>
                                <Stack gap="md">
                                    <TextInput label="Email" placeholder="you@example.com" leftSection={<IconMail size={16} />} required
                                        styles={{ input: { background: '#f8fafc', border: '1px solid #e2e8f0' } }} />
                                    <PasswordInput label="Password" placeholder="Your password" leftSection={<IconLock size={16} />} required
                                        styles={{ input: { background: '#f8fafc', border: '1px solid #e2e8f0' } }} />
                                    <Group justify="space-between">
                                        <Checkbox label="Remember me" size="sm" />
                                        <Anchor size="sm" c="#2563EB">Forgot password?</Anchor>
                                    </Group>
                                    <Button type="submit" size="md" radius="xl" loading={loading} rightSection={<IconArrowRight size={18} />}
                                        style={{ background: '#2563EB' }}>Sign In</Button>
                                </Stack>
                            </form>
                        </Tabs.Panel>

                        <Tabs.Panel value="signup">
                            <form onSubmit={handleSubmit}>
                                <Stack gap="md">
                                    <TextInput label="Full Name" placeholder="Your name" leftSection={<IconUser size={16} />} required
                                        styles={{ input: { background: '#f8fafc', border: '1px solid #e2e8f0' } }} />
                                    <TextInput label="Email" placeholder="you@example.com" leftSection={<IconMail size={16} />} required
                                        styles={{ input: { background: '#f8fafc', border: '1px solid #e2e8f0' } }} />
                                    <PasswordInput label="Password" placeholder="Create a password" leftSection={<IconLock size={16} />} required
                                        styles={{ input: { background: '#f8fafc', border: '1px solid #e2e8f0' } }} />
                                    <Checkbox label={<Text size="sm">I agree to the <Anchor c="#2563EB">Terms</Anchor> and <Anchor c="#2563EB">Privacy Policy</Anchor></Text>} size="sm" />
                                    <Button type="submit" size="md" radius="xl" loading={loading} rightSection={<IconArrowRight size={18} />}
                                        style={{ background: '#2563EB' }}>Create Account</Button>
                                </Stack>
                            </form>
                        </Tabs.Panel>
                    </Tabs>

                    <Divider label="or continue with" labelPosition="center" my="lg" />

                    <Group grow>
                        <Button variant="light" color="gray" leftSection={<IconBrandGoogle size={18} />}>Google</Button>
                        <Button variant="light" color="gray" leftSection={<IconBrandFacebook size={18} />}>Facebook</Button>
                    </Group>

                    <Text size="xs" c="#94a3b8" ta="center" mt="lg">
                        <Anchor href="#" c="#2563EB">Back to Home</Anchor>
                    </Text>
                </Paper>
            </Container>
        </Box>
    );
}
