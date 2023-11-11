import React from 'react';
import { Link } from 'react-router-dom';

const Customers = () => {
  return (
    <>
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to={"/customer"}>Customers</Link></li>
                <li className="breadcrumb-item active" aria-current="page">List</li>
            </ol>
        </nav>
        <div className="mb-4 d-flex align-items-center justify-content-between">
            <h4 className="fw-bold mb-0">Customers</h4>
            <button className="btn btn-danger">Delete</button>
        </div>

        <div className="card">
            <div className="card-body">
            <table className="table table-striped table-bordered">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Actions</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td><Link to={'/customer/123'}>CUSTOMER NAME</Link></td>
                    <td>PHONE NUMBER</td>
                    <td>
                    <button className="btn btn-success">Edit</button>
                    </td>
                </tr>
                </tbody>
            </table>
            </div>
        </div>
    </>
  )
}

export default Customers;
