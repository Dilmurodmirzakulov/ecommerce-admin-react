import React from 'react';
import { Link } from 'react-router-dom';

const Orders = () => {
  return (
    <>
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to={"/order"}>Orders</Link></li>
                <li className="breadcrumb-item active" aria-current="page">List</li>
            </ol>
        </nav>
        <div className="mb-4 d-flex align-items-center justify-content-between">
            <h4 className="fw-bold mb-0">Orders</h4>
            <button className="btn btn-warning">New order</button>
        </div>

        <div className="card">
            <div className="card-body">
            <table className="table table-striped table-bordered">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Number</th>
                    <th scope="col">Customer</th>
                    <th scope="col">Status</th>
                    <th scope="col">Total price</th>
                    <th scope="col">Shipping cost</th>
                    <th scope="col">Order data</th>
                    <th scope="col">Actions</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td><Link to={'/order/123'}>OR239233</Link></td>
                    <td>Ernestie Hoeger</td>
                    <td><span className="badge bg-label-danger">Cancelled</span></td>
                    <td>1595.35</td>
                    <td>351.49</td>
                    <td>Jun 20, 2023</td>
                    <td>
                    <button className="btn btn-success">Edit</button>
                    </td>
                </tr>
                <tr>
                    <th scope="row">1</th>
                    <td><Link to={'/order/123'}>OR239233</Link></td>
                    <td>Ernestie Hoeger</td>
                    <td><span className="badge bg-label-warning">Processing</span></td>
                    <td>1595.35</td>
                    <td>351.49</td>
                    <td>Jun 20, 2023</td>
                    <td>
                    <button className="btn btn-success">Edit</button>
                    </td>
                </tr>
                <tr>
                    <th scope="row">1</th>
                    <td><Link to={'/order/123'}>OR239233</Link></td>
                    <td>Ernestie Hoeger</td>
                    <td><span className="badge bg-label-dark">New</span></td>
                    <td>1595.35</td>
                    <td>351.49</td>
                    <td>Jun 20, 2023</td>
                    <td>
                    <button className="btn btn-success">Edit</button>
                    </td>
                </tr>
                <tr>
                    <th scope="row">1</th>
                    <td><Link to={'/order/123'}>OR239233</Link></td>
                    <td>Ernestie Hoeger</td>
                    <td><span className="badge bg-label-success">Delivered</span></td>
                    <td>1595.35</td>
                    <td>351.49</td>
                    <td>Jun 20, 2023</td>
                    <td>
                    <button className="btn btn-success">Edit</button>
                    </td>
                </tr>
                <tr>
                    <th scope="row">1</th>
                    <td><Link to={'/order/123'}>OR239233</Link></td>
                    <td>Ernestie Hoeger</td>
                    <td><span className="badge bg-label-success">Shipped</span></td>
                    <td>1595.35</td>
                    <td>351.49</td>
                    <td>Jun 20, 2023</td>
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

export default Orders;
