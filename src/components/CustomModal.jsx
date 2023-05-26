import React from "react";
import { useSelector } from "react-redux";
import "./CustomModal.css";

const CustomModal = ({ id, showPopup, setShowPopup }) => {
  debugger;
  const allData = useSelector((state) => state.companyData.companies);
  const singleUser = allData.filter((ele) => ele.id == id);
  //console.log(singleUser, "singleData");

  return (
    <div className="modalBackground">
      <div className="container text-info">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
                <h2>Company Data</h2>
              <button
              onClick={()=>setShowPopup(false)}
                type="button"
                class="btn btn-close fa fa-window-close"
                data-dismiss="modal"
                aria-label="Close"
              >
                 <i class="fa fa-window-close  text-danger" aria-hidden="true">X</i>
              </button>
            </div>
            <div class="modal-body ">
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
                      value={singleUser[0].name}
                      disabled
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
                      value={singleUser[0].address}
                      disabled

                    />
                  </div>
                </div>

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
                      disabled
                      value={singleUser[0].employeeCount}

                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomModal;
