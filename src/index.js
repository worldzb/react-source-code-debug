import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import Base from './components/Base'
console.log('React 源码调试，当前版本：' + React.version);


const root = document.getElementById('root')
const render = ReactDOM.createRoot(root)

const Fiber = <React.Fragment>
  <div>
  <Base />
  </div>
</React.Fragment>

console.log(Fiber, render)

// Concurrent mode
render.render(Fiber,()=>{});

// blocking mode
// ReactDOM.createBlockingRoot(root).render(<App />);

// Sync mode
// console.log(<Base />)
// ReactDOM.render(<Base />, root);

// document.getElementById('root').innerHTML = '32423'
