import '../css/nav.css';
export default function header(){

    return <nav className = "nav">
        <a href = "/" className = "site-title">Movie and Food</a>

        <ul>
            <li>
                <a href = "/about">About Us</a>
            </li>
            <li>
                <a href = "/favcombos">Favorite Combos</a>
            </li>
        </ul>
        


    </nav>
}