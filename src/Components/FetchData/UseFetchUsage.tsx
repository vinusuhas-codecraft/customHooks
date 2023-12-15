import { useFetch } from './CustomHook/useFetch';

/**
 * A React component demonstrating the usage of the useFetch custom hook to fetch and display data.
 */
export function UseFetchUsage() {
  // Using the useFetch custom hook to fetch data from an API

  const { data, error, isLoading } = useFetch('https://jsonplaceholder.typicode.com/todos');

  // Render component based on loading and error states
  if (isLoading) {
    return <p>Loading...Please wait</p>;
  }

  if (error) {
    return <p>Something Went wrong.Please try again </p>;
  }

  return (
    <div>
      {data && (
        // Render data
        <ul>
          {data.map((item: { id: number; title: string }) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
