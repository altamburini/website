import React from "react";
import { Helmet } from "react-helmet";
import Sidebar from "./components/organisms/sidebar";
import Introduction from "./components/organisms/introduction";
import About from "./components/organisms/about";
import Works from "./components/organisms/works";
import NewWork from "./components/organisms/newWork";
import OnlineWorks from "./components/organisms/onlineWorks";
// import Bookmarks from "./components/organisms/bookmarks";
import SendMail from "./components/organisms/sendmail";
import Footer from "./components/organisms/footer";


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
          <NewWork></NewWork>
          <About></About>
          <Works></Works>         
          <OnlineWorks></OnlineWorks>
          <SendMail></SendMail>
          <Footer></Footer>
        </div>
      </div>
    </div>
  );
}

export default App;
