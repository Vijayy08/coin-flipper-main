import React from 'react' 

const Coin = (props) =>{
    return(
        <div className="coinContainer">
            {props.face===1 ? <img className="coin" src="https://qph.fs.quoracdn.net/main-qimg-e7f5fdc6bdc2613c3cff631ab78f4adf" /> : 
            <img className="coin" src="https://qph.fs.quoracdn.net/main-qimg-148ae81e6fe0500e130fb547026a9b26" /> }
        </div>
    )
}

export default Coin