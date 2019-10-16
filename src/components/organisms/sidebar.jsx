import React, { Component } from "react";

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
          <nav
            href="#navbar"
            className="js-colorlib-nav-toggle colorlib-nav-toggle"
            data-toggle="collapse"
            data-target="#navbar"
            aria-expanded="false"
            aria-controls="navbar"
          >
            <i />
          </nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <div
                className="author-img"
                style={{ backgroundImage: "url(images/foto/foto_sidebar.jpg)" }}
              />
              <h1 id="colorlib-logo">
                <a href="/">Alessandro Tamburini</a>
              </h1>
              {/* <span className="email">
                <i className="icon-mail"></i> email_address
              </span> */}
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active">
                    <a href="#home" data-nav-section="home">
                      Pagina Iniziale
                    </a>
                  </li>
                  <li>
                    <a href="#newwork" data-nav-section="newwork">
                      Nuovo Romanzo
                    </a>
                  </li>
                  <li>
                    <a href="#about" data-nav-section="about">
                      Nota Biografica
                    </a>
                  </li>
                  <li>
                    <a href="#works" data-nav-section="works">
                      Opere
                    </a>
                  </li>

                  <li>
                    <a href="#onlineworks" data-nav-section="onlineworks">
                      Testi Online
                    </a>
                  </li>
                  {/* <li>
                    <a href="#bookmarks" data-nav-section="bookmarks">
                      Bookmarks
                    </a>
                  </li> */}
                  <li>
                    <a href="#sendmail" data-nav-section="sendmail">
                      Contatti
                    </a>
                  </li>
                </ul>
              </div>
            </nav>

          </aside>
        </div>
      </div>
    );
  }
}
