import React from 'react';
import chai, {expect} from 'chai';
import {shallow} from 'enzyme';
import chaiEnzyme from 'chai-enzyme';

chai.use(chaiEnzyme());

import Page from './page';
import Nav from '../nav/nav';

describe('Page component', () => {
  const FakeComponent = () => <div></div>;

  it('should contain a Nav', () => {
    const page = shallow(<Page content={<FakeComponent />} />);

    const nav = page.find(Nav);

    expect(nav).to.be.present();
  });

  it('has a body', () => {
    const page = shallow(<Page content={<FakeComponent />} />);
    const content = page.find(FakeComponent);

    expect(content).to.be.present();
  });
});