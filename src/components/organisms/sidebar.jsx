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
                <a href="index.html">Alessandro Tamburini</a>
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
                    <a href="#newwork" data-nav-section="newwork">
                      Nuovo Romanzo
                    </a>
                  </li>
                  <li>
                    <a href="#onlineworks" data-nav-section="onlineworks">
                      Racconti Online
                    </a>
                  </li>
                  {/* <li>
                    <a href="#bookmarks" data-nav-section="bookmarks">
                      Bookmarks
                    </a>
                  </li> */}
                  <li>
                  <a href="#sendmail" data-nav-section="sendmail">
                      Posta
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
            {/* <nav id="colorlib-main-menu">
              <ul>
                <li>
                  <a
                    href="https://www.facebook.com/dhruv.barochia"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="icon-facebook2" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/ddbarochiya"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="icon-twitter2" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/ddbarochiya/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="icon-instagram" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/dhruv-b-545b52a9/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="icon-linkedin2" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/Dhruv34788"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="icon-github"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://medium.com/@dhruv.barochia34788"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="icon-blogger2"></i>
                  </a>
                </li>
              </ul>
            </nav>
            <div className="colorlib-footer">
              <p>
                <small>
                  Made with <i className="icon-heart" aria-hidden="true" /> and{" "}
                  <i className="icon-beer" aria-hidden="true"></i>
                  <br></br>
                  Thanks{" "}
                  <a
                    href="https://colorlib.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Colorlib
                  </a>{" "}
                  for inspiration
                </small>
              </p>
              <p>
                <small>Something coming soon !!</small>
              </p>
            </div> */}
          </aside>
        </div>
      </div>
    );
  }
}
