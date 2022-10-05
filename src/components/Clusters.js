import React from "react";
import Cluster from "./Cluster";

import image1 from "../assets/image1.jpg";
import image2 from '../assets/image2.jpg'
import image3 from '../assets/image3.jpg'

const clusters = [
  {
    id: 1,
    title: "Tier List",
    image: image1,
    url: "/tier-list",
  },
  {
    id: 2,
    title: "Decks de la comunidad",
    image: image2,
    url: "/decks-cominidad",
  },
  {
    id: 3,
    title: "Noticias",
    image: image3,
    url: "/noticias",
  },
];

function Clusters() {
  return (
    <div className="container d-flex justify-content-center align-items-center h-100">
      <div className="row">
        {clusters.map(({ title, image, url, id }) => (
          <div className="col-md-4" key={id}>
            <Cluster imageSource={image} title={title} url={url} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Clusters;