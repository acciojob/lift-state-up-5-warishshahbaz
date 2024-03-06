import React, { useState } from "react";
import "./../styles/App.css";
import ChildComp from "./ChildComp";

const App = () => {
  const [isLoggedIn, setIsLoginIn] = useState(false);
  return (
    <div>
      {/* Do not remove the main div */}

      <ChildComp setIsLoginIn={setIsLoginIn} isLoggedIn={isLoggedIn} />
    </div>
  );
};

export default App;
