import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { getSlider } from '../api';

const Banners = () => {
    const fetchBanners = async () => {
        try {
            let res = await getSlider("uz")
            console.log(res)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchBanners()
    }, [])
    return (
        <>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to={'/banner'}>Banners</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">List</li>
                </ol>
            </nav>
            <div className="mb-4 d-flex align-items-center justify-content-between">
                <h4 className="fw-bold mb-0">Banners</h4>
                <button className="btn btn-primary">Create banner</button>
            </div>

            <div className="card">
                <div className="card-body">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Image</th>
                                <th scope="col">Name</th>
                                <th scope="col">Description</th>
                                <th scope="col">Visibility</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td><Link to={'/banner/123'}>Banner name</Link></td>
                                <td>Something</td>
                                <td>
                                    <div className="badge badge-center rounded-pill bg-label-danger">
                                        <i className='bx bx-x-circle'></i>
                                    </div>
                                </td>
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

export default Banners;
