import { createContext,useContext,useState } from "react";



const ListIdContext = createContext(null);

export const useListId =()=>{
    const context = useContext(ListIdContext)
    if (context){
        return context
    }
    throw new Error('Context errrrrrrrrrrrrrror');
}

export const ListIdProvider =({children})=>{
    const [ListId, setListId]= useState(null);
    const setId = (id) =>{
        setListId(id)
    }
    return (
    <ListIdContext.Provider value={{ListId,setId}}>
{
    children
}
    </ListIdContext.Provider>
    );   
}

