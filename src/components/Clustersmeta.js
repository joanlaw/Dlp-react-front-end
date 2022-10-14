import React from "react";
import Clustermeta from "./Clustermeta";

import image1 from "../assets/image1.jpg";
import image2 from '../assets/image2.jpg'
import image3 from '../assets/image3.jpg'

const clustersmeta = [
  {
    id: 1,
    title: "Tier 1",
    image: image1,
    url: "/decks-meta/salamgrande",
    text: "Salamangrande"
  },
  {
    id: 2,
    title: "Tier 2",
    image: image2,
    url: "/decks-cominidad",
    text: "decks de la comunidad"
  },
  {
    id: 3,
    title: "Tier 3",
    image: image3,
    url: "/noticias",
    text: "noticias"
  },
];

function Clustersmeta() {
  return (
    <div className="container d-flex justify-content-center align-items-center h-100">
      <div className="row">
        {clustersmeta.map(({ title, image, url, id, text }) => (
          <div className="col-md-4" key={id}>
            <Clustermeta imageSource={image} title={title} url={url} text={text} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Clustersmeta;