import React, { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContextData from "../utils/UserContextData";

export const WithDiscountRestaurantCard = (RestaurantCard) => {
  return (props) => {
    const { header, subHeader } =
      props.resData.info?.aggregatedDiscountInfoV3 || {};

    return (
      <div style={{ position: "relative" }}>
        {header && subHeader && (
          <div
            style={{
              position: "absolute",
              top: "182px",
              left: "10px",
              backgroundColor: "rgba(0, 0, 0, 0.7)",
              color: "white",
              padding: "5px",
              borderRadius: "5px",
              zIndex: 10,
            }}
          >
            {header} - {subHeader}
          </div>
        )}
        <RestaurantCard {...props} />
      </div>
    );
  };
};

const RestaurantCard = (props) => {
  const contextName = useContext(UserContextData);
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
        <h4>{contextName.name}</h4>
      </div>
    </>
  );
};

export default RestaurantCard;
