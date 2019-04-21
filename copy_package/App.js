import * as React from 'react';
import { Text, StyleSheet, Alert, } from 'react-native';
import { Container, Form, Input, Button, Label, Item } from 'native-base';
import { createStackNavigator, createAppContainer  } from 'react-navigation';
import Todo from './appset/todo';
import * as firebase from 'firebase';

const firebaseConfig = {
  // apiKey:
  // authDomain: 
  // databaseURL: 
  // projectId: 
  // storageBucket: 
  // messagingSenderId: 
}

firebase.initializeApp(firebaseConfig);

class loginHome extends React.Component{
  static navigationOptions = {
    headerTitle: 'Login',
  };
  constructor(props){
    super(props)

    this.state = ({
      email: '',
      password: '',
    });
  }

  render(){
    naviGate = this.props.navigation.navigate;
    emailData = this.state.email;
    passData = this.state.password;

    signUpUser = (email,password) =>{

      try {
  
        if(this.state.password.length < 6){
          aleat("Please enter atleast 6 characters")
          return;
        }

        Alert.alert(
          'アカウント作成成功',
          '作成したアカウントでログインを行って下さい。',
        );
        firebase.auth().createUserAndRetrieveDataWithEmailAndPassword(email,password)
  
      }catch(error){
        console.log(error.toString())
      }
    }
    loginUser = (email,password) =>{
      try{
        firebase.auth().signInWithEmailAndPassword(email,password).then(function(user){
          console.log(user);
          Alert.alert(
                'ログイン成功',
                'メインページに行きますか？',
                [
                {
                  text:'メインページへ',
                  onPress: () => naviGate('Todo'),
                },
                ],
            );
        })
      }catch(error){
        console.log(error.toString())
      }
    }
      return (
          <Container style={styles.container}>
            <Form>
              <Item froalingLabel>
                <Label>Email</Label>
                <Input
                  autoCurrent={false}
                  autoCapitalize="none"
                  onChangeText={(email) => this.setState({email})}
                />
  
              </Item>
  
              <Item froalingLabel>
                <Label>Password</Label>
                <Input
                  secureTextEntry={true}
                  autoCurrent={false}
                  autoCapitalize="none"
                  onChangeText={(password) => this.setState({password})}
  
                />
              </Item>
              <Button style={{marginTop: 20,}}
                full
                rounded
                success
                onPress={() => loginUser(emailData,passData)}
              >
                <Text style={{color:'white'}}> Login</Text>
              </Button>
  
              <Button style={{marginTop: 20,}}
                full
                rounded
                primary
                onPress={() => signUpUser(emailData,passData)}
              >
                <Text style={{color:'white'}} >Sign Up!</Text>
              </Button>
            </Form>
          </Container>
        );
  }
  
}

export default class App extends React.Component{
  render() {
    return (
        <AppContainer />
      );
  }
}

const RootStack = createStackNavigator(
  {
    Home: {
      screen:loginHome,
    },
    Todo:{
      screen:Todo,
      title:'TODO List'
    },
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(RootStack);


const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});