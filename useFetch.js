/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */


import { useEffect, useState } from "react";

export const useFetch = (url) => {

  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: null,
  });

  // Cambio de estado
  const getFetch = async () => {

    setState({
      ...state,
      isLoading: true,
    });

    const resp = await fetch(url);
    const data = await resp.json();

    setState({
      data,
      isLoading: false,
      hasError: null,
    })
    
  };

  useEffect(() => {
    getFetch();
  }, [url]);


  return {
    data:      state.data,
    isLoading: state.isLoading,
    hasError:  state.hasError,
  };
};
