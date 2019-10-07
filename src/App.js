import React from "react";
import { Helmet } from "react-helmet";
import Sidebar from "./components/organisms/sidebar";
import Introduction from "./components/organisms/introduction";
import About from "./components/organisms/about";
import Timeline from "./components/organisms/timeline";
import Blog from "./components/organisms/blog";
import Projects from "./components/organisms/projects";

import "./App.css";

function App() {
  return (
    <div className="App" id="colorlib-page">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Pagina di Alessandro Tamburini</title>
        <link rel="canonical" href="http://mysite.com/example" />
        <meta
          name="keywords"
          content="alessandro tamburini, tamburini, romanzo, romanzi, scrittore, 
scrittori, racconto, racconti, narrativa, 
tamburini, libri, libro, tondelli"
        ></meta>
      </Helmet>

      <div id="container-wrap">
        <Sidebar></Sidebar>
        <div id="colorlib-main">
          <Introduction></Introduction>
          <About></About>
          <Timeline></Timeline>
          <Blog></Blog>
          <Projects></Projects>
        </div>
      </div>
    </div>
  );
}

export default App;
