export const styles = {
    cards:{
        wrapper: {
            boxSizing: 'border-box',
            position: 'relative',
            width: '432px',
            height: '229px',
            background: '#FFFFFF',
            border: '2.25px solid #868686',
            borderBottom: '3px solid #868686',
            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
            borderRadius: '12px',
            marginLeft: '20px',
            zIndex: 'auto',
        },
        secondCard: {
          boxSizing: 'border-box',
          position: 'relative',
          width: '432px',
          height: '380px', 
          left: '-2px',
          top: '10px',
          padding: '25px',
          paddingTop: '70px',
          background: '#FFFFFF',
          border: '2.25px solid #C8C6C6',
          borderRadius: '12px',
          zIndex: -1
        },
        benefitCard: {
          position: 'absolute',
          width: '311px',
          height: '27px',
          left: '25px',
          top: '220px',
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
      position: 'absolute',
      width: '430px',
      left: '0px',
      top: '178px',
      borderTop: '3px solid #868686',
      borderRadius: '0px 0px 12px 12px'
    },
    badges:{
      generic: {
        width: '121px',
        height: '24px',
        borderRadius: '6px',
        justifyContent: 'center',
        alignItems: 'center',
        textTransform: 'none',
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: '14px',
        lineHeight: '20px',
        display: 'flex',
        flex: 'none',
        order: 0,
        flexGrow: 0
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
        mainTitle: {
            left: '25px',
            top: '18px',
            fontStyle: 'normal',
            fontWeight: 700,
            lineHeight: '33px',
            color: '#000000'
        },
        secondTitle: {
          left: '25px',
          top: '105px',
          fontStyle: 'normal',
          fontWeight: 700,
          lineHeight: '20px',
          color: '#000000',
          fontSize: '20px'
      },
        firstSubtitleText: {
          fontStyle: 'normal',
          fontWeight: 600,
          fontSize: '16px',
          lineHeight: '22px',
          color: '#000000'
        },
        secondSubtitleText: {
          fontStyle: 'normal',
          fontWeight: 600,
          fontSize: '14px',
          lineHeight: '19.07px',
          color: '#000000'
        },
        rangeAmountText: {
          position: 'absolute',
          width: '383px',
          height: '28px',
          left: '25px',
          top: '183px',
          fontStyle: 'normal',
          fontWeight: 700,
          fontSize: '22px',
          lineHeight: '30px',
          color: '#7B5BE4'
        },
        regularText:{
          position: 'absolute',
          fontStyle: 'normal',
          fontWeight: 400,
          fontSize: '16px',
          lineHeight: '22px',
          color: '#000000'
        },
    }
}