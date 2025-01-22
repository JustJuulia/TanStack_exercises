import React, { useState } from "react";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import "bootstrap/dist/css/bootstrap.min.css";
const queryClient = new QueryClient();
export default function Pictures() {
  const [tablica_zdjec, setZdjecia] = useState([0, 1, 2, 3 ,4]);
function goleft(tab){
  // [0,1,2,3,4 ] => [1,2,3,4,0]
  const tablica_przed = tab;
  const tablica_po = [];
  for (let i = 0; i < tablica_przed.length; i++) {
  if(tablica_przed.length - 1 === i){
    tablica_po.push(tablica_przed[0])
  }
  else{
    tablica_po.push(tablica_przed[i+1])
  }
  }
  setZdjecia(tablica_po);
}
function goright(tab){
  // [0, 1, 2 ,3 ,4] => [4, 0, 1 ,2 ,3]

  const tablica_przed = tab;
  const tablica_po = [];
  for (let i = 0; i < tablica_przed.length; i++) {
    if(i === 0){
      tablica_po.push(tablica_przed[tablica_przed.length - 1])
    }
    else{
      tablica_po.push(tablica_przed[i - 1])
    }
  }
  setZdjecia(tablica_po);
}
  return (
    <QueryClientProvider client={queryClient}>
      <div className="d-flex align-items-center h-auto w-auto m-0 gap-2">
        <button className="h-50 w-15 border-2" onClick={() => goleft(tablica_zdjec)}>
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
        <div className="d-flex justify-content-between h-auto w-auto m-0 p-0">

          {tablica_zdjec.map((id) => (
            <PictureItem key={id} id={id} />
          ))}
        </div>
        <button className="h-50 w-15 border-2" onClick={() => goright(tablica_zdjec)}>
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
    <div className="m-2">
      <img src={data.url} alt={`Picture ${id}`} className="w-75 h-75" />
    </div>
  );
}
