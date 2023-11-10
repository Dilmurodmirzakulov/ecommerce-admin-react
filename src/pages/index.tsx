import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <h4 className="fw-bold mb-4">Dashboard</h4>

      <div className="row g-3 mb-4">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body d-flex p-3 justify-content-between align-items-center">
              <div className="d-flex">
                <div className="flex-shrink-0 me-3">
                  <div className="avatar avatar-online">
                    <img
                      src="https://demos.themeselection.com/sneat-bootstrap-html-admin-template-free/assets/img/avatars/1.png"
                      alt="" className="w-px-40 h-auto rounded-circle" />
                  </div>
                </div>
                <div className="flex-grow-1">
                  <span className="fw-medium d-block">John Doe</span>
                  <small className="text-muted">Admin</small>
                </div>
              </div>
              <button className="btn btn-outline-danger">Sign out</button>
            </div>
          </div>
        </div>
        {/* <div className="col-md-6">
          <div className="card">
            <div className="card-body">

            </div>
          </div>
        </div>  */}
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
                <td><Link to={'/product/123'}>PRODUCT NAME</Link></td>
                <td>PRICE</td>
                <td>
                  <div className="badge badge-center rounded-pill bg-label-danger">
                    <i className='bx bx-x-circle'></i>
                  </div>
                </td>
                <td>
                  <button className="btn btn-success">Edit</button>
                </td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Mark</td>
                <td><Link to={'/product/123'}>PRODUCT NAME</Link></td>
                <td>PRICE</td>
                <td>
                  <div className="badge badge-center rounded-pill bg-label-success">
                    <i className='bx bx-check-circle'></i>
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

export default Home;