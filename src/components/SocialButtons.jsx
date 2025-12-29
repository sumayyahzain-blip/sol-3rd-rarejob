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
    {
        icon: IconBrandFacebook,
        label: 'Facebook',
        href: 'https://facebook.com/rarejob',
        gradient: { from: '#1877F2', to: '#00C6FF' }
    },
    {
        icon: IconBrandInstagram,
        label: 'Instagram',
        href: 'https://instagram.com/rarejob',
        gradient: { from: '#833AB4', to: '#FD1D1D' }
    },
    {
        icon: IconBrandTwitter,
        label: 'Twitter / X',
        href: 'https://twitter.com/rarejob',
        gradient: { from: '#1DA1F2', to: '#0077B5' }
    },
    {
        icon: IconBrandLinkedin,
        label: 'LinkedIn',
        href: 'https://linkedin.com/company/rarejob',
        gradient: { from: '#0A66C2', to: '#00C6FF' }
    },
    {
        icon: IconBrandTiktok,
        label: 'TikTok',
        href: 'https://tiktok.com/@rarejob',
        gradient: { from: '#EE1D52', to: '#69C9D0' }
    },
];

export function SocialButtons() {
    return (
        <Box
            style={{
                position: 'fixed',
                bottom: 100, // Position above the chatbot
                right: 30,
                zIndex: 999,
            }}
        >
            <Stack
                gap={8}
                align="center"
                style={{
                    background: 'rgba(15, 15, 35, 0.8)',
                    backdropFilter: 'blur(16px)',
                    padding: '12px 8px',
                    borderRadius: 30,
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                }}
            >
                {socialLinks.map((social, index) => (
                    <Tooltip
                        key={social.label}
                        label={social.label}
                        position="left"
                        withArrow
                    >
                        <ActionIcon
                            component="a"
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            size="lg"
                            radius="xl"
                            variant="subtle"
                            color="gray"
                            style={{
                                transition: 'all 0.3s ease',
                                animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both`,
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.background = `linear-gradient(135deg, ${social.gradient.from}, ${social.gradient.to})`;
                                e.currentTarget.style.transform = 'scale(1.15)';
                                e.currentTarget.style.boxShadow = `0 4px 20px ${social.gradient.from}50`;
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.background = 'transparent';
                                e.currentTarget.style.transform = 'scale(1)';
                                e.currentTarget.style.boxShadow = 'none';
                            }}
                        >
                            <social.icon size={20} />
                        </ActionIcon>
                    </Tooltip>
                ))}
            </Stack>

            {/* Animation styles */}
            <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
        </Box>
    );
}
