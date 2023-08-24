import "./ContactUs.css"

const ContactUs = () => {
    return (
        <form>
            <div className="my-2">
                <label htmlFor="email" className="form-label">Email</label>
                <br/>
                <input type="email" name="email" id="email" placeholder="example@mail.ru" className="form-control"/>
            </div>
            <div className="d-flex align-items-center gap-1 my-2">
                <input type="checkbox" name="checkbox" id="checkbox"/>
                <label htmlFor="checkbox">Terms &amp; confidential</label>
            </div>
            <div className="d-flex justify-content-end">
                <button className="btn btn-sm btn-primary">Submit</button>
            </div>
        </form>
    )
}

export default ContactUs