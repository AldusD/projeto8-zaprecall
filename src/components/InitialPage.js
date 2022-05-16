import logo from "../assets/logo.png"

export default function InitialPage({setPage}) {
    return(
        <div className="initial-page">
            <div className="container">
                <img src={logo} />
                <h1 className="righteous" >ZapRecall</h1>
                <button onClick={() => setPage("recall")}>Start Recall</button>
            </div>
        </div>
    );
}