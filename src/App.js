import React from 'react';
import Header from './components/header';
import Content from './components/content';
import Counter from './components/counter';
import Paginations  from './components/pagination';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <div className="container">
          <Counter />
          <div className="d-flex justify-content-between">
            <Counter />
            <Paginations />
          </div>
          <Content />
        </div>
      </div>
    );
  } 
}

export default App;
