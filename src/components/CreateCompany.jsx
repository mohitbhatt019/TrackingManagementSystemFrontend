import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { createNewCompany, getAllCompany } from "../features/CompanySlice";

const CreateCompany = () => {
    const [companyForm, setComapanyForm] = useState({});
    const applicationUserId=useSelector((state)=>state.app.id)
    const dispach=useDispatch();
    const navigate=useNavigate();
    const dispatch = useDispatch();

    const createError=useSelector((state)=>state.companyData.error)
  //This companyFormHandler is to get input data from textbox and we will create new company
    const companyFormHandler = (event) => {
        setComapanyForm({
          ...companyForm,
          [event.target.name]: event.target.value,
        });
      };
  console.log(companyForm)

  //  //This saveClick is to dispach form data
  const saveClick = () => {
    //debugger
    companyForm.applicationUserId = applicationUserId;
   // alert(companyForm.applicationUserId)
   dispach(createNewCompany(companyForm))
        navigate("/companyList")
    
  };


  return (
    <div>
      {" "}
      <form>
        <div className="container" >
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
                         onChange={companyFormHandler}
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
                         onChange={companyFormHandler}
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
                    value={applicationUserId}
                     onChange={companyFormHandler}
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
                        onChange={companyFormHandler}
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* Footer */}
              <div className="modal-footer bg-info">
                <button
                  className="btn btn-success"
                  onClick={saveClick}
                  data-dismiss="modal"
                >
                  Save
                </button>
                <Link to="/companyList" className="btn btn-danger" data-dismiss="modal">
                  Cancel
                </Link>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateCompany;
