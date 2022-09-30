import React, { createContext, useState, useContext } from "react"

export const RegisterContext = createContext({})

export default function CountProvider({ children }) {
  const [components, setComponents] = useState(0)
  const [subComponents, setSubComponents] = useState(0)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [dataUser, setDataUser] = useState([])

  return (
    <RegisterContext.Provider
      value={{
        components,
        setComponents,
        subComponents,
        setSubComponents,
        isAuthenticated,
        setIsAuthenticated,
        dataUser,
        setDataUser
      }}
    >
      {children}
    </RegisterContext.Provider>
  );
}

export function StateGlobal() {
  const context = useContext(RegisterContext)
  const { components, setComponents } = context
  const { subComponents, setSubComponents } = context
  const { isAuthenticated, setIsAuthenticated } = context
  const { dataUser, setDataUser } = context

  return {
    components,
    setComponents,
    subComponents,
    setSubComponents,
    isAuthenticated,
    setIsAuthenticated,
    dataUser,
    setDataUser
  }
}
