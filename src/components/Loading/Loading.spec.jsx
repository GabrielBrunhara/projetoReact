import { render, screen } from '@testing-library/react';
import { expect, describe, it } from 'vitest';

import { Loading } from '.';

describe('<Button />', () => {
  it('should render the Loading div', () => {
    render(<Loading />);

    const loadingElement = screen.getByRole('status', { hidden: true });
    expect(loadingElement).toBeInTheDocument();
    expect(loadingElement).toHaveClass('loading-spinner');
  });

  it('should match snapshot', () => {
    const { container } = render(<Loading />);

    expect(container).toMatchSnapshot();
  });
});
