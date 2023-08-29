import { Button } from '@material-ui/core';
import React from 'react'
import './style.scss'

export default function AccessDeniedPage({setToken}) {
  return (
    <div className="access-denied">
        <>
           <h1>403 Access denied, user does not have any access roles</h1>
            <div>

            </div>
            <div>
            <Button onClick={()=>{localStorage.removeItem("token"); setToken(null)}} className="green-btn">Logout</Button>
            </div>
        </>
    </div>
  )
}
