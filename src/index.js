import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from '@chakra-ui/react';
import { Flex, Center, Box } from '@chakra-ui/react';
import LenderCard from './components/LenderCard';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider>
    <Flex width={"100vw"} height={"70vh"} alignContent={"center"} justifyContent={"center"}>
      <Center>
          <LenderCard 
            lenderBadgeText="Good Fit"
            lenderBadge="default"
            lenderTitle="Revenue Based Financing"
            lenderSponsor="Lendistry"
            lenderLocation="Location"
            lenderFundedDaysInformation="12"
            lenderRangeFirstAmount="10,000"
            lenderRangeLastAmount="1,000,000"
            lenderAbout="Fill with Lorem ipsum dhfe ndwufiu  fheh u2en i19h ueu2 0 he ns  asabsqh sw whhdi dw ppwd euy4h  dbdjq jeeoi nd."
            lenderFirstBenefit="Lender Benefit"
            lenderSecondBenefit="Lender Benefit"
            lenderThirdBenefit="Lender Benefit"
            variant={{ base: 'bagsNormal', lg: 'bagsDesktop' }}
          />
      </Center>
    </Flex>
  </ChakraProvider>
);

reportWebVitals();
