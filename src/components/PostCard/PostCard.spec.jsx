import { render, screen } from '@testing-library/react';
import { expect, describe, it } from 'vitest';

import { postCardPropsMock } from './mock';
import { PostCard } from '.';

const props = postCardPropsMock;

describe('<PostCard />', () => {
  it('Should render PostCard correctly', () => {
    //const {debug} = render(<PostCard {...mock} />);
    //debug();

    render(<PostCard {...props} />);

    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute('src', props.cover);
    //expect(screen.getByRole('heading', {name: `Id: ${props.id}` })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: props.title })).toBeInTheDocument();
    expect(screen.getByText(props.body)).toBeInTheDocument();
  });

  it('Should match snapshot', () => {
    const { container } = render(<PostCard {...props} />);
    expect(container).toMatchSnapshot();
  });
});
