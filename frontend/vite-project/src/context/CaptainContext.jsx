import { createContext, useContext, useState } from "react";

export const CaptainDataContext = createContext();


const CaptainContext = ({ children }) => {

    const [isLoading, setIsLoading] = useState(false)
    const [capData, setCapData] = useState({
        email:'',
        fullname:{
            firstname:'',
            lastname:''
        },
        vehicle:{
            capacity:'',
            vehicleType:'',
            plate:'',
            color:''
        },
        isLoading,
        setIsLoading
    })

    return (
        <CaptainDataContext.Provider value={{capData, setCapData}}>
            
            {children}

        </CaptainDataContext.Provider>
    )
}

export default CaptainContext