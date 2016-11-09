import React from 'react';
import Nav from '../nav/nav';

class Page extends React.Component {

  render() {
    const {content} = this.props;
    return (
      <div className="row">
        <Nav />
        {content}
      </div>
    );
  }
}

Page.propTypes = {
  content: React.PropTypes.oneOfType([
    React.PropTypes.func,
    React.PropTypes.object
  ]).isRequired
};

export default Page;