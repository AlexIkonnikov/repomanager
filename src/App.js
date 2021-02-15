import React from 'react';
import Header from './components/header';
import Content from './components/content';
import Counter from './components/counter';
<<<<<<< HEAD
=======
import Paginations  from './components/pagination';
>>>>>>> ee20d556fec47173bf49c4db43a59492dc8897f4
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <div className="container">
<<<<<<< HEAD
          <Counter />
=======
          <div className="d-flex justify-content-between">
            <Counter />
            <Paginations />
          </div>
>>>>>>> ee20d556fec47173bf49c4db43a59492dc8897f4
          <Content />
        </div>
      </div>
    );
  } 
}

export default App;
