import { extendTheme, type ThemeConfig } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const config: ThemeConfig = {
    initialColorMode: 'dark',
    useSystemColorMode: false,
}

const colors = {
    gruvbox: {
        dark: {
            bg: '#1d2021', // Hard dark
            surface: '#282828',
            fg: '#ebdbb2',
            primary: '#d79921', // Muted gold
            secondary: '#83a598',
            accent: '#d3869b',
        },
        light: {
            bg: '#fbf1c7',
            surface: '#f2e5bc',
            fg: '#3c3836',
            primary: '#d65d0e',
            secondary: '#458588',
            accent: '#b16286',
        },
    },
}

const theme = extendTheme({
    config,
    colors,
    styles: {
        global: (props: any) => ({
            body: {
                bg: mode('gruvbox.light.bg', 'gruvbox.dark.bg')(props),
                color: mode('gruvbox.light.fg', 'gruvbox.dark.fg')(props),
            },
        }),
    },
    fonts: {
        heading: 'var(--font-geist-sans)',
        body: 'var(--font-geist-sans)',
    },
})

export default theme
