import { useState } from 'react'
// import HomeImage from './assets/images/ride.jpg'
import '../styles/signin.css'
import Image from '../assets/images/chill.jpeg'

export default function Signin() {

    return (
        <>
            <div className='signin' id='signin'>
                <div className='image-img'>
                    <span className='floating-arrow'>{`<`}</span>
                <img src={Image}/> 
                

                    <div className='signin-form'>
                        <div className='signin-btns'>
                            <button ><a href='#login'>Login</a></button> <button className='on-page'>Sign in </button>
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