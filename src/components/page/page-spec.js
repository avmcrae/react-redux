import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';

import Page from './page';

describe('Page component', () => {
  it('should contain header', () => {
   const page = shallow(<Page />);

    const header = page.find('h3');

    expect(header.text()).to.contain('Hello World');
  });
});