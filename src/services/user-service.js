import { myAxios } from "./helper";


export const signUp = (user) => {
    console.log(user)
    return myAxios.post('/api/users/signup',user)
        
}

export const signIn = (user) => {
    console.log(user)
    return myAxios.post('/api/users/login',user)
      
}


