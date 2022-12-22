import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from '@chakra-ui/react';
import { Flex, Center } from '@chakra-ui/react';
import LenderCard from './components/LenderCard';
import theme from './customTheme';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ChakraProvider theme={theme}>
    <Flex width={"100vw"} height={"70vh"} alignContent={"center"} justifyContent={"center"}>
      <Center>
          <LenderCard 
            badge = {{
              text: 'Good Fit',
              color: 'default'
            }}
            lender= {{
              name: 'Revenue Based Financing',
              sponsor: 'Lendistry',
              location: 'Location',
              fundedDays: 12,
              rangeFirstAmount: '10,000',
              rangeLastAmount: '1,000,000',
              about: 'Fill with Lorem ipsum dhfe ndwufiu  fheh u2en i19h ueu2 0 he ns  asabsqh sw whhdi dw ppwd euy4h  dbdjq jeeoi nd.',
              benefits: [
                "Lender Benefit",
                "Lender Benefit",
                "Lender Benefit"
              ]
            }}
            variant={{ base: 'bagsNormal', lg: 'bagsDesktop' }}
          />
      </Center>
    </Flex>
  </ChakraProvider>
);

reportWebVitals();
