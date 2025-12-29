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
    IconArrowRight
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
        await new Promise(resolve => setTimeout(resolve, 2000));
        setLoading(false);
        setSubmitted(true);
    };

    const passwordStrength = getPasswordStrength(form.values.password);

    if (submitted) {
        return (
            <Box id="register" py={80} style={{ background: '#ffffff' }}>
                <Container size="sm">
                    <Paper p={60} ta="center" radius="md" style={{ background: '#f8fafc', border: '1px solid #e2e8f0' }}>
                        <ThemeIcon size={80} radius="xl" mb="xl" style={{ margin: '0 auto', background: '#22c55e' }}>
                            <IconCheck size={40} color="white" />
                        </ThemeIcon>
                        <Title order={2} c="#0f172a" mb="md">Application Submitted! 🎉</Title>
                        <Text c="#64748b" size="lg">
                            Thank you for applying to RareJob. We'll review your application and contact you within 3-5 business days.
                        </Text>
                        <Button color="blue" size="lg" radius="xl" mt="xl" onClick={() => setSubmitted(false)}>
                            Submit Another Application
                        </Button>
                    </Paper>
                </Container>
            </Box>
        );
    }

    const inputStyles = {
        input: { background: '#f8fafc', border: '1px solid #e2e8f0', color: '#0f172a' },
        label: { color: '#374151', fontWeight: 500 },
    };

    return (
        <Box id="register" py={80} style={{ background: '#ffffff' }}>
            <Container size="lg">
                <SimpleGrid cols={{ base: 1, md: 2 }} spacing={60}>
                    {/* Info Column */}
                    <Stack gap="xl">
                        <Box>
                            <Badge size="lg" variant="light" color="blue" mb="md" style={{ textTransform: 'uppercase', letterSpacing: '1px' }}>
                                Start Your Career
                            </Badge>
                            <Title order={2} c="#0f172a" mb="md" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 700 }}>
                                Apply Now
                            </Title>
                            <Text c="#64748b" size="lg" style={{ lineHeight: 1.7 }}>
                                Ready to transform lives through education? Fill out the form to begin your journey as a RareJob tutor.
                            </Text>
                        </Box>

                        <Paper p="xl" radius="md" style={{ background: '#f8fafc', border: '1px solid #e2e8f0' }}>
                            <Text fw={600} c="#0f172a" mb="md">📋 Valid IDs Accepted:</Text>
                            <SimpleGrid cols={2} spacing="xs">
                                {validIds.map((id) => (
                                    <Group key={id} gap="xs">
                                        <ThemeIcon size="xs" radius="xl" color="green" variant="light">
                                            <IconCheck size={10} />
                                        </ThemeIcon>
                                        <Text size="sm" c="#64748b">{id}</Text>
                                    </Group>
                                ))}
                            </SimpleGrid>
                        </Paper>

                        <Paper p="lg" style={{ background: '#dbeafe', borderLeft: '4px solid #2563EB', borderRadius: '0 8px 8px 0' }}>
                            <Text size="sm" c="#1e40af">
                                💡 Please use a computer and enter your name exactly as it appears on your valid ID.
                            </Text>
                        </Paper>
                    </Stack>

                    {/* Form Column */}
                    <Paper p="xl" radius="md" style={{ background: '#ffffff', border: '1px solid #e2e8f0', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
                        <form onSubmit={form.onSubmit(handleSubmit)}>
                            <Stack gap="md">
                                <Title order={3} c="#0f172a" ta="center" mb="md">Registration Form</Title>

                                <SimpleGrid cols={{ base: 1, xs: 2 }} spacing="md">
                                    <TextInput label="First Name" placeholder="Juan" required leftSection={<IconUser size={16} />} {...form.getInputProps('firstName')} styles={inputStyles} />
                                    <TextInput label="Middle Name" placeholder="Dela" {...form.getInputProps('middleName')} styles={inputStyles} />
                                </SimpleGrid>

                                <SimpleGrid cols={{ base: 1, xs: 2 }} spacing="md">
                                    <TextInput label="Last Name" placeholder="Cruz" required {...form.getInputProps('lastName')} styles={inputStyles} />
                                    <TextInput label="Suffix" placeholder="Jr., Sr., III" {...form.getInputProps('suffix')} styles={inputStyles} />
                                </SimpleGrid>

                                <TextInput label="Date of Birth" type="date" required leftSection={<IconCalendar size={16} />} {...form.getInputProps('birthday')} styles={inputStyles} />
                                <TextInput label="Mobile / Viber Number" placeholder="09123456789" required leftSection={<IconPhone size={16} />} {...form.getInputProps('mobileNumber')} styles={inputStyles} />
                                <TextInput label="Email Address" placeholder="you@example.com" required leftSection={<IconMail size={16} />} {...form.getInputProps('email')} styles={inputStyles} />

                                <Box>
                                    <PasswordInput label="Create Password" placeholder="Min. 6 characters" required leftSection={<IconLock size={16} />} {...form.getInputProps('password')} styles={inputStyles} />
                                    {form.values.password && (
                                        <Progress value={passwordStrength} color={getStrengthColor(passwordStrength)} size="xs" mt="xs" radius="xl" />
                                    )}
                                </Box>

                                <Checkbox
                                    label={
                                        <Text size="sm" c="#64748b">
                                            I agree to the <Anchor c="blue" href="#">Privacy Policy</Anchor> and <Anchor c="blue" href="#">Terms of Service</Anchor>
                                        </Text>
                                    }
                                    {...form.getInputProps('agreeToTerms', { type: 'checkbox' })}
                                />

                                <Button
                                    type="submit"
                                    size="lg"
                                    radius="xl"
                                    loading={loading}
                                    rightSection={<IconArrowRight size={20} />}
                                    fullWidth
                                    mt="md"
                                    style={{ background: '#2563EB' }}
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
