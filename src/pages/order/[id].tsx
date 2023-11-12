import React from 'react';
import { Link } from 'react-router-dom';

const Order = ({ mode }: { mode: string }) => {
    console.log("mode", mode)
  return (
    <>
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item">
                    <Link to={'/order'}>Orders</Link>
                </li>
                {mode === "create" && <li className="breadcrumb-item active" aria-current="page">Create</li>}
                {mode === "edit" &&
                    <>
                        <li className="breadcrumb-item"><Link to={'/order/123/edit'}>ORDER_NUMBER</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">Edit</li>
                    </>
                }
            </ol>
        </nav>
        <div className="mb-4 d-flex align-items-center justify-content-between">
            {mode === "edit" && <h4 className="fw-bold mb-0">ORDER_NUMBER</h4>}
            {mode === "edit" && <button className="btn btn-danger">Delete</button>}
        </div>

        <div className="row g-3">
        <div className="col-md-8">
            <div className="card mb-4">
            <div className="card-body">
                <div className="row g-3">
                <div className="col-md-6">
                    <label className="form-label">Number</label>
                    <input
                    type="text"
                    className="form-control"
                    id="customerNumberInput"
                    placeholder="Number"
                    aria-describedby="defaultFormControlHelp" />
                </div>
                <div className="col-md-6">
                    <label className="form-label">Customer *</label>
                    <input
                    type="text"
                    className="form-control"
                    id="customerFullNameInput"
                    placeholder="Customer Full Name"
                    aria-describedby="defaultFormControlHelp" />
                </div>
                <div className="col-md-6">
                    <label className="form-label">Status</label>
                    <input
                    type="text"
                    className="form-control"
                    id="orderStatusInput"
                    placeholder="Order Status"
                    aria-describedby="defaultFormControlHelp" />
                </div>
                <div className="col-md-6">
                    <label className="form-label">Country</label>
                    <input
                    type="text"
                    className="form-control"
                    id="countryInput"
                    placeholder="Country"
                    aria-describedby="defaultFormControlHelp" />
                </div>
                <div className="col-md-12">
                    <label className="form-label">Address</label>
                    <input
                    type="text"
                    className="form-control"
                    id="addressInput"
                    placeholder="Order Status"
                    aria-describedby="defaultFormControlHelp" />
                </div>
                <div className="col-12">
                    <label className="form-label">Notes</label>
                    <textarea
                    className="form-control"
                    name="dsfs"
                    id="notesInput"
                    placeholder="Product Description"></textarea>
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

        <div className="row mb-4">
        <div className="col-md-8">
            <div className="card">
            <div className="card-body">
                <h5>Order items</h5>
                <div className="row g-3 mb-4">
                <div className="col-md-12">
                    <div className="d-flex justify-content-between">
                    <button className="btn badge badge-center rounded-pill bg-label-secondary">
                        <i className='bx bx-move' ></i>
                    </button>
                    <button className="btn badge badge-center rounded-pill bg-label-danger">
                        <i className='bx bxs-trash'></i>
                    </button>
                    </div>
                </div>
                <div className="col-md-6">
                    <label className="form-label">Product *</label>
                    <input
                    type="text"
                    className="form-control"
                    id="productInput"
                    placeholder="Product"
                    aria-describedby="defaultFormControlHelp" />
                </div>
                <div className="col-md-2">
                    <label className="form-label">Quantity *</label>
                    <input
                    type="text"
                    className="form-control"
                    id="quantityInput"
                    placeholder=""
                    aria-describedby="defaultFormControlHelp" />
                </div>
                <div className="col-md-4">
                    <label className="form-label">Unit price</label>
                    <input
                    type="text"
                    className="form-control"
                    id="unitPriceInput"
                    placeholder=""
                    aria-describedby="defaultFormControlHelp" />
                </div>
                </div>
                <div className="row g-3 mb-4">
                <div className="col-md-12">
                    <div className="d-flex justify-content-between">
                    <button className="btn badge badge-center rounded-pill bg-label-secondary">
                        <i className='bx bx-move' ></i>
                    </button>
                    <button className="btn badge badge-center rounded-pill bg-label-danger">
                        <i className='bx bxs-trash'></i>
                    </button>
                    </div>
                </div>
                <div className="col-md-6">
                    <label className="form-label">Product *</label>
                    <input
                    type="text"
                    className="form-control"
                    id="productInput"
                    placeholder="Product"
                    aria-describedby="defaultFormControlHelp" />
                </div>
                <div className="col-md-2">
                    <label className="form-label">Quantity *</label>
                    <input
                    type="text"
                    className="form-control"
                    id="quantityInput"
                    placeholder=""
                    aria-describedby="defaultFormControlHelp" />
                </div>
                <div className="col-md-4">
                    <label className="form-label">Unit price</label>
                    <input
                    type="text"
                    className="form-control"
                    id="unitPriceInput"
                    placeholder=""
                    aria-describedby="defaultFormControlHelp" />
                </div>
                </div>
                <div className="row g-3 mb-4">
                <div className="col-md-12">
                    <div className="d-flex justify-content-between">
                    <button className="btn badge badge-center rounded-pill bg-label-secondary">
                        <i className='bx bx-move' ></i>
                    </button>
                    <button className="btn badge badge-center rounded-pill bg-label-danger">
                        <i className='bx bxs-trash'></i>
                    </button>
                    </div>
                </div>
                <div className="col-md-6">
                    <label className="form-label">Product *</label>
                    <input
                    type="text"
                    className="form-control"
                    id="productInput"
                    placeholder="Product"
                    aria-describedby="defaultFormControlHelp" />
                </div>
                <div className="col-md-2">
                    <label className="form-label">Quantity *</label>
                    <input
                    type="text"
                    className="form-control"
                    id="quantityInput"
                    placeholder=""
                    aria-describedby="defaultFormControlHelp" />
                </div>
                <div className="col-md-4">
                    <label className="form-label">Unit price</label>
                    <input
                    type="text"
                    className="form-control"
                    id="unitPriceInput"
                    placeholder=""
                    aria-describedby="defaultFormControlHelp" />
                </div>
                </div>
            </div>
            </div>
        </div>
        <div className="col-md-4"></div>
        </div>

        <div className="mb-4">
        <button className="btn btn-primary me-3">Save Changes</button>
        <button className="btn btn-secondary">Cancel</button>
        </div>
    </>
  )
}

export default Order;
