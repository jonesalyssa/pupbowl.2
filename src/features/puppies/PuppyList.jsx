import { useEffect, useState } from "react";
import { useGetPuppiesQuery } from "../../store/puppySlice";

/**
 * @component
 * Shows a list of puppies in the roster.
 * Users can select a puppy to see more information about it.
 */

// TODO: Get data from getPuppies query

export default function PuppyList() {
  const { isLoading, data: puppies, error } = useGetPuppiesQuery();
  const [puppyArray, setPuppyArray] = useState([]);

  useEffect(() => {
    if (puppies?.players) {
      setPuppyArray(puppies.players);
    }
  }, [puppies]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading puppies: {error.message}</p>;

  return (
    <article>
      <h2>Roster</h2>
      <ul className="puppies">
        {puppyArray.length === 0 ? (
          <li>No puppies available at the moment.</li>
        ) : (
          puppyArray.map((puppy) => (
            <li key={puppy.id}>
              <h3>
                {puppy.name} #{puppy.id}
              </h3>
              <figure>
                <img src={puppy.imageUrl} alt={puppy.name} />
              </figure>
            </li>
          ))
        )}
      </ul>
    </article>
  );
}
