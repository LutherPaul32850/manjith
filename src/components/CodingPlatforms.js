import React from "react";

function CodingPlatforms() {
  return (
    <div className="container">
      <h2>Coding Platforms</h2>
      <div className="card-container">
        <div className="card">
          <a href="https://leetcode.com/u/vanapilly_manjith/" className="link" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-leetcode"></i> {/* LeetCode Icon */}
            LeetCode
          </a>
        </div>
        <div className="card">
          <a href="https://codeforces.com/profile/vanapilly_manjith" className="link" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-codeforces"></i> {/* Codeforces Icon */}
            Codeforces
          </a>
        </div>
        <div className="card">
          <a href="https://www.codechef.com/users/vmanjith" className="link" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-codechef"></i> {/* Codechef Icon */}
            Codechef
          </a>
        </div>
      </div>
    </div>
  );
}

export default CodingPlatforms;
