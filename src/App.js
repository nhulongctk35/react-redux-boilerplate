import React, { Component } from 'react';

import { Button } from './components';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div>
          Button color
          <p>
            <Button color="secondary">LongTran</Button>
            <Button color="primary">LongTran</Button>
            <Button color="success">LongTran</Button>
            <Button color="danger">LongTran</Button>
            <Button color="warning">LongTran</Button>
            <Button color="link">LongTran</Button>
          </p>
         </div>
         <div>
          Button tag
          <p>
            <Button href="#" role="button">LongTran</Button>
            <Button>LongTran</Button>
          </p>
         </div>
         <div>
          Button outline
          <p>
            <Button outline color="secondary">LongTran</Button>
            <Button outline color="primary">LongTran</Button>
            <Button outline color="success">LongTran</Button>
            <Button outline color="danger">LongTran</Button>
            <Button outline color="warning">LongTran</Button>
            <Button outline color="light">LongTran</Button>
            <Button outline color="dark">LongTran</Button>
          </p>
         </div>
         <div>
          Button size
          <p>
            <Button size="sm" color="secondary">LongTran</Button>
            <Button color="primary">LongTran</Button>
            <Button size="lg" color="success">LongTran</Button>
          </p>
         </div>
         <div>
          Button block
          <p>
            <Button block color="secondary">LongTran</Button>
            <Button block color="primary">LongTran</Button>
          </p>
         </div>
         <div>
          Button disable state
          <p>
            <Button disabled color="secondary">LongTran</Button>
            <Button disabled color="primary">LongTran</Button>
          </p>
         </div>
      </div>
    );
  }
}

export default App;
