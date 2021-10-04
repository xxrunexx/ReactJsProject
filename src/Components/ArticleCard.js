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
            "https://berita-indo-api.vercel.app/v1/cnn-news/teknologi"
          );
          setPosts(response.data);
          console.log("Isi news API : ", response.data);
          setLoading(false);
        };
    
        loadPosts();
      }, []);

    return (
        <div>
          {
            posts?.data.map((news) => {
              return (
                <div className="col-md-3">
                <div className="card shadow pt-4 mb-2" style={{height: "360px"}}>
                  <img
                    // className="h-48 w-full object-cover"
                    className="card-img-top"
                    src={news.image.small}
                    alt=""
                  />
                </div>
                <div className="card-body">
                    <a href={news.link} className="block mt-2">
                      <h5 className="card-title">
                        {news.title}
                      </h5>
                      <h6 className="">
                        {news.contentSnippet}
                      </h6>
                    </a>
                  </div>
                </div>
              )
            })
          }
        </div>
    )
}

export default ArticleCard;
