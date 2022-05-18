import React from 'react';
import renderer from 'react-test-renderer';
import Header from './Header';
import renderContext from '../../redux/storeMock';

describe('Header component', () => {
  let component;

  beforeEach(() => {
    component = renderer.create(renderContext(<Header />));
  });

  it('should render with given state from redux store', () => {
    // Assert
    expect(component.toJSON()).toMatchSnapshot();
  });
});
