import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import Details from './_mocks_/Details';
import renderContext from '../../redux/storeMock';

describe('Details component', () => {
  let component;

  beforeEach(() => {
    component = renderer.create(renderContext(<BrowserRouter><Details /></BrowserRouter>));
  });

  it('should render with given state from redux store', () => {
    // Assert
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('should render Details', () => {
    // Arrange
    render(renderContext(<BrowserRouter><Details /></BrowserRouter>));

    // Assert
    expect(screen.getByText(/University Location Details/i)).toBeInTheDocument();
  });
});
