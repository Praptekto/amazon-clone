import react,{createContext, useContext,useReducer} from 'react';

//prepares the data layout
export const StateContext=createContext();


//Wrap our app and provide the data layout
export const StateProvider=({reducer,initialState,children})=>(
    <StateContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>

);


//Pull information from the data provider
export const useStateValue=()=>useContext(StateContext);