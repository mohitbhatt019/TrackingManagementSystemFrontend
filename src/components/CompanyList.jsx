import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCompanybyId, getAllCompany } from "../features/CompanySlice";
import { Link, useLocation } from "react-router-dom";
import CustomModal from "./CustomModal";

const CompanyList = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [id, setId] = useState();
  const dispatch = useDispatch();
  const token = localStorage.getItem("currentUser");
  const location=useLocation();
  const companyData = useSelector((state) => state.companyData.companies);
  const companyDataError = useSelector((state) => state.companyData.error);


useEffect(() => {
    dispatch(getAllCompany());
}, []);




  return (
    <div>
      <div className="row">
        <div className="col-8">
          <h2>Company List</h2>
        </div>
        <div className="col-3">
          <Link
            to="/create"
            className="btn btn-info"
            // data-toggle="modal"
            // data-target="#newModal"
          >
            <FontAwesomeIcon icon={faPlus} className="mr-2" />
            Add Company
          </Link>
        </div>
      </div>

      {showPopup === true ? (
        <CustomModal
          id={id}
          showPopup={showPopup}
          setShowPopup={setShowPopup}
        />
      ) : (
        <table className="table table-bordered table-hover">
          <thead>
            <th>Id</th>
            <th>Name</th>
            <th>Address</th>
            <th>Employee Count</th>
            <th>Action</th>
          </thead>
          {Array.isArray(companyData) &&
            companyData != null &&
            companyData.map((ele) => {
              return (
                <tbody>
                  <tr key={ele.id}>
                    <td>{ele.id}</td>
                    <td>{ele.name}</td>
                    <td>{ele.address}</td>
                    <td>{ele.employeeCount}</td>
                    <td>
                      <button
                        className="btn btn-info m-1 p-1 "
                        onClick={() => [setId(ele.id), setShowPopup(true)]}
                      >
                        View
                      </button>

                      <Link
                        to={`/edit/${ele.id}`}
                        className="btn btn-info m-1 p-1"
                      >
                        Edit
                      </Link>

                      <button className="btn btn-info m-1 p-1" onClick={()=>dispatch(deleteCompanybyId(ele.id))}>Delete</button>
                    </td>
                  </tr>
                </tbody>
              );
            })}
        </table>
      )}
    </div>
  );
};

export default CompanyList;
