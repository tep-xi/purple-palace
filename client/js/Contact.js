import React from 'react';

class Contact extends React.Component {
  render () {
    return (
      <div className="container">
        <main role="main" className="article">
          <article className="single" itemScope="" itemType="http://schema.org/BlogPosting">
            <h1 className="headline" itemProp="headline">Contact Info</h1>
            <section className="body" itemProp="articleBody">
              <p><strong>Phone Number:</strong> <code>617.262.5090</code></p>
              <p><strong>Address:</strong> <code>253 Commonwealth Avenue Boston, MA 02116</code></p>

              <div className="iframe-wrp">
                <iframe src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d5896.894832198709!2d-71.09301026966887!3d42.35430326674908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x89e370aa6684debb%3A0xce9735edfb9d7861!2s77+Massachusetts+Ave%2C+Cambridge%2C+MA+02142!3m2!1d42.359348!2d-71.093831!4m5!1s0x89e37a0f3dc77a29%3A0xc89119c4ff485d0f!2s253+Commonwealth+Avenue%2C+Boston%2C+MA!3m2!1d42.350792!2d-71.083484!5e0!3m2!1sen!2sus!4v1489262111023" width="600" height="450" frameBorder="0" allowFullScreen=""></iframe>
              </div>

              <p><strong>Directions</strong>:</p>

              <ul>
                <li><strong>From MIT</strong>: Walk 22 minutes from MIT, or take the Saferide Boston East to the first stop (Mass Ave and Beacon St) and walk from there.</li>
                <li><strong>Elsewhere</strong>: You’re on your own.</li>
              </ul>

              <p><strong>Email</strong>: (get on our mailing list)</p>

              <div className="iframe-wrp">
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeTe5GGEle-KjO76p-634j0P1RvtW4wOe4r3txyctp_Nvfmyw/viewform?embedded=true" width="100" height="1000" frameBorder="0" marginHeight="0" marginWidth="0">Loading...</iframe>
              </div>
            </section>
          </article>
        </main>
      </div>
    );
  }
}

export default Contact;
