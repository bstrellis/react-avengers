import React from 'react';

function CharacterList(props) {
    return (
        <ul>
            {props.characters.map(avenger => <li>{avenger}</li>)}
        </ul>
    )
}

export default CharacterList;