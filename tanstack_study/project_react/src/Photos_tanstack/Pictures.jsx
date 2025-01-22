import React from "react";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import "bootstrap/dist/css/bootstrap.min.css";
const queryClient = new QueryClient();
export default function Pictures() {
  const tablica_zdjec = [0, 1, 2, 3, 4];

  return (
    <QueryClientProvider client={queryClient}>
      <div className="d-flex h-auto w-auto">
        <button className="h-50 w-15 border-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            fill="currentColor"
            className="bi bi-arrow-left"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
            />
          </svg>
        </button>
        <div className="d-flex">
          {tablica_zdjec.map((id) => (
            <PictureItem key={id} id={id} />
          ))}
        </div>
        <button className="h-50 w-15 border-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            fill="currentColor"
            class="bi bi-arrow-right"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
            />
          </svg>{" "}
        </button>
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
      <img src={data.url} alt={`Picture ${id}`} className="w-75 h-75" />
    </div>
  );
}
