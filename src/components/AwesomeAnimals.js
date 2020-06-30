import React from 'react';

export default function Animals() {

    return <div>
        <ul>
            {["Chicken", "Sloth", "Porcupine", "Killer whale", "Velociraptor"].map(
                animal => {
                    return <li>{animal}</li>;
                }
            )}
        </ul>

    </div>
}