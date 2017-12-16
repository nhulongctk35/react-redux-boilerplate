import React, { Component } from 'react';

import {
  Button,
  Alert,
} from './components';

class App extends Component {
  render() {
    return (
      <div className="container">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="list-group">
          <div className="list-group-item active">
            Button
          </div>
          <div className="list-group-item">
            <h5 class="mb-1">Button Color</h5>
            <p>
              <Button color="secondary">LongTran</Button>
              <Button color="primary">LongTran</Button>
              <Button color="success">LongTran</Button>
              <Button color="danger">LongTran</Button>
              <Button color="warning">LongTran</Button>
              <Button color="link">LongTran</Button>
            </p>
          </div>
          <div className="list-group-item">
            Button tag
            <p>
              <Button href="#" role="button">LongTran</Button>
              <Button>LongTran</Button>
            </p>
          </div>
          <div className="list-group-item">
            <h5 className="mb-1">Button outline</h5>
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
          <div className="list-group-item">
            <h5 className="mb-1">Button size</h5>
            <p>
              <Button size="sm" color="secondary">LongTran</Button>
              <Button color="primary">LongTran</Button>
              <Button size="lg" color="success">LongTran</Button>
            </p>
          </div>
          <div className="list-group-item">
            <h5 className="mb-1">Button block</h5>
            <p>
              <Button block color="secondary">LongTran</Button>
              <Button block color="primary">LongTran</Button>
            </p>
          </div>
          <div className="list-group-item">
            <h5 className="mb-1">Button disable state</h5>
            <p>
              <Button disabled color="secondary">LongTran</Button>
              <Button disabled color="primary">LongTran</Button>
            </p>
          </div>
        </div>

        <div className="list-group">
          <div className="list-group-item active">
            Alert
          </div>
          <div className="list-group-item">
            Alert default
            <Alert label="This is an alert" />
          </div>
          <div className="list-group-item">
            Alert secondary
            <Alert color="secondary" label="This is an alert" />
          </div>
          <div className="list-group-item">
            dismissable Alert
            <Alert dismissable label="This is an alert" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
