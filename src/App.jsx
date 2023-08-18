import React from 'react'
import NavBar from './components/NavBar/NavBar'
import './App.css'
import Banner from './components/Banner/Banner'
import RowPost from './components/RowPost/RowPost'
import {originals,action, comedy, romance,documentry} from './urls'


function App() {



  return (
    <div className='App'>
      <NavBar/>
      <Banner/>
      <RowPost url={originals} title='Netflix Originals' />
      <RowPost url={action} title='Action' isSmall />
      <RowPost url={comedy} title='Comedy' isSmall />
      <RowPost url={romance} title='Romance' isSmall />
      <RowPost url={documentry} title='Documentary' isSmall />
    </div>
  )
}

export default App