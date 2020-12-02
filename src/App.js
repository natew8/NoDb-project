import React from 'react'
import Header from './components/Header'
import Display from './components/Display'
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className={'title-container'}>
        <h1 className={'song-list-title'}>song list</h1>
      </div>
      <Display />
      <Footer />
    </div>
  );
}

export default App;
