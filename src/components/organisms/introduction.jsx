import React, { Component } from 'react'

export default class Introduction extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="home">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-12 animate-box" data-animate-effect="fadeInLeft">
                <h2 className="colorlib-heading">Il nuovo libro di Alessandro Tamburini<br /> è il romanzo <i>Sul confine della luce</i>,<br /> Edizioni PeQuod. <br />In libreria da marzo 2025.</h2>
              </div>

              <div className="col-md-12 animate-box" data-animate-effect="fadeInLeft">
                <div className="colorlib-heading">
                  <img src="images/copertine/sul_confine_della_luce.jpg" className="img-responsive" alt="book cover" />
                </div>
              </div>
            </div>

            <hr />
          </div>
        </section>
      </div>
    )
  }
}
