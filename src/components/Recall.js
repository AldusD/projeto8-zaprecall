import React from "react";

import party from "../assets/party.png";
import sad from "../assets/sad.png";
import lilLogo from "../assets/logo-pequeno.png";
import xizin from "../assets/xizin.png";
import vezin from "../assets/vezin.png";
import inter from "../assets/inter.png";
import Flashcard from "./Flashcard";
import Question from "./Question";

export default function Recall() {

    // Logic
    const compare = () => {
        return Math.random() - 0.5;
    }

    const cardsArr = [
        {q: "Who is the chess world Champion?", a: "Magnus Carlsen"},
        {q: "Which is the best first move (according to Fischer)?", a: "e4 the best by test"},
        {q: "How many special moves does the pawn have?", a: "3: En passant, Promotion and 2 squares on first move"},
        {q: "which move defines the sicilian defense?", a: "1...c5"}
    ]
    
    // State Variables
    const [answered, setAnswered] = React.useState(0);
    const [cards, setCards] = React.useState(cardsArr.sort(compare));
    const [hadError, setHadError] = React.useState("no");
    const [results, setResults] = React.useState([]);
    const [finished, setFinished] = React.useState("no");

    // UI
    return (
        <div className="recall">
            <div className="header">
                <img src={lilLogo} />
                <h1 className="righteous">ZapRecall</h1>
            </div>
            <div className="game">
                <Question index="1">
                    <Flashcard question={cards[0].q} answer={cards[0].a} answered={answered} setAnswered={setAnswered} index="1" setHadError={setHadError} results={results} setResults={setResults} setFinished={setFinished} />
                </Question>
                <Question index="2">
                    <Flashcard question={cards[1].q} answer={cards[1].a} answered={answered} setAnswered={setAnswered} index="2" setHadError={setHadError} results={results} setResults={setResults} setFinished={setFinished} />
                </Question>
                <Question index="3">
                    <Flashcard question={cards[2].q} answer={cards[2].a} answered={answered} setAnswered={setAnswered} index="3" setHadError={setHadError} results={results} setResults={setResults} setFinished={setFinished} />
                </Question>
                <Question index="4">
                    <Flashcard question={cards[3].q} answer={cards[3].a} answered={answered} setAnswered={setAnswered} index="4" setHadError={setHadError} results={results} setResults={setResults} setFinished={setFinished} />
                </Question>
            </div>
            <div className="footer">
                {(finished === "no")  ? <></>:
                
                (hadError === "no") ?
                <div className="message">
                <div>
                    <img src={party} />
                    <h4>Congratulations!</h4>
                </div>
                <p>You are in shape for any test!</p>
                </div>
                :
                <div className="message">
                <div>
                    <img src={sad} />
                    <h4>Something to fix...</h4>
                </div>    
                <p>but "dont make it bad" we just have some stuff to work on</p>
                </div>
            }
                <p>{answered}/4 Done</p>
                <div className="footer-icons">
                    {results.map((r, i) => <img key={i} src={r} />)}
                </div>
            </div>
        </div>
    );
}