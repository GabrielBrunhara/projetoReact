import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import { describe, it, beforeAll, afterAll, afterEach, expect } from 'vitest';
import userEvent from '@testing-library/user-event';
import { http, HttpResponse } from 'msw';
import { setupServer } from 'msw/node';

import { Home } from '.';

const handlers = [
  http.get('https://jsonplaceholder.typicode.com/posts', async () => {
    return HttpResponse.json(
      [
        {
          userId: 1,
          id: 1,
          title: 'Title 1',
          body: 'Body 1',
        },
        {
          userId: 2,
          id: 2,
          title: 'Title 2',
          body: 'Body 2',
        },
        {
          userId: 3,
          id: 3,
          title: 'Title 3',
          body: 'Body 3',
        },
        {
          userId: 4,
          id: 4,
          title: 'Title 4',
          body: 'Body 4',
        },
        {
          userId: 5,
          id: 5,
          title: 'Title 5',
          body: 'Body 5',
        },
      ],
      { status: 200 },
    );
  }),

  http.get('https://picsum.photos/v2/list', async () => {
    return HttpResponse.json(
      [
        { download_url: 'teste/teste1.png' },
        { download_url: 'teste/teste2.png' },
        { download_url: 'teste/teste3.png' },
        { download_url: 'teste/teste4.png' },
        { download_url: 'teste/teste5.png' },
      ],
      { status: 200 },
    );
  }),
];

const server = setupServer(...handlers);

describe('Home />', () => {
  beforeAll(() => {
    server.listen();
  });

  afterEach(() => server.resetHandlers());

  afterAll(() => {
    server.close();
  });

  it('Should render search, posts and prev/next button', async () => {
    render(<Home />);

    expect.assertions(4);

    const loadingPosts = screen.getByRole('status');
    await waitForElementToBeRemoved(loadingPosts, { timeout: 10000 });

    const search = screen.getByPlaceholderText(/search/i);
    expect(search).toBeInTheDocument();

    const images = screen.getAllByRole('img');
    expect(images).toHaveLength(4);

    const prevButton = screen.getByRole('button', { name: /←/i });
    expect(prevButton).toBeInTheDocument();

    const nextButton = screen.getByRole('button', { name: /→/i });
    expect(nextButton).toBeInTheDocument();

    //screen.debug();
  });

  it('Should search the right post', async () => {
    render(<Home />);

    expect.assertions(5);
    const searchTitle = '5';
    const invalidSearchTitle = '6';
    const search = screen.getByPlaceholderText(/search/i);

    const loadingPosts = screen.getByRole('status');
    await waitForElementToBeRemoved(loadingPosts, { timeout: 10000 });

    expect(screen.getByRole('heading', { name: /title 1/i })).toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: /title 5/i })).not.toBeInTheDocument();

    await userEvent.type(search, searchTitle);
    expect(screen.getByRole('heading', { name: `Title ${searchTitle}` })).toBeInTheDocument();

    await userEvent.clear(search);
    expect(screen.getByRole('heading', { name: /title 1/i })).toBeInTheDocument();

    await userEvent.type(search, invalidSearchTitle);
    expect(screen.getByText(`No results for: "${invalidSearchTitle}"`)).toBeInTheDocument();

    //screen.debug();
  });

  it('Should work next/prev button', async () => {
    render(<Home />);

    expect.assertions(9);

    const loadingPosts = screen.getByRole('status');
    await waitForElementToBeRemoved(loadingPosts, { timeout: 10000 });

    const prevButton = screen.getByRole('button', { name: /←/i });
    const nextButton = screen.getByRole('button', { name: /→/i });

    expect(screen.getByRole('heading', { name: /title 4/i })).toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: /title 5/i })).not.toBeInTheDocument();
    expect(prevButton).toBeDisabled();

    await userEvent.click(nextButton);

    expect(screen.queryByRole('heading', { name: /title 4/i })).not.toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /title 5/i })).toBeInTheDocument();
    expect(prevButton).not.toBeDisabled();

    //screen.debug();

    await userEvent.click(prevButton);

    expect(screen.getByRole('heading', { name: /title 1/i })).toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: /title 5/i })).not.toBeInTheDocument();
    expect(prevButton).toBeDisabled();

    //screen.debug();
  });
});
