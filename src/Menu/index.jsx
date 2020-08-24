import React from 'react'
import './Menu.css'
import { Link } from 'react-router-dom'

export default props => (
    <nav id="pages">
        <ul>
            <li className='button'><Link to="/operation">Incluir</Link></li>
            <li className='button'><Link to="/summary">Listar</Link></li>
        </ul>
    </nav>
)