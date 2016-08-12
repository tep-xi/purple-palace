import React from 'react';

class Tour extends React.Component {
  render () {
    return (
      <div className="container">
        <main role="main" className="article">
          <article className="single" itemScope="" itemType="http://schema.org/BlogPosting">
            <h1 className="headline" itemProp="headline">Tour</h1>
            <section className="body" itemProp="articleBody">
              <p>You’ve heard stories about tEp: a.k.a. the purple palace, the last stronghold of the knights of the lambda calculus, the U.S.S. Birthday Ship. You’ve been meaning to get over there to see what it’s all about.</p>

              <p>But, you are lazy. Instead, you went to the tEp website and opted for the <em>virtual</em> house tour. We understand.</p>

              <p>This site brings you to such a virtual house tour. It is a multimedia text adventure game. But, while you can interact with the tour conventionally using the keyboard,
                <strong>you can also click on the links and the purple map</strong>, which will automatically type the corresponding command for you.</p>

              <p>For your tour, we are providing you with Irving Q. Tep, the spirit of the house. He’ll be giving you the descriptions and stories you will read during your tour.</p>

              <p>Without further ado:</p>

              <p><a href="http://tour.mit.edu/game/teptour">I want to go on the tour!</a></p>
            </section>
          </article>
        </main>
      </div>
    );
  }
}

export default Tour;
