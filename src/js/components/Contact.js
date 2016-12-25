import React, { Component, PropTypes as P } from 'react'

export default class Contact extends Component {
  
  state = {
    display: false,
    allowSend: false,
    form: {
      email: null,
      subject: null,
      content: null
    }
  }

  render() {
    let state = this.state

    const onFormSubmit = e => {
      e.preventDefault()
    }

    const onInputChange = (e) => {
      let { form } = state
      const { target } = e

      form[target.name] = target.value

      this.setState({...state, form})

      let allowSend = true

      for(const name in form) {
        if(form[name] == null || form[name].length < 1) {
          allowSend = false
          break;
        }
      }

      this.setState({...state, allowSend})
    }

    return <div className="contact">
      <div className="contact-form">
        <form>
          <h2><i className="icon-send"></i>Send a Message</h2>
          <p>Send me a message using the form below or directly using my email!
            <a href="mailto:jung@jungoh.me" className="email">Jung@Jungoh.me</a>
          </p>
          
          <input name="email" id="email_email" type="email" placeholder="Email" required onChange={ onInputChange } />
          <input name="subject" id="email_subject" type="text" placeholder="Subject" required onChange={ onInputChange } />
          <textarea name="content" id="email_content" rows="10" placeholder="Your Message." required onChange={ onInputChange }></textarea>
          <input type="submit" value="Send" onClick={ onFormSubmit } disabled={ state.allowSend ? false : `disabled` } />
        </form>
      </div>
    </div>
  }
}