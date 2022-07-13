import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import Base from './components/Base'

const root = document.getElementById('root')

const render = ReactDOM.createRoot(root)
console.log(render)
// console.log(<Base />)

// Concurrent mode
render.render(<Base />);

// blocking mode
// ReactDOM.createBlockingRoot(root).render(<App />);

// Sync mode
// ReactDOM.render(<App />, root);

// console.log('React 源码调试，当前版本：' + React.version);

console.log('end')
// document.getElementById('root').innerHTML = '32423'
debugger