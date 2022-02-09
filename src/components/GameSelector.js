import React from 'react'

const GameSelector = (props) => {

    const handleClick = (event) => {
        props.selectGame(event.target.innerText)
    }
    
    return (
        <div className="selector">
            <ul>
                <li onClick={handleClick}>Animal Crossing</li>
                <li onClick={handleClick}>Animal Crossing: City Folk</li>
                <li onClick={handleClick}>Animal Crossing: Wild World</li>
                <li onClick={handleClick}>Animal Crossing: New Leaf</li>
                <li class="disabled">Animal Crossing: New Horizons</li>
            </ul>
        </div>
    )
}

export default GameSelector