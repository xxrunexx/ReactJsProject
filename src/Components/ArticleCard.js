import React, { useState, useEffect } from "react";
import axios from "axios";

function ArticleCard() {
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const [searchTitle, setSearchTitle] = useState("");

    useEffect(() => {
        const loadPosts = async (type) => {
          setLoading(true);
          const response = await axios.get(
            "https://berita-indo-api.vercel.app/v1/cnn-news/"
          );
          setPosts(response.data);
          console.log(response.data);
          setLoading(false);
        };
    
        loadPosts();
      }, []);

    return (
        <div>
            <div class="card card-article" style="width: 18rem;">
            <img class="card-img-top img-artikel" src="https://placeimg.com/200/200/any?1" alt="Card image cap"/>
            <div class="card-body">
                <p class="card-text" style="color:black">{data.title}</p>
            </div>
            </div>
        </div>
    )
}

export default ArticleCard;
