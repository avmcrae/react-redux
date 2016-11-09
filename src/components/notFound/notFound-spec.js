import React from 'react';
import chai, {expect} from 'chai';
import {shallow} from 'enzyme';
import chaiEnzyme from 'chai-enzyme';

chai.use(chaiEnzyme());

import NotFound from './notFound';

describe('Not Found component', () => {

  it('should contain not found message', () => {
    const notFound = shallow(<NotFound />);

    const notFoundHeader = notFound.find('.header');
    const notFoundBody = notFound.find('p');

    expect(notFoundHeader).to.contain.text('404');
    expect(notFoundBody).to.contain.text('Sorry, page not found');
  });
});