import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { expect, describe, it, vi } from 'vitest';

import { Search } from '.';

describe('<Search />', () => {
  it('Should render Search correctly', () => {
    const fn = vi.fn();
    render(<Search value="Test something" onChange={fn} />);

    const search = screen.getByDisplayValue('Test something');

    expect(search).toBeInTheDocument();
    expect(search.value).toBe('Test something');
  });

  it('Should change placeholder on focus and on blur', () => {
    const fn = vi.fn();
    render(<Search placeholder="Test search" value="Test something" onChange={fn} onFocus="Test type something..." />);

    const search = screen.getByPlaceholderText('Test search');

    fireEvent.focus(search);
    expect(search.placeholder).toBe('Test type something...');

    fireEvent.blur(search);
    expect(search.placeholder).toBe('Test search');
  });

  it('Should call handleChange function on each key pressed', async () => {
    const fn = vi.fn();
    render(<Search value="Test something" onChange={fn} />);

    const search = screen.getByDisplayValue('Test something');
    const value = 'test input search';

    await userEvent.type(search, value);

    expect(search.value).toBe('Test something');
    expect(fn).toHaveBeenCalledTimes(value.length);
  });

  it('Should match snapshot', () => {
    const fn = vi.fn();
    const { container } = render(
      <Search placeholder="Test search" value="Test something" onChange={fn} onFocus="Test type something..." />,
    );
    expect(container).toMatchSnapshot();
  });
});
