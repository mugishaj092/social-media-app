import * as AuthApi from '../api/AuthRequest'

export const login = (formData)=>async(dispatch)=>{
    dispatch({type:"AUTH_START"})
    try{
        const {data}=await AuthApi.logIn(formData)
        dispatch({type:"AUTH_SUCCESS",payload:data})

    }catch(e){
        console.log(e)
        dispatch({type:"AUTH_FAIL",payload:e.message})
    }
}

export const signUp = (formData)=>async(dispatch)=>{
    
    dispatch({type:"AUTH_START"})
    try{
        const {data}=await AuthApi.signUp(formData)
        dispatch({type:"AUTH_SUCCESS",payload:data})

    }catch(e){
        console.log(e)
        dispatch({type:"AUTH_FAIL",payload:e.message})
    }
}