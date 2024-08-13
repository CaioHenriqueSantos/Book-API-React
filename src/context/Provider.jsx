import { useState } from 'react';
import Context from './Context';

function Provider({ children }) {
    const [data, setData] = useState(null)
    const [page, setPage] = useState(0)
    const [show, setShow] = useState("")
    const [newData, setNewData] = useState([])


    const contextValue = {
        data,
        setData,
        page,
        setPage,
        show,
        setShow,
        newData,
        setNewData
    };


    return (
        <Context.Provider value={contextValue}>
            {children}
        </Context.Provider>
    )
}


export default Provider;