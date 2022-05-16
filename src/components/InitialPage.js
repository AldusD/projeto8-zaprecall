import logo from "../assets/logo.png"

export default function InitialPage() {
    return(
        <div className="initial-page">
            <div className="container">
                <img src={logo} />
                <h1>ZapRecall</h1>
                <button className="recursive">Iniciar Recall</button>
            </div>
        </div>
    );
}