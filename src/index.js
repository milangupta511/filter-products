import React from 'react';
import { render } from 'react-dom';
import App from './components/App';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center'
};

const Main = () => (
  <div style={styles}>
    <App />
  </div>
);

render(<Main />, document.getElementById('root'));
