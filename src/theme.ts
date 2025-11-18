import { extendTheme, type ThemeConfig } from '@chakra-ui/react'

const config: ThemeConfig = {
    initialColorMode: 'dark',
    useSystemColorMode: false,
}

const colors = {
    gruvbox: {
        dark: {
            bg: '#282828',
            fg: '#ebdbb2',
            primary: '#fabd2f',
            secondary: '#83a598',
            accent: '#d3869b',
        },
        light: {
            bg: '#fbf1c7',
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
                bg: props.colorMode === 'dark' ? 'gruvbox.dark.bg' : 'gruvbox.light.bg',
                color: props.colorMode === 'dark' ? 'gruvbox.dark.fg' : 'gruvbox.light.fg',
            },
        }),
    },
})

export default theme
