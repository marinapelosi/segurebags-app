import { Box,useStyleConfig, defineStyleConfig, extendTheme } from '@chakra-ui/react';

const ButtonCustom = defineStyleConfig({
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
    top: '98px',
  },
  variants: {
    bagsNormal: {
        background: '#020202',
        borderRadius: '6px'
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
    ButtonCustom,
  },
})

export const Button = (props) => {
  const { variant, ...rest } = props

  const styles = useStyleConfig('ButtomCustom', { variant })

  return <Box __css={styles} {...rest} />
}

export default Button;