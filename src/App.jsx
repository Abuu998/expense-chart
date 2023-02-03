import Header from "./components/Header"
import Main from "./components/Main"
import "./index.css"

function App() {

    return (
        <div className="wrapper">
            <Header />
            <Main />
            <p className="credit">Challenge by <a className="link" target="_blank" href="https://www.frontendmentor.io/home">Frontend Mentor</a>. Coded by <a className="link" target="_blank" href="https://github.com/Abuu998">Abubakar NDUWIMANA</a>.</p>
        </div>
    )
}

export default App
