import React from "react";
import Listing from "./Listing";

const ListingContainer = ({ datas }) => {

    datas = [
        {
            name: "Yi Fang",
            icon: "https://s3-media0.fl.yelpcdn.com/bphoto/LGKisGL1yTe_5GnGwZ0o0g/348s.jpg",
            price: 2,
            location: "https://maps.app.goo.gl/pyR4gcozv1d125i49",
            distance: "5mi",
            review: 4.5,
            cuisine: "chinese, boba",
        }, 
        {
            name: "Yi Fang",
            icon: "https://s3-media0.fl.yelpcdn.com/bphoto/LGKisGL1yTe_5GnGwZ0o0g/348s.jpg",
            price: 2,
            location: "https://maps.app.goo.gl/pyR4gcozv1d125i49",
            distance: "5mi",
            review: 4.5,
            cuisine: "chinese, boba",
        }, 
        {
            name: "Yi Fang",
            icon: "https://s3-media0.fl.yelpcdn.com/bphoto/LGKisGL1yTe_5GnGwZ0o0g/348s.jpg",
            price: 2,
            location: "https://maps.app.goo.gl/pyR4gcozv1d125i49",
            distance: "5mi",
            review: 4.5,
            cuisine: "chinese, boba",
        }
    ];

    let listings = [];

    for (let i = 0; i < datas.length; i++) {
        listings.push(
            <Listing data={datas[i]}/>
        );
    }

    return (
        <div className ="listing">
            {
                listings
            }
        </div>

    );
};

export default ListingContainer