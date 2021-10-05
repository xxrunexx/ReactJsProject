// IMPORT MODULES
import React, { useState } from "react";
import validator from "validator";
import { useHistory } from 'react-router-dom'

// IMPORT COMPONENTS
import { app } from '../firebase/firebase';
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { defaultDataIdFromObject, gql, useMutation } from "@apollo/client";

// IMPORT ASSETS
const InsertEvent = gql`
  mutation MyMutation($object: list_event_insert_input = {}) {
    insert_list_event_one(object: $object) {
      id
    }
  }
`

// Initial Data
const dataKosong = {
  title: "",
  organizer: "",
  // date: "",
  location: "",
  desc: "",
}

function RegisterEvent() {
  const [insertEvent,{ loading: loadingInsert}] = useMutation(InsertEvent);
  const [data, setData] = useState(dataKosong);
  const [title, setTitle] = useState("");
  const [organizer, setOrganizer] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [desc, setDesc] = useState("");
  // File upload
  const [fileUrl, setFileUrl] = useState("");

  // const [errName, setErrName] = useState("");
  const [errTitle, setErrTitle] = useState("");
  const [errOrganizer, setErrOrganizer] = useState("");
  const [errDate, setErrDate] = useState("");
  const [errLocation, setErrLocation] = useState("");
  const [errDesc, setErrDesc] = useState("");
  const [errImg, setErrImg] = useState("");

  const history = useHistory();

  const onChangeTitle = (e) => {
    if (e.target) {
      setTitle(e.target.value);
    }
    if (e.target.name === "title")
      validator.isEmpty(e.target.value)
        ? setErrTitle("Data tidak boleh kosong !")
        : setErrTitle("");
  };

  const onChangeOrganizer = (e) => {
    if (e.target) {
      setOrganizer(e.target.value);
    }
    if (e.target.name === "organizer")
      validator.isEmpty(e.target.value)
        ? setErrOrganizer("Data tidak boleh kosong !")
        : setErrOrganizer("");
  };

  const onChangeDate = (e) => {
    if (e.target) {
      setDate(e.target.value);
    }
    if (e.target.name === "date")
      validator.isDate(e.target.value, ['-']) && e.target.value !== ""
        ? setErrDate("")
        : setErrDate("Format Tanggal Harus YYYY-MM-DD");
  };

  const onChangeLocation = (e) => {
    if (e.target) {
      setLocation(e.target.value);
    }
    if (e.target.name === "location")
      validator.isEmpty(e.target.value)
        ? setErrLocation("Data tidak boleh kosong !")
        : setErrLocation("");
  };

  const onChangeDesc = (e) => {
    if (e.target) {
      setDesc(e.target.value);
    }
    if (e.target.name === "date")
      validator.isEmpty(e.target.value)
        ? setErrDesc("Data tidak boleh kosong !")
        : setErrDesc("");
  };

  // handleInput
  // const handleInput = (e) => {
  //   const name = e.target.name;
  //   const value = e.target.value;

  //   //  Validator
    // if (name === "title")
    //   validator.isEmpty(value)
    //     ? setErrTitle("Data tidak boleh kosong !")
    //     : setErrTitle("");

  //   if (name === "organizer")
  //     validator.isEmpty(value)
  //       ? setErrOrganizer("Data tidak boleh kosong !")
  //       : setErrOrganizer("");

  //   // if (name === "date")
  //   //   validator.isDate(value, ['-']) && value !== ""
  //   //     ? setErrDate("")
  //   //     : setErrDate("Format Tanggal Harus YYYY-MM-DD");

  //   if (name === "location")
  //     validator.isEmpty(value)
  //       ? setErrLocation("Data tidak boleh kosong !")
  //       : setErrLocation("");
        
  //   if (name === "desc")
  //     validator.isEmpty(value)
  //       ? setErrDesc("Data tidak boleh kosong !")
  //       : setErrDesc("");

  //   setData({
  //     ...data,
  //     [name]: value,
  //   });
  //   console.log(data);
  // };

  // Handle Submit
  const resetData = () => {
    setTitle("");
    setOrganizer("");
    setDate("");
    setDesc("");
    setLocation("");
    setErrTitle("");
    setErrOrganizer("");
    setErrDate("");
    setErrDesc("");
    setErrLocation("");
  };

  const handleSubmit = (e) => {
    console.log("Passing fileUrl urls : ",fileUrl);
    e.preventDefault();
    if (errTitle !== "" || errOrganizer !== "" || errDate!== "" || errDesc !== "" || errLocation !== "") {
      return alert("Terdapat data yang tidak sesuai");
    }
    else
    {
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
      resetData();
      alert("Data Berhasil Tersimpan!");
      // history.push('/cari-event');
    }//End of conditional statement
  }

  // Handle onChange Upload
  const onChangeFile = async (e) => {
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
            <div className="form-wrapper form-group was-validated">
              <label>Title</label>
              <input 
              type="text" 
              name="title"
              value={title}
              onChange={onChangeTitle}
              className="form-control"
              placeholder="Be clear an descriptive."
              required
              />
              {errTitle !== "" ? (
                <>
                  <span className="errMsg">{errTitle}</span>
                  <br />
                </>
              ) : null}
            </div>
            <div className="form-wrapper  form-group was-validated">
              <label>Organizer</label>
              <input 
              type="text" 
              name="organizer"
              value={organizer}
              onChange={onChangeOrganizer}
              className="form-control"
              placeholder="Tell attendees who is organizing this event."
              required
              />
              {errOrganizer !== "" ? (
                <>
                  <span className="errMsg">{errOrganizer}</span>
                  <br />
                </>
              ) : null}
            </div>
            <div className="form-wrapper form-group was-validated">
              <label>Date and Time</label>
              <input 
              type="text" 
              name="date"
              value={date}
              onChange={onChangeDate}
              className="form-control"
              placeholder="YYYY-MM-DD"
              required
              />
              {errDate !== "" ? (
                <>
                  <span className="errMsg">{errDate}</span>
                  <br />
                </>
              ) : null}
            </div>
            <div className="form-wrapper form-group was-validated">
              <label>Location</label>
              <input 
              type="text" 
              name="location"
              value={location}
              onChange={onChangeLocation}
              className="form-control"
              placeholder="Type a descriptive location here."
              required
              />
              {errLocation !== "" ? (
                <>
                  <span className="errMsg">{errLocation}</span>
                  <br />
                </>
              ) : null}
            </div>
            <div className="form-wrapper form-group was-validated">
              <label>Description</label>
              <textarea 
              rows="4"
              type="text" 
              name="desc"
              value={desc}
              onChange={onChangeDesc}
              className="form-control"
              placeholder="Add more details to your event like your schedule, sponsors, or featured guests."
              required
              />
              {errDesc !== "" ? (
                <>
                  <span className="errMsg">{errDesc}</span>
                  <br />
                </>
              ) : null}
            </div>

            {/* Yang ini nanti aja */}
            <div className="form-wrapper">
              <label>Event Image</label>
              <input 
              type="file" 
              onChange={onChangeFile}
              className="form-control"
              required
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
