import { act, renderHook, waitFor } from '@testing-library/react';
import useFetch from '../src/hooks/useFetch';

describe('useFetch', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('does not fetch when the URL is empty', () => {
    global.fetch = jest.fn();

    const { result } = renderHook(() => useFetch(null));

    expect(global.fetch).not.toHaveBeenCalled();
    expect(result.current.data).toBeNull();
  });

  test('fetches data and supports refetching', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ value: 'first' }),
    });
    const { result } = renderHook(() => useFetch('/api/test'));

    await waitFor(() => expect(result.current.data).toEqual({ value: 'first' }));
    expect(result.current.loading).toBe(false);

    act(() => result.current.refetch());
    await waitFor(() => expect(global.fetch).toHaveBeenCalledTimes(2));
  });

  test('exposes HTTP errors', async () => {
    global.fetch = jest.fn().mockResolvedValue({ ok: false, status: 500 });
    const { result } = renderHook(() => useFetch('/api/test'));

    await waitFor(() => expect(result.current.error).toBe('HTTP 500'));
    expect(result.current.loading).toBe(false);
  });
});
