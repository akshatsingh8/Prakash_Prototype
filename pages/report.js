import React from 'react'
import Link from 'next/link';
import geolocation from './geolocation.js'


const report = () => {
  return (
  <div>This The Reporting Page.
    <div><Link href='/'><p> Back to Home </p></Link></div>
    <div>
      <h1>Click Here</h1>
      <button class="find-state"> Find My State</button>
    </div>
    


  </div>
  )
}

export default report