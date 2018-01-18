import React from 'react';
import ReactDOM from 'react-dom';
import CircularColor from '../src';

console.log(`react-ghub-summary v${COMPONENT_VERSION}`);

const githubURL = 'https://github.com/ubcent/react-ghub-summary';

class Demo extends React.Component {
  render() {
    return (
      <div></div>
    );
  }
}

ReactDOM.render(React.createElement(Demo), document.getElementById('demo'));
