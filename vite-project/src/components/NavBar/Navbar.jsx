import React from 'react'
import CartWidget from '../CartWidget/CartWidget'

const Navbar = () => {
    return(
        <nav>
            <h3>Tienda</h3>
            <div>
                <button>Llaveros</button>
                <button>Juguetes</button>

            </div>
            <CartWidget />

        </nav>
    
    )
}

export default Navbar