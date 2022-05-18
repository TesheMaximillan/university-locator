import React from 'react';
import renderer from 'react-test-renderer';
import Card from './_mocks_/DetialCard';
import renderContext from '../../redux/storeMock';

describe('Card component', () => {
  let component;

  beforeEach(() => {
    component = renderer.create(renderContext(<Card />));
  });

  it('should render with given state from redux store', () => {
    // Assert
    expect(component.toJSON()).toMatchSnapshot();
  });
});
