import { useEffect, useState } from 'react';
/**
 * A custom React hook for making HTTP requests and managing loading and error states.
 *
 * @template T - The type of options passed to the fetch function.
 *
 * @param {string} url - The URL for the HTTP request.
 * @param {T} [options] - Options to configure the fetch request (optional).
 *
 * @returns {{
 *   data: string,
 *   error: string,
 *   isLoading: boolean
 * }} An object containing the fetched data, error message, and loading state.
 */
export function useFetch<T extends object>(url: string, options?: T) {
  const [data, setData] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    setIsLoading(true);
    fetch(url, options)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => setError(err))
      .finally(() => setIsLoading(false));
  }, [url, options]);

  return {
    data,
    error,
    isLoading,
  };
}
