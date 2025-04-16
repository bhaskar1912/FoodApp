import React, { useEffect, useState } from "react";
import RestaurantCard, { WithDiscountRestaurantCard } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { useContext } from "react";
import UserContextData from "../utils/UserContextData";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [searchText, setSearchText] = useState("");

  const { name, setLoginName } = useContext(UserContextData);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setIsRefreshing(true);
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.71700&lng=75.83370&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setIsRefreshing(false);
  };

  const handleRefresh = () => {
    fetchData();
    setSearchText("");
  };
  const NewWithDiscountRestaurantCard =
    WithDiscountRestaurantCard(RestaurantCard);

  return (
    <>
      <div className="body" style={{ padding: "0px 20px" }}>
        <div
          style={{
            display: "flex",
            gap: "20px",
            alignItems: "center",
          }}
        >
          <div
            className="search"
            style={{
              display: "flex",
              gap: "10px",
              alignItems: "center",
            }}
          >
            <div>
              <input
                type="text"
                style={{
                  border: "1px solid black",
                  height: "20px",
                  borderRadius: "5px",
                }}
                value={searchText}
                onChange={(e) => {
                  setSearchText(e.target.value);
                }}
              />
            </div>
            <button
              className="search-btn"
              onClick={() => {
                const filteredList = listOfRestaurants.filter((res) =>
                  res.info.name.toLowerCase().includes(searchText.toLowerCase())
                );
                setFilteredRestaurant(filteredList);
              }}
            >
              Search
            </button>
          </div>
          <div className="filter">
            <button
              className="filter-btn"
              onClick={() => {
                const filteredList = listOfRestaurants.filter(
                  (res) => res.info.avgRating > 4.3
                );
                setFilteredRestaurant(filteredList);
                setSearchText("");
              }}
            >
              Top Rated Restaurants
            </button>
          </div>
          <div style={{ cursor: "pointer" }} onClick={handleRefresh}>
            <i className="fa fa-refresh" aria-hidden="true"></i>
          </div>
          <div>
            <input
              type="text"
              value={name}
              onChange={(e) => setLoginName(e.target.value)}
            />
          </div>
        </div>
        {isRefreshing ? (
          <Shimmer />
        ) : (
          <div
            className="res-container"
            style={{ display: "flex", gap: "30px", flexWrap: "wrap" }}
          >
            {filteredRestaurant.map((restaurant) => (
              <Link
                style={{ textDecoration: "none", color: "black" }}
                key={restaurant.info.id}
                to={"/restaurants/" + restaurant.info.id}
              >
                {restaurant?.info?.aggregatedDiscountInfoV3?.header ? (
                  <NewWithDiscountRestaurantCard resData={restaurant} />
                ) : (
                  <RestaurantCard resData={restaurant} />
                )}
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Body;
