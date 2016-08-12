import React from 'react';

class Header extends React.Component {
  render () {
    return (
      <header>
        <div className="container clearfix">
          <a className="path" href="/">[tEp]</a>
          <span className="caret">#</span>
          <a className="path" href="/rush">[rush]</a>
          <span className="caret">#</span>
          <a className="path" href="/contact">[contact/social]</a>
          <span className="caret">#</span>
          <a className="path" href="/the-gospel">[the gospel]</a>
          <span className="caret">#</span>
          <a className="path" href="/tour">[tour]</a>
          <span className="caret">#</span>
          <span className="caret"> _</span>
        </div>
      </header>
    );
  }
}

export default Header;
