import React from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><Link to={'/contact'}>Contacts</Link></li>
          <li className="breadcrumb-item"><Link to={'/contact/123'}>BRANCH_NAME</Link></li>
          <li className="breadcrumb-item active" aria-current="page">Edit</li>
        </ol>
      </nav>
      <div className="mb-4 d-flex align-items-center justify-content-between">
        <h4 className="fw-bold mb-0">Contact</h4>
        <button className="btn btn-danger">Delete</button>
      </div>

      <div className="card mb-4">
        <div className="card-body">
          <div className="form-check form-switch mb-2">
            <input className="form-check-input" type="checkbox" id="visibilitySwitch" />
            <label className="form-check-label">Visible</label>
          </div>
          <div className="row g-3 mb-4">
            <div className="col-12">
              <label className="form-label">Name *</label>
              <input type="text" className="form-control" id="productNameInput" placeholder="Branch name"
                aria-describedby="defaultFormControlHelp" />
              {/* <div id="defaultFormControlHelp" className="form-text text-danger">We'll never share your details with anyone else.</div> */}
            </div>
            <div className="col-12">
              <label className="form-label">Phone</label>
              <textarea className="form-control" name="dsfs" id="productDescInput" 
                placeholder="Phone number"></textarea>
              {/* <div id="defaultFormControlHelp" className="form-text text-danger">We'll never share your details with anyone else.</div>  */}
            </div>
          </div>
        </div>
      </div>

      <button className="btn btn-primary me-3">Save Changes</button>
      <button className="btn btn-secondary">Cancel</button>
      {/* <button onClick={() => navigate(-1)}>Back</button> */}
    </>
  )
}

export default Contact
