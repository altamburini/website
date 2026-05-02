import React, { Component } from 'react'

export default class NewWork extends Component {
	render() {
		return (
			<div>
				<section className="colorlib-about" data-section="newwork">
					<div className="colorlib-narrow-content">

						<div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
							<div className="col-md-6" >
								<h2 className="colorlib-heading">Il NUOVO ROMANZO DI ALESSANDRO TAMBURINI
								</h2>
								{/* <h2 className="desc"><span><small>In libreria dal 20 Febbraio 2025<br />
									(distribuzione: Messaggerie)
								</small></span>
								</h2> */}
								<div className="blog-entry">
									<div className="desc">

										<p>Il nuovo romanzo di Alessandro Tamburini è ambientato in Marocco, paese
sul quale l'autore ha già realizzato diversi scritti di viaggio comparsi
sul quotidiano Avvenire e in programmi di RAI Radio3.  </p>

<p>Potrebbe
intitolarsi "Il rimedio del serpente".</p>
										
										<p>La sua data di uscita è ancora
incerta ma è verosimile che possa collocarsi nel biennio 2028-29.
										</p>

									</div>


								</div>
								<div className="blog-entry">
									<img src="images/marocco2.jpg" className="img-responsive" alt="book cover" /> 
								</div>
							</div>



							<div className="col-md-6 animate-box" data-animate-effect="fadeInLeft">
								<div className="blog-entry">
									<img src="images/marocco1.jpg" className="img-responsive" alt="book cover" /> 
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
