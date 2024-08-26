import React, { useContext, useEffect, useState } from 'react'
import './home.css'

const Home = () => {
	   const {data, getChain, addChian} = useContext(ApiContext);
	  const [showModal, setShowModal] = useState(false);

	return ( 
		<div className='container'>
      <span className='title'>Bienvenido blockchain</span>
    </div>
	)
}


export default Home
