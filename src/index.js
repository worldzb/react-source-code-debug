import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import Base from './components/Base'


const root = document.getElementById('root')
const render = ReactDOM.createRoot(root)

console.log('fff', <div ref="f" key={10}></div>)
console.log(render)
// Concurrent mode
render.render(<Base />);

// blocking mode
// ReactDOM.createBlockingRoot(root).render(<App />);

// Sync mode
// ReactDOM.render(<App />, root);

// console.log('React 源码调试，当前版本：' + React.version);


// document.getElementById('root').innerHTML = '32423'
// debugger