import React, { Component } from 'react'

export default class SendMail extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-blog" data-section="sendmail">
			<div className="colorlib-narrow-content">
			<form action="mailto:alessandro-tamburini@libero.it" method="GET" target="_blank">
    <h1 class="title">Invia un messaggio:</h1>
    <div class="field"><label class="label" for="subject">Titolo</label>
        <input name="subject" id="subject" type="text" class="input" value=""/></div>
    <div class="field"><label class="label" for="body">Testo</label>
        <textarea class="textarea" name="body" id="body"></textarea></div>
    <div><input type="submit" value="Create Email" class="button is-primary"/></div>
</form>
			</div>
			</section>
      </div>
    )
  }
}
