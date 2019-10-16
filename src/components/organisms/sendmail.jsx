import React, { Component } from 'react'

export default class SendMail extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-blog" data-section="sendmail">
          <div className="colorlib-narrow-content">
            <form action="mailto:m.nottoli@gmail.com" method="GET" target="_blank">
              <h1 class="title">Invia un messaggio:</h1>
              <div class="field"><label className="colorlib-heading">Titolo</label>
                <input name="subject" id="subject" type="text" class="input" value="" /></div>
              <div class="field"><label className="colorlib-heading">Testo</label>
                <textarea class="textarea" name="body" id="body"></textarea></div>
              <div><input type="submit" value="Invia" class="button is-primary" /></div>
            </form>
            <hr />
          </div>
        </section>
      </div>
    )
  }
}
