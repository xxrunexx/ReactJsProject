import axios from "axios";
import { useEffect } from "react";

export default function Home(){
    
const options = {
    params: {t: 'loadvideo', q: '60029591'},
    headers: {
      'x-rapidapi-host': 'unogs-unogs-v1.p.rapidapi.com',
      'x-rapidapi-key': 'bde4d0eea3msh87039ecb3e61226p1a66b2jsn58342dd274f8'
    }
  };
  
  axios.request('https://unogs-unogs-v1.p.rapidapi.com/aaapi.cgi', options).then(function (response) {
      console.log(response.data);
  }).catch(function (error) {
      console.error(error);
  });


//   useEffect(() => {
//       console.log(response.data)
//   }, [])

    return(
        <div>

            <ul>{}</ul>
        </div>
    )
}
