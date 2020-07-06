import React from 'react';
import { StatusBar } from 'react-native';

import Planets from './src/pages/Planets';

export default function App() {
  return (
    <>
      <StatusBar barStyle='light-content' backgroundColor="#000" />
      <Planets /> 
    </>   
  );
}
