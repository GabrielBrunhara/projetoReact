import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { expect, describe, it, vi } from 'vitest';

import { Button } from '.';

describe('<Button />', () => {
  it('should render the button with the text "Load more"', () => {
    const fn = vi.fn();
    render(<Button text="Load more" onClick={fn} />);
    expect.assertions(2);

    const button = screen.getByRole('button', { name: /load more/i });

    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('class', 'button');
  });

  it('should call function on click', async () => {
    const fn = vi.fn();
    render(<Button text="Load more" onClick={fn} />);

    const button = screen.getByRole('button', { name: /load more/i });

    fireEvent.click(button);
    await userEvent.click(button);

    expect(fn).toHaveBeenCalledTimes(2);
  });

  it('should be disabled when disabled is true', () => {
    const fn = vi.fn();
    render(<Button text="Load more" disabled={true} onClick={fn} />);

    const button = screen.getByRole('button', { name: /load more/i });

    expect(button).toBeDisabled();
  });

  it('should be enabled when disabled is false', () => {
    const fn = vi.fn();
    render(<Button text="Load more" disabled={false} onClick={fn} />);

    const button = screen.getByRole('button', { name: /load more/i });

    expect(button).toBeEnabled();
  });

  it('should match snapshot', () => {
    const fn = vi.fn();

    const { container } = render(<Button text="Load more" disabled={false} onClick={fn} />);

    expect(container).toMatchSnapshot();
  });
});
