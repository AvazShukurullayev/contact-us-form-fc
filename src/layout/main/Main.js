import "./Main.css"
import ContactUs from "../../components/contact-us/ContactUs";

const Main = () => {
    return (
        <main className="main my-5">
            <section className="contact-us">
                <div className="container">
                    <div className="row">
                        <div className="col-4 mx-auto">
                            <div className="card">
                                <div className="card-header bg-dark text-light"><h4 className="text-center">Contact Us</h4></div>
                                <div className="card-body">
                                    <ContactUs/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Main