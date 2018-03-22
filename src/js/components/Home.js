import React from 'react';

import HelloWorld from './HelloWorld';
import AlertBox from './AlertBox';
import HasService from './HasService';
import Survey from './Survey/Survey';

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1 class="header-test">Home</h1>
        <Survey />
        <HelloWorld />
        <HasService />
        <AlertBox />
        <div clas="test-class">
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut scelerisque nec mi eget consectetur. Ut blandit, dolor a efficitur congue, quam turpis congue sem, eget pharetra augue enim ornare eros. Vivamus est dolor, tempus at felis at, faucibus dignissim ligula. Vestibulum eget dolor consectetur, efficitur odio non, convallis eros. Aenean augue erat, blandit quis eros vitae, elementum auctor tortor. Donec arcu neque, interdum a nisl posuere, sodales posuere purus. Mauris maximus dui metus, in pulvinar diam pharetra id. Aenean facilisis quis nisi non tristique. Duis ut nulla at elit porttitor aliquet. Ut ornare, dui at lobortis placerat, arcu mi congue lacus, ac ullamcorper turpis tortor id nisl.
        </p>
        <p class="subtext">This is the subtext</p>
      </div>
    );
  }
}

module.exports = Home;
