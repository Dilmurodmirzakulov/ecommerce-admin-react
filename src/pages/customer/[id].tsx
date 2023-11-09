import React from 'react';
import { Link } from 'react-router-dom';

const Customer = () => {
  return (
    <>
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
            <li className="breadcrumb-item"><Link to={'/customer'}>Customers</Link></li>
            <li className="breadcrumb-item"><Link to={'/customer/123'}>CUSTOMER_NAME</Link></li>
            <li className="breadcrumb-item active" aria-current="page">Edit</li>
            </ol>
        </nav>
        <div className="mb-4 d-flex align-items-center justify-content-between">
            <h4 className="fw-bold mb-0">CUSTOMER_NAME</h4>
            <button className="btn btn-danger">Delete</button>
        </div>

        <div className="row g-3">
            <div className="col-md-8">
            <div className="card mb-4">
                <div className="card-body">
                <div className="row g-3">
                    {/* <div className="col-md-12"></div>  */}
                    <div className="col-md-6">
                    <label className="form-label">First name</label>
                    <input type="text" className="form-control" id="customerNameInput" placeholder="Customer first name"
                        aria-describedby="defaultFormControlHelp" />
                    <div id="defaultFormControlHelp" className="form-text text-danger">We'll never share your details with anyone else.</div> 
                    </div>
                    <div className="col-md-6">
                    <label className="form-label">Last name</label>
                    <input type="text" className="form-control" id="customerAddressInput"
                        placeholder="Customer last name" aria-describedby="defaultFormControlHelp" />
                    <div id="defaultFormControlHelp" className="form-text text-danger">We'll never share your details with anyone else.</div> 
                    </div>
                    <div className="col-md-6">
                    <label className="form-label">Phone</label>
                    <input type="text" className="form-control" id="customerPhoneInput" placeholder="Customer phone"
                        aria-describedby="defaultFormControlHelp" />
                    <div id="defaultFormControlHelp" className="form-text text-danger">We'll never share your details with anyone else.</div> 
                    </div>
                    <div className="col-md-6">
                    <label className="form-label">Address</label>
                    <input type="text" className="form-control" id="customerAddressInput" placeholder="Customer address"
                        aria-describedby="defaultFormControlHelp" />
                    </div> 
                </div>
                </div>
            </div>
            </div>
            <div className="col-md-4">
            <div className="card">
                <div className="card-body">
                <div className="mb-4">
                    <label className="form-label">Created at</label>
                    <div>03.02.2023</div>
                </div>
                <div>
                    <label className="form-label">Last modified at</label>
                    <div>03.02.2023</div>
                </div>
                </div>
            </div>
            </div>
        </div>

        <div className="mb-4">
            <button className="btn btn-primary me-3">Save Changes</button>
            <button className="btn btn-secondary">Cancel</button>
        </div>

        <div className="card">
            <div className="card-body">
            <div className="d-flex align-items-center justify-content-between mb-3">
                <h5 className="mb-0">Addresses</h5>
                <button className="btn btn-success">Add address</button>
            </div>
            <table className="table table-striped table-bordered">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Address</th>
                    <th scope="col">Actions</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>13 Muhammadniyoz str, Tashkent city, Uzbekistan</td>
                    <td>
                    <button className="btn btn-icon btn-warning me-2">
                        <i className='bx bx-pencil'></i>
                    </button>
                    <button className="btn btn-icon btn-danger">
                        <i className='bx bx-trash'></i>
                    </button>
                    </td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>13 Muhammadniyoz str, Tashkent city, Uzbekistan</td>
                    <td>
                    <button className="btn btn-icon btn-warning me-2">
                        <i className='bx bx-pencil'></i>
                    </button>
                    <button className="btn btn-icon btn-danger">
                        <i className='bx bx-trash'></i>
                    </button>
                    </td>
                </tr>
                </tbody>
            </table>
            </div>
        </div>
    </>
  )
}

export default Customer;
