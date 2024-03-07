"use client";

import React, { useState } from "react";

interface TabProps {
  label: string;
  active: boolean;
  onClick: () => void;
}

const Tab: React.FC<TabProps> = ({ label, active, onClick }) => {
  return (
    <button
      className={`${
        active ? "text-blue-500 border-b-4 border-blue-500 border-spacing-y-4" : ""
      } focus:outline-none mx-4 mb-2 text-black text-base font-semibold`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

const CoinDetailTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div className="w-[881px] h-12 my-5 px-4">
      <div className="flex border-b-4 border-gray-200">
        <Tab label="Overview" active={activeTab === 0} onClick={() => handleTabClick(0)} />
        <Tab label="Fundamentals" active={activeTab === 1} onClick={() => handleTabClick(1)} />
        <Tab label="News Insights" active={activeTab === 2} onClick={() => handleTabClick(2)} />
        <Tab label="Sentiments" active={activeTab === 3} onClick={() => handleTabClick(3)} />
        <Tab label="Team" active={activeTab === 4} onClick={() => handleTabClick(4)} />
        <Tab label="Technicals" active={activeTab === 5} onClick={() => handleTabClick(5)} />
        <Tab label="Tokenomics" active={activeTab === 6} onClick={() => handleTabClick(6)} />
      </div>
    </div>
  );
};

export default CoinDetailTabs;
