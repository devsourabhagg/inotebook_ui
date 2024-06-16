import React,{useState} from 'react';
import NoteContext from './noteContext';

const NoteState = (props) => {
   
    const host = "http://localhost:5000"
    const notesInitial = []
    const [notes,setNotes] = useState(notesInitial)


    //Get all notes
    const getNotes = async () => {

      const response = await fetch(`${host}/api/notes/fetchallnotes`,{
        method : 'GET',
        headers: {
          'Content-Type' : 'application/json',
          'Authorization' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY0OGM4ZDEzMDUxZGMwZThhNmM3OTBjIn0sImlhdCI6MTcxNjEwMDQ0NH0.dn1W2rPWIEK9DKBZ4-qdpbSlWD-3qdQzhclkkf_x4JE'
        },
      });

      const json = await response.json();
      console.log(json);
      setNotes(json);

    }

    // Add a note
    const addNote = async (title,description,tag) =>{
      //TODO API call
      const response = await fetch(`${host}/api/notes/note`,{
        method : 'POST',
        headers: {
          'Content-Type' : 'application/json',
          'Authorization' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY0OGM4ZDEzMDUxZGMwZThhNmM3OTBjIn0sImlhdCI6MTcxNjEwMDQ0NH0.dn1W2rPWIEK9DKBZ4-qdpbSlWD-3qdQzhclkkf_x4JE'
        },
        body: JSON.stringify({title,description,tag})
      })
      
      const json =  await response.json();
      console.log(json);
      setNotes(notes.concat(json));

    }
    // delete a note
    const deleteNote = async (id) =>{
       const response = await fetch(`${host}/api/notes/note/${id}`,{
        method : 'DELETE',
        headers: {
          'Content-Type' : 'application/json',
          'Authorization' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY0OGM4ZDEzMDUxZGMwZThhNmM3OTBjIn0sImlhdCI6MTcxNjEwMDQ0NH0.dn1W2rPWIEK9DKBZ4-qdpbSlWD-3qdQzhclkkf_x4JE'
        },
      })

      console.log('deleting the note with id'+ id)
      const newNotes = notes.filter((note)=>  {return note._id!==id})
      setNotes(newNotes);

    }

    // edit a note

    const editNote = async (id,title,description,tag) => {

      const response = await fetch(`${host}/api/notes/updatenote/${id}`,{
        method : 'POST',
        headers: {
          'Content-Type' : 'application/json',
          'Authorization' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY0OGM4ZDEzMDUxZGMwZThhNmM3OTBjIn0sImlhdCI6MTcxNjEwMDQ0NH0.dn1W2rPWIEK9DKBZ4-qdpbSlWD-3qdQzhclkkf_x4JE'
        },
        body: JSON.stringify({title,description,tag})
      })
      
      const json =  response.json();


    }


    return (
        <NoteContext.Provider value={{notes,addNote,deleteNote,editNote,getNotes}}>
            {props.children}
        </NoteContext.Provider>
    );
};

export default NoteState;