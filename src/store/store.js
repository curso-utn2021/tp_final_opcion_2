import { createStore } from 'redux';

const estadoInicial = {
  persona: [],
  libro:[]
};

function reducer(state = estadoInicial, action) {
  const newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case 'PersonasGet':
      newState.persona = action.listado;
      return newState;
    case 'PersonasDel':
      newState.persona = newState.persona.filter(unaPersona => unaPersona.id != action.elementoARemover);
      return newState;
    case 'LibrosGet':
      newState.libro = action.listado;
      return newState;
    default:
      return newState;
  }
}

export default createStore(reducer);
