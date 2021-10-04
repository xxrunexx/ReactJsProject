import React from "react";

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
          <h4>Create a New Event</h4>
        </div>
        <div className="modal-body">
          <form>
            <div>
              <label>Title</label>
              <input type="text"></input>
            </div>
            <div>
              <label>Organizer</label>
              <input type="text"></input>
            </div>
            <div>
              <label>Date and Time</label>
              <input type="text"></input>
            </div>
            <div>
              <label>Event Image</label>
              <input type="file"></input>
            </div>

          </form>
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