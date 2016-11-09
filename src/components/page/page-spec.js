import React from 'react';
import chai, {expect} from 'chai';
import {shallow} from 'enzyme';
import chaiEnzyme from 'chai-enzyme';

chai.use(chaiEnzyme());

import Page from './page';

describe('Page component', () => {
  it('should contain header text', () => {
    const page = shallow(<Page />);

    const header = page.find('h3');

    expect(header).to.contain.text('Hello World');
  });
});