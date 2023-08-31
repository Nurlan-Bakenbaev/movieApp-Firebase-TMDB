import React from "react";
import MainSection from "../MainSection";
import requests from "../../Request";
import RowSection from "../RowSection";
export const Home = () => {
  return (
    <div>
      <MainSection />
      <RowSection title="Up Coming" fetchURL={requests.requestUpcoming} />
      <RowSection title="Popular" fetchURL={requests.requestPopular} />
      <RowSection title="Top Rated" fetchURL={requests.requestTopRated} />
      <RowSection title="Trending" fetchURL={requests.requestTrending} />
    </div>
  );
};