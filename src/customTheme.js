import { defineStyleConfig, extendTheme } from '@chakra-ui/react';

const Button = defineStyleConfig({
  baseStyle: {
    fontWeight: 'bold',
    borderRadius: '6px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '10px 12px',
    gap: '8px',
    position: 'absolute',
    width: '130px',
    height: '32px',
    right: '33px',
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