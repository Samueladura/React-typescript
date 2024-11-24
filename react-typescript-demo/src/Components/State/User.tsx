import { useState } from "react";

type AuthUser = {
name: string
email: string
}

export const User = () => {
    const [user, setUser] = useState<AuthUser>({} as AuthUser)
    const handleLogin = () => {
        setUser({
            name: 'Samuel',
            email: 'samuel@example.com'
        })
    }
    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <div>User name is {user.name}</div>
            <div>Your email is {user.email}</div>
        </div>
    )
}
