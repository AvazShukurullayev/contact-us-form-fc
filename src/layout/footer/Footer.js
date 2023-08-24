import "./Footer.css"

const Footer = () => {
    return (
        <footer className="footer bg-warning py-3 mt-5 shadow">
            <div className="container">
                <h5 className="text-center">&copy; Copyright Reserved {new Date().getFullYear()}</h5>
            </div>
        </footer>
    )
}

export default Footer