import '../App.css';
import React from 'react';
import {Link} from 'react-router-dom'

export function NavBar() {
    return(
        <nav className='navbar'>
            <ul>
                <li>
                    <Link to='/ListaDeProductos'>Productos</Link>
                </li>
            </ul>
        </nav>
    )
}