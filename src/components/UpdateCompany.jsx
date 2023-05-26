import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { updateCompany } from "../features/CompanySlice";

const UpdateCompany = () => {
  const [updatedData, setUpdatedData] = useState();
  const companies = useSelector((state) => state.companyData.companies);
  const company = companies.length > 0 ? companies[0] : {};
  const [updateData, setUpdateData] = useState();
  const { id } = useParams();
  const singleData=companies.filter((ele)=>ele.id==parseInt(id));
console.log(singleData,"ingleData");
  const dispatch = useDispatch();
  const navigate = useNavigate();
const[name,setName]=useState()
  //this useeffect is to get find the user details from id that we will get from url using params
  useEffect(() => {
    debugger;
    if (id) {
      console.log(companies,"companiessssssssss")
      console.log(companies,"singleData")

      setUpdateData(singleData[0]);
    }
  }, [id,singleData]);
  const changeHandler = (event) => {
    setUpdateData({
      ...updateData,
      [event.target.name]:event.target.value,
    });
    //console.log(updateData,"updateData")
  };
  const saveClick = (data) => {
   // debugger;
   console.log(data,"dara");
    dispatch(updateCompany(data));
    navigate("/companyList")
  };
  return (
    <div>
      <form>
        <div className="container text-info">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h2>Company Data</h2>
                <Link
                  to="/companyList"
                  type="button"
                  class="btn btn-close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <i class="fa fa-window-close" aria-hidden="true">
                    X
                  </i>
                </Link>
              </div>
              <div class="modal-body">
                <div className="modal-body">
                  {/* CompamyId */}
                  <div className="form-group row">
                    <label for="txtcompanyId" className="col-sm-4">
                      Company Id
                    </label>
                    <div className="col-sm-8">
                      <input
                        type="text"
                        id="txtcompanyId"
                        name="id"
                        placeholder="Enter Company Name"
                        className="form-control"
                        value={updateData?.id}
                        disabled
                      />
                    </div>
                  </div>

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
                        defaultValue={ updateData?.name}
                        onChange={(event)=>setName(event.target.value)}
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
                        defaultValue={updateData && updateData.address}
                        onChange={changeHandler}
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
                        value={updateData && updateData.employeeCount}
                        onChange={changeHandler}
                      />
                    </div>
                  </div>
                  {/* Footer */}
                  <div className="modal-footer bg-info">
                    <button
                      className="btn btn-success"
                      onClick={()=>saveClick(updateData)}
                      data-dismiss="modal"
                    >
                      Update
                    </button>
                    <Link
                      to="/companyList"
                      className="btn btn-danger"
                      data-dismiss="modal"
                    >
                      Cancel
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UpdateCompany;
