import { useState } from 'react';

interface User{
    uid: string,
    name: string
}

export const UserState = () => {
    const [user, setUser] = useState<User>()


    const handleClick = () => {
        setUser({
            uid: "ALFA123",
            name: "Andy"        
        })
    }

    return (
        <>
            <h3>Usuario</h3>
            <button className="btn btn-outline-primary mt-2"
            onClick={ handleClick }>
                Login
            </button>

            { user ? 
            <pre className="mt-2">{ JSON.stringify(user) }</pre>
            :
            <pre className="mt-2">No se ha encontrado usuario</pre>
            }

        </>
    )
}

export default UserState;