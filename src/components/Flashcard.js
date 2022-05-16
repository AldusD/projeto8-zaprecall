import React from "react";

import xizin from "../assets/xizin.png";
import vezin from "../assets/vezin.png";
import inter from "../assets/inter.png";
import setinha from "../assets/setinha.png"

export default function Flashcard ({question, answer, answered, setAnswered, index, setHadError, results, setResults, setFinished}) {
    // Logic
    const defineIcon = result => {
        let icon;
        if(result === "a-not-remembered") {icon = xizin;}
        if(result === "a-almost-n-r") {icon = inter;}
        if(result === "a-zap") {icon = vezin;}
        return icon;
    }

    const answerQuestion = result => {
        setAnswered(answered + 1);      
        if(answered + 1 == 4) setFinished("yes");  
        setState(result);
        if(result === "a-not-remembered") {
            setHadError("yes");
        }
        const icon = defineIcon(result);
        setResults([...results, icon]);
    } 

    //State Variables
    const [state, setState] = React.useState("question"); 

    // UI
    return (
        <div className="flashcard">
        {
            (state === "question") ? 
            <div className="front-face" onClick={() => setState("answer")}>
                <p>{question}</p>
                <img src={setinha} />
            </div>
            :
            (state === "answer") ?
            <div className="back-face">
                <p>{answer}</p>
                <div className="buttons">
                    <button onClick={() => answerQuestion("a-not-remembered")} className="not-remembered">Not remembered</button>
                    <button onClick={() => answerQuestion("a-almost-n-r")} className="almost-n-r">Almost not remembered</button>
                    <button onClick={() => answerQuestion("a-zap")} className="zap">Zap!</button>
                </div>
            </div>
            :
            <div className="answered">
                <span>
                    <p className={"q-title " + state}>Question {index}</p>
                    <img src={defineIcon(state)} />
                </span>
            </div>
        }     
        </div>
    )
}