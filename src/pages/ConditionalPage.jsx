import React, { useState } from "react";

const ConditionalPage = () => {
  const [showContent, setShowContent] = useState(false);

  return (
    <div>
      <button onClick={() => setShowContent(!showContent)}>
        {showContent ? "Hide" : "Show"} Content
      </button>
      {showContent && <p>Now you can see content!</p>}
    </div>
  );
};

export default ConditionalPage;
