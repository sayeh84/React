import React from "react";

function ChildComponent(props) {
  return (
    <div>
      <button onClick={props.gerrtParent}>Parent</button>
    </div>
  );
}

export default ChildComponent;
