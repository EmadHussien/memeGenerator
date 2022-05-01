import "./styles.css";
import React from "react";
import Header from "./Header";
import Form from "./Form";
export default function App() {
  return (
    <div className="App">
      <Header />
      <div className="main-container">
        <Form />
      </div>
    </div>
  );
}
