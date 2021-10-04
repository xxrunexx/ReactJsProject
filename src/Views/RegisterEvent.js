// IMPORT MODULES
import React from "react";
import { useState } from "react";
import validator from "validator";

// IMPORT COMPONENTS
import { app } from '../firebase/firebase';
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { gql, useMutation } from "@apollo/client";

// IMPORT ASSETS
const InsertEvent = gql`
  mutation MyMutation($object: list_event_insert_input = {}) {
    insert_list_event_one(object: $object) {
      id
    }
  }
`

function RegisterEvent() {
  const [insertEvent,{ loading: loadingInsert}] = useMutation(InsertEvent);

  const [title, setTitle] = useState("");
  const [organizer, setOrganizer] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [fileUrl, setFileUrl] = useState("");
  const [desc, setDesc] = useState("");
  const [errName, setErrName] = useState("");
  // const [errTitle, setErrTitle] = useState("");
  // const [errOrganizer, setErrOrganizer] = useState("");
  // const [errDate, setErrDate] = useState("");
  // const [errImg, setErrImg] = useState("");
  // const [errDesc, setErrDesc] = useState("");

  const onChangeTitle = (e) => {
    if (e.target) {
      setTitle(e.target.value);
      console.log(title);
    }
  };
  const onChangeOrganizer = (e) => {
    if (e.target) {
      setOrganizer(e.target.value);
    }
  };
  const onChangeDate = (e) => {
    if (e.target) {
      setDate(e.target.value);
    }
  };
  const onChangeLocation = (e) => {
    if (e.target) {
      setLocation(e.target.value);
    }
  };
  const onChangeDesc = (e) => {
    if (e.target) {
      setDesc(e.target.value);
    }
  };

  // handleInput
  // const handleInput = (e) => {
  //   const name = e.target.name;
  //   const value = e.target.value;

    //  Validator
  //   if (name)
  //     validator.isEmpty(value)
  //       ? setErrName("Data tidak boleh kosong !")
  //       : setErrName("");

  //   setData({
  //     ...data,
  //     [name]: value,
  //   });
  // };

  // Handle Submit
  
  const handleSubmit = (e) => {
    console.log("Passing fileUrl urls : ",fileUrl);
    e.preventDefault();
    insertEvent({variables: {
      object: {
        title: title,
        organizer: organizer,
        event_start: date,
        location: location,
        url: fileUrl,
        description: desc,
      }
    }})
  }

  // Handle onChange Upload
  const onChange = async (e) => {
    const file = e.target.files[0];
    const storageRef = app.storage().ref();
    const fileRef = storageRef.child(file.name);
    console.log("file = ", file);
    console.log("storageRef = ", storageRef);
    console.log("fileRef = ", fileRef);
    await fileRef.put(file);
    setFileUrl(await fileRef.getDownloadURL());
    // fileRef.put(file).then((e) => {
    //   console.log("Uploaded a file");
    //   console.log("didalam e = ", e);
    //   e.ref.getDownloadURL().then(function (downloadURL) {
    //     console.log("File available at", downloadURL);
    //   });
    // });
  };

  return (
    <div>
      <Navbar/>
      <div className="container card" id="register-container">
        <form className="col-sm-7 col-form" onSubmit={handleSubmit}>
            <div className="form-wrapper">
              <label>Title</label>
              <input 
              type="text" 
              name={title}
              onChange={onChangeTitle}
              className="form-control"
              placeholder="Be clear an descriptive."
              />
            </div>
            <div className="form-wrapper">
              <label>Organizer</label>
              <input 
              type="text" 
              name={organizer}
              onChange={onChangeOrganizer}
              className="form-control"
              placeholder="Tell attendees who is organizing this event."
              />
            </div>
            <div className="form-wrapper">
              <label>Date and Time</label>
              <input 
              type="text" 
              name={date}
              onChange={onChangeDate}
              className="form-control"
              placeholder="YYYY/MM/DD"
              />
            </div>
            <div className="form-wrapper">
              <label>Location</label>
              <input 
              type="text" 
              name={location}
              onChange={onChangeLocation}
              className="form-control"
              placeholder="Type a descriptive location here."
              />
            </div>
            <div className="form-wrapper">
              <label>Description</label>
              <textarea 
              rows="4"
              type="text" 
              name={desc}
              onChange={onChangeDesc}
              className="form-control"
              placeholder="Add more details to your event like your schedule, sponsors, or featured guests."
              />
            </div>

            {/* Yang ini nanti aja */}
            <div className="form-wrapper">
              <label>Event Image</label>
              <input 
              type="file" 
              onChange={onChange}
              className="form-control"
              />
            
            <button 
            className="btn btn-primary"
            style={{margin: "20px 0px"}}
            onSubmit={handleSubmit}
            >
              Submit
            </button>
            </div>
        </form>
      </div>

      {/* Ga kepake */}
      {/* <form>

        <input type="file" onChange={onChange} />;
      </form> */}
      <Footer/>
    </div>
  )
}

export default RegisterEvent;
