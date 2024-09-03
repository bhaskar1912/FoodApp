import React from "react";
import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, avgRating, costForTwo, cuisines } =
    resData?.info;
  return (
    <>
      <div
        className="res-card"
        style={{
          backgroundColor: "#f0f0f0",
          padding: "10px",
          cursor: "pointer",
        }}
      >
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img
            style={{ width: "200px", height: "200px", borderRadius: "5px" }}
            src={CDN_URL + cloudinaryImageId}
            alt="res-logo"
          />
        </div>
        <h3>{name}</h3>
        <h4>{avgRating}</h4>
        <h4>{costForTwo}</h4>
        <h4>{cuisines.join(", ")}</h4>
      </div>
    </>
  );
};

export default RestaurantCard;
