import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import UserAlbums from './UserAlbums';

jest.mock('../../common/Api', () => ({
  getData: jest.fn(),
}));

describe('UserAlbums', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should render "Loading User Albums..." when loading', () => {
    render(<UserAlbums history={{}} match={{ params: { userid: 1 } }} />, {
      wrapper: MemoryRouter,
    });

    expect(screen.getByText('Loading User Albums...')).toBeInTheDocument();
  });

  test('should render "No Albums Found for the user" when no albums found', async () => {
    const mockData = [];
    jest.spyOn(global, 'fetch').mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce(mockData),
    } as any);

    render(<UserAlbums history={{}} match={{ params: { userid: 1 } }} />, {
      wrapper: MemoryRouter,
    });

    const noAlbumsFound = await screen.findByText('No Albums Found for the user');
    expect(noAlbumsFound).toBeInTheDocument();
  });

  test('should render user albums data', async () => {
    const mockData = [{ id: 1, title: 'Album 1' }, { id: 2, title: 'Album 2' }];
    jest.spyOn(global, 'fetch').mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce(mockData),
    } as any);

    const historyMock = { push: jest.fn() };

    render(
      <UserAlbums
        history={historyMock}
        match={{ params: { userid: 1 } }}
      />,
      { wrapper: MemoryRouter }
    );

    const album1 = await screen.findByText('Album 1');
    expect(album1).toBeInTheDocument();
    album1.click();
    expect(historyMock.push).toHaveBeenCalledWith({
      pathname: '/user/1/1',
    });

    const album2 = await screen.findByText('Album 2');
    expect(album2).toBeInTheDocument();
    album2.click();
    expect(historyMock.push).toHaveBeenCalledWith({
      pathname: '/user/1/2',
    });
  });
});
