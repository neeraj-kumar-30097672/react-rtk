import React, { useEffect } from 'react'
// import { useSelector, useDispatch } from 'react-redux' 
import { useAppSelector,  useAppDispatch} from '../../store/hooks'
import { fetchUsers } from './userSlice'

export default function UserView() {
  const dispatch = useAppDispatch()
  const user = useAppSelector(state => state.user)

  useEffect(() => {
    dispatch(fetchUsers())
  }, [])

  return (
    <div>
      <h1>List of Users</h1>
      {user.loading && <h2>Loading...</h2>}
      {!user.loading && user.error && <h3>{user.error}</h3>}
      {!user.loading && user.users.length > 0 && (
        <ul>
          {user.users.map(user => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </div>
  )
}
