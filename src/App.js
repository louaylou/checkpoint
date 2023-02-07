import './App.css';

import React from "react";
import Form from "./Form";

function App() {
  return (
    <div className="container-fluid">
      <header className="bg-primary text-white p-5">
        <h1 className="text-center">My React App</h1>
      </header>
      <main className="py-5">
        <div className="container">
          <Form />
        </div>
      </main>
    </div>
  );
}

export default App;
