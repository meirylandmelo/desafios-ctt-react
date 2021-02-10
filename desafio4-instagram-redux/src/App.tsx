import React from "react";
import './App.css';
import Header from "./components/Header"
import Posts from "./components/Posts"
import Perfil from "./components/Perfil"
import Stories from "./components/Stories"
import { Provider } from "react-redux"
import { store } from "./store"
import Form from "./components/Form"


function App() {
  return (
      <Provider store={store}>
      <Header />
      <Form />
      <div className="home">
        <Posts />
        <div>
        <Perfil />
          <Stories />
        </div>        
      </div>
      </Provider>
  );
}

export default App;
