import { Link } from 'react-router-dom'
import './Header.css'

export default function Header() {

    return (
        <div className="header">
            <img src="../kasa.svg" alt="Kasa LOGO" />
            <div className="navbar">
                <Link to="/">Accueil</Link>
                <Link to="/about">A propos</Link>
            </div>
        </div>
    )

}