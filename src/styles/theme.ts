import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
    colors: {
        gray: {
            "900": "#181B23",
            "500": "#616480",
            "400": "#47585B",
            "300": "#DADADA",
            "200": "#F5F8FA",
            "50": "#EEEEF2",
        },
        yellow: {
            "500": "#FFBA08"
        }
    },
    fonts: {
        headings: 'Poppins',
        body: 'Poppins',
    },
    styles: {
        global: {
            body: {
                bg: 'gray.200',
                color: 'gray.400'
            }
        }
    }
})
