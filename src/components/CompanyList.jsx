import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const CompanyList = () => {
  return (
    <div>  <div className="row">
    <div className="col-8">
      <h2>Company List</h2>
    </div>
    <div className="col-3">
      <button
        className="btn btn-info"
        data-toggle="modal"
        data-target="#newModal"
      >
        <FontAwesomeIcon icon={faPlus} className="mr-2" />
        Add Company
      </button>
    </div>
  </div>
  <table className="table table-bordered table-hover">
    <thead>
      <th>Id</th>
      <th>Name</th>
      <th>Address</th>
      <th>Employee Count</th>
      <th>Action</th>
    </thead>
    {/* {companies.map((ele) => {
      return (
        <tbody>
          <tr key={ele.id}>
            <td>{ele.id}</td>
            <td>{ele.name}</td>
            <td>{ele.address}</td>
            <td>{ele.employeeCount}</td>
            <td>
              <button className="btn btn-info m-1 p-1 ">View</button>
              <button className="btn btn-info m-1 p-1">Edit</button>
              <button className="btn btn-info m-1 p-1">Delete</button>
            </td>
          </tr>
        </tbody>
      );
    })} */}
  </table>
  <form>
    <div className="modal" id="newModal" role="dialog">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Add Company</h5>
            <button
              type="button"
              class="btn btn-close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <i class="fa fa-window-close" aria-hidden="true"></i>
            </button>
          </div>
          <div class="modal-body">
            <div className="modal-body">
              {/* //Name */}
              <div className="form-group row">
                <label for="txtcompanyName" className="col-sm-4">
                  Company Name
                </label>
                <div className="col-sm-8">
                  <input
                    type="text"
                    id="txtcompanyName"
                    name="name"
                    placeholder="Enter Company Name"
                    className="form-control"
                   // onChange={companyFormHandler}
                  />
                </div>
              </div>

              {/* //Address */}
              <div className="form-group row">
                <label for="txtcompanyAddress" className="col-sm-4">
                  Company Address
                </label>
                <div className="col-sm-8">
                  <input
                    type="text"
                    id="txtcompanyAddress"
                    name="address"
                    placeholder="Enter Company Address"
                    className="form-control"
                   // onChange={companyFormHandler}
                  />
                </div>
              </div>

              {/* //ApplicationUserId */}
              <input
                type="hidden"
                id="id"
                name="applicationUserId"
                placeholder="Enter Company Address"
                className="form-control"
                //value={applicationUserId}
               // onChange={companyFormHandler}
              />
              {/* //Employee Count */}
              <div className="form-group row">
                <label for="txtEmpCount" className="col-sm-4">
                  Employee Count
                </label>
                <div className="col-sm-8">
                  <input
                    type="number"
                    id="txtEmpCount"
                    name="employeeCount"
                    placeholder="Enter Employee Count"
                    className="form-control"
                    //onChange={companyFormHandler}
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Footer */}
          <div className="modal-footer bg-info">
            <button
              className="btn btn-success"
              //onClick={saveClick}
              data-dismiss="modal"
            >
              Save
            </button>
            <button className="btn btn-danger" data-dismiss="modal">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  </form></div>
  )
}

export default CompanyList