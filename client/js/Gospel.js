import React from 'react';
import {text} from 'd3-fetch';

const NUM_GOSPELS = 2;

class SingleGospel extends React.Component {
  render () {
    let gospel = this.props.gospel;

    return (
      <div className="container">
        <main role="main" className="article-list">
          <h1 className="list-title">The Gospel...</h1>
          <article className="list-item" itemScope="" itemType="http://schema.org/Blog">
            <h2 className="headline" itemProp="headline"><a href={'/the-gospel?parable=' + this.props.index}>The Gospel According to {gospel.shortName}</a></h2>
            <div className="meta">

              <span className="key">published on</span>
              <span className="val"><time itemProp="datePublished" dateTime="2016-08-25"> {gospel.dateTime}</time></span>

            </div>
            <section className="summary">
              {gospel.parable.join('\n')}
            </section>
          </article>
        </main>
      </div>
    );
  }
}

class Gospel extends React.Component {
  constructor () {
    super();

    this.state = {
      gospels: [],
    };
  }

  componentDidMount () {
    let preachIt = (data) => {
      let gospels = this.state.gospels;
      let [longName, shortName, dateTime, ...parable] = data.split('\n');
      let gospel = {
        shortName,
        longName,
        dateTime,
        parable,
      };
      gospels.push(gospel);
      this.setState({gospels});
    };

    for(var i = 0; i < NUM_GOSPELS; i ++) {
      text('/gospels/gospel' + i + '.txt')
        .then(preachIt);
    }
  }

  render () {
    let params = new URLSearchParams(this.props.location.search);
    let index = params.get('parable');
    console.log(index);
    if(index && this.state.gospels[index]) {
      console.log('hello');
      return (<SingleGospel gospel={this.state.gospels[index]} index={index}/>);
    }

    let gospels = this.state.gospels.map((gospel, i) => {
      return (
        <article  key={i} className="list-item" itemScope="" itemType="http://schema.org/Blog">
          <h2 className="headline" itemProp="headline"><a href={'/the-gospel?parable=' + i}>The Gospel According to {gospel.shortName}</a></h2>
          <div className="meta">

            <span className="key">published on</span>
            <span className="val"><time itemProp="datePublished" dateTime="2016-08-25"> {gospel.dateTime}</time></span>

          </div>
          <section className="summary">
            {gospel.parable[0]}
            <a href={'/the-gospel?parable=' + i}> Read More...</a>
          </section>
        </article>
      );
    });

    return (
      <div className="container">
        <main role="main" className="article-list">
          <h1 className="list-title">The Gospel...</h1>
          {gospels}
        </main>
      </div>
    );
  }
}

export default Gospel;
