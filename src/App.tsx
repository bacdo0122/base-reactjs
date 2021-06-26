import React from 'react';
import './index.css';
import image from  './assets/images/d16.jpg'
import logo from './assets/svg/smiling.svg'
const App: React.FC = () => {
  return (
    <div className='wrapper'>
      <h1>React 17 and TypeScript 4 1App!🚀</h1>
      <img src={logo} />
    </div>
  );
};
export default App;