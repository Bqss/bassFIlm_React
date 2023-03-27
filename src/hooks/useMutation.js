import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "start":
      return {
        ...state,
        isLoading: true,
      };

    case "error":
      return {
        ...state,
        isLoading: false,   
        isError: true
      };

    case "success":
      return {
        ...state,
        isLoading: false,
        data: action.payload
      };

    default:
      break
  }
};

const useMutation = (queryFn, initialState, options) => {
  const [state, dispatch] = useReducer(reducer, {
    isLoading: false,
    isError: false,
    data: initialState || []
  });

  const mutate = async function(args){
    try{
        dispatch({type:  "start"})
        const result = await queryFn(args);
        options?.onSuccess(result);
        dispatch({type:  "success", payload: result});
        
    }catch(err){
        dispatch({type: "error"});
    }
  }

  return {mutate, data: state.data, isLoading: state.isLoading, isError: state.isError}
};


export default useMutation;
