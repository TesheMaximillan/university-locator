import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Card from './_mocks_/MainCard';
import renderContext from '../../redux/storeMock';

describe('MainCard component', () => {
  let component;

  beforeEach(() => {
    component = renderer.create(renderContext(<BrowserRouter><Card /></BrowserRouter>));
  });

  it('should render with given state from redux store', () => {
    // Assert
    expect(component.toJSON()).toMatchSnapshot();
  });
});
