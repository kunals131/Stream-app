import { SIGN_IN, SIGN_OUT, CREATE_STREAM, EDIT_STREAM, DELETE_STREAM, FETCH_STREAM, FETCH_STREAMS } from "./types"
import streams from '../apis/streams';


export const signIn = (id)=>{
    return{
        type : SIGN_IN,
        payload : id
    }
}
export const signOut = ()=>{
    return{
        type : SIGN_OUT,
    
    }
}

export const createStream = formValues=> async dispatch=>{
    const res = await streams.post('/streams', JSON.stringify(formValues));
    dispatch({type : CREATE_STREAM, payload : res.data});
}

export const fetchStreams = ()=>async dispatch=>{
    const res = await streams.get('/streams');

    dispatch({type : FETCH_STREAMS, payload : res.data});
}

export const fetchStream = (id)=>async dispatch =>{
    const res = await streams.get(`/streams/${id}`);
    dispatch({type : FETCH_STREAM, payload : res.data});
}

export const editStream = (id,formValues)=>async dispatch=>{
    const res = await streams.put(`/streams/${id}`, formValues);
    dispatch({type : EDIT_STREAM, payload : res.data});
}

export const deleteStream = (id)=>async dispatch=>{
    await streams.delete(`/streams/${id}`);

    dispatch({type : DELETE_STREAM, payload : id});
}