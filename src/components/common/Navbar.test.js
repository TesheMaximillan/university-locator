import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Navbar from './Navbar';
import renderContext from '../../redux/storeMock';

describe('Navbar component', () => {
  let component;

  beforeEach(() => {
    component = renderer.create(renderContext(<BrowserRouter><Navbar /></BrowserRouter>));
  });

  it('should render with given state from redux store', () => {
    // Assert
    expect(component.toJSON()).toMatchSnapshot();
  });
});
