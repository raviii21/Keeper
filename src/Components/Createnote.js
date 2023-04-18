import React, { useState } from "react";
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

function Createnote(props){

    const [expand, setExpand] = useState(false);

    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    const expandIt = () => {
     setExpand(true);
    }; 
    const dblclick = () => {
      setExpand(false);
    }
    const handleChange = (event) => {
       const { name, value } = event.target;

       setNote(prevNote => {
           return {
               ...prevNote,
               [name] : value
           };
       });
    }

    const submitNote = (event) => {
        props.onAdd(note);
        setNote({
            title: "",
            content: ""
        })
        event.preventDefault();

    }

    return(
        <div>
            <form>
                { expand?
                <input 
                name="title" 
                onChange={handleChange} 
                value={note.title} 
                placeholder="Title" 
                /> : null }
                <textarea 
                onChange={handleChange}
                name="content" 
                value={note.content} 
                placeholder="Take a note..." 
                rows="3" 
                onClick={expandIt}
                onDoubleClick={dblclick}
                 />
                {expand? 
                <button onClick={submitNote}> <FontAwesomeIcon icon={faPlus} /></button> : null}
            </form>
        </div>
    )
}

export default Createnote ;