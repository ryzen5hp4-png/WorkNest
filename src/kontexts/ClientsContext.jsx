import { createContext } from "react"

export const ClientsContext = createContext({})

export const ClientsProvider = ({ children }) => {

    const num = 0

    return (

        <ClientsContext.Provider
            value={{
                num
            }}
        >
            {children}
        </ClientsContext.Provider>
    )
}