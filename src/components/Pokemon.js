// src/components/Pokemon.js
import React from "react";

export default function Pokemon(props) {
    return (
        <div>
            <h2>Pokemon name: {props.name}</h2>
            <p>Weight: {props.weight} kg</p>
            <p>Awesome: {props.awesome ? "YES!" : "No, not really"}</p>
            <p>Terrifying: {props.terrifying ? "Very" : "nah, lovable"}</p>
            <p>Abilities: {props.abilities.length}</p>
            <ul>
                {props.abilities.map(ability => {
                    return <li>{ability}</li>;
                })}
            </ul>
        </div>
    );
}