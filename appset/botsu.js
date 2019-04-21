import * as React from 'react';
import { Text, View, ScrollView } from 'react-native';
import { createStackNavigator, createAppContainer  } from 'react-navigation';
import { styles } from './src/style';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
    headerStyle: {
    },
    headerTitleStyle:{
      borderBottomWidth:1,
      borderColor:'#000',
    }
  };


  render() {
    naviGate = this.props.navigation.navigate;
    return <AppMake />
  }
}

class DetailsScreen extends React.Component {
  render() {
    naviGate = this.props.navigation.navigate;
    return (
      <View style={styles.menu}>
        <View style={styles.inMenu}>
          <Text style={styles.inText} >これはスマホアプリのテストです。</Text>
          <Text style={styles.inText} >個別ページになるところです。</Text>
        </View>
        <Menu />
      </View>
    );
  }
}

class CreateScreen extends React.Component {
  render() {
    naviGate = this.props.navigation.navigate;
    return (
      <View style={styles.menu}>
        <Text>Test.com</Text>
        <Menu />
      </View>
    );
  }
}
const AppMake = () =>{

  return (
    <View style={styles.menu}>
      <View style={styles.inMenu}>
        <ScrollView style={styles.scrollMenu}>
          <View style={styles.blogWrapper}>
            <View style={styles.blogTitle}>
              <Text style={styles.blogTitleH} onPress={() => naviGate('Details')}>ブログタイトル</Text>
            </View>
            <View style={styles.blogCategory}>
              <Text style={styles.blogCategoryT}>category</Text>
              <Text style={styles.blogCategoryT}>create times</Text>
            </View>
            <View style={styles.blogContent}>
              <Text style={styles.blogContentT}>こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。</Text>
            </View>
          </View>
          <View style={styles.blogWrapper}>
            <View style={styles.blogTitle}>
              <Text style={styles.blogTitleH} onPress={() => naviGate('Details')}>ブログタイトル</Text>
            </View>
            <View style={styles.blogCategory}>
              <Text style={styles.blogCategoryT}>category</Text>
              <Text style={styles.blogCategoryT}>create times</Text>
            </View>
            <View style={styles.blogContent}>
              <Text style={styles.blogContentT}>こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。</Text>
            </View>
          </View>
          <View style={styles.blogWrapper}>
            <View style={styles.blogTitle}>
              <Text style={styles.blogTitleH} onPress={() => naviGate('Details')}>ブログタイトル</Text>
            </View>
            <View style={styles.blogCategory}>
              <Text style={styles.blogCategoryT}>category</Text>
              <Text style={styles.blogCategoryT}>create times</Text>
            </View>
            <View style={styles.blogContent}>
              <Text style={styles.blogContentT}>こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。</Text>
            </View>
          </View>
          <View style={styles.blogWrapper}>
            <View style={styles.blogTitle}>
              <Text style={styles.blogTitleH} onPress={() => naviGate('Details')}>ブログタイトル</Text>
            </View>
            <View style={styles.blogCategory}>
              <Text style={styles.blogCategoryT}>category</Text>
              <Text style={styles.blogCategoryT}>create times</Text>
            </View>
            <View style={styles.blogContent}>
              <Text style={styles.blogContentT}>こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。</Text>
            </View>
          </View>
          <View style={styles.blogWrapper}>
            <View style={styles.blogTitle}>
              <Text style={styles.blogTitleH} onPress={() => naviGate('Details')}>ブログタイトル</Text>
            </View>
            <View style={styles.blogCategory}>
              <Text style={styles.blogCategoryT}>category</Text>
              <Text style={styles.blogCategoryT}>create times</Text>
            </View>
            <View style={styles.blogContent}>
              <Text style={styles.blogContentT}>こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。</Text>
            </View>
          </View>
          <View style={styles.blogWrapper}>
            <View style={styles.blogTitle}>
              <Text style={styles.blogTitleH} onPress={() => naviGate('Details')}>ブログタイトル</Text>
            </View>
            <View style={styles.blogCategory}>
              <Text style={styles.blogCategoryT}>category</Text>
              <Text style={styles.blogCategoryT}>create times</Text>
            </View>
            <View style={styles.blogContent}>
              <Text style={styles.blogContentT}>こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。</Text>
            </View>
          </View>
        </ScrollView>
      </View>
      <Menu />
    </View>
  );

}
const Menu = () => {
    return(
      <View style={styles.tabMenu}>
        <View style={styles.tabWrapper}>
          <Text onPress={() => naviGate('Create')} style={styles.inTabMenu}>Email</Text>
        </View>
        <View style={styles.tabWrapper}>
          <Text onPress={() => naviGate('Home')} style={styles.inTabMenu}>Home</Text>
        </View>
      </View>
    )
}

const RootStack = createStackNavigator(
  {
    Home: {
      screen:HomeScreen,
    },
    Details: {
      screen: DetailsScreen,
    },
    Create:{
      screen:CreateScreen
    },
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component{
  render() {
    return (
        <AppContainer />
      );
  }
}