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
import WorksUltimiMiracoli from "../atoms/works_ultimimiracoli"

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
										<a href="#worksultimimiracoli" data-toggle="modal" className="blog-img"><img src="images/copertine/ultimimiracoli.jpg" className="img-responsive" alt="book cover" /></a>
										<div className="desc">
											<span><small>Ultimi Miracoli.<br /> Racconti <br /> peQuod <br /> 2022 </small>
										<br /><a href="https://www.ibs.it/ultimi-miracoli-libro-alessandro-tamburini/e/9788860682123?inventoryId=370635730&queryId=6f23af2acb4816a76a7f179c94706175" target="_blank" rel="noopener noreferrer">Ibs</a> | <a href="https://www.amazon.it/Ultimi-miracoli-Alessandro-Tamburini/dp/8860682126/ref=sr_1_1?__mk_it_IT=M&crid=10PM4XIU7NJFS&keywords=Ultimi+miracoli+Alessandro+Tamburini&qid=1655124890&sprefix=ultimi+miracoli+alessandro+tamburini+aps119&sr=8-1" target="_blank" rel="noopener noreferrer">Amazon</a>
										</span>
										</div>
									</div>
							</div>
							<div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
									<div className="blog-entry">
										<a href="#worksterrascotta" data-toggle="modal" className="blog-img"><img src="images/copertine/fofana_tamburini_copertina.jpg" className="img-responsive" alt="book cover" /></a>
										<div className="desc">
											<span><small>QUANDO LA TERRA SCOTTA. Vita di un giovane africano dal Mali al Trentino.<br /> Biografia <br /> Italic-peQuod <br /> 2019 </small>
										<br /><a href="https://www.ibs.it/quando-terra-scotta-vita-di-libro-soma-makan-fofana-alessandro-tamburini/e/9788860681508" target="_blank" rel="noopener noreferrer">Ibs</a> | <a href="https://www.amazon.it/Quando-terra-scotta-Fofana/dp/8860681502/ref=sr_1_1?__mk_it_IT=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=quando+la+terra+scotta&qid=1588517844&sr=8-1" target="_blank" rel="noopener noreferrer">Amazon</a>
										</span>
										</div>
									</div>
							</div>
							<div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
								<div className="blog-entry">
									<a href="#worksgiostraprimavera" data-toggle="modal" className="blog-img"><img src="images/copertine/giostraprimavera.png" className="img-responsive" alt="book cover" /></a>
									<div className="desc">
										<span><small>Giostra primavera<br /> Romanzo <br /> Italic-peQuod <br /> 2018 </small>
										<br /><a href="https://www.ibs.it/giostra-primavera-libro-alessandro-tamburini/e/9788860681355" target="_blank" rel="noopener noreferrer">Ibs</a> | <a href="https://www.amazon.it/Giostra-primavera-Alessandro-Tamburini/dp/8860681359/ref=sr_1_1?__mk_it_IT=ÅMÅŽÕÑ&amp;dchild=1&amp;keywords=giostra+primavera&amp;qid=1588501861&amp;sr=8-1" target="_blank" rel="noopener noreferrer">Amazon</a>
										</span>
									</div>
								</div>
							</div>
							<div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
								<div className="blog-entry">
									<a href="#worksuomoalmuro" data-toggle="modal" className="blog-img"><img src="images/copertine/uomo_al_muro.jpg" className="img-responsive" alt="book cover" /></a>
									<div className="desc">
										<span><small>L'uomo al muro. Fenoglio e la guerra nei ventitre giorni della città di alba<br /> Monografia <br /> Italic-peQuod <br /> 2016 </small>
										<br /><a href="https://www.ibs.it/uomo-al-muro-fenoglio-guerra-libro-alessandro-tamburini/e/9788869740282?srsltid=AfmBOoqzlJUkiQevRTUbXPPVb4R-L3JMSi17orCCnnatvGOoQYKj7bV3" target="_blank" rel="noopener noreferrer">Ibs</a> | <a href="https://www.amazon.it/Luomo-Fenoglio-guerra-%C2%ABVentitre-giorni/dp/8869740285" target="_blank" rel="noopener noreferrer">Amazon</a> | <a href="https://www.centrostudibeppefenoglio.it/it/articolo/41-48-5151/biblioteca/centro-studi-beppe-fenoglio/luomo-al-muro" target="_blank" rel="noopener noreferrer">Centro Studi Fenoglio - Alba</a>
										</span>
									</div>
								</div>
							</div>

							<div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
								<div className="blog-entry">
									<a href="#worksallodi" data-toggle="modal" className="blog-img"><img src="images/copertine/allodi.jpg" className="img-responsive" alt="book cover" /></a>
									<div className="desc">
										<span><small>Italo allodi. Ascesa e caduta di un Principe del calcio<br /> Biografia <br /> Italic-peQuod <br /> 2012 </small>
										<br /><a href="https://www.ibs.it/italo-allodi-ascesa-caduta-di-libro-alessandro-tamburini/e/9788896506837?srsltid=AfmBOornHSeBC6bcEO8zrmtrfa0rPwlYrfsJgjvyYZ3Vjf8KUoLNLhzb" target="_blank" rel="noopener noreferrer">Ibs</a> | <a href="https://www.amazon.it/Allodi-Ascesa-caduta-principe-calcio/dp/8896506832" target="_blank" rel="noopener noreferrer">Amazon</a>
										</span>
									</div>
								</div>
							</div>

							<div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
								<div className="blog-entry">
									<a href="#worksadonai" data-toggle="modal" className="blog-img"><img src="images/copertine/adonai.jpg" className="img-responsive" alt="book cover" /></a>
									<div className="desc">
										<span><small>Quel che so di Adonai <br /> Romanzo <br /> peQuod <br /> 2010 </small>
										<br /><a href="https://www.ibs.it/quel-che-so-di-adonai-libro-alessandro-tamburini/e/9788896506080?srsltid=AfmBOopyNTZ7Xwf9dyDlun5gkMD_SX3hnYNjT5Q8sXGkpEpW-RVWod3Y" target="_blank" rel="noopener noreferrer">Ibs</a> | <a href="https://www.amazon.it/Quel-che-Adonai-Alessandro-Tamburini/dp/8896506085" target="_blank" rel="noopener noreferrer">Amazon</a>
										</span>
									</div>
								</div>
							</div>

							<div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
								<div className="blog-entry">
									<a href="#workssconosciutoallaporta" data-toggle="modal" className="blog-img"><img src="images/copertine/sconosciuto.jpg" className="img-responsive" alt="book cover" /></a>
									<div className="desc">
										<span><small>Uno sconosciuto alla porta <br /> Racconti <br /> peQuod <br /> 2008 </small>
										<br /><a href="https://www.ibs.it/sconosciuto-alla-porta-libro-alessandro-tamburini/e/9788860680518?srsltid=AfmBOoo_aOMdqm2A9TbCIJ9xO4uUhT_qcEQu_GvKCsGsmtBek6l4IyJq" target="_blank" rel="noopener noreferrer">Ibs</a> | <a href="https://www.amazon.it/sconosciuto-alla-porta-Alessandro-Tamburini/dp/8860680514" target="_blank" rel="noopener noreferrer">Amazon</a>
										</span>
									</div>
								</div>
							</div>

							<div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
								<div className="blog-entry">
									<a href="#worksbagaglioleggero" data-toggle="modal" className="blog-img"><img src="images/copertine/bagaglio_leggero.jpg" className="img-responsive" alt="book cover" /></a>
									<div className="desc">
										<span><small>Bagaglio lggero <br /> Romanzo <br /> peQuod <br /> 2006 </small>
										<br /><a href="https://www.ibs.it/bagaglio-leggero-libro-alessandro-tamburini/e/9788860680020?srsltid=AfmBOoo10GkRwmrKt0TeGPNddLgh5v_fbSKRDrBCkwzkas4kbCCyYzB5" target="_blank" rel="noopener noreferrer">Ibs</a> | <a href="https://www.amazon.it/Bagaglio-leggero-Alessandro-Tamburini/dp/8860680026" target="_blank" rel="noopener noreferrer">Amazon</a>
										</span>
									</div>
								</div>
							</div>

							<div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
								<div className="blog-entry">
									<a href="#worksduevoltelalba" data-toggle="modal" className="blog-img"><img src="images/copertine/duevoltelalba.jpg" className="img-responsive" alt="book cover" /></a>
									<div className="desc">
										<span><small>Due volte l'alba <br /> Romanzo <br /> Marsilio Editori, Venezia <br /> 2002 </small>
										<br /><a href="https://www.ibs.it/due-volte-alba-libro-alessandro-tamburini/e/9788831778336?srsltid=AfmBOoqpgp8jDiVUgz9RVh0x419AyeeIh1qDCvE4nsjXdqNYj2HT-MAE" target="_blank" rel="noopener noreferrer">Ibs</a> | <a href="https://www.amazon.it/Due-volte-lalba-Alessandro-Tamburini/dp/8831778331" target="_blank" rel="noopener noreferrer">Amazon</a>
										</span>
									</div>
								</div>
							</div>

							<div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
								<div className="blog-entry">
									<a href="#worksonorearmi" data-toggle="modal" className="blog-img"><img src="images/copertine/onore_delle_armi.jpg" className="img-responsive" alt="book cover" /></a>
									<div className="desc">
										<span><small>L'onore delle armi <br /> Romanzo <br /> Bompiani, Milano <br /> 1997 </small>
										<br /><a href="https://www.amazon.it/Lonore-delle-armi-Alessandro-Tamburini/dp/8845230007" target="_blank" rel="noopener noreferrer">Amazon</a>
										</span>
									</div>
								</div>
							</div>

							<div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
								<div className="blog-entry">
									<a href="#worksportaaperta" data-toggle="modal" className="blog-img"><img src="images/copertine/la_porta_e_aperta.jpg" className="img-responsive" alt="book cover" /></a>
									<div className="desc">
										<span><small>La porta è aperta <br /> Racconti <br /> Marsilio Editori, Venezia <br /> 1994 </small>
										<br /><a href="https://www.ibs.it/porta-aperta-libro-alessandro-tamburini/e/9788831759786?srsltid=AfmBOopcShfNBg262ci4rGfGZfmcvYj6V68wIg7lYsdXH0GvYleLERt6" target="_blank" rel="noopener noreferrer">Ibs</a>
										</span>
									</div>
								</div>
							</div>

							<div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
								<div className="blog-entry">
									<a href="#workslucitreno" data-toggle="modal" className="blog-img"><img src="images/copertine/le_luci_del_treno.jpg" className="img-responsive" alt="book cover" /></a>
									<div className="desc">
										<span><small>Le luci del treno <br /> Romanzo <br /> Marsilio Editori, Venezia <br /> 1992 </small>
										<br /><a href="https://www.ibs.it/luci-del-treno-libri-vintage-alessandro-tamburini/e/2560016078571?srsltid=AfmBOopH2iEYwTcDED656nj-f4oONcSh20ybA0EA66QyUPKBngywVuih" target="_blank" rel="noopener noreferrer">Ibs</a> | <a href="https://www.amazon.it/luci-del-treno-Alessandro-Tamburini/dp/8831756303" target="_blank" rel="noopener noreferrer">Amazon</a>
										</span>
									</div>
								</div>
							</div>

							<div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
								<div className="blog-entry">
									<a href="#worksprimomondo" data-toggle="modal" className="blog-img"><img src="images/copertine/nel_nostro_primo_mondo.jpg" className="img-responsive" alt="book cover" /></a>
									<div className="desc">
										<span><small>Nel nostro primo mondo <br /> Racconti <br /> Marsilio Editori, Venezia <br /> 1990 </small>
										<br /><a href="https://www.ibs.it/nel-nostro-primo-mondo-libro-alessandro-tamburini/e/9788831753036?srsltid=AfmBOoqsSQyZGe4fDtiIQZJYckKkkCpppgWLbRiAWdt6WKfHdrOfbKFw" target="_blank" rel="noopener noreferrer">Ibs</a> | <a href="https://www.amazon.it/nostro-primo-mondo-Alessandro-Tamburini/dp/8831753037" target="_blank" rel="noopener noreferrer">Amazon</a>
										</span>
									</div>
								</div>
							</div>

							<div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
								<div className="blog-entry">
									<a href="#worksultimasera" data-toggle="modal" className="blog-img"><img src="images/copertine/ultima_sera.jpg" className="img-responsive" alt="book cover" /></a>
									<div className="desc">
										<span><small>Ultima sera dell'anno <br /> Racconti <br /> Il Lavoro Editoriale, Ancona <br /> 1988 </small>
										<br /><a href="https://www.ibs.it/ultima-sera-dell-anno-otto-libri-vintage-alessandro-tamburini/e/2570140073021?srsltid=AfmBOorZPzkCkiDPaduscW-euFgcwCOsZRpEJIsuE112Z2lepuYjD0rJ" target="_blank" rel="noopener noreferrer">Ibs</a> | <a href="https://www.amazon.it/Ultima-sera-dell-anno-racconti/dp/B0761Y6BB6" target="_blank" rel="noopener noreferrer">Amazon</a>
										</span>
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
					<WorksUltimiMiracoli></WorksUltimiMiracoli>

				</section>
			</div>
		)
	}
}
