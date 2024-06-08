import React,{useContext} from 'react'
import noteContext from '../context/notes/noteContext'

const About = () => {

  const a = useContext(noteContext);
  return (
    <div>
        this is about {a.class}
    </div>
  )
}

export default About