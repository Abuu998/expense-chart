import logo from "../assets/logo.svg"

export default function Header() {
    return (
        <header className="header flex-js-btween">
            <div className="left-section">
                My balance <span className="bold-text bold">$921.48</span>
            </div>
            <div className="logo-right">
                <img className="logo" src={logo} alt="Logo" />
            </div>
        </header>
    )
}
