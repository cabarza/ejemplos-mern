import react from 'react';
import HolaMundo from '../hola-mundo/hola-mundo';

const Main = () => {

    return (
        <>
            <div style={{height:"100px", with:"100%", textAlign:"center", backgroundColor:"green", color:"white"}}>
                <h1>Header</h1>
            </div>
            <HolaMundo />
        </>
    )
}

export default Main;