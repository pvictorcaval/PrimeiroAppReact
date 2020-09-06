import { StyleSheet, Text, View } from 'react-native';
import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Left, Body, Right, Title, Subtitle } from 'native-base';

export default function App() {
  return (
    <Container>
        <Header>
          <Left/>
          <Body>
            <Title>Apto</Title>
            <Subtitle>Seja bem vindo!</Subtitle>
          </Body>
          <Right />
        </Header>
        <Content>
          <Form>
            <Item>
              <Input placeholder="Email ou Usuario" />
            </Item>
            <Item last>
              <Input placeholder="Senha" />
            </Item>
          </Form>
        </Content>
      </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
