import React from "react";
const Title = () => {
  console.log("Rendering Title");
  return <div>useCallback Hook</div>;
};

export default React.memo(Title);
