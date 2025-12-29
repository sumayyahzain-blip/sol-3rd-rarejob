import { useState } from 'react';
import {
    Box,
    Container,
    Title,
    Text,
    Accordion,
    Paper,
    Group,
    ThemeIcon,
    Stack,
} from '@mantine/core';
import {
    IconQuestionMark,
    IconCurrencyDollar,
    IconClock,
    IconDeviceDesktop,
    IconClipboardCheck,
    IconHeadset,
} from '@tabler/icons-react';

const faqData = [
    {
        icon: IconClipboardCheck,
        category: 'Application Process',
        questions: [
            {
                q: 'What are the requirements to become a RareJob tutor?',
                a: 'You need to be at least 18 years old, be computer literate, fluent in English (oral and written), have a stable internet connection (5 Mbps+), and a quiet workspace with good lighting. No prior teaching experience is required!'
            },
            {
                q: 'How long does the application process take?',
                a: 'The entire process typically takes 1-2 weeks, including application review, online assessment, demo lesson, and onboarding training.'
            },
            {
                q: 'Do I need teaching experience?',
                a: 'No! We welcome applicants with no prior teaching experience. We provide comprehensive training to help you become an effective online English tutor.'
            },
        ]
    },
    {
        icon: IconCurrencyDollar,
        category: 'Payment & Earnings',
        questions: [
            {
                q: 'How much can I earn as a RareJob tutor?',
                a: 'Earnings depend on your teaching hours, experience level, and performance ratings. You receive competitive hourly rates with opportunities for bonuses and rate increases based on performance.'
            },
            {
                q: 'How often do I get paid?',
                a: 'Payments are processed bi-weekly (every two weeks). You can track your earnings through our tutor dashboard.'
            },
        ]
    },
    {
        icon: IconClock,
        category: 'Schedule & Flexibility',
        questions: [
            {
                q: 'What are the peak teaching hours?',
                a: 'Peak hours are 8:00 AM to 5:00 PM Philippine Standard Time (PST). However, you can teach 24/7 based on student availability and your preference.'
            },
            {
                q: 'Can I choose my own schedule?',
                a: 'Yes! You have full control over your teaching schedule. Simply update your availability in our system, and students can book lessons during your open slots.'
            },
            {
                q: 'Is there a minimum number of teaching hours?',
                a: 'There may be minimum weekly teaching hour requirements to maintain active status. Details will be provided during onboarding.'
            },
        ]
    },
    {
        icon: IconDeviceDesktop,
        category: 'Technical Requirements',
        questions: [
            {
                q: 'What equipment do I need?',
                a: 'You need a PC/Laptop (Core i3+, 6GB RAM+), noise-cancelling headset with microphone, stable internet (5 Mbps download), webcam (720p or higher), and a quiet room with plain background.'
            },
            {
                q: 'What internet speed is required?',
                a: 'A minimum of 5 Mbps download speed with a ping of less than 30ms is required to ensure smooth video lessons with students.'
            },
        ]
    },
    {
        icon: IconHeadset,
        category: 'Support',
        questions: [
            {
                q: 'What support is available for tutors?',
                a: 'We provide 24/7 technical support, a dedicated tutor success team, regular training sessions, and access to our AI-powered FAQ chatbot for quick answers.'
            },
            {
                q: 'Will I receive training?',
                a: 'Yes! All new tutors go through comprehensive onboarding training, including platform orientation, lesson delivery best practices, and ongoing professional development.'
            },
        ]
    },
];

export function FAQ() {
    return (
        <Box id="faq" py={80} style={{ background: '#f8fafc' }}>
            <Container size="lg">
                <Stack align="center" gap="lg" mb={50}>
                    <ThemeIcon size={60} radius="xl" style={{ background: '#dbeafe' }}>
                        <IconQuestionMark size={30} color="#2563EB" />
                    </ThemeIcon>
                    <Title order={2} ta="center" style={{ fontSize: '2rem', fontWeight: 700, color: '#0f172a' }}>
                        Frequently Asked <Text span style={{ color: '#2563EB' }}>Questions</Text>
                    </Title>
                    <Text size="lg" c="#64748b" ta="center" maw={550}>
                        Find quick answers to common questions about becoming a RareJob tutor.
                    </Text>
                </Stack>

                <Stack gap="xl">
                    {faqData.map((category) => (
                        <Paper key={category.category} p="lg" radius="md" style={{ background: '#ffffff', border: '1px solid #e2e8f0' }}>
                            <Group gap="sm" mb="md">
                                <ThemeIcon size={36} radius="md" style={{ background: '#dbeafe' }}>
                                    <category.icon size={20} color="#2563EB" />
                                </ThemeIcon>
                                <Text fw={600} size="lg" c="#0f172a">{category.category}</Text>
                            </Group>

                            <Accordion variant="separated" radius="md">
                                {category.questions.map((item, index) => (
                                    <Accordion.Item key={index} value={`${category.category}-${index}`} style={{ background: '#f8fafc', border: '1px solid #e2e8f0' }}>
                                        <Accordion.Control>
                                            <Text fw={500} c="#0f172a">{item.q}</Text>
                                        </Accordion.Control>
                                        <Accordion.Panel>
                                            <Text size="sm" c="#64748b" style={{ lineHeight: 1.7 }}>
                                                {item.a}
                                            </Text>
                                        </Accordion.Panel>
                                    </Accordion.Item>
                                ))}
                            </Accordion>
                        </Paper>
                    ))}
                </Stack>
            </Container>
        </Box>
    );
}
