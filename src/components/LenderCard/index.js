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
        <Box style={styles.cards.wrapper}>
          <Flex justify={'right'} mt={-4} ml={6} mr={30}>
            <Badge justifyContent={'center'} style={{...styles.badges.generic, ...styles.badges[badge.color]}}>
              {badge.text}
            </Badge>
          </Flex>
  
          <Box p={6}>
            <Stack  align={'left'}>
              <Text style={styles.texts.mainTitle} fontSize={{ sm: '16px', md: '20px', lg: '24px' }}>
                {lender.name}
              </Text>
            </Stack>
            <Stack  align={'left'} mt={3}>
              <Text style={styles.texts.firstSubtitleText}>
                By {lender.sponsor}
              </Text>
            </Stack>
            <Stack  align={'left'} mt={3}>
              <Text style={styles.texts.firstSubtitleText}>
              <MapPinIcon /> &nbsp;{lender.location}
              </Text>
            </Stack>
            <Stack  align={'left'} mt={3}>
              <Text style={styles.texts.secondSubtitleText}>
              Get Funded in <b>{lender.fundedDays} days.</b>
              </Text>
            </Stack>
            <Divider style={styles.divider}/>
            <Stack  align={'left'}>
              <Text style={styles.texts.rangeAmountText} mt={1}>
              ${lender.rangeFirstAmount} - ${lender.rangeLastAmount}
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
                  <Button variant={variant}>
                      Learn More
                  </Button>
                </Stack>
              </Stack>
            </Stack>
            <Stack  align={'left'}>
              <Text style={styles.texts.regularText} mt={8}>
                {lender.about}
              </Text>
            </Stack>
            {
              lender.benefits.map((benefit, index) =>
                <Text key={index} style={styles.cards.benefitCard} mt={index*10}>
                  {benefit}
                </Text>
              )
            }
          </Box>
        </Box>
    );
  }