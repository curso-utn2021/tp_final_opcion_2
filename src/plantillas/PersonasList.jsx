import React from 'react';
import { Link } from 'react-router-dom';

function PersonasList(props) {

  return (props.personas.map((personaA) => (
    <>
    <div className="card" >
      <div className="card-body">
        <h3 className="card-title">{personaA.nombre}</h3>
        <h4 classNameclass="card-text">Libro: {personaA.nombrelibro}</h4>
        <div className="botones">
            <a key={personaA.id} onClick={() => props.PersonasDel(personaA.id)} className="btn btn-danger"><span className="edit material-icons">delete</span></a>
            <a key={personaA.id} onClick={() => props.PersonasDel(personaA.id)} className="btn btn-warning"><span className="edit material-icons">edit</span></a>
        </div>
      </div>
    </div>
  </>
  )))
}

export default PersonasList;