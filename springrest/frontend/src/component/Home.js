import React, { useEffect } from "react";
import { Jumbotron } from "reactstrap";

function Home() {
  useEffect(() => {
    document.title = "Home";
  }, []);
  return (
    <div>
      <Jumbotron>
        <h1>This is my Home Page</h1>
      </Jumbotron>
    </div>
  );
}

export default Home;
