import { useState } from "react";
import "./App.css";
import React, {Component} from "react";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import PortFolio from "./Components/PortFolio";
import About from "./Components/About";
import Contect from "./Components/Contact";
import Footer from "./Components/Footer";
import Copyright from "./Components/Copyright";
import Posts from "./Components/Posts";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import axios from "axios";
export default class App extends Component {
  constructor(){
    super();
    this.state = {
      posts :null,
    }
  }
  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then((responce)=>{
      this.setState({posts : responce.data});
      console.log(responce.data)
    })
    .catch((error)=>{
      console.log(error);
    })
  }
  render () {
    return (
      <>
        <BrowserRouter>
          <Navbar />
          <div
            className="d-flex justify-content-center flex-column"
            style={{ width: "99vw", margin: "0", padding: "0" }}
          >
            <Routes>
              <Route path="/" element={<Header />}/>
              <Route path="/portfolio" element={<PortFolio />}/>
              <Route path="/about" element={<About />}/>
              <Route path="/contact" element={<Contect />}/>
              <Route path="/posts" element={<Posts posts = {this.state.posts} />}/>
            </Routes>
              <Footer />
              <Copyright />
          </div>
        </BrowserRouter>
      </>
    );
  }
}

