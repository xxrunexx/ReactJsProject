import React from "react";
import "./RegisterEventModal.css";

function Modal({ setOpenModal }) {
  return (
    <div
    style={{ zIndex: 1, position: "absolute" }}
    className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="modal-title">
          <h1>Are You Sure You Want to Continue?</h1>
        </div>
        <div className="modal-body">
          <p>The next page looks amazing. Hope you want to go there!</p>
        </div>
        <div className="modal-footer">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
          <button>Continue</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;