import React, { useState, useEffect } from 'react';

export default function LikeCounter() {
    const initial_numLikes = 0;
    const [numLikes, set_numLikes] = useState(initial_numLikes); // <- using state!

    const increment = () => {
        //console.log("Yes, clicked! Current number of likes:", numLikes);
        set_numLikes(numLikes + 1);

    };

    function reset() {
        set_numLikes(0);
    }


    const [liked, set_liked] = useState(false);

    function clickLike() {
        set_liked(!liked);
    }

    console.log("A render!");

    useEffect(() => {
        console.log("The useEffect action!");
    }, []);



    return (
        <div>
            <p>
                <button onClick={increment}>add like!</button>

                This post has <b>{numLikes}</b> likes!
                <button onClick={reset}>reset</button>
                <button onClick={clickLike}>{liked === false ? "Like" : "Unlike"}</button>
            </p>
        </div>
    );
} 