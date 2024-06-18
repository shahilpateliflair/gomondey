import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import "../css/list.css";
import Social from "./Social _icon";
import { useSidebar } from "./Sidebar";

interface Data {
  id: number;
  description: string;
  category: string;
  language: string;
  duration: string;
  image: string;
}



function List() {

  const [userCategory, setUserCategory] = useState("");
  const [guidData, setGuidData] = useState<Data[]>([]);
  const [articleData, setArticleData] = useState<Data[]>([]);
  const [counsellingData, setCounsellingData] = useState<Data[]>([]);

  const guidContainerRef = useRef<HTMLDivElement>(null);
  const articleContainerRef = useRef<HTMLDivElement>(null);
  const counsellingContainerRef = useRef<HTMLDivElement>(null);

  const { toggleSidebar } = useSidebar();

  const handleChangeButtonClick = () => {
    toggleSidebar();
  };

  useEffect(() => {
    getUserProfile();
    fetchData("animation", setGuidData);
    fetchData("article", setArticleData);
    fetchData("counseling", setCounsellingData);
  }, []);

  const getUserProfile = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/profile/getprofile",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setUserCategory(response.data.category);
    } catch (error) {
      console.error("Error fetching user profile:", error);
    }
  };

  const fetchData = async (
    category: string,
    setData: React.Dispatch<React.SetStateAction<Data[]>>
  ) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/data/${category}`
      );
      setData(response.data);
    } catch (error) {
      console.error(`Error fetching ${category} data:`, error);
    }
  };

  const formatDuration = (duration: string) => {
    const parts = duration.split(":").map(Number);

    if (parts.length === 3) {
      const [hours, minutes, seconds] = parts;

      if (hours === 0 && minutes > 0) {
        return `${minutes} minutes read`;
      } else if (hours === 0 && minutes === 0 && seconds > 0) {
        return `less than a minute read`;
      } else {
        return `${hours}:${minutes.toString().padStart(2, "0")}:${seconds
          .toString()
          .padStart(2, "0")} min read`;
      }
    } else {
      const minutes = parseInt(duration, 10);
      return `${minutes} minute${minutes > 1 ? "s" : ""} read`;
    }
  };

  const scrollContainer = (
    ref: React.RefObject<HTMLDivElement>,
    direction: string
  ) => {
    if (ref.current) {
      const { scrollLeft, clientWidth } = ref.current;
      const scrollAmount =
        direction === "left" ? -clientWidth / 2 : clientWidth / 2;
      ref.current.scrollTo({
        left: scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const renderData = (
    data: Data[],
    containerRef: React.RefObject<HTMLDivElement>
  ) => (
    <>
      <div className="arrows">
        <button
          className="arrow arrow-prev"
          onClick={() => scrollContainer(containerRef, "left")}
        >
          &lt;
        </button>
        <button
          className="arrow arrow-next"
          onClick={() => scrollContainer(containerRef, "right")}
        >
          &gt;
        </button>
      </div>
      <div className="container" ref={containerRef}>
        {data.map((item) => (
          <div className="item" key={item.id}>
            <div
              className="background-image"
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <div className="description-overlay">
                <h2>{item.description}</h2>
              </div>
              <img
                className="movie-image"
                src={item.image}
                alt={item.description}
              />
            </div>
            <div className="button-container">
              <button className="play-btn">
                <i className="far fa-newspaper"></i>
              </button>
              <button id="downloadBtn">{item.category}</button>
              <p style={{ color: "black" }}>{formatDuration(item.duration)}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );

  return (
    <div>
      <div className="category-name">
        <h4>
          You have chosen: <span className="name">{userCategory}</span>{" "}
        </h4>
        <span>
          <button onClick={handleChangeButtonClick}>Change</button>
        </span>
      </div>
      <section>
        <h2 className="subcategory-name">Action</h2>
        {renderData(guidData, guidContainerRef)}
      </section>
      <Social />
      <section>
        <h2 className="subcategory-name">Article</h2>
        {renderData(articleData, articleContainerRef)}
      </section>
      <section>
        <h2 className="subcategory-name">Counselling</h2>
        {renderData(counsellingData, counsellingContainerRef)}
      </section>
    </div>
  );
};

export default List;
