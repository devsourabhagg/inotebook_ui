import React,{useState} from 'react';
import NoteContext from './noteContext';

const NoteState = (props) => {
    const notesInitial = [
            {
              "_id": "6665929c9c17fd9cdb6e98b3",
              "user": "6665925e9c17fd9cdb6e98ae",
              "title": "Java Script",
              "description": "This is complete MERN Stack code",
              "tag": "Study",
              "date": "2024-06-09T11:31:40.164Z",
              "__v": 0
            },
            {
              "_id": "666592a69c17fd9cdb6e98b5",
              "user": "6665925e9c17fd9cdb6e98ae",
              "title": "Java Script1",
              "description": "This is complete MERN Stack code2",
              "tag": "Study1",
              "date": "2024-06-09T11:31:50.399Z",
              "__v": 0
            },
            {
                "_id": "666592a69c17fd9cdb6e98b5",
                "user": "6665925e9c17fd9cdb6e98ae",
                "title": "Java Script1",
                "description": "This is complete MERN Stack code2",
                "tag": "Study1",
                "date": "2024-06-09T11:31:50.399Z",
                "__v": 0
              },
              {
                "_id": "666592a69c17fd9cdb6e98b5",
                "user": "6665925e9c17fd9cdb6e98ae",
                "title": "Java Script1",
                "description": "This is complete MERN Stack code2",
                "tag": "Study1",
                "date": "2024-06-09T11:31:50.399Z",
                "__v": 0
              },
              {
                "_id": "666592a69c17fd9cdb6e98b5",
                "user": "6665925e9c17fd9cdb6e98ae",
                "title": "Java Script1",
                "description": "This is complete MERN Stack code2",
                "tag": "Study1",
                "date": "2024-06-09T11:31:50.399Z",
                "__v": 0
              },
              {
                "_id": "666592a69c17fd9cdb6e98b5",
                "user": "6665925e9c17fd9cdb6e98ae",
                "title": "Java Script1",
                "description": "This is complete MERN Stack code2",
                "tag": "Study1",
                "date": "2024-06-09T11:31:50.399Z",
                "__v": 0
              }
          ]
    const [notes,setNotes] = useState(notesInitial)
    return (
        <NoteContext.Provider value={{notes,setNotes}}>
            {props.children}
        </NoteContext.Provider>
    );
};

export default NoteState;