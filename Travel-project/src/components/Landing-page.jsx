import { useState } from 'react'
// import HomeImage from './assets/images/ride.jpg'
import '../styles/landing-page.css'

function Landing() {

  return (
    <>
      <div className='main'>
        <div className='welcome-msg'>
          <h1>
            Make Your Dream A Reality
          </h1>
          <h3>The perfect travel companion for your next trip.</h3>
          <button className='start'><span>{`>>`}</span> Get started</button>

        </div>
      </div>

    </>
  )
}

export default Landing
