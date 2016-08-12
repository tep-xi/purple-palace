import React from 'react';

class Home extends React.Component {
  render () {
    return (
      <div className="container">
        <main className="homepage">
          <h1 className="site-title">
            <span className="base05">[</span>
            <span className="base0e">tEp</span>
            <span className="base05">]</span>
            <span className="base05"># _</span>
          </h1>
          <div className="article">
            <article className="single" itemscope="" itemtype="http://schema.org/BlogPosting">
              <h1 className="headline" itemprop="headline"></h1>
              <section className="body" itemprop="articleBody">
                <figure>
                  <img src="/img/home.jpg"/>
                </figure>
                <p>One of the most unique and mature aspects of MIT is the diverse range of living opportunities available to fit our student body. You have experienced but the tip of the iceberg until you taste of the great wild world that lies just ex loco parentis.</p>
                <p>Tired of the blandness of the dorms? Want something different? tEp is a unique place where you can find a whole new level of independence from the ‘tvte.</p>
                <p>The rules we follow at tEp are the rules we choose for ourselves. It’s a lot of responsibility to govern yourself, but hell, you’re an adult, and we’re sure you can handle it.</p>
                <p>tEp is an amazing place filled with some of the most inventive and creative people at MIT, and is a place where standard operating procedure is to be working on 22 projects at a time, all of them totally rockin’. It’s a great, creative, and fun environment where nothing seems impossible, and the founding of your own company, or the discovery of a new planet, seem equally within your reach. Our info page has some of the neat things that have happened because of tEps in the recent past.</p>
                <p>Drop by tEp and you might not want to leave. Meat the brothers, have a grape söder, crash in the Free Willy net, and forget about whatever you should’ve already forgo…. tEp is many things to many people, but for all who live here it’s our home — as well as a covert operations center, culinary “research” lab, artistic studio, and philosophical playground. It’s not right for everyone — nothing is. Some, though, find a family where they can thrive and grow as never before.</p>
              </section>
            </article>

          </div>
        </main>
      </div>
    );
  }
}

export default Home;
