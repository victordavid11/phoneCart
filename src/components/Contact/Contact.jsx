import React from 'react'

const Contact = () => {
  return (
    <div>
        <div className="container mb-5">
            <div className="row">
                <div className="col-12 text-center py-4 my-4">
                    <h1>Have Some Questions?</h1>
                    <hr />
                </div>
            </div>

            <div className="row">
                <div className="col-md-5 d-flex justify-content-center">
                    <img src="/assets/images/contact.png" alt="Contact us" height='300px' width='300px' />
                </div>

                <div className="col-md-6">
                  <form>
                    <div className="mb-3">
                        <label htmlFor="" className="form-label"> Full Name</label>
                        <input type="text" className="form-control" placeholder='John Smith' />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="" className="form-label"> Email address</label>
                        <input type="text" className="form-control" placeholder='John@gmail.com' />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="" className="form-label"> Message</label>
                        <textarea type="text" className="form-control" placeholder='John Smith' rows='5'>
                        </textarea>
                    </div>

                    <button type="submit" className="btn btn-outline-primary">Send Message</button>
                    </form>  
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact