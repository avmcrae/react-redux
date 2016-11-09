import React from 'react';
import chai, {expect} from 'chai';
import {shallow} from 'enzyme';
import chaiEnzyme from 'chai-enzyme';
import {Link} from 'react-router';

chai.use(chaiEnzyme());

import Nav from './nav';

describe('Nav component', () => {
  it('should contain header', () => {
    const nav = shallow(<Nav />);

    const links = nav.find(Link);

    expect(links).to.have.length(1);
    expect(links.map((link) => link.prop('to'))).to
      .contain('/\hello-world');
  });
});