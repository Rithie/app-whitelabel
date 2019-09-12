// import React from 'react';

// import '~/config/ReactotronConfig';

// import Routes from '~/routes';

// const App = () => <Routes />;

// export default App;

import React from 'react';
import { Text, View, SafeAreaView } from 'react-native';
import modules from './modules';
const styles = require('./theme')('App');

// import styles from './theme/solarized-light/App';
export default () => (
  <SafeAreaView style={styles.container}>
    <Text style={styles.title}>
      White-Label App
    </Text>
    <View>
      {modules.map(({ name, Component }) =>
          <Component key={name} />
      )}
    </View>
  </SafeAreaView>
);