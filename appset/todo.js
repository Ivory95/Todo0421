import * as React from 'react';
import { StyleSheet, ListView, Text, View, StatusBar, Alert} from 'react-native';
import {Container, Header, Input, Button, Content, List, Item, Icon, ListItem, } from 'native-base';
import * as firebase from 'firebase';

var data = []

export default class Todo extends React.Component{
  static navigationOptions = {
    headerTitle: 'TodoList',
  }
  constructor(props){
    super(props);

    this.ds = new ListView.DataSource({rowHasChanged: (r1,r2) => r1 !== r2})

    this.state = {
      listViewData: data,
      newContent:"",
      pressStatus:false
    }
  }

  componentDidMount(){
    var that = this
    const user = firebase.auth().currentUser;
    firebase.database().ref('/contacts/'+user.uid).on('child_added',function(data){
      var newData = [...that.state.listViewData];
      newData.push(data);
      that.setState({listViewData:newData});
    })
  }
  addRow (data){
    const user = firebase.auth().currentUser;
    var key = firebase.database().ref('/contacts/'+user.uid).push().key;
    firebase.database().ref('/contacts/'+user.uid).child(key).set(
      {name:data},
    );
  }
  async deleteRow(secId, rowId, rowMap, data){
    const user = firebase.auth().currentUser;
    // secId rowの名前
    // rowId 消す個数
    // rowMap 詳細なRowの配列データ
    // data ユーザーが書いたデータ
    await firebase.database().ref('contacts/'+user.uid+'/'+data.key).set(null);

    rowMap[`${secId}${rowId}`].props.closeRow();
    var newData = [...this.state.listViewData];
    newData.splice(rowId,1);
    this.setState({ listViewData: newData });
    console.log('end')
  }

  showInfomation(){

  }

  render() {
    var user = firebase.auth().currentUser;
    if (user) {
    return (
        <Container style={styles.container}>
          <Header style={{marginTop:StatusBar.currentHeight,backgroundColor:'#fff'}}>
            <View style={{flex:1,}}>
              <Item>
                <Input
                onChangeText={(newContact) => this.setState({ newContact})}
                  placeholder="Add name"
                />
                <Button onPress={() => this.addRow(this.state.newContact)}>
                  <Icon name="add"/>
                </Button>
              </Item>
            </View>
          </Header>
          <Content>
            <List
             enableEmptySections
             dataSource={this.ds.cloneWithRows(this.state.listViewData)}
             renderRow={(data) =>
              <ListItem>
                <Text>{data.val().name}</Text>
                <Text></Text>              
              </ListItem>
             }

             renderRightHiddenRow={ (data,secId,rowId,rowMap) =>
              <Button full danger onPress={() => this.deleteRow(secId,rowId,rowMap,data)}>
                <Icon name="trash" /> 
              </Button>
            }
            rightOpenValue={-75}
            />
          </Content>
        </Container>
      );
    } else {
    return(
      <View>
        <Text>アプリに問題があります。</Text>
      </View>
    )
  }
  }
}
const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
  },
  test:{
    left:-50,
    backgroundColor:'#000',
  },
  test2:{
    left:0,
    backgroundColor:'#ccc'
  },
});