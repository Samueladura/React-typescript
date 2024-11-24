import { useContext } from 'react'
import { UserContext } from './UserContext'

export const User = () => {
    const UserContext = useContext(UserContext)
    const handleLogin = () => {
        if (UserContext) {
            UserContext.setUser({
                name: 'Samuel',
                email: 'Samuel@example.com'
            })
        }
    }
    const handleLogout = () => { 
        UserContext.setUser(null)
    }
    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>User name is {UserContext.user?.name} </div>
            <div>User email is {UserContext.user?.email} </div>
        </div>
    )
}
