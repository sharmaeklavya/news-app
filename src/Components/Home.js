import React, { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  const [headlines, setHeadlines] = useState([]);
  const [latestNews, setLatestNews] = useState([]);

  useEffect(() => {
    (async () => {
      const headLine = await axios.get(
        "https://newsapi.org/v2/top-headlines?country=in&apiKey=7328f1553bdb40c4b1441ee79910af9f"
      );
      setHeadlines(headLine.data.articles);
      const latestNews = await axios.get(
        "https://newsapi.org/v2/everything?q=politics&apiKey=7328f1553bdb40c4b1441ee79910af9f"
      );
      setLatestNews(latestNews.data.articles);
    })();
  }, []);

  return (
    <div className="container">
      <div className="row mt-5">
        {/* (center content) */}
        <div className="col-md-8">
          <h5 className="h5">Today's Headlines</h5>
          {headlines.map((news) => (
            <div className="card mb-5">
              <div className="card-img-top mb-3">
                <img src={news.urlToImage} alt={news.title} />
              </div>
              <div className="card-body">
                <h5 className="card-title">{news.title}</h5>
                <p className="card-text">{news.content}</p>
                <p className="card-text">{news.description}</p>
                <div className="d-flex justify-content-between">
                  <p className="small p-2 border border-primary rounded">
                    {news.author ? `By ${news.author}` : null}
                  </p>
                  <a
                    href={news.url}
                    className="small p-2 mb-3 btn btn-primary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Read more
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* left content  */}
        <div className="col-md-4">
          <h5 className="h5">Latest News</h5>

          {latestNews.map((news) => (
            <div className="card mb-5">
              <div className="card-img-top mb-3">
                <img src={news.urlToImage} alt={news.title} />
              </div>
              <div className="card-body">
                <h5 className="card-title">{news.title}</h5>
                <p className="card-text">{news.content}</p>
                <p className="card-text">{news.description}</p>
                <div className="d-flex justify-content-between">
                  <p className="small p-2 border border-primary rounded">
                    {news.author ? `By ${news.author}` : null}
                  </p>
                  <a
                    href={news.url}
                    className="small p-2 mb-3 btn btn-primary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Read more
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
