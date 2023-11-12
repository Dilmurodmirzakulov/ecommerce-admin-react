import { getBranch } from '../../api';
import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';

const Contacts = () => {
    const fetchBranches = async () => {
        try {
            let res = await getBranch()
            console.log("Branches", res)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchBranches()
    }, [])

    return (
        <>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to={"/contact"}>Contacts</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">List</li>
                </ol>
            </nav>

            <div className="mb-4 d-flex align-items-center justify-content-between">
                <h4 className="fw-bold mb-0">Contacts</h4>
                <Link to={'/contact/new'} className="btn btn-primary">Create contact</Link>
            </div>

            <div className="card">
                <div className="card-body">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Branch name</th>
                                <th scope="col">Phone</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td><Link to={'/contact/123/edit'}>BRANCH NAME</Link></td>
                                <td>PHONE NUMBER</td>
                                <td>
                                    <Link to={'/contact/123/edit'} className="btn btn-success">Edit</Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Contacts;
