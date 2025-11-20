import React from "react";
import SearchContact from "./SearchContact";
import ListContact from "./ListContact";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";

function AppContact() {
  return (
    <div>
      <SearchContact />
      <ListContact />
      <div>
        <button>
          <Link to="/formPage">
            <FaChevronRight />
          </Link>
        </button>
      </div>
    </div>
  );
}

export default AppContact;
