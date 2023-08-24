import "./Header.css"

const Header = () => {
    return (
        <header className="header bg-warning py-3 shadow mb-5">
            <div className="container">
                <nav className="nav d-flex align-items-center justify-content-between">
                    <a href="#!" className="nav__logo fs-2 text-decoration-none">Contact Us</a>
                    <ul className="nav__list d-flex align-items-center gap-4">
                        <li className="nav__item"><a href="#!" className="nav__link fs-5 text-decoration-none">About</a></li>
                        <li className="nav__item"><a href="#!" className="nav__link fs-5 text-decoration-none">Contact</a></li>
                        <li className="nav__item"><a href="#!" className="nav__link fs-5 text-decoration-none">Support &amp; Help</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header