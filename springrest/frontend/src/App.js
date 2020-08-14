import React from "react";
import "./App.css";
// import { Button } from 'reactstrap';
// import { ToastContainer, toast } from 'react-toastify';
// import Home from './component/Home';
import Course from "./component/Course";
import AddCourse from "./component/AddCourse";
import AllCourse from "./component/AllCourse";
import { Container, Col } from "reactstrap";
import Header from "./component/Header";
import Menu from "./component/Menu";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./component/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Container>
          <Col md={4}>
            <Menu />
          </Col>
          <Col md={8}>
            <Route path="/" component={Home} exact />
            <Route path="/add-course" component={AddCourse} exact />
            <Route path="/view-course" component={AllCourse} exact />
          </Col>
        </Container>
      </Router>
    </div>
  );
}

export default App;
