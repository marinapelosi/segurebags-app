import { styles } from './styles';
import {
    Box,
    Flex,
    Stack,
    Badge,
    Text,
    Divider,
    Button,
  } from '@chakra-ui/react';
import { MapPinIcon } from '../OwnIcons/MapPinIcon';
  
export default function LenderCard(props) {
    const { badge, lender, variant } = props;

    return (
      <Box className="wrapper">
        <Box className="header" style={styles.cards.header}>
          <Badge style={{...styles.badges.generic, ...styles.badges[badge.color]}}>
            {badge.text}
          </Badge>
          <Text 
            className="mainTitle" 
            style={{ ...styles.texts.colors.black, ...styles.texts.mainTitle}}
            fontSize={{ sm: '16px', md: '20px', lg: '24px' }}
          >
            {lender.name}
          </Text>
          <Stack  align={'left'}>
            <Text 
              className="sponsor" 
              style={{ ...styles.texts.colors.black, ...styles.texts.subtitle}}
              >
              By {lender.sponsor}
            </Text>
            <Text 
              className="location" 
              style={{ ...styles.texts.colors.black, ...styles.texts.subtitle}}
              >
              <MapPinIcon /> {lender.location}
            </Text>
            <Text 
              className="fundedInfo" 
              style={{ ...styles.texts.colors.black, ...styles.texts.fundedText}}
              >
               Get Funded in <b>{lender.fundedDays} days.</b>
            </Text>
          </Stack>
          <Divider style={styles.divider}/>
          <Text className="rangeAmount" style={{ ...styles.texts.colors.purple, ...styles.texts.range.amount}}>
            ${lender.rangeFirstAmount} - ${lender.rangeLastAmount}
          </Text>
        </Box>
        <Box className="footer" style={styles.cards.footer}>
        <Stack direction={'row'} align={'center'} justify={'space-between'}>
          <Text className="aboutTitle" style={{ ...styles.texts.colors.black, ...styles.texts.about.title}}>
            About the Lender
          </Text>
          <Button variant={variant}>Learn More</Button>
        </Stack>          
        <Text className="aboutText" style={styles.texts.about.description}>
          {lender.about}
        </Text>
        <Stack className="benefits" align={'left'}>
          {
            lender.benefits.map((benefit, index) =>
              <Text key={index} style={styles.cards.benefitCard}>
                {benefit}
              </Text>
            )
          }
        </Stack>
        </Box>
      </Box>
        // <Box style={styles.cards.wrapper}>
        //   <Flex justify={'right'} mt={-4} ml={6} mr={30}>
        //     <Badge justifyContent={'center'} style={{...styles.badges.generic, ...styles.badges[badge.color]}}>
        //       {badge.text}
        //     </Badge>
        //   </Flex>
  
        //   <Box p={6}>
        //     <Stack  align={'left'}>
        //       <Text style={styles.texts.mainTitle} fontSize={{ sm: '16px', md: '20px', lg: '24px' }}>
        //         {lender.name}
        //       </Text>
        //     </Stack>
        //     <Stack  align={'left'} mt={3}>
        //       <Text style={styles.texts.firstSubtitleText}>
        //         By {lender.sponsor}
        //       </Text>
        //     </Stack>
        //     <Stack  align={'left'} mt={3}>
        //       <Text style={styles.texts.firstSubtitleText}>
        //       <MapPinIcon /> &nbsp;{lender.location}
        //       </Text>
        //     </Stack>
        //     <Stack  align={'left'} mt={3}>
        //       <Text style={styles.texts.secondSubtitleText}>
        //       Get Funded in <b>{lender.fundedDays} days.</b>
        //       </Text>
        //     </Stack>
        //     <Divider style={styles.divider}/>
        //     <Stack  align={'left'}>
        //       <Text style={styles.texts.rangeAmountText} mt={1}>
        //       ${lender.rangeFirstAmount} - ${lender.rangeLastAmount}
        //       </Text>
        //     </Stack>
        //   </Box>
        //   <Box style={styles.cards.secondCard}>
        //     <Stack align={'left'}>
        //       <Stack direction={'row'} spacing={6}>
        //         <Stack spacing={0} align={'left'}>
        //           <Text style={styles.texts.secondTitle} mt={1}>
        //             About the Lender
        //           </Text>
        //         </Stack>
        //         <Stack spacing={0} align={'right'}>
        //           <Button variant={variant}>
        //               Learn More
        //           </Button>
        //         </Stack>
        //       </Stack>
        //     </Stack>
        //     <Stack  align={'left'}>
        //       <Text style={styles.texts.regularText} mt={8}>
        //         {lender.about}
        //       </Text>
        //     </Stack>
        //     {
        //       lender.benefits.map((benefit, index) =>
        //         <Text key={index} style={styles.cards.benefitCard} mt="20px">
        //           {benefit}
        //         </Text>
        //       )
        //     }
        //   </Box>
        // </Box>
    );
  }