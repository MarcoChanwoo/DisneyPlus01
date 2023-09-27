import React, { useEffect } from "react";
import axios from "../api/axios";
import requests from "../api/request";

const Banner = () => {
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    const response = axios.get(requests.fetchNowPlaying);
    console.log(response);
  };

  return (
    <div>
      <div>Banner</div>
    </div>
  );
};

export default Banner;
