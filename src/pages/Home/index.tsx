import React from 'react'
import Info from './info'
import Objectives from './objectives'
import Proposal from './proposal'
import Poll from './poll'
import './styles.css'

const Home: React.FC = () => {
    return (
        <div className='home'>
            <div className='banner'>
                <h1>EJE ESTADO</h1>
                <h2>
                    MODIFICACIÓN 22<br /> Al Plan Regulador Comunal de Rancagua
                </h2>
            </div>
            <div className='container'>
                <Info />
                <hr />
                <Proposal />
                <hr />
                <Objectives />
                <hr />
                <Poll />
            </div>
        </div>
    )
}

export default Home
