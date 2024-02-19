import React, { Component } from 'react';
import { Container, Header, Content, Item, Input, Icon, Button, Text, Body } from 'native-base';
import { StyleSheet, View } from 'react-native';

export default class Addition extends Component {

  state = { input1: null, input2: null, result: null }

  render() {
    return (
      <Container >
        <Header>
          <Body>
            <Text> Addition  v0.1</Text>
          </Body>
        </Header>
        <Content>
          <View style={styles.container}>
            <Item>
              <Input placeholder='Enter 1st Number' onChangeText={(text) => this.setState({ input1: parseInt(text) })} />
            </Item>
            <Item>
              <Input placeholder='Enter 2nd Number' onChangeText={(text) => this.setState({ input2: parseInt(text) })} />
            </Item>
            <View style={styles.buttonContainer}>
              <Button iconLeft success onPress={() => {
                this.setState({ result: (this.state.input1 && this.state.input2) ? this.state.input1 + this.state.input2 : null })
              }}>
                <Icon name='add' />
                <Text>Add</Text>
              </Button>
            </View>
            <View style={styles.textContainer}>
              <Text >{this.state.result ? 'Result= ' + this.state.result : null}</Text>
            </View>
          </View>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30
  },
  buttonContainer: {
    padding: 30
  },
  textContainer: {
    flexDirection: 'row',
    padding: 30
  }
});