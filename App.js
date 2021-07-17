import React from 'react';
import {ScrollView} from 'react-native';

import Header from './src/components/Header';
import Table from './src/components/Table';

const App = () => {
  return (
    <ScrollView>
      <Header />
      <Table />
    </ScrollView>
  );
};
export default App;
