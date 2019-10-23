import React, { Component } from 'react'
import OnlineWorksUltimaSera from "../atoms/onlineworks_ultimasera"
import OnlineWorksBrennero from "../atoms/onlineworks_brennero"
import OnlineWorksCielo from "../atoms/onlineworks_cielo"
import OnlineWorksIntervistaLucaCoser from "../atoms/onlineworks_intervistalucacoser"

export default class OnlineWorks extends Component {
	render() {
		return (
			<div>
				<section className="colorlib-blog" data-section="onlineworks">
					<div className="colorlib-narrow-content">
						<div className="row">
							<div className="col-md-12 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
								<h2 className="colorlib-heading">In questa sezione potrete consultare e
					scaricare racconti inediti e provenienti dai lavori pubblicati da Alessandro
        Tamburini ... Buona Lettura!</h2>
							</div>

							<div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
								<div className="blog-entry">
									<div className="desc">
										<span>Ultima sera dell'anno (Ultima Sera Dell'anno - 1988) <br /> Tratto dal volume di racconti omonimo, <br />Il lavoro editoriale, 1998
</span>
									</div>
									<a href="#onlineworksultimasera" data-toggle="modal" className="blog-img"><img src="images/testionline/ultimasera.jpg" className="img-responsive" alt="online test pic" /></a>
									{/* <a href="zipfiles/ultimaseraracconto.zip" target="_blank" className="blog-img">Scarica</a> */}
								</div>
							</div>
							<div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
								<div className="blog-entry">
									<div className="desc">
										<span>Brennero (2008) <br />Pubblicato, fra l’altro, in “Patrie impure. Italia, autoritratto a più voci”. <br />Rizzoli, 2003
</span>
									</div>
									<a href="#onlineworksbrennero" data-toggle="modal" className="blog-img"><img src="images/testionline/brennero.jpg" className="img-responsive" alt="online test pic" /></a>

								</div>
							</div>
							<div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
								<div className="blog-entry">
									<div className="desc">
										<span>Il cielo che prima non c'era (2009)<br /> Pubblicato in italiano e nell’allegata traduzione inglese nell’Antologia “Present tensions”
										 (European writers on overcoming dictatorships),<br /> edita da Central European University Press, e distribuita in vari Paesi.
</span>
									</div>
									<a href="#onlineworkscielo" data-toggle="modal" className="blog-img"><img src="images/testionline/cielononcera.jpg" className="img-responsive" alt="online test pic" /></a>

								</div>
							</div>
						</div>


						<hr />
					</div>

					<OnlineWorksUltimaSera></OnlineWorksUltimaSera>
					<OnlineWorksBrennero></OnlineWorksBrennero>
					<OnlineWorksCielo></OnlineWorksCielo>
					<OnlineWorksIntervistaLucaCoser></OnlineWorksIntervistaLucaCoser>
				</section>
			</div>
		)
	}
}
