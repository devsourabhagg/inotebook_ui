import React,{useContext} from 'react'
import { Notes } from './Notes';
import { AddNote } from './AddNote';

export const Home = (props) =>{
  return (
    <div className='container'>
      <Notes/>
      </div>
  
  )
}

export default Home