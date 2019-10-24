import React from "react";
// import './index.module';
import PropTypes from "prop-types";
import ListYourSpaceForm from "./ListYourSpaceForm";

const ListYourSpace = () => {
  return (
    <>
      <div className="row justify-content-md-center mt-3">
        <div className="col-md-7">
          <div className="text-center">
            <h3>List your space</h3>
            <p className="font-weight-light">
              First, download the mobile app; then set up and verify your
              Camphouse account. Use your account email address to add your
              space (apartments for short stays, workspace or event centre)
              below.
            </p>
          </div>
        </div>
      </div>
        <ListYourSpaceForm />
    </>
  );
};

ListYourSpace.propTypes = {};

export default ListYourSpace;
