import { useState, useEffect } from "react";
import "./App.css";

import React from "react";
import Pagination from "./Components/Pagination";
import Card from "./Components/Card";

const App = ({ match }) => {
  const pageNumber = match.params.pageNumber || 1;
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(pageNumber);
  const [pages, setPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    console.log("useEffect");
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/v1/posts?page=${page}`);
        console.log("res done");

        const { data, pages: totalPages } = await res.json();
        console.log(data);
        setPages(totalPages);
        setPosts(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
        setError("Some Error Occured");
      }
    };

    fetchPosts();
  }, [page]);

  return (
    <div className="app">
      {loading ? (
        <div class="lds-roller">
          <div></div>
          <div></div>
          <div></div>
        </div>
      ) : error ? (
        <h3>{error}</h3>
      ) : (
        <>
          <Pagination page={page} pages={pages} changePage={setPage} />
          <div className="app__posts">
            {posts.map((post) => (
              <Card key={post._id} post={post} />
            ))}
          </div>
          <Pagination page={page} pages={pages} changePage={setPage} />
        </>
      )}
    </div>
  );
};

export default App;
