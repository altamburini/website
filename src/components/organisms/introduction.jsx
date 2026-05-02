import React, { Component } from 'react'

export default class Introduction extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="home">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
                <h2 className="colorlib-heading">L'ultimo romanzo di Alessandro Tamburini<br /> <i>"Sul confine della luce"</i>,<br /> Edizioni PeQuod. <br />E' in libreria.</h2>
                               				<br />Acquista su <a href="https://www.ibs.it/sul-confine-della-luce-libro-alessandro-tamburini/e/9788860683861" target="_blank" rel="noopener noreferrer">IBS</a> | <a href="https://www.amazon.it/Ultimi-miracoli-Alessandro-Tamburini/dp/8860682126/ref=sr_1_1?__mk_it_IT=M&crid=10PM4XIU7NJFS&keywords=Ultimi+miracoli+Alessandro+Tamburini&qid=1655124890&sprefix=ultimi+miracoli+alessandro+tamburini+aps119&sr=8-1" target="_blank" rel="noopener noreferrer">Amazon</a>
              </div>


    
              <div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
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
