import React from "react";

const Listing = ({ data }) => {
  data = {
    name: "Yi Fang",
    icon: "https://s3-media0.fl.yelpcdn.com/bphoto/LGKisGL1yTe_5GnGwZ0o0g/348s.jpg",
    price: 2,
    location: "https://maps.app.goo.gl/pyR4gcozv1d125i49",
    distance: "5mi",
    review: 4.5,
    cuisine: "chinese, boba",
  };

  let reviewArray = [];
  let moneyString = "";

  for (let i = 0; i < Math.floor(data.review); i++) {
    reviewArray.push(
      <i className="material-icons-round stars" key={i}>
        star
      </i>
    );
  }
  if (!Number.isInteger(data.review)) {
    reviewArray.push(
      <i className="material-icons-round stars" key={data.review}>
        star_half
      </i>
    );
  }

  for (let i = 0; i < data.price; i++) {
    moneyString += "attach_money";
  }

  return (
    <button className="listing">
      <img src={data.icon} />
      <div>
        <div className="top">
          <div>
            <div>{data.name}</div>
            <i className="material-icons-round">{moneyString}</i>
          </div>
          <div>{data.distance}</div>
        </div>
        <div className="bottom">
          <div>{data.cuisine}</div>
          <div>{reviewArray}</div>
        </div>
      </div>
    </button>
  );
};

export default Listing;
