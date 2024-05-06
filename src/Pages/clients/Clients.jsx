import React from 'react'
import "./clients.scss"
import ClientCarosal from '../../components/carosal/ClientCarosal'
const Clients = () => {
  return (
    <div className='container-client'>
        <div className='container-heading'>
            <h1>Our Clients</h1>
            <p>Businesses we’ve helped build…websites for.</p>   
        </div>
        <ClientCarosal/>
    </div>
  )
}

export default Clients