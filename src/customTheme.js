import { defineStyleConfig, extendTheme } from '@chakra-ui/react';

const Button = defineStyleConfig({
  baseStyle: {
    fontWeight: 'bold',
    borderRadius: '6px',
    display: 'inline-block',
    fontSize: '16px',
    lineHeight: '20px',
    color: '#FFFFFF'
  },
  variants: {
    bagsNormal: {
        background: '#020202',
    },
    bagsDesktop: {
        background: 'blue',
    }
  },
  defaultProps: {
    size: 'md',
    variant: 'bagsNormal',
  },
});

const theme = extendTheme({
  components: {
    Button,
  },
})

export default theme;