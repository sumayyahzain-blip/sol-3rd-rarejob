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
    Group,
    Stack,
    Badge,
    SimpleGrid,
    Checkbox,
    Progress,
    List,
    ThemeIcon,
    Anchor
} from '@mantine/core';
import { useForm } from '@mantine/form';
import {
    IconUser,
    IconMail,
    IconPhone,
    IconCalendar,
    IconLock,
    IconCheck,
    IconSparkles
} from '@tabler/icons-react';

const validIds = [
    'National ID',
    'Philippine Passport',
    'Driver\'s License',
    'PRC ID',
    'NBI Clearance',
    'Postal ID',
    'Voter\'s ID',
    'SSS/GSIS Card',
];

function getPasswordStrength(password) {
    let strength = 0;
    if (password.length >= 6) strength++;
    if (password.length >= 10) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;
    return Math.min(100, (strength / 6) * 100);
}

function getStrengthColor(strength) {
    if (strength < 33) return 'red';
    if (strength < 66) return 'yellow';
    return 'green';
}

export function RegistrationForm() {
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const form = useForm({
        initialValues: {
            firstName: '',
            middleName: '',
            lastName: '',
            suffix: '',
            birthday: '',
            mobileNumber: '',
            email: '',
            password: '',
            agreeToTerms: false,
        },
        validate: {
            firstName: (value) => value.trim().length < 1 ? 'First name is required' : null,
            lastName: (value) => value.trim().length < 1 ? 'Last name is required' : null,
            birthday: (value) => !value ? 'Date of birth is required' : null,
            mobileNumber: (value) => !/^09[0-9]{9}$/.test(value) ? 'Enter valid PH number (09xxxxxxxxx)' : null,
            email: (value) => !/^\S+@\S+\.\S+$/.test(value) ? 'Enter a valid email' : null,
            password: (value) => value.length < 6 ? 'Password must be at least 6 characters' : null,
            agreeToTerms: (value) => !value ? 'You must agree to the terms' : null,
        },
    });

    const handleSubmit = async (values) => {
        setLoading(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));
        setLoading(false);
        setSubmitted(true);
    };

    const passwordStrength = getPasswordStrength(form.values.password);

    if (submitted) {
        return (
            <Box id="register" py={100}>
                <Container size="sm">
                    <Paper
                        className="glass"
                        p={60}
                        ta="center"
                        style={{
                            background: 'rgba(255, 255, 255, 0.05)',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                        }}
                    >
                        <ThemeIcon
                            size={80}
                            radius="xl"
                            variant="gradient"
                            gradient={{ from: 'green', to: 'cyan', deg: 135 }}
                            mb="xl"
                            style={{ margin: '0 auto' }}
                        >
                            <IconCheck size={40} />
                        </ThemeIcon>
                        <Title order={2} c="white" mb="md">
                            Application Submitted! 🎉
                        </Title>
                        <Text c="gray.4" size="lg">
                            Thank you for applying to RareJob. We'll review your application and contact you within 3-5 business days.
                        </Text>
                        <Button
                            variant="gradient"
                            gradient={{ from: 'violet', to: 'pink', deg: 135 }}
                            size="lg"
                            radius="xl"
                            mt="xl"
                            onClick={() => setSubmitted(false)}
                        >
                            Submit Another Application
                        </Button>
                    </Paper>
                </Container>
            </Box>
        );
    }

    return (
        <Box id="register" py={100}>
            <Container size="lg">
                <SimpleGrid cols={{ base: 1, md: 2 }} spacing={60}>
                    {/* Info Column */}
                    <Stack gap="xl">
                        <Box>
                            <Badge
                                size="lg"
                                variant="light"
                                color="violet"
                                mb="md"
                                style={{ textTransform: 'uppercase', letterSpacing: '1px' }}
                            >
                                Start Your Career
                            </Badge>
                            <Title
                                order={2}
                                c="white"
                                mb="md"
                                style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 900 }}
                            >
                                Apply Now ✨
                            </Title>
                            <Text c="gray.4" size="lg" style={{ lineHeight: 1.7 }}>
                                Ready to transform lives through education? Fill out the form to begin your journey as a RareJob tutor.
                            </Text>
                        </Box>

                        <Paper
                            className="glass"
                            p="xl"
                            style={{
                                background: 'rgba(255, 255, 255, 0.03)',
                                border: '1px solid rgba(255, 255, 255, 0.08)',
                            }}
                        >
                            <Text fw={600} c="white" mb="md">📋 Valid IDs Accepted:</Text>
                            <SimpleGrid cols={2} spacing="xs">
                                {validIds.map((id) => (
                                    <Group key={id} gap="xs">
                                        <ThemeIcon size="xs" radius="xl" color="green" variant="light">
                                            <IconCheck size={10} />
                                        </ThemeIcon>
                                        <Text size="sm" c="gray.4">{id}</Text>
                                    </Group>
                                ))}
                            </SimpleGrid>
                        </Paper>

                        <Paper
                            p="lg"
                            style={{
                                background: 'rgba(139, 92, 246, 0.1)',
                                borderLeft: '4px solid #8b5cf6',
                                borderRadius: '0 16px 16px 0',
                            }}
                        >
                            <Text size="sm" c="gray.3">
                                💡 Please use a computer and enter your name exactly as it appears on your valid ID.
                            </Text>
                        </Paper>
                    </Stack>

                    {/* Form Column */}
                    <Paper
                        className="glass"
                        p="xl"
                        style={{
                            background: 'rgba(255, 255, 255, 0.05)',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                        }}
                    >
                        <form onSubmit={form.onSubmit(handleSubmit)}>
                            <Stack gap="md">
                                <Title order={3} c="white" ta="center" mb="md">
                                    Registration Form
                                </Title>

                                <SimpleGrid cols={{ base: 1, xs: 2 }} spacing="md">
                                    <TextInput
                                        label="First Name"
                                        placeholder="Juan"
                                        required
                                        leftSection={<IconUser size={16} />}
                                        {...form.getInputProps('firstName')}
                                        styles={{
                                            input: {
                                                background: 'rgba(255, 255, 255, 0.05)',
                                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                                color: 'white',
                                            },
                                            label: { color: 'var(--mantine-color-gray-4)' },
                                        }}
                                    />
                                    <TextInput
                                        label="Middle Name"
                                        placeholder="Dela"
                                        {...form.getInputProps('middleName')}
                                        styles={{
                                            input: {
                                                background: 'rgba(255, 255, 255, 0.05)',
                                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                                color: 'white',
                                            },
                                            label: { color: 'var(--mantine-color-gray-4)' },
                                        }}
                                    />
                                </SimpleGrid>

                                <SimpleGrid cols={{ base: 1, xs: 2 }} spacing="md">
                                    <TextInput
                                        label="Last Name"
                                        placeholder="Cruz"
                                        required
                                        {...form.getInputProps('lastName')}
                                        styles={{
                                            input: {
                                                background: 'rgba(255, 255, 255, 0.05)',
                                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                                color: 'white',
                                            },
                                            label: { color: 'var(--mantine-color-gray-4)' },
                                        }}
                                    />
                                    <TextInput
                                        label="Suffix"
                                        placeholder="Jr., Sr., III"
                                        {...form.getInputProps('suffix')}
                                        styles={{
                                            input: {
                                                background: 'rgba(255, 255, 255, 0.05)',
                                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                                color: 'white',
                                            },
                                            label: { color: 'var(--mantine-color-gray-4)' },
                                        }}
                                    />
                                </SimpleGrid>

                                <TextInput
                                    label="Date of Birth"
                                    type="date"
                                    required
                                    leftSection={<IconCalendar size={16} />}
                                    {...form.getInputProps('birthday')}
                                    styles={{
                                        input: {
                                            background: 'rgba(255, 255, 255, 0.05)',
                                            border: '1px solid rgba(255, 255, 255, 0.1)',
                                            color: 'white',
                                        },
                                        label: { color: 'var(--mantine-color-gray-4)' },
                                    }}
                                />

                                <TextInput
                                    label="Mobile / Viber Number"
                                    placeholder="09123456789"
                                    required
                                    leftSection={<IconPhone size={16} />}
                                    {...form.getInputProps('mobileNumber')}
                                    styles={{
                                        input: {
                                            background: 'rgba(255, 255, 255, 0.05)',
                                            border: '1px solid rgba(255, 255, 255, 0.1)',
                                            color: 'white',
                                        },
                                        label: { color: 'var(--mantine-color-gray-4)' },
                                    }}
                                />

                                <TextInput
                                    label="Email Address"
                                    placeholder="you@example.com"
                                    required
                                    leftSection={<IconMail size={16} />}
                                    {...form.getInputProps('email')}
                                    styles={{
                                        input: {
                                            background: 'rgba(255, 255, 255, 0.05)',
                                            border: '1px solid rgba(255, 255, 255, 0.1)',
                                            color: 'white',
                                        },
                                        label: { color: 'var(--mantine-color-gray-4)' },
                                    }}
                                />

                                <Box>
                                    <PasswordInput
                                        label="Create Password"
                                        placeholder="Min. 6 characters"
                                        required
                                        leftSection={<IconLock size={16} />}
                                        {...form.getInputProps('password')}
                                        styles={{
                                            input: {
                                                background: 'rgba(255, 255, 255, 0.05)',
                                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                                color: 'white',
                                            },
                                            label: { color: 'var(--mantine-color-gray-4)' },
                                            innerInput: { color: 'white' },
                                        }}
                                    />
                                    {form.values.password && (
                                        <Progress
                                            value={passwordStrength}
                                            color={getStrengthColor(passwordStrength)}
                                            size="xs"
                                            mt="xs"
                                            radius="xl"
                                        />
                                    )}
                                </Box>

                                <Checkbox
                                    label={
                                        <Text size="sm" c="gray.4">
                                            I agree to the{' '}
                                            <Anchor c="violet" href="#">Privacy Policy</Anchor>
                                            {' '}and{' '}
                                            <Anchor c="violet" href="#">Terms of Service</Anchor>
                                        </Text>
                                    }
                                    {...form.getInputProps('agreeToTerms', { type: 'checkbox' })}
                                    styles={{
                                        input: {
                                            background: 'rgba(255, 255, 255, 0.05)',
                                            border: '1px solid rgba(255, 255, 255, 0.2)',
                                        },
                                    }}
                                />

                                <Button
                                    type="submit"
                                    size="lg"
                                    variant="gradient"
                                    gradient={{ from: 'violet', to: 'pink', deg: 135 }}
                                    radius="xl"
                                    loading={loading}
                                    leftSection={<IconSparkles size={20} />}
                                    fullWidth
                                    mt="md"
                                    style={{
                                        boxShadow: '0 8px 32px rgba(139, 92, 246, 0.4)',
                                    }}
                                >
                                    Submit Application
                                </Button>
                            </Stack>
                        </form>
                    </Paper>
                </SimpleGrid>
            </Container>
        </Box>
    );
}
