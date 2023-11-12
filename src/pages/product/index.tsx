import { getProduct } from '../../api';
import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';

const Products = () => {
    const fetchProducts = async () => {
        try {
            let res = await getProduct("uz")
            console.log("Products", res)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    return (
        <>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to={'/product'}>Products</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">List</li>
                </ol>
            </nav>
            <div className="mb-4 d-flex align-items-center justify-content-between">
                <h4 className="fw-bold mb-0">Products</h4>
                <Link to={"/product/new"} className="btn btn-primary">Create product</Link>
            </div>

            <div className="card">
                <div className="card-body">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Image</th>
                                <th scope="col">Name</th>
                                <th scope="col">Price</th>
                                <th scope="col">Visibility</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td><Link to={'/product/123/edit'}>PRODUCT NAME</Link></td>
                                <td>PRICE</td>
                                <td>
                                    <div className="badge badge-center rounded-pill bg-label-danger">
                                        <i className='bx bx-x-circle'></i>
                                    </div>
                                </td>
                                <td>
                                    <Link to={'/product/123/edit'} className="btn btn-success">Edit</Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Products;
