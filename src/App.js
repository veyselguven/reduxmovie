import React, { Component } from "react";
import "./App.css";
import "semantic-ui-css/semantic.min.css";
import { Route, Routes } from "react-router-dom";
import { Container } from "semantic-ui-react";
import MoviesPage from "./components/pages/MoviesPage";
import Footer from "./components/Footer";
import Header from "./components/Header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Container text>
          <Routes>
            <Route path="/movies" element={<MoviesPage />} />
          </Routes>
        </Container>
        <hr />
        <Footer />
      </div>
    );
  }
}

export default App;
