import React from 'react'

class Contact extends React.Component {
  openForm() {
  }

  onFormSubmit(e) {
    e.preventDefault();
  }

  render() {
    const htmlForm = <div className="contact-form">
      <form>
        <input type="submit" onClick={this.onFormSubmit}/>
      </form>
    </div>

    return <div className="contact">
      <htmlForm />
      <div className="contact-button" onClick={this.openForm}>O</div>
    </div>
  }
}

export default Contact