import { SIGN_IN, SIGN_OUT, CREATE_STREAM } from "./types"
import streams from '../apis/streams';
import { formValues } from "redux-form";

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
    let axiosConfig = {
        headers: {
            'Content-Type': 'application/json',
        },
        mode : 'cors',
        cache : 'no-cache',
        
      };
    const res = await streams.post('/streams', JSON.stringify(formValues), axiosConfig);
    dispatch({type : CREATE_STREAM, payload : res.data})

}