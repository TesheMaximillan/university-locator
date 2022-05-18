import renderer from 'react-test-renderer';
import renderContext from './redux/storeMock';

import App from './App';

describe('App component', () => {
  let component;

  beforeEach(() => {
    component = renderer.create(renderContext(<App />));
  });

  it('should render with given state from redux store', () => {
    // Assert
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('should render without crashing', () => {
    renderContext(<App />);
  });
});
