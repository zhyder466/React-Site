import React from "react";

function Contact() {
  const [data, setData] = React.useState({
    fullname: "",
    phone: "",
    email: "",
    message: ""

  });
  const formSubmit = (e) => {
    e.preventDefault();
    alert(`My name: ${data.fullname}, my phone: ${data.phone}, my email: ${data.email} and my message: ${data.message}`)
  }
  const inputEvent = (event) => {
    const { name, value } = event.target;
    setData((prev) => {
      return {
        ...prev,
        [name]: value
      }
    })
  }

  return (
    <>
      <div className="my-4">
        <h1 className="text-center contact"> Contact Me</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Full Name</label>
                <input name="fullname" value={data.fullname} onChange={inputEvent} type="text" className="form-control" id="exampleFormControlInput1" placeholder="enter your name" />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Phone </label>
                <input name="phone" value={data.phone} onChange={inputEvent} type="text" className="form-control" id="exampleFormControlInput1" placeholder="i-e +923018989066" />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Email address</label>
                <input name="email" value={data.email} onChange={inputEvent} type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">Message</label>
                <textarea name="message" value={data.message} onChange={inputEvent} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>
              <div class="col-12">
                <button class="btn btn-outline-primary sub-btn" type="submit">Send</button>
              </div>
            </form>
          </div>

        </div>
      </div>

    </>
  )
}

export default Contact;
