import React from 'react';
import { Link } from 'react-router-dom';

const Banner = ({ mode }: { mode: string }) => {
  return (
    <>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><Link to={'/banner'}>Banners</Link></li>
          {mode === "create" && <li className="breadcrumb-item active" aria-current="page">Create</li>}
          {mode === "edit" &&
            <>
              <li className="breadcrumb-item"><Link to={'/banner/123/edit'}>BANNER_NAME</Link></li>
              <li className="breadcrumb-item active" aria-current="page">Edit</li>
            </>
          }
        </ol>
      </nav>
      <div className="mb-4 d-flex align-items-center justify-content-between">
        {mode === "edit" && <h4 className="fw-bold mb-0">BANNER_NAME</h4>}
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
              <label className="form-label">Nomi *</label>
              <input type="text" className="form-control" id="productNameInput" placeholder="Banner nomi"
                aria-describedby="defaultFormControlHelp" />
            </div>
            <div className="col-12">
              <label className="form-label">TAVSIFI</label>
              <textarea className="form-control" name="dsfs" id="productDescInput" 
                placeholder="Banner tavsifi"></textarea>
            </div>
          </div>
          <div className="row g-3 mb-4">
            <div className="col-12">
              <label className="form-label">ИМЯ *</label>
              <input type="text" className="form-control" id="productNameInput" placeholder="Название баннера"
                aria-describedby="defaultFormControlHelp" />
            </div>
            <div className="col-12">
              <label className="form-label">Описание</label>
              <textarea className="form-control" name="dsfs" id="productDescInput" 
                placeholder="Описание баннера"></textarea>
            </div>
          </div>
          <div className="row g-3">
            <div className="col-12">
              <label className="form-label">Name *</label>
              <input type="text" className="form-control" id="productNameInput" placeholder="Banner name"
                aria-describedby="defaultFormControlHelp" />
            </div>
            <div className="col-12">
              <label className="form-label">Description</label>
              <textarea className="form-control" name="dsfs" id="productDescInput" 
                placeholder="Banner description"></textarea>
            </div>
          </div>
        </div>
      </div>
      <div className="card mb-4">
        <div className="card-body">
          <h5>Images</h5>
          <input type="file" className="form-control" />
        </div>
      </div>

      <button className="btn btn-primary me-3">Save Changes</button>
      <button className="btn btn-secondary">Cancel</button>
    </>
  )
}

export default Banner;
