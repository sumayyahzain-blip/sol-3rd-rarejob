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
    {
        icon: IconClipboardCheck,
        title: 'Application',
        description: 'Fill out and submit your tutor application form online.',
        color: 'pink',
    },
    {
        icon: IconDeviceLaptop,
        title: 'Assessment',
        description: 'Pass the 30-item English Test and complete the Technical Requirements check.',
        color: 'violet',
    },
    {
        icon: IconPresentation,
        title: 'Demo Lesson',
        description: 'Attend a live demo training session and plot your actual demo schedule.',
        color: 'cyan',
    },
    {
        icon: IconSchool,
        title: 'Onboarding',
        description: 'Attend the New Hire Orientation and complete initial training.',
        color: 'pink',
    },
    {
        icon: IconRocket,
        title: 'Tutor Release',
        description: 'Submit requirements, activate your account, and start your teaching journey!',
        color: 'violet',
    },
];

export function ApplicationMap() {
    return (
        <Box py={100} style={{ background: '#0f0f23' }}>
            <Container size="lg">
                <Title
                    order={2}
                    ta="center"
                    mb={60}
                    c="white"
                    style={{
                        fontSize: '2.5rem',
                        textShadow: '0 0 20px rgba(139, 92, 246, 0.5)'
                    }}
                >
                    Weblio Tutor <Text span className="gradient-text">Application Map</Text>
                </Title>

                <Box maw={800} mx="auto">
                    <Timeline active={1} bulletSize={40} lineWidth={2}>
                        {steps.map((step, index) => (
                            <Timeline.Item
                                key={step.title}
                                bullet={
                                    <ThemeIcon
                                        size={40}
                                        radius="xl"
                                        variant="gradient"
                                        gradient={{ from: step.color, to: 'violet', deg: 45 }}
                                    >
                                        <step.icon size={20} />
                                    </ThemeIcon>
                                }
                                title={
                                    <Text c="white" fw={700} size="lg">
                                        {step.title}
                                    </Text>
                                }
                            >
                                <Paper
                                    p="md"
                                    radius="md"
                                    className="glass"
                                    mt="xs"
                                    style={{
                                        background: 'rgba(255, 255, 255, 0.05)',
                                        border: '1px solid rgba(255, 255, 255, 0.1)',
                                    }}
                                >
                                    <Text c="gray.3" size="sm">
                                        {step.description}
                                    </Text>
                                </Paper>
                            </Timeline.Item>
                        ))}
                    </Timeline>
                </Box>
            </Container>
        </Box>
    );
}
