import React from 'react'
import NavBar from '../Components/NavBar'
import { useSelector } from 'react-redux'

export default function Home() {

  const user = useSelector(state => state.user.value)

  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div>
        <br />
        <h4>HELLO {user.username} !</h4>
      </div>
    </div>
  )
}
