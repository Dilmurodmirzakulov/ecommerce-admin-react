import React from 'react';
import { Link } from 'react-router-dom';

const Payment = ({ mode }: { mode: string }) => {
  return (
    <>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><Link to={'/payment'}>Payments</Link></li>
          {mode === "create" && <li className="breadcrumb-item active" aria-current="page">Create</li>}
          {mode === "edit" &&
            <>
              <li className="breadcrumb-item"><Link to={'/payment/123/edit'}>PAYMENT_TYPE</Link></li>
              <li className="breadcrumb-item active" aria-current="page">Edit</li>
            </>
          }
        </ol>
      </nav>
      <div className="mb-4 d-flex align-items-center justify-content-between">
        {mode === "edit" && <h4 className="fw-bold mb-0">PAYMENT_TYPE</h4>}
        {mode === "edit" && <button className="btn btn-danger">Delete</button>}
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
            </div>
          </div>
        </div>
      </div>

      <button className="btn btn-primary me-3">Save Changes</button>
      <button className="btn btn-secondary">Cancel</button>
    </>
  )
}

export default Payment;
