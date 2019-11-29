import React from 'react';
import { NavLink, Route } from 'react-router-dom'
import './App.css';
import CharacterList from './components/CharacterList'
import EpisodeList from './components/EpisodeList'
import Home from './components/Home'

function App() {
  return (
    <div className="App">
      <nav>
        <NavLink exact to='/'>Home</NavLink>
        <NavLink to='/Characters'>Characters</NavLink>
        <NavLink to='Episodes'>Episodes</NavLink>
      </nav>
      <Route exact path='/' component={Home}/>
      <Route exact path='/characters/' component={CharacterList}/>
      <Route exact path='/episodes/' component={EpisodeList}/>
    </div>
  );
}

export default App;
