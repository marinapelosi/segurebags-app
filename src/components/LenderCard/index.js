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
    return (
        <Box style={styles.cards.wrapper}>
          <Flex justify={'right'} mt={-4} ml={6} mr={30}>
            <Badge justifyContent={'center'} style={{...styles.badges.generic, ...styles.badges[props.lenderBadge]}}>
              {props.lenderBadgeText}
            </Badge>
          </Flex>
  
          <Box p={6}>
            <Stack  align={'left'}>
              <Text style={styles.texts.mainTitle} fontSize={{ sm: '16px', md: '20px', lg: '24px' }}>
                {props.lenderTitle}
              </Text>
            </Stack>
            <Stack  align={'left'} mt={3}>
              <Text style={styles.texts.firstSubtitleText}>
                By {props.lenderSponsor}
              </Text>
            </Stack>
            <Stack  align={'left'} mt={3}>
              <Text style={styles.texts.firstSubtitleText}>
              <MapPinIcon /> &nbsp;{props.lenderLocation}
              </Text>
            </Stack>
            <Stack  align={'left'} mt={3}>
              <Text style={styles.texts.secondSubtitleText}>
              Get Funded in <b>{props.lenderFundedDaysInformation} days.</b>
              </Text>
            </Stack>
            <Divider style={styles.divider}/>
            <Stack  align={'left'}>
              <Text style={styles.texts.rangeAmountText} mt={1}>
              ${props.lenderRangeFirstAmount} - ${props.lenderRangeLastAmount}
              </Text>
            </Stack>
          </Box>
          <Box style={styles.cards.secondCard}>
            <Stack align={'left'}>
              <Stack direction={'row'} spacing={6}>
                <Stack spacing={0} align={'left'}>
                  <Text style={styles.texts.secondTitle} mt={1}>
                    About the Lender
                  </Text>
                </Stack>
                <Stack spacing={0} align={'right'}>
                  <Button variant={props.variant}>
                      Learn More
                  </Button>
                </Stack>
              </Stack>
            </Stack>
            <Stack  align={'left'}>
              <Text style={styles.texts.regularText} mt={8}>
                {props.lenderAbout}
              </Text>
            </Stack>
            
            <Text style={styles.cards.benefitCard}>
              {props.lenderFirstBenefit}
            </Text>
            <Text style={styles.cards.benefitCard} mt={10}>
              {props.lenderFirstBenefit}
            </Text>
            <Text style={styles.cards.benefitCard} mt={20}>
              {props.lenderFirstBenefit}
            </Text>
          </Box>
        </Box>
    );
  }