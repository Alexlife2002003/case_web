import React from 'react'

const Home = () => {
    return (
        <div>
            <h1>Bienvenido lo lograste</h1>
            <h2 >id: {localStorage.getItem('id')}</h2>
            <h2 >token: {localStorage.getItem('token')}</h2>
            <div style={{ height: '1000px' }}></div>
        </div>
    )
}

export default Home