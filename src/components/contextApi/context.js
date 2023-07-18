import { createContext, useState } from 'react'

export const authcontext = createContext();



function ContextProvider({ children }) {

    const [islogin, setIslogin] = useState(false)
    const [signtologin, setSigntologin] = useState(true)
    const [userdata, setUserdata] = useState([])
    
    return <authcontext.Provider value={{ islogin, setIslogin, userdata, setUserdata, signtologin, setSigntologin}}>
        { children }
    </authcontext.Provider>
}

export default ContextProvider;