import React from "react";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import 'bootstrap/dist/css/bootstrap.min.css';
const queryClient = new QueryClient();
export default function Pictures() {
  const tablica_zdjec = [0, 1, 2, 3, 4];

  return (
    <QueryClientProvider client={queryClient}>
      <div className="d-flex">
        <div>
        <button> LEWA </button>
        </div>
        <div className="d-flex">
          {tablica_zdjec.map((id) => (
            <PictureItem key={id} id={id} />
          ))}
          </div>
          <div>
            <button> PRAWA </button>
          </div>
        </div>
    </QueryClientProvider>
  );
}

function PictureItem({ id }) {
  const { isLoading, error, data } = useQuery({
    queryKey: ["pictureData", id],
    queryFn: () =>
      fetch(`http://localhost:8000/picture/${id}`).then((res) => res),
  });

  if (isLoading) return <p>Loading picture {id}...</p>;
  if (error) return <p>An error occurred: {error.message}</p>;

  return (
    <div className="m-5">
      <img src={data.url} alt={`Picture ${id}`} className="w-75 h-75"/>
    </div>
  );
}
