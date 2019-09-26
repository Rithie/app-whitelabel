import React, {Component} from 'react';

import {
  View,
  Image,
  Text,
  Platform,
  StatusBar,
  StyleSheet,
  Dimensions,
  ScrollView,
  Animated,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import User from './components/User';

import {SearchInput} from './styles';
import {from} from 'rxjs';
const {width, height} = Dimensions.get('window');
// console.log('h', height);
// console.log('w', width);
const scrollRangeForAnimation = 100;

const onScrollEndSnapToEdge = event => {
  const y = event.nativeEvent.contentOffset.y;
  if (0 < y && y < scrollRangeForAnimation / 2) {
    if (_scrollView) {
      _scrollView.scrollTo({y: 0});
    }
  } else if (scrollRangeForAnimation / 2 <= y && y < scrollRangeForAnimation) {
    if (_scrollView) {
      _scrollView.scrollTo({y: scrollRangeForAnimation});
    }
  }
};

export default class App extends Component {
  state = {
    scrollOffset: new Animated.Value(0),
    textOpacity: new Animated.Value(0),
    showInput: false,
    x_start: 10,
    y_start: 10,
    image_width: 20,
    userSelected: null,
    userInfoVisible: false,
    users: [
      {
        id: 1,
        name: 'Diego Fernandes',
        description: 'Head de programação!',
        avatar: 'https://avatars0.githubusercontent.com/u/2254731?s=460&v=4',
        thumbnail:
          'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=400&q=80',
        likes: 200,
        color: '#57BCBC',
      },
      {
        id: 2,
        name: 'Robson Marques',
        description: 'Head de empreendedorismo!',
        avatar: 'https://avatars2.githubusercontent.com/u/861751?s=460&v=4',
        thumbnail:
          'https://images.unsplash.com/photo-1490633874781-1c63cc424610?auto=format&fit=crop&w=400&q=80',
        likes: 350,
        color: '#E75A63',
      },
      {
        id: 3,
        name: 'Cleiton Souza',
        description: 'Head de mindset!',
        avatar: 'https://avatars0.githubusercontent.com/u/4669899?s=460&v=4',
        thumbnail:
          'https://images.unsplash.com/photo-1506440905961-0ab11f2ed5bc?auto=format&fit=crop&w=400&q=80',
        likes: 250,
        color: '#2E93E5',
      },
      {
        id: 4,
        name: 'Robson Marques',
        description: 'Head de empreendedorismo!',
        avatar: 'https://avatars2.githubusercontent.com/u/861751?s=460&v=4',
        thumbnail:
          'https://images.unsplash.com/photo-1490633874781-1c63cc424610?auto=format&fit=crop&w=400&q=80',
        likes: 350,
        color: '#E75A63',
      },
    ],
  };

  componentDidMount() {
    Animated.timing(this.state.textOpacity, {
      toValue: 1,
      duration: 250,
    });
  }

  onLayout = e => {
    this.setState(
      {
        image_width: e.nativeEvent.layout.width,
        image_height: e.nativeEvent.layout.height,
        x_start: e.nativeEvent.layout.x,
        y_start: e.nativeEvent.layout.y,
      },
      () => {
        // console.log('ev', this.state);
      },
    );
  };

  showInput = () => {
    this.setState({
      showInput: !this.state.showInput,
    });
  };
  selectUser = user => {
    this.setState({userSelected: user});
    this.setState({userInfoVisible: true});
  };

  renderDetail = () => (
    <View>
      <User user={this.state.userSelected} onPress={() => {}} />
    </View>
  );

  renderList = () => (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={{
          shadowColor: '#666',
          shadowOffset: {
            width: 6,
            height: 6,
          },
          shadowOpacity: 0.87,
          shadowRadius: 7.49,
          elevation: 12,
          marginTop: 180,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        }}
        ref={scrollView => {
          _scrollView = scrollView ? scrollView._component : null;
        }}
        onScrollEndDrag={onScrollEndSnapToEdge}
        onMomentumScrollEnd={onScrollEndSnapToEdge}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          // scrollX = e.nativeEvent.contentOffset.x
          [
            {
              nativeEvent: {
                contentOffset: {
                  y: this.state.scrollOffset,
                },
              },
            },
          ],
        )}>
        {this.state.users.map(user => (
          <User
            key={user.id}
            user={user}
            onPress={() => this.selectUser(user)}
          />
        ))}
      </ScrollView>
    </View>
  );

  render() {
    const {userSelected} = this.state;

    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />

        <Animated.View
          style={[
            styles.header,
            {
              height: this.state.scrollOffset.interpolate({
                inputRange: [0, 140],
                outputRange: [220, 94],
                extrapolate: 'clamp',
              }),
            },
          ]}>
          <Image
            style={styles.headerImage}
            source={userSelected ? {uri: userSelected.thumbnail} : null}
          />

          <Animated.Image
            onLayout={this.onLayout}
            style={[
              styles.imageLogo,
              {
                transform: [
                  {
                    scale: this.state.scrollOffset.interpolate({
                      inputRange: [-10, 20, 140],
                      outputRange: [1.4, 1, 0.5],
                      extrapolate: 'clamp',
                    }),
                  },
                  {
                    translateX: this.state.scrollOffset.interpolate({
                      inputRange: [20, 140],
                      outputRange: [0, this.state.x_start + width / 2 - 26],
                      extrapolate: 'clamp',
                    }),
                  },
                ],
              },
            ]}
            source={{
              uri: 'https://avatars0.githubusercontent.com/u/2254731?s=460&v=4',
            }}
          />
          <Animated.Text
            style={[
              styles.headerText,
              {
                fontSize: this.state.scrollOffset.interpolate({
                  inputRange: [120, 140],
                  outputRange: [18, 16],
                  extrapolate: 'clamp',
                }),
              },
              {
                opacity: this.state.textOpacity,
              },
            ]}>
            {userSelected ? userSelected.name : 'Olá Marcia'}
          </Animated.Text>
          {/* <Animated.View
            style={[
              styles.textField,
              {
                width: '90%',
                borderRadius: 20,
                backgroundColor: '#fff',
                justifyContent: 'center',
                alignItems: 'flex-start',
                paddingLeft: 10,
              },
              {
                margin: this.state.scrollOffset.interpolate({
                  inputRange: [70, 140],
                  outputRange: [10, 0],
                  extrapolate: 'clamp',
                }),
              },
              {
                height: this.state.scrollOffset.interpolate({
                  inputRange: [70, 140],
                  outputRange: [45, 0],
                  extrapolate: 'clamp',
                }),
              },
            ]}>
            {!this.state.showInput ? (
              <Animated.Text
                onPress={() => {
                  this.showInput();
                }}
                style={[
                  {
                    color: '#a3a3a3',
                  },
                  {
                    opacity: this.state.scrollOffset.interpolate({
                      inputRange: [70, 140],
                      outputRange: [1, 0],
                      extrapolate: 'clamp',
                    }),
                  },
                ]}>
                Buscar por descrição
              </Animated.Text>
            ) : (
              <TextInput
                style={{
                  color: '#a3a3a3',
                }}
                onChangeText={() => {}}
                placeholder="Buscar por descrição"
                autoCorrect={false}
                spellCheck={false}
                autoCapitalize="none"
                returnKeyType="done"
                onSubmitEditing={() => {
                  // this.secondTextInput.focus();
                  // this.onEmailSubmit();
                }}
                blurOnSubmit={false}
              />
            )}
          </Animated.View>*/}
        </Animated.View>
        {this.state.userInfoVisible ? this.renderDetail() : this.renderList()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    paddingTop: Platform.OS === 'ios' ? 40 : 20,
    // paddingHorizontal: 15,
    backgroundColor: '#2E93E5',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
    position: 'absolute',
    zIndex: -1,
  },

  headerImage: {
    ...StyleSheet.absoluteFillObject,
  },
  imageLogo: {
    width: 50,
    height: 50,
    borderRadius: 25,
    // borderWidth: 1,
    backgroundColor: '#fff',
    // borderColor: 'red',
  },
  headerText: {
    fontSize: 18,
    fontWeight: '900',
    color: '#FFF',
    backgroundColor: 'transparent',
    position: 'absolute',
    left: 15,
    bottom: 20,
    // borderWidth: 1,
    // borderColor: 'red',
  },
  textField: {
    // borderWidth: 1,
    // backgroundColor: '#fff',
    // borderColor: '#999',
    // padding: 10,
    // borderRadius: 5,
    // marginTop: 24,
    // position: 'absolute',
    // bottom: 0,
    // zIndex: 500,
    // borderRadius: 20,
    // alignSelf: 'center',
    // color: '#9393ff',
  },
});
