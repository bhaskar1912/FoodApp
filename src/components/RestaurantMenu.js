import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (!resInfo) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage, avgRating, totalRatingsString } =
    resInfo.cards[2]?.card?.card?.info;

  const title =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
      .title;
  const itemCards =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
      .itemCards;
  return (
    <>
      <div
        style={{
          padding: "20px 0px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <span
          style={{ fontSize: "20px", fontWeight: "700", lineHeight: "50px" }}
        >
          {name}
        </span>
        <div
          style={{
            boxShadow: "0 0 5px black",
            height: "100px",
            width: "60%",
            borderRadius: "15px",
          }}
        >
          <div style={{ padding: "10px" }}>
            <span style={{ color: "green" }}>
              <i className="fa-solid fa-star"></i>
            </span>
            <span>
              {avgRating}({totalRatingsString}){"  "}
            </span>
            <span>{costForTwoMessage}</span>
            <p
              style={{ color: "rgb(255, 82, 0)", textDecoration: "underline" }}
            >
              {cuisines.join(", ")}
            </p>
          </div>
        </div>
      </div>
      <div>
        {title}
        <ul>
          {itemCards?.map((item) =>
            item.card?.info ? (
              <>
                <div key={item.card.info.id}>
                  <li>{item.card.info.name}</li>
                  <span>
                    {"₹"}
                    {item.card.info.price / 100}
                  </span>
                  <div>{item.card.info.description} </div>
                </div>
              </>
            ) : null
          )}
        </ul>
      </div>
    </>
  );
};

export default RestaurantMenu;
