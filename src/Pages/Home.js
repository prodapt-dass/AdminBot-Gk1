import React from "react";
import "../Styles/Home.css";
import { useState } from "react";
import {VscSend} from 'react-icons/vsc';


const Home = ({ isLeftSidebarCollapsed }) => {
  const cards = [
    {
      title: "Activity",
      description: "View all of your project activity in one place.",
    },
    {
      title: "Risk Mitigated deal sheet",
      description:
        "See all of the risks that have been mitigated for your project.",
    },
    {
      title: "Database Project deal sheet",
      description:
        "View the status of all of the database projects for your project.",
    },
    {
      title: "Performance indicators deal sheet",
      description:
        "Track the performance of your project using key performance indicators.",
    },
    {
      title: "Deal Milestones deal sheet",
      description:
        "View the milestones for your project and see how they are progressing.",
    },
    {
      title: "Arrangements toul sheet",
      description:
        "See all of the arrangements that have been made for your project.",
    },
    {
      title: "Financing Arrangements deal sheet",
      description: "View the financing arrangements for your project.",
    },
    {
      title: "Motrics Tracked deal shoot",
      description:
        "Track all of the metrics for your project and see how they are changing over time.",
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    const searchData = {
      term: searchTerm,
      timestamp: new Date().toISOString(),
    };

    fetch("src/DatachatData.json")
      .then((response) => response.json())
      .then((data) => {
        // Add the new search data to the existing data
        data.searchHistory = data.searchHistory || [];
        data.searchHistory.push(searchData);

        // Update the JSON file with the new data
        fetch("/path/to/chatData.json", {
          method: "PUT", // Use "PUT" to update the file
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
      });
  };

  return (
    <div className={`home ${isLeftSidebarCollapsed ? "collapsed" : ""}`}>
      <div
        className="container"
        style={{
          marginLeft: isLeftSidebarCollapsed ? "10%" : "20%",
          width: isLeftSidebarCollapsed ? "75%" : "65%",
        }}
      >
        <div
          className="container-heading"
          style={{
            marginTop: isLeftSidebarCollapsed ? "5%" : "5%",
          }}
        >
          <div className="container-header1">Your AI-powered assistant for</div>
          <div className="container-header2">Project Management AI</div>
          <div className="container-header3">
            Manage better projects with less time and resources.
          </div>
        </div>

        {/*Cards*/}
        <div className="cards">
          {cards.map((card) => (
            <div className="card" key={card.title}>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </div>
          ))}
        </div>

        {/*Search bar*/}
        <div
          className="container-search-bar"
          style={{
            marginTop: isLeftSidebarCollapsed ? "15%" : "16%",
            marginLeft: isLeftSidebarCollapsed ? "5%" : "6%",
          }}
        >
          <input type="text" placeholder="Search..." />
          <div className="container-search-icon" onClick={handleSearch}>
            <VscSend />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
