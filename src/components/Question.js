import React from "react";

export default function Question(props) {
    // Logic

    // State variables
    const [state, setState] = React.useState("closed");

    // UI
    return (
        <div className="question">

            {
                (state === "closed") ? 
            <span onClick={() => setState("open")}>
                <p className="q-title">Question {props.index}</p>
                <ion-icon name="play-outline"></ion-icon>
            </span>
            :
            <div className="flashcard">
                {props.children}
            </div>
            }         
        </div>
    )
}