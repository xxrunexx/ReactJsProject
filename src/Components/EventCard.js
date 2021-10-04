import { gql, useQuery } from '@apollo/client';
import React from 'react'
import { Link } from 'react-router-dom';
import LoadingSvg from './LoadingSvg'

const GetAllData = gql`
query MyQuery {
    list_event {
      title
      url
      location
      organizer
      event_start
      id
    }
  }  
`;

// Used for test card style
// const mockData = [
//   {
//     id: 1,
//     title: "[Public Speaking, Online Meeting] Jakarta Motivator Toastmaster",
//     organizer: "Jakarta Motivator Toastmaster",
//     location: "Kuningan City No.18 Jalan Professor Doktor Satrio #14 Setia Budi, Daerah Khusus Ibukota Jakarta 12940",
//     event_start: "2021-10-06",
//     url: "https://firebasestorage.googleapis.com/v0/b/reactjs-project-513fb.appspot.com/o/event1.jpg?alt=media&token=041aa45d-5ab8-4323-b569-f083dcf7b051"
//   },
//   {
//     id: 2,
//     title: "How To Improve Your Memory",
//     organizer: "IrisReading.com",
//     location: "Online Event",
//     event_start: "2021-10-05",
//     url: "https://firebasestorage.googleapis.com/v0/b/reactjs-project-513fb.appspot.com/o/event2.jpg?alt=media&token=69073dad-249d-48e1-bc16-15b4505cb74f"
//   },
//   {
//     id: 3,
//     title: "Webinar 3 Rahasia untuk Sukses Berbisnis Lewat Internet",
//     organizer: "Kwet Liung / 082260779360",
//     location: "Hotel Grand Tjokro ( Di HP ATAU LAPTOP ANDA ) Jalan Daan Mogot No.63 Tj. Duren Utara Kec. Grogol petamburan, Daerah Khusus Ibukota Jakarta 11470",
//     event_start: "2021-10-05",
//     url: "https://firebasestorage.googleapis.com/v0/b/reactjs-project-513fb.appspot.com/o/event3.jpg?alt=media&token=8d3b5361-39fe-4145-ac5d-4c88bbbfc8a9"
//   },
//   {
//     id: 4,
//     title: "Understanding Cryptocurrency & why does it matters?",
//     organizer: "Pixel 2 NFT",
//     location: "Online Event",
//     event_start: "2021-09-30",
//     url: "https://firebasestorage.googleapis.com/v0/b/reactjs-project-513fb.appspot.com/o/event4.jpg?alt=media&token=bc1cdf1f-c916-4cbb-a52f-9005ac257ad1"
//   },
//   {
//     id: 5,
//     title: "How To Improve Your Focus and Limit Distractions",
//     organizer: "IrisReading.com",
//     location: "Online Event",
//     event_start: "2021-10-07",
//     url: "https://firebasestorage.googleapis.com/v0/b/reactjs-project-513fb.appspot.com/o/event5.jpg?alt=media&token=1a84b6ff-946c-403e-92e1-281971254a2d"
//   },
// ]


function EventCard() {
  const {data, loading, error} = useQuery(GetAllData);
  
  if(loading){
    return <LoadingSvg/>
  }
  
  if(error) {
    return null;
  }

  // const [isTruncated, setIsTruncated] = useState(true);
  // const resultString = isTruncated ? mockData.slice(0, 50) : mockData;

  return (
    <div>
      <div className="row my-4" style={{margin: "0 100px", position: "relative"}}>
        {data?.list_event.map((v,i) => (
           <div className="col-md-4 mb-5" key={i}>
           <div className="card shadow mb-2" style={{height: "100%"}}>
               <img src={v.url} className="card-img-top mx-auto" alt="No image"/>
           <div className="card-body">
               <p className="card-title">{v.title}</p>
               <p style={{color: "#f05537"}}>{v.event_start}</p>
               <p style={{color: "#39364f"}}>{v.location}</p>
               <p>{v.organizer}</p>
               <Link to={`/detail-event/${v.id}`} className="btn" id="CardUniv">Lihat Detail</Link>
           </div>
           </div>
       </div> 
        ))}
      </div>
    </div>
    
   

   
    )
}

export default EventCard