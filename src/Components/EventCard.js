// IMPORT MODULES
import { gql, useQuery, useSubscription } from '@apollo/client';
import React from 'react'
import { Link } from 'react-router-dom';
import date from 'date-and-time';
// import moment from 'moment';

// IMPORT ASSETS
import LoadingSvg from './LoadingSvg'

// var day = moment("1995-12-25");
// console.log("Isi Day ", day);

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

const SubsData = gql`
  subscription MySubscription {
    list_event {
      description
      event_start
      id
      location
      organizer
      title
      url
    }
  }
`;

function EventCard() {
  // const {data, loading, error} = useQuery(GetAllData);
  const {data, loading, error} = useSubscription(SubsData)
  if(loading){
    return <LoadingSvg/>
  }
  
  if(error) {
    return null;
  }

  // const [isTruncated, setIsTruncated] = useState(true);
  // const resultString = isTruncated ? mockData.slice(0, 50) : mockData;
  const pattern = date.compile('ddd, MMM DD YYYY');
  return (
    <div>
      <div className="row my-4" style={{margin: "0 100px", position: "relative"}}>
        {data?.list_event.map((v,i) => (
           <div className="col-md-4 mb-5" key={i}>
           <div className="card shadow mb-2" style={{height: "100%"}}>
               <img src={v.url} className="card-img-top mx-auto" alt="No image"/>
           <div className="card-body">
               <p className="card-title" style={{color: "#39364f", fontSize: "larger"}}><strong>{v.title}</strong></p>
               <p style={{color: "#f05537"}}>
                 {/* {date.format(v.event_start,pattern)} */}
                 {v.event_start}
               </p>
               {/* {console.log("Tipe data : ", typeof v.event_start)} */}
               <p style={{color: "#39364f"}}>{v.location}</p>
               <p><strong>{v.organizer}</strong></p>
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