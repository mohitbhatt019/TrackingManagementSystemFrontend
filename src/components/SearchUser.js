import axios from "axios";
import React, { useState, useEffect } from "react";

const SearchUser = () => {
  const [userName, setUserName] = useState("");
  const [typingTimeout, setTypingTimeout] = useState(null);
  const [foundUser, setFoundUser] = useState(null);

  useEffect(() => {
    if (typingTimeout) {
      clearTimeout(typingTimeout);
    }

    if (userName.trim().length > 0) {
      const timeout = setTimeout(() => {
        axios
          .get(`https://localhost:7006/searchuser?username=${userName}`)
          .then((response) => {
            if (response.data) {
              setFoundUser(response.data); // Set the found user data in state
            } else {
              setFoundUser(null); // Reset the found user if not found
            }
          })
          .catch((error) => {
            if (error.response && error.response.status === 500) {
              alert("No user found");
            } else {
              console.error("Error:", error);
            }
          });
      }, 3000);

      setTypingTimeout(timeout);
    }
  }, [userName]);

  return (
    <div>
       <div className="row">
      <div className="col-2 offset-10 p-1">
        <button className="btn btn-success">Send Invite</button>
      </div>
    </div>
    
    <br/><br/><br/><br/><br/>
   


      <div id="search" class="card col-8 offset-2">
        <div class="card-header">Send Invitation</div>
        <div class="card-body">
          <h5 class="card-title">Enter Username to search</h5>
          <input
        className="form-control mr-sm"
        type="search"
        placeholder="Search"
        aria-label="Search"
        value={userName}
        onChange={(event) => setUserName(event.target.value)}
      />
      <div />
       {foundUser && (
        <div className="col-12">

          <input
            className="form-control mr-sm"
            type="text"
            value={foundUser.name}
            readOnly
          />
        </div>
      )}
         
        </div>
      </div>
    </div>
    // <div className="col-8 m-auto m-4 p-5">
    //   <input
    //     className="form-control mr-sm"
    //     type="search"
    //     placeholder="Search"
    //     aria-label="Search"
    //     value={userName}
    //     onChange={(event) => setUserName(event.target.value)}
    //   />
    //   <div />
    //   {/* <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
    //     Search
    //   </button> */}

    //   {foundUser && (
    //     <div className="col-8">

    //       <input
    //         className="form-control mr-sm"
    //         type="text"
    //         value={foundUser.name}
    //         readOnly
    //       />
    //     </div>
    //   )}
    // </div>
  );
};

export default SearchUser;
