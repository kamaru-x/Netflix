import React from 'react';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';
import { originals,actions,comedy,horror,romance,documentaries } from './constants/constants';

function App() {
  return (
    <div className="App">
        <NavBar/>
        <Banner/>
        <RowPost url={originals} title='Netflix Originals'/>
        <RowPost url={actions} title='Action' isSmall />
        <RowPost url={comedy} title='Comedy' isSmall />
        <RowPost url={horror} title='Horror' isSmall />
        <RowPost url={romance} title='Romance' isSmall />
        <RowPost url={documentaries} title='Documentaries' isSmall />
    </div>
  );
}

export default App;