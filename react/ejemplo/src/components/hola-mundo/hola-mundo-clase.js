import react, { Component } from 'react';

class HolaMundo extends Component {
    render() {
        return (
            <div style={{marginTop:"10px", backgroundColor:"yellow"}}>
                <div style={{ width:"100%", textAlign:"center"}}>
                    Hola a Todos!!!
                </div>
                <div style={{ width:"100%", textAlign:"center"}}>
                    Como están ustedes?
                </div>
            </div>
        )
    }
}

export default HolaMundo;