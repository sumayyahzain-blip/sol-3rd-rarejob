import {
    Box,
    Container,
    Title,
    Text,
    Timeline,
    ThemeIcon,
    Paper
} from '@mantine/core';
import {
    IconClipboardCheck,
    IconDeviceLaptop,
    IconPresentation,
    IconSchool,
    IconRocket
} from '@tabler/icons-react';

const steps = [
    { icon: IconClipboardCheck, title: 'Application', description: 'Fill out and submit your tutor application form online.' },
    { icon: IconDeviceLaptop, title: 'Assessment', description: 'Pass the English Test and Technical Requirements check.' },
    { icon: IconPresentation, title: 'Demo Lesson', description: 'Attend a live demo training session.' },
    { icon: IconSchool, title: 'Onboarding', description: 'Complete orientation and initial training.' },
    { icon: IconRocket, title: 'Start Teaching', description: 'Activate your account and begin your journey!' },
];

export function ApplicationMap() {
    return (
        <Box py={80} style={{ background: '#f8fafc' }}>
            <Container size="lg">
                <Title order={2} ta="center" mb={50} style={{ fontSize: '2rem', fontWeight: 700, color: '#0f172a' }}>
                    Application <Text span style={{ color: '#2563EB' }}>Process</Text>
                </Title>

                <Box maw={600} mx="auto">
                    <Timeline active={1} bulletSize={40} lineWidth={2} color="blue">
                        {steps.map((step) => (
                            <Timeline.Item
                                key={step.title}
                                bullet={
                                    <ThemeIcon size={40} radius="xl" style={{ background: '#2563EB' }}>
                                        <step.icon size={20} color="white" />
                                    </ThemeIcon>
                                }
                                title={<Text c="#0f172a" fw={600} size="lg">{step.title}</Text>}
                            >
                                <Paper p="md" radius="sm" mt="xs" style={{ background: '#ffffff', border: '1px solid #e2e8f0' }}>
                                    <Text c="#64748b" size="sm">{step.description}</Text>
                                </Paper>
                            </Timeline.Item>
                        ))}
                    </Timeline>
                </Box>
            </Container>
        </Box>
    );
}
