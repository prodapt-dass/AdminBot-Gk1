// DualSidebar.js
import React, { useState } from "react";
import { FiSearch, FiBookmark } from "react-icons/fi";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { RiHome6Fill, RiSettings3Line } from "react-icons/ri";
import { LuCompass } from "react-icons/lu";
import { AiOutlinePlus } from "react-icons/ai";
import "../Styles/Sidebar.css";
import "../Styles/Home.css";
import chatData from "../Data/chatData.json";
import Logo from "../Components/Logo";
import Home from "../Pages/Home";
import { useNavigate } from "react-router-dom";

const DualSidebar = () => {
  const [isLeftSidebarCollapsed, setLeftSidebarCollapsed] = useState(true);
  const navigate = useNavigate();

  const [isHomeActive, setHomeActive] = useState(true);
  const [isCompassActive, setCompassActive] = useState(false);
  const [isSettingsActive, setSettingsActive] = useState(false);

  const toggleLeftSidebar = () => {
    setLeftSidebarCollapsed(!isLeftSidebarCollapsed);
  };

  const handleItemClick = (itemName) => {
    setHomeActive(itemName === "home");
    setCompassActive(itemName === "compass");
    setSettingsActive(itemName === "settings");
  };

  const goToHome = () => {
    navigate("/");
  };

  return (
    <>
      <div className="dual-sidebar">
        {/* Left Sidebar */}
        <div className={`sidebar ${isLeftSidebarCollapsed ? "collapsed" : ""}`}>
          <div className="content">
            <Logo isCollapsed={isLeftSidebarCollapsed} />

            <div className="menu-item-container">
              {/* Home */}
              <div
                className={`sidebar-item ${isHomeActive ? "active" : ""}`}
                onClick={() => {
                  handleItemClick("home");
                  goToHome();
                }}
              >
                <div className="sidebar-item-content">
                  <div className="sidebar-item-box">
                    <RiHome6Fill size={24} />
                  </div>
                  <span
                    style={{
                      display: isLeftSidebarCollapsed ? "none" : "inline-block",
                      
                    }}
                  >
                    Home
                  </span>
                </div>
              </div>

              {/* Compass */}
              <div
                className={`sidebar-item ${isCompassActive ? "active" : ""}`}
                onClick={() => handleItemClick("compass")}
              >
                <div className="sidebar-item-content">
                  <div className="sidebar-item-box">
                    <LuCompass size={24} />
                  </div>
                  <span
                    style={{
                      display: isLeftSidebarCollapsed ? "none" : "inline-block",
                    }}
                  >
                    Compass
                  </span>
                </div>
              </div>

              {/* Settings */}
              <div
                className={`sidebar-item ${isSettingsActive ? "active" : ""}`}
                onClick={() => handleItemClick("settings")}
              >
                <div className="sidebar-item-content">
                  <div className="sidebar-item-box">
                    <RiSettings3Line size={24} />
                  </div>
                  <span
                    style={{
                      display: isLeftSidebarCollapsed ? "none" : "inline-block",
                    }}
                  >
                    Settings
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="toggle-btn-container" onClick={toggleLeftSidebar}>
            {isLeftSidebarCollapsed ? <BsChevronRight /> : <BsChevronLeft />}
          </div>
        </div>

        {/* Separator Line */}
        <div
          className={`separator-line ${
            isLeftSidebarCollapsed ? "collapsed" : ""
          }`}
        />

        {/* Right Sidebar */}
        <div
          className={`right-sidebar ${
            isLeftSidebarCollapsed ? "collapsed" : ""
          }`}
        >
          <div className="content">
            {/* Chatbot Contents */}
            <span className="activity-text">Activity</span>
            <div className="chatbot-contents">
              <div className="search-bar">
                <input type="text" placeholder="Search..." />
                <FiSearch size={20} />
              </div>

              {/* Chat Categories */}
              <div className="chat-categories">
                {chatData.chats.map((chatCategory) => (
                  <div key={chatCategory.id} className="chat-category">
                    <span className="category-title">{chatCategory.title}</span>
                    {chatCategory.messages.map((message) => (
                      <div key={message.id} className="chat-subcategory">
                        <div className="chatbot-item">
                          <FiBookmark size={24} />
                          <span>{message.message.substring(0, 30)}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* New Chat Button */}
            <button className="new-chat-btn">
              <AiOutlinePlus size={24} />
              <span>New Chat</span>
            </button>
          </div>
        </div>
      </div>
      <Home isLeftSidebarCollapsed={isLeftSidebarCollapsed} />
    </>
  );
};

export default DualSidebar;
