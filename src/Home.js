import React from 'react'
// We'll need React Router's own version of the History API
import { useHistory } from 'react-router-dom'

export default function Home() {
    return(
        <div className='home'>
            <button id='order-pizza'>Pizza?</button>
        </div>
    )
}