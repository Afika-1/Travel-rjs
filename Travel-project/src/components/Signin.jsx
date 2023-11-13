import { useState } from 'react'
// import HomeImage from './assets/images/ride.jpg'
import '../styles/signin.css'
import Image from '../assets/images/map.webp'

export default function Signin() {

    return (
        <>
            <div className='signin'>
                <div className='image-img'><img src={Image}></img>

                    <div className='signin-form'>
                        <div className='signin-btns'>
                            <button>Login</button> <button>Sign in </button>
                        </div>
                        <form>
                            <div className='inputs'>
                                <input placeholder='Full Name' />
                                <input placeholder='Email' />
                                <input placeholder='Password' />
                                <input placeholder='Confirm Password' />
                            </div>
                            <div className='login-socials'>
                                <p>Or continue with</p>
                                <div ><button>FB</button> <button>Gg </button></div>
                            </div>
                            <button className='submit-btn' type='submit'>Sign Up</button>
                        </form>
                    </div>
                </div>


            </div>
        </>
    )
}