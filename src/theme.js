import { createTheme } from '@mantine/core';

// MZ Style Theme - Dark mode with neon accents
export const theme = createTheme({
    // Color scheme
    primaryColor: 'violet',
    primaryShade: { light: 6, dark: 5 },

    // Custom colors
    colors: {
        dark: [
            '#C1C2C5',
            '#A6A7AB',
            '#909296',
            '#5c5f66',
            '#373A40',
            '#2C2E33',
            '#25262b',
            '#1A1B1E',
            '#141517',
            '#0f0f23',
        ],
        violet: [
            '#f3e8ff',
            '#e9d5ff',
            '#d8b4fe',
            '#c084fc',
            '#a855f7',
            '#8b5cf6',
            '#7c3aed',
            '#6d28d9',
            '#5b21b6',
            '#4c1d95',
        ],
        cyan: [
            '#ecfeff',
            '#cffafe',
            '#a5f3fc',
            '#67e8f9',
            '#22d3ee',
            '#06b6d4',
            '#0891b2',
            '#0e7490',
            '#155e75',
            '#164e63',
        ],
        pink: [
            '#fdf2f8',
            '#fce7f3',
            '#fbcfe8',
            '#f9a8d4',
            '#f472b6',
            '#ec4899',
            '#db2777',
            '#be185d',
            '#9d174d',
            '#831843',
        ],
    },

    // Typography
    fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif',
    fontFamilyMonospace: 'Monaco, Courier, monospace',
    headings: {
        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif',
        fontWeight: '800',
    },

    // Radius - MZ style uses large radius
    radius: {
        xs: '4px',
        sm: '8px',
        md: '12px',
        lg: '16px',
        xl: '24px',
    },
    defaultRadius: 'lg',

    // Shadows with color tints
    shadows: {
        xs: '0 1px 2px rgba(0, 0, 0, 0.3)',
        sm: '0 2px 4px rgba(0, 0, 0, 0.3)',
        md: '0 4px 8px rgba(0, 0, 0, 0.3)',
        lg: '0 8px 16px rgba(0, 0, 0, 0.3)',
        xl: '0 16px 32px rgba(0, 0, 0, 0.3)',
    },

    // Components customization
    components: {
        Button: {
            defaultProps: {
                radius: 'xl',
            },
            styles: {
                root: {
                    fontWeight: 600,
                    transition: 'all 0.2s ease',
                },
            },
        },
        TextInput: {
            defaultProps: {
                radius: 'lg',
            },
        },
        PasswordInput: {
            defaultProps: {
                radius: 'lg',
            },
        },
        Paper: {
            defaultProps: {
                radius: 'lg',
            },
        },
        Card: {
            defaultProps: {
                radius: 'lg',
            },
        },
    },

    // Other theme properties
    other: {
        glassBackground: 'rgba(255, 255, 255, 0.05)',
        glassBorder: 'rgba(255, 255, 255, 0.1)',
        glassBlur: '16px',
        gradientPrimary: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)',
        gradientSecondary: 'linear-gradient(135deg, #06b6d4 0%, #8b5cf6 100%)',
        gradientBackground: 'linear-gradient(135deg, #0f0f23 0%, #1a1a3e 50%, #0f0f23 100%)',
    },
});
