import React from "react";
import Listing from "./Listing";

const ListingContainer = ({ datas }) => {
  let listings = [];

  for (let i = 0; i < datas.length; i++) {
    listings.push(
      <div className="listingContainerRow" key={`containerRow${i}`}>
        <h1 style={{ width: "10px" }} key={`h1${i}`}>
          {i + 1}
        </h1>
        <Listing data={datas[i]} key={i} />
      </div>
    );
  }

  return <div className="listingContainer">{listings}</div>;
};

export default ListingContainer;
