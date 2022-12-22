export const styles = {
    cards:{
        header: {
            boxSizing: 'border-box',
            position: 'relative',
            width: '432px',
            padding: '18px 25px 16px',
            background: '#FFFFFF',
            border: '2.25px solid #868686',
            borderBottom: '3px solid #868686',
            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
            borderRadius: '12px',
            zIndex: 'auto',
        },
        footer: {
          boxSizing: 'border-box',
          position: 'relative',
          width: '432px',
          marginTop: '-32px',
          padding: '105px 25px 44px',
          paddingTop: '70px',
          background: '#FFFFFF',
          border: '2.25px solid #C8C6C6',
          borderRadius: '12px',
          zIndex: -1
        },
        benefitCard: {
          width: '311px',
          height: '27px',
          marginTop: '20px',
          background: '#ECEAF2',
          borderRadius: '24px',
          color: '#7B5BE4',
          fontSize: '16px',
          fontWeight: 700,
          paddingTop: 1,
          paddingLeft: 20
        }
    },
    divider: {
      width: 'calc(100% + 50px)',
      marginTop: '23px',
      marginLeft: '-25px',
      borderBottom: '2px solid #868686',
      marginBottom: '15px'
    },
    badges:{
      generic: {
        position: 'absolute',
        padding: '0 32px',
        right: '25px',
        top: '-15px',
        borderRadius: '6px',
        textTransform: 'none',
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: '14px',
        lineHeight: '24px',
        display: 'block',
      },
      default:{
        background: '#7B5BE4',
        color: '#FFFFFF'
      },
      danger:{
        background: 'tomato',
        color: '#FFFFFF'
      },
    },
    texts: {
        colors: {
            black: { 
                color: '#000000',
            },
            purple: {
                color: '#7B5BE4',
            }
        },
        mainTitle: {
            fontWeight: 700,
            lineHeight: '33px',
            marginBottom: '7px',
        },
        subtitle: {
          fontWeight: 600,
          fontSize: '16px',
          lineHeight: '22px',
          color: '#000000'
        },
        fundedText: {
          fontWeight: 600,
          fontSize: '14px',
          lineHeight: '19.07px',
          color: '#000000'
        },
        range:{
            amount: {
                fontWeight: 700,
                fontSize: '22px',
                lineHeight: '30px',
            }
        },
        about: {
            title: {
                fontWeight: 700,
                lineHeight: '20px',
                fontSize: '20px'
            },
            description: {
                fontWeight: 400,
                fontSize: '16px',
                lineHeight: '22px',
                color: '#000000', 
                marginTop: '22px',
                marginBottom: '20px',
            }
        },
    }
}