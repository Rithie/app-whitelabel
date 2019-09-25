import React from 'react';
import {SafeAreaView} from 'react-native';
import '~/config/ReactotronConfig';
import {RootStore} from '~/store/RootStore';
import {onPatch} from 'mobx-state-tree';
import Routes from '~/routes';

import {Provider} from 'mobx-react';

class App extends React.Component {
  state = {
    isLoadingComplete: false,
  };

  constructor(props) {
    super(props);
    this.rootStore = RootStore.create({});
  }

  render() {
    return (
      <Provider rootStore={this.rootStore}>
        <Routes />
      </Provider>
    );
  }
}
export default App;

// Patch listener will be invoked whenever the model or any of its descendants is mutated
// onPatch(todostore, patch => {
//   console.log('PATCH', patch);
// });

// makeInspectable(todostore);

// import React from 'react';
// import { Text, View, SafeAreaView } from 'react-native';
// import modules from './modules';
// const styles = require('./theme')('App');

// // import styles from './theme/solarized-light/App';
// export default () => (
//   <SafeAreaView style={styles.container}>
//     <Text style={styles.title}>
//       White-Label App
//     </Text>
//     <View>
//       {modules.map(({ name, Component }) =>
//           <Component key={name} />
//       )}
//     </View>
//   </SafeAreaView>
// );
