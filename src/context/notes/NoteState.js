import React from 'react';
import NoteContext from './noteContext';

const NoteState = (props) => {
    const state = {
        "name": 'Sourabh',
        "class": '5A'
    };

    return (
        <NoteContext.Provider value={state}>
            {props.children}
        </NoteContext.Provider>
    );
};

export default NoteState;