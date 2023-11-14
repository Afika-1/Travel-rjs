import { useState } from 'react'
// import HomeImage from './assets/images/ride.jpg'
import '../styles/login.css'
import Image from '../assets/images/chill.jpeg'

export default function Login() {

    return (
        <>
            <div className='login' id='login'>
                <div className='image-img'>
                    <span className='floating-arrow'>{`<`}</span>
                <img src={Image}/> 
                

                    <div className='login-form'>
                        <div className='login-btns'>
                            <button className='on-page'>Login</button> <button><a href='#signin'>Sign in </a></button>
                        </div>
                        <form>
                            <div className='inputs'>
                                <input placeholder='Email' />
                                <input placeholder='Password' />
                                <div><p>Forgot  Password</p></div>
                            </div>
                            <div className='login-socials'>
                                <p>Or continue with</p>
                                <div ><button>FB</button> <button>Gg </button></div>
                            </div>
                            <button className='bg-red' type='submit'>Login</button>
                        </form>
                    </div>
                </div>


            </div>
        </>
    )
}