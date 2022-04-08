import React, { Component } from 'react'
import WorksUltimaSera from "../atoms/works_ultimasera"
import WorksPrimoMondo from "../atoms/works_primomondo"
import WorksLuciDelTreno from "../atoms/works_lucideltreno"
import WorksPortaAperta from "../atoms/works_portaaperta"
import WorksOnoreArmi from "../atoms/works_onorearmi"
import WorksDueVolteLalba from "../atoms/works_duevoltelalba"
import WorksBagaglioLeggero from "../atoms/works_bagaglioleggero"
import WorksSconosciutoAllaPorta from "../atoms/works_sconosciutoallaporta"
import WorksAdonai from "../atoms/works_adonai"
import WorksAllodi from "../atoms/works_allodi"
import WorksUomoAlMuro from "../atoms/works_uomoalmuro"
import WorksGiostraPrimavera from "../atoms/works_giostraprimavera"
import WorksTerraScotta from "../atoms/works_terrascotta"

export default class Works extends Component {
	render() {
		return (
			<div>
				<section className="colorlib-blog" data-section="works">
					<div className="colorlib-narrow-content">
						<div className="row">
							<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
								<h2 className="colorlib-heading">Opere Letterarie</h2>
							</div>
						</div>
						<div className="row">
							<div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
									<div className="blog-entry">
										<a href="#worksterrascotta" data-toggle="modal" className="blog-img"><img src="images/copertine/fofana_tamburini_copertina.jpg" className="img-responsive" alt="book cover" /></a>
										<div className="desc">
											<span><small>QUANDO LA TERRA SCOTTA. Vita di un giovane africano dal Mali al Trentino.<br /> Biografia <br /> Italic-peQuod <br /> 2019 </small></span>
										</div>
									</div>
							</div>
							<div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
								<div className="blog-entry">
									<a href="#worksgiostraprimavera" data-toggle="modal" className="blog-img"><img src="images/copertine/giostraprimavera.png" className="img-responsive" alt="book cover" /></a>
									<div className="desc">
										<span><small>Giostra primavera<br /> Romanzo <br /> Italic-peQuod <br /> 2018 </small></span>
									</div>
								</div>
							</div>
							<div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
								<div className="blog-entry">
									<a href="#worksuomoalmuro" data-toggle="modal" className="blog-img"><img src="images/copertine/uomo_al_muro.jpg" className="img-responsive" alt="book cover" /></a>
									<div className="desc">
										<span><small>L'uomo al muro. Fenoglio e la guerra nei ventitre giorni della città di alba<br /> Monografia <br /> Italic-peQuod <br /> 2016 </small></span>
									</div>
								</div>
							</div>

							<div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
								<div className="blog-entry">
									<a href="#worksallodi" data-toggle="modal" className="blog-img"><img src="images/copertine/allodi.jpg" className="img-responsive" alt="book cover" /></a>
									<div className="desc">
										<span><small>Italo allodi. Ascesa e caduta di un Principe del calcio<br /> Biografia <br /> Italic-peQuod <br /> 2012 </small></span>
									</div>
								</div>
							</div>

							<div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
								<div className="blog-entry">
									<a href="#worksadonai" data-toggle="modal" className="blog-img"><img src="images/copertine/adonai.jpg" className="img-responsive" alt="book cover" /></a>
									<div className="desc">
										<span><small>Quel che so di Adonai <br /> Romanzo <br /> peQuod <br /> 2010 </small></span>
									</div>
								</div>
							</div>

							<div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
								<div className="blog-entry">
									<a href="#workssconosciutoallaporta" data-toggle="modal" className="blog-img"><img src="images/copertine/sconosciuto.jpg" className="img-responsive" alt="book cover" /></a>
									<div className="desc">
										<span><small>Uno sconosciuto alla porta <br /> Racconti <br /> peQuod <br /> 2008 </small></span>
									</div>
								</div>
							</div>

							<div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
								<div className="blog-entry">
									<a href="#worksbagaglioleggero" data-toggle="modal" className="blog-img"><img src="images/copertine/bagaglio_leggero.jpg" className="img-responsive" alt="book cover" /></a>
									<div className="desc">
										<span><small>Bagaglio lggero <br /> Romanzo <br /> peQuod <br /> 2006 </small></span>
									</div>
								</div>
							</div>

							<div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
								<div className="blog-entry">
									<a href="#worksduevoltelalba" data-toggle="modal" className="blog-img"><img src="images/copertine/duevoltelalba.jpg" className="img-responsive" alt="book cover" /></a>
									<div className="desc">
										<span><small>Due volte l'alba <br /> Romanzo <br /> Marsilio Editori, Venezia <br /> 2002 </small></span>
									</div>
								</div>
							</div>

							<div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
								<div className="blog-entry">
									<a href="#worksonorearmi" data-toggle="modal" className="blog-img"><img src="images/copertine/onore_delle_armi.jpg" className="img-responsive" alt="book cover" /></a>
									<div className="desc">
										<span><small>L'onore delle armi <br /> Romanzo <br /> Bompiani, Milano <br /> 1997 </small></span>
									</div>
								</div>
							</div>

							<div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
								<div className="blog-entry">
									<a href="#worksportaaperta" data-toggle="modal" className="blog-img"><img src="images/copertine/la_porta_e_aperta.jpg" className="img-responsive" alt="book cover" /></a>
									<div className="desc">
										<span><small>La porta è aperta <br /> Racconti <br /> Marsilio Editori, Venezia <br /> 1994 </small></span>
									</div>
								</div>
							</div>

							<div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
								<div className="blog-entry">
									<a href="#workslucitreno" data-toggle="modal" className="blog-img"><img src="images/copertine/le_luci_del_treno.jpg" className="img-responsive" alt="book cover" /></a>
									<div className="desc">
										<span><small>Le luci del treno <br /> Romanzo <br /> Marsilio Editori, Venezia <br /> 1992 </small></span>
									</div>
								</div>
							</div>

							<div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
								<div className="blog-entry">
									<a href="#worksprimomondo" data-toggle="modal" className="blog-img"><img src="images/copertine/nel_nostro_primo_mondo.jpg" className="img-responsive" alt="book cover" /></a>
									<div className="desc">
										<span><small>Nel nostro primo mondo <br /> Racconti <br /> Marsilio Editori, Venezia <br /> 1990 </small></span>
									</div>
								</div>
							</div>

							<div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
								<div className="blog-entry">
									<a href="#worksultimasera" data-toggle="modal" className="blog-img"><img src="images/copertine/ultima_sera.jpg" className="img-responsive" alt="book cover" /></a>
									<div className="desc">
										<span><small>Ultima sera dell'anno <br /> Racconti <br /> Il Lavoro Editoriale, Ancona <br /> 1988 </small></span>
									</div>
								</div>
							</div>

							

							

						

							

							

							


							

						

						
						</div>

						<hr />

					</div>
					<WorksUltimaSera></WorksUltimaSera>
					<WorksPrimoMondo></WorksPrimoMondo>
					<WorksLuciDelTreno></WorksLuciDelTreno>
					<WorksPortaAperta></WorksPortaAperta>
					<WorksOnoreArmi></WorksOnoreArmi>
					<WorksDueVolteLalba></WorksDueVolteLalba>
					<WorksBagaglioLeggero></WorksBagaglioLeggero>
					<WorksSconosciutoAllaPorta></WorksSconosciutoAllaPorta>
					<WorksAdonai></WorksAdonai>
					<WorksAllodi></WorksAllodi>
					<WorksUomoAlMuro></WorksUomoAlMuro>
					<WorksGiostraPrimavera></WorksGiostraPrimavera>
					<WorksTerraScotta></WorksTerraScotta>

				</section>
			</div>
		)
	}
}
