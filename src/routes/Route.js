import { Navigate } from 'react-router-dom'

export default function RouterWrapper({ children }){
    const isPrivate = true;
    const signed = false ;

    if (!isPrivate && signed){
        return <Navigate to = '/dashboard'/>
    } 

    if (isPrivate && !signed){
        return <Navigate to='/register'/>
    }

    return children
}