import { getPayment } from '../../api';
import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';

const Payments = () => {
    const fetchPayments = async () => {
        try {
            let res = await getPayment()
            console.log("Payments", res)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchPayments()
    }, [])
    
  return (
    <>
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to={"/payment"}>Payments</Link></li>
                <li className="breadcrumb-item active" aria-current="page">List</li>
            </ol>
        </nav>
        
        <div className="mb-4 d-flex align-items-center justify-content-between">
            <h4 className="fw-bold mb-0">Payments</h4>
            <Link to={'/payment/new'} className="btn btn-primary">Create payment</Link>
        </div>

        <div className="card">
            <div className="card-body">
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Payment type</th>
                            <th scope="col">Visibility</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td><Link to={'/payment/123/edit'}>PAYMENT TYPE</Link></td>
                            <td>
                                <div className="badge badge-center rounded-pill bg-label-danger">
                                    <i className='bx bx-x-circle'></i>
                                </div>
                            </td>
                            <td>
                                <Link to={'/payment/123/edit'} className="btn btn-success">Edit</Link>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </>
  )
}

export default Payments;
