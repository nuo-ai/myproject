// pages/index.js

import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import RentalForm from '../components/RentalForm';

const HomePage = () => {
  return (
    <ChakraProvider>
      <div>
        <h1>Rental Application Form</h1>
        <RentalForm />
      </div>
    </ChakraProvider>
  );
};

export default HomePage;
