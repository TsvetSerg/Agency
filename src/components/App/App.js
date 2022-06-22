import './App.css';
import NavBar from '../NavBar/NavBar';
import Title from '../Title/Title';
import Tabs from '../Tabs/Tabs';
import Content from '../Content/Content';
import React from 'react';

function App() {


  return (
    <div className="App">
      <section className='top'>
        <NavBar/>
        <Title/>
      </section>
      <Tabs/>
      <Content/>

    </div>
  );
}

export default App;
