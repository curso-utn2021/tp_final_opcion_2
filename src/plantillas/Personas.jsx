import React from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import PersonasList from './PersonasList';

function Personas() {
  const dispatch = useDispatch();

  const PersonasDel = async (id) => {
    try{
      
      const personaDel = await axios.delete(`http://localhost:3001/persona/${id}`);
      
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Persona eliminada',
        showConfirmButton: false,
        timer: 1500
      })

      dispatch({
        type: 'PersonasDel',
        elementoARemover: id
      })
    }
    catch(e){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Algo salió mal! '+e
      })
    }
  };

  React.useEffect(async () => {
    const persona = await axios.get('http://localhost:3001/persona');
    dispatch({ type: 'PersonasGet', listado: persona.data });

    const libro = await axios.get('http://localhost:3001/libro');
    dispatch({ type: 'LibrosGet', listado: libro.data });
  }, []);
  
  const persona = useSelector((state) => state.persona);
  const libro = useSelector((state) => state.libro);
 
  const datos = persona.map((personaB)=>{
    const id=libro.find((libroB) => {
      if (libroB.persona_id===personaB.id)
      {
        return {id:personaB.id,nombre:personaB.nombre,nombrelibro:libroB.nombre}
      }
    }
    )
    if (typeof id=="undefined")
    {
      console.log('fuc')
      return {id:personaB.id,nombre:personaB.nombre,nombrelibro:'No posee'}
    }
    else{
      return {id:personaB.id,nombre:personaB.nombre,nombrelibro:id.nombre}
    }
  })

console.log(datos);

  return (
    <>
      <h2>Personas</h2>
      <div className="cards">
        <PersonasList personas={datos} PersonasDel={PersonasDel} />
      </div>
      <div className="menu">
        <Link to="/AgregarPersona"><a href="#" className="btn btn-success"><span className="edit material-icons">person_add_alt</span></a></Link>
        <Link to="/Libros"><a href="#" className="btn btn-primary"><span className="edit material-icons">menu_book</span></a></Link>
        <Link to="/Categorias"><a href="#" className="btn btn-danger"><span className="edit material-icons">category</span></a></Link>
      </div>
    </>
  );
}

export default Personas;