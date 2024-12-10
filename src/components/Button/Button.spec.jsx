import { fireEvent, render, screen } from '@testing-library/react';
import { Button } from '.';
import userEvent from '@testing-library/user-event';

describe('<Button />', () => {
  it('should render the button with the text "Load more"', () => {
    render(<Button text="Load more" />);
    expect.assertions(2);

    const button = screen.getByRole('button', { name: /load more/i });

    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('class', 'button');
  });

  it('should call function on click', () => {
    const fn = jest.fn();
    render(<Button text="Load more" onClick={fn} />);
    
    const button = screen.getByRole('button', { name: /load more/i });
    
    fireEvent.click(button);
    userEvent.click(button);

    expect(fn).toHaveBeenCalledTimes(2);

  });
  
  it('should be disabled when disabled is true', () => {
    render(<Button text="Load more" disabled={true}  />);
    
    const button = screen.getByRole('button', { name: /load more/i });

    expect(button).toBeDisabled();

  });
  
  it('should be enabled when disabled is false', () => {
    render(<Button text="Load more" disabled={false}  />);
    
    const button = screen.getByRole('button', { name: /load more/i });

    expect(button).toBeEnabled();

  });
  
  it('should match snapshot', () => {
    const fn = jest.fn();
    
    const {container} = render(<Button text="Load more" disabled={false} onClick={fn} />);
    
    expect(container).toMatchSnapshot();

  });
});