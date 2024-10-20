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
            <div className="listingContainerRow">
                <h1 style={{width: "10px"}}>{i+1}</h1>
                <Listing data={datas[i]}/>
            </div>

        );
    }

    return (
        <div className ="listingContainer">
            {
                listings
            }
        </div>
    );
};

export default ListingContainer