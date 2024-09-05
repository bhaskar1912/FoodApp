import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { CDN_URL, MENU_API } from "../utils/constants";
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
            height: "100px",
            width: "60%",
            borderRadius: "15px",
            boxShadow: "0px 5px 8px 4px #ddd7d7",
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
        <p style={{ textAlign: "center", fontWeight: "700" }}>
          {title} ({itemCards.length})
        </p>
        {itemCards?.map((item) =>
          item.card?.info ? (
            <>
              <div
                key={item.card.info.id}
                style={{
                  marginBottom: "30px",
                  height: "150px",
                  width: "56%",
                  borderRadius: "10px",
                  padding: "10px 20px",
                  boxShadow: "0 10px 10px rgba(0, 0, 0, 0.1)",
                  margin: "auto",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "20px",
                }}
              >
                <div>
                  <div>
                    {item.card.info.itemAttribute.vegClassifier === "VEG" ? (
                      <i
                        style={{ color: "green" }}
                        class="fa-regular fa-circle-dot"
                      ></i>
                    ) : (
                      <i
                        style={{ color: "red" }}
                        class="fa-regular fa-circle-dot"
                      ></i>
                    )}
                  </div>
                  <li style={{ listStyle: "none", fontWeight: "600" }}>
                    {item.card.info.name}
                  </li>
                  <span style={{ lineHeight: "25px" }}>
                    {"₹"}
                    {item.card.info.price / 100}
                  </span>
                  <div
                    style={{
                      maxWidth: "500px",
                      overflow: "hidden",
                      display: "-webkit-box",
                      WebkitBoxOrient: "vertical",
                      WebkitLineClamp: 2,
                      textOverflow: "ellipsis",
                    }}
                  >
                    {item.card.info.description}
                  </div>
                </div>
                <div style={{ position: "relative" }}>
                  <img
                    style={{
                      width: "118px",
                      height: "100px",
                      borderRadius: "10px",
                    }}
                    src={CDN_URL + item.card.info.imageId}
                    alt="menuImage"
                  />
                  <button
                    style={{
                      width: "55px",
                      height: "25px",
                      position: "absolute",
                      borderRadius: "5px",
                      border: "1px solid #ede7e7",
                      color: "green",
                      fontWeight: 600,
                      backgroundColor: "white",
                      cursor: "pointer",
                      bottom: "-6px",
                      left: "35px",
                    }}
                  >
                    ADD
                  </button>
                </div>
              </div>
            </>
          ) : null
        )}
      </div>
    </>
  );
};

export default RestaurantMenu;
