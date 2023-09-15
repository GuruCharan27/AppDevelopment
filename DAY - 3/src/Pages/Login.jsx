import React from 'react'
import SignIn from '../Components/SignUp';
import '../CSS/Login.css';
import SignUp from '../Components/SignUp';

export default function Login() {
    return (
        <>
            <div className='overall'>

                <div className='wallpaper' />

                <div className='content'>
                    <SignUp />
                </div>

            </div>
        </>
    )
}
