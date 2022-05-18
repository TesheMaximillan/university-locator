import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import Home from './Home';
import renderContext from '../../redux/storeMock';

describe('Home component', () => {
  let component;

  beforeEach(() => {
    component = renderer.create(renderContext(<BrowserRouter><Home /></BrowserRouter>));
  });

  it('should render with given state from redux store', () => {
    // Assert
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('should render Home', () => {
    // Arrange
    render(renderContext(<BrowserRouter><Home /></BrowserRouter>));

    // Assert
    expect(screen.getByText(/US Universities/i)).toBeInTheDocument();
  });
});
