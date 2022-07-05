import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('button has correct initial color', () => {
  render(<App />);

  
  const colorButton = screen.getByRole('button', { name: 'Change to blue' });

  
  expect(colorButton).toHaveStyle({ backgroundColor: 'red' })


  fireEvent.click(colorButton);

  expect(colorButton).toHaveStyle({ backgroundColor: 'blue' });

  
  expect(colorButton.textContent).toBe('Change to red');
});


test('initial conditions',()=>{
  render(<App />);
  const colorButton = screen.getByRole('button',{name:'Change to blue'});
  expect(colorButton).toBeEnabled();

  const checkBox = screen.getByRole('checkbox');
  expect(checkBox).not.toBeChecked();
})


test('Checkbox disables button on first click and enables on second click', () => {
  render(<App />);
  const checkbox = screen.getByRole('checkbox', { name: 'Disable button' });
  const colorButton = screen.getByRole('button', {
    name: 'Change to blue',
  });

  fireEvent.click(checkbox);
  expect(colorButton).toBeDisabled();

  fireEvent.click(checkbox);
  expect(colorButton).toBeEnabled();
});


test('Disabled button has gray background and reverts to red', () => {
  render(<App />);
  const checkbox = screen.getByRole('checkbox', { name: 'Disable button' });
  const colorButton = screen.getByRole('button', {
    name: 'Change to blue',
  });


  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle('background-color: gray');

  
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle('background-color: red');
});
