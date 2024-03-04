// { type: [todo removew], payload: id }

export const todoReducer = ( initialState = [], action) => {

  switch (action.type) {
    case "[TODO] Add Todo":
      // el nuevo estado puede ser cualquier elemento(booleano, string, objeto etc.). Debemos evitar mutar lo arreglos
      return [ ...initialState, action.payload ];
    case "[TODO] Remove Todo":
      return initialState.filter( todo => todo.id !== action.payload );
      
    case '[TODO] Toggle Todo':
      return initialState.map( todo => { // gracias al .map regresamos un nuevo arreglo

        if ( todo.id === action.payload ) { // id
          return {
              ...todo,
              done: !todo.done
          }
        }


        return todo;
      })

    default:
      return initialState;
  }
}