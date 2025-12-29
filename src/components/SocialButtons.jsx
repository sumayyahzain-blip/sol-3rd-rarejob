import {
    Box,
    Stack,
    ActionIcon,
    Tooltip
} from '@mantine/core';
import {
    IconBrandFacebook,
    IconBrandInstagram,
    IconBrandTwitter,
    IconBrandLinkedin,
    IconBrandTiktok
} from '@tabler/icons-react';

const socialLinks = [
    { icon: IconBrandFacebook, label: 'Facebook', href: 'https://facebook.com/rarejob', color: '#1877F2' },
    { icon: IconBrandInstagram, label: 'Instagram', href: 'https://instagram.com/rarejob', color: '#E4405F' },
    { icon: IconBrandTwitter, label: 'Twitter / X', href: 'https://twitter.com/rarejob', color: '#1DA1F2' },
    { icon: IconBrandLinkedin, label: 'LinkedIn', href: 'https://linkedin.com/company/rarejob', color: '#0A66C2' },
    { icon: IconBrandTiktok, label: 'TikTok', href: 'https://tiktok.com/@rarejob', color: '#000000' },
];

export function SocialButtons() {
    return (
        <Box style={{ position: 'fixed', bottom: 100, right: 30, zIndex: 999 }}>
            <Stack
                gap={6}
                align="center"
                style={{
                    background: '#ffffff',
                    padding: '10px 6px',
                    borderRadius: 24,
                    border: '1px solid #e2e8f0',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                }}
            >
                {socialLinks.map((social) => (
                    <Tooltip key={social.label} label={social.label} position="left" withArrow>
                        <ActionIcon
                            component="a"
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            size="md"
                            radius="xl"
                            variant="subtle"
                            color="gray"
                            style={{ transition: 'all 0.2s ease' }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.background = social.color;
                                e.currentTarget.style.color = 'white';
                                e.currentTarget.style.transform = 'scale(1.1)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.background = 'transparent';
                                e.currentTarget.style.color = '';
                                e.currentTarget.style.transform = 'scale(1)';
                            }}
                        >
                            <social.icon size={18} />
                        </ActionIcon>
                    </Tooltip>
                ))}
            </Stack>
        </Box>
    );
}
