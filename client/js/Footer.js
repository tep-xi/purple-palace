import React from 'react';

class Footer extends React.Component {
  render () {
    return (
      <footer>
        <div className="container clearfix">
          <span className="caret">tEp Services:</span>
          <a className="path" href="/squidnet">[squidnet]</a>
          <span className="caret">#</span>
          <a className="path" href="/ola">[ola]</a>
          <span className="caret">#</span>
          <a className="path" href="http://lates.mit.edu">[lates]</a>
          <span className="caret">#</span>
          <a className="path" href="/teps">[t.e.p.s.]</a>
          <span className="caret">#</span>
          <a className="path" href="/http://wiki.mit.edu">[internal wiki]</a>
          <span className="caret">#</span>
          <span className="caret"> _</span>
        </div>
        <div className="container">
          <div className="copyright">
            <a href="https://github.com/tep-xi/static-fp">
              <svg id="octocat" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                <path d="M14.7 5.34c.13-.32.55-1.59-.13-3.31 0 0-1.05-.33-3.44 1.3-1-.28-2.07-.32-3.13-.32s-2.13.04-3.13.32c-2.39-1.64-3.44-1.3-3.44-1.3-.68 1.72-.26 2.99-.13 3.31C.49 6.21 0 7.33 0 8.69 0 13.84 3.33 15 7.98 15S16 13.84 16 8.69c0-1.36-.49-2.48-1.3-3.35zM8 14.02c-3.3 0-5.98-.15-5.98-3.35 0-.76.38-1.48 1.02-2.07 1.07-.98 2.9-.46 4.96-.46 2.07 0 3.88-.52 4.96.46.65.59 1.02 1.3 1.02 2.07 0 3.19-2.68 3.35-5.98 3.35zM5.49 9.01c-.66 0-1.2.8-1.2 1.78s.54 1.79 1.2 1.79c.66 0 1.2-.8 1.2-1.79s-.54-1.78-1.2-1.78zm5.02 0c-.66 0-1.2.79-1.2 1.78s.54 1.79 1.2 1.79c.66 0 1.2-.8 1.2-1.79s-.53-1.78-1.2-1.78z"/>
              </svg>
            </a>
            <div>2018 tEp</div>
          </div>
          <address><a target="_blank" href="https://www.google.com/maps/place/253+Commonwealth+Avenue,+Boston,+MA+02116/@42.350918,-71.083522,17z/data=!4m2!3m1!1s0x89e37a0f3c3d6b9d:0xfb5e9f810e870fdd">253 Commonwealth Avenue Boston, MA 02116</a></address>
          <address>617.262.5090</address>
        </div>
      </footer>
    );
  }
}

export default Footer;
