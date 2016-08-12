import React from 'react';
import {csv} from 'd3-fetch';

class Rush extends React.Component {
  constructor () {
    super();
    this.state = {
      events: [],
    };
  }

  componentDidMount () {
    csv('/Rush_Schedule.csv')
      .then((events) => {
        this.setState({events});
      });
  }

  render () {
    let currentDate = null;
    let displayPastTitle = true;
    let displayFutureTitle = true;
    let pastTitle = (
      <div className="rush-title-container">
        <div><h1 className="list-title">Current Rush Events </h1></div>
      </div>
    );
    let futureTitle = (
      <div className="rush-title-container">
        <div><h1 className="list-title">Old Rush Events </h1></div>
      </div>
    );
    let dateTitle = '';
    let events = this.state.events.map((event, index) => {
      let dateTime = new Date(event.datetime);

      function isValidDate (d) {
        return (d !== 'Invalid Date') && !isNaN(d);
      }

      if((!currentDate || dateTime.getDate() != currentDate.getDate()) && isValidDate(dateTime)) {
        currentDate = dateTime;
        dateTitle = (
          <h2 className="list-key">Saturday, September 2</h2>
        );
        return null;
      }

      let title = '';
      let isinFuture = dateTime > (new Date());

      if(isinFuture && displayFutureTitle) {
        displayFutureTitle = false;
        title = futureTitle;
      }
      if(!isinFuture && displayPastTitle) {
        displayPastTitle = false;
        title = pastTitle;
      }
      let result = (
        <div key={index} className={isinFuture ? '' : 'old'}>
          {title}
          {dateTitle}
          <article className="rush-event" itemScope itemType="http://schema.org/Blog">
            <div className="rush-event-title-container">
              <h2 className="headline" itemProp="headline">{event.title} {event.draft ? 'Draft' : ''}</h2>
              <div className="meta">
                <span className="val"><time itemProp="datePublished" dateTime="hh:mm">{event.time}</time></span>
              </div>
            </div>
            <section className="summary">
              {event.summary}
            </section>
          </article>
        </div>
      );
      dateTitle = '';
      return result;
    });

    return (
      <div className="container">
        <main role="main" className="article-list">
          {events}
        </main>
      </div>
    );
  }
}

export default Rush;
