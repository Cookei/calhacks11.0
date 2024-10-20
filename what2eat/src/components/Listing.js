import React from "react";

const Listing = ({ data }) => {
  let reviewArray = [];
  let moneyString = "";
  data = JSON.parse(data);

  for (let i = 0; i < Math.floor(data.rating); i++) {
    reviewArray.push(
      <i className="material-icons-round stars" key={i}>
        star
      </i>
    );
  }
  if (!Number.isInteger(data.rating)) {
    reviewArray.push(
      <i className="material-icons-round stars" key={data.rating}>
        star_half
      </i>
    );
  }

  return (
    <button className="listing">
      <img src={data.icon} />
      <div>
        <div className="top">
          <div>
            <div>{data.name}</div>
            {data.price}
          </div>
          <div>{Math.round(data.distance)}mi</div>
        </div>
        <div className="bottom">
          <div>{data.cuisines}</div>
          <div>{reviewArray}</div>
        </div>
      </div>
    </button>
  );
};

export default Listing;
