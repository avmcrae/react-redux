import React from 'react';
import chai, {expect} from 'chai';
import {shallow} from 'enzyme';
import chaiEnzyme from 'chai-enzyme';

chai.use(chaiEnzyme());

import HelloWorld from './helloWorld';

describe('Hello World component', () => {

  it('should contain hello world', () => {
    const helloWorld = shallow(<HelloWorld />);

    const message = helloWorld.find('h3');

    expect(message).to.contain.text('Hello World');
  });
});