import React from 'react'
// We'll need React Router's own version of the History API
import { useHistory } from 'react-router-dom'



export default function Home() {
    const history = useHistory();

    const routeToOrder = () => {
        console.log('Routing to order form')
        history.push('/pizza')
    }
    
    return(
        <div className='home'>
            <button 
            onClick={routeToOrder} 
            id='order-pizza'
            >Pizza?
            </button>
        </div>
    )
}