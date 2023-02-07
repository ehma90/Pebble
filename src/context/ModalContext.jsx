import { useState, createContext } from "react";

const ModalContext = createContext() 

export function ModalContextProvider({children}) {
    const [menu, setMenu] = useState(false)

    // Click to toggle menu bar
    const showMenu = () => {
        setMenu(!toggle)
    }

    // remove menu bar
    const closeMenu = () => {
        setMenu(false)
    }

    return (
        <ModalContext.Provider value={{
            showMenu,
            closeMenu,
            menu,
        }}>
            {children}
        </ModalContext.Provider>
    )
}

export default ModalContext