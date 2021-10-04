// IMPORT MODULES
import React, { useEffect } from 'react';
import { gql, useLazyQuery, useQuery} from '@apollo/client';
// IMPORT COMPONENTS
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { useParams } from 'react-router-dom';

// IMPORT ASSETS
import LoadingSvg from '../Components/LoadingSvg'

const GetData = gql`
query MyQuery($id : Int!) {
    list_event(where: {id: {_eq: $id}}) {
      id
      title
      url
      location
      organizer
      event_start
      description
    }
  }   
`;

function DetailEventPage() {
    const {id} = useParams();
    const {data, loading, error} = useQuery(GetData,{variables: {id}})

    if(loading){
        return <LoadingSvg/>
      }
      
      if(error) {
        return null;
      }    
    // useEffect(() => {
    //     GetData(
    //         {
    //             variables: {
    //                 id : {id}
    //             }
    //         }
    //     )
    // }, [GetData]);

    // console.log("Data Value : ", data);
    return (
        <div>
            <Navbar/>
            <div className="container-artikel">
                <div className="container py-3 shadow" id="artikel">
                    <div className="row">
                        <div className="col mb-3 border-bottom artikel-tagline">
                            <h3 style={{color: "#14375e"}}><strong>Detail Event</strong></h3>
                        </div>
                    </div>      
                        {data?.list_event.map((v,i) => (
                            <div className="container" key={i}>
                                <p>Title : {v.title}</p>
                                <p>Organizer {v.organizer}</p>
                                <p>Location : {v.location}</p>
                                <p>Date : {v.event_start}</p>
                                <p>Description : {v.description}</p>
                            </div>
                        ))}
                    
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default DetailEventPage
