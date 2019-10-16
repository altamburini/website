import React, { Component } from 'react'

export default class Introduction extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="home">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-12 animate-box" data-animate-effect="fadeInLeft">
                <h2 className="colorlib-heading">Il nuovo libro di Alessandro Tamburini, scritto con Soma Makan Fofana,  è QUANDO LA TERRA SCOTTA. <br />Vita di un giovane africano dal Mali al Trentino. <br /> PeQuod . In libreria da novembre 2019.</h2>
              </div>

              <div className="col-md-12 animate-box" data-animate-effect="fadeInLeft">
                <div className="blog-entry">
                  <img src="images/foto/foto_alex_soma_med.jpg" className="img-responsive" alt="book cover" />
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
