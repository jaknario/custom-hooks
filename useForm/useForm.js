import { useState } from "react";


export const useForm = ( initialForm = {} ) => {

  const [formState, setFormState] = useState(initialForm);

  //Función para mantener los cambios en el formState
  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const onResetForm = () => {
    setFormState( initialForm );
  }


  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm,

  }
};
