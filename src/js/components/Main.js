import {
  Switch,
  Route,
} from 'react-router-dom';

import Contentful from 'contentful';

import React from 'react';

import Nav from './Nav';
import Home from './Home';
import About from './About';
import Board from './Board';
import NestedView from './NestedView';

class Main extends React.Component {
  constructor(props) {
    super(props);
    console.log('Rendering main!');
  }

  render() {
    return (
      <div>
        <Nav />
        <main>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/board' component={Board} />
            <Route path='/view' component={NestedView} />
          </Switch>
        </main>
      </div>
    );
  }
}

module.exports = Main;
