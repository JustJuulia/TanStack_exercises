import React, { useState } from "react";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import "bootstrap/dist/css/bootstrap.min.css";
const queryClient = new QueryClient();
export default function Pictures() {
  const [tablica_zdjec, setZdjecia] = useState(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10']);
  // jednak zmiana planow- to nie moglo byc takie easy jak myslalam
  // zrobuie tablice gdzie przetrzymuje wszytskie id
  //i przez to jak klikne prawy to ostatni od prawej strony do tablicy, a na koncu lewej strony bedzie nowy obrazek
  //jak klikne lewy button to wtedy najnowsze zdj ktore jest po lewej stronie usuwam i daj ena koncu po prawej stronie stare zdjecie z tablicy z nimi
  // idiki zmienilam na stringi bo a) task polecenie mowilo b) z intami jest ciezej tbh...

  function goleft(tab) {
    // [0,1,2,3,4 ] => [1,2,3,4,5] Z PRAWEJ STRONY NAJNOWSZY PIC bczyli tak naprawde dodaje 1 do kazdego?
    //co musze zrobic:
    //kazdy index +1 jezeli jest rowne 10 to wtedy id 0
    const tablica_przed = tab;
    const tablica_po = [];
    for (let i = 0; i < tablica_przed.length; i++) {
      if(i === tablica_przed.length - 1){
        tablica_po.push(tablica_przed[0]);
      }
      else{
      tablica_po.push(tablica_przed[i + 1])
      }
    }
    setZdjecia(tablica_po);
  }
  function goright(tab) {
    // [0, 1, 2 ,3 ,4] => [10,0,1,2,3]
    //co musze zrobic:
    //kazdy index -1 jezeli jest 0 to dac 10 czyli ostatnie zdjecie
    const tablica_przed = tab;
    const tablica_po = [];
    for (let i = 0; i < tablica_przed.length; i++) {
      console.log(tablica_przed[0], tablica_przed[tablica_przed.length - 1])
      if(i === 0){
        tablica_po.push(tablica_przed[tablica_przed.length - 1]);
      }
      else{
        tablica_po.push(tablica_przed[i - 1]);
      }
    }
    setZdjecia(tablica_po);
  }
  /*btw to dziala i jest zoptymalizowane :
  function goleft(tab) {
  const tablica_po = [...tab.slice(1), tab[0]];
  console.log(tablica_po);
  setZdjecia(tablica_po);
}

function goright(tab) {
  const tablica_po = [tab[tab.length - 1], ...tab.slice(0, -1)];
  console.log(tablica_po);
  setZdjecia(tablica_po);
}
  ale ALE chce sprobowac moj sposob ogarnac bo sie z nim mecze troche.....
  */
  return (
    <QueryClientProvider client={queryClient}>
      <div className="d-flex align-items-center h-auto w-auto m-0 gap-2">
        <button
          className="h-50 w-15 border-2"
          onClick={() => goleft(tablica_zdjec)}
        >
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
          {tablica_zdjec.slice(0, 5).map((id) => (
            <PictureItem key={id} id={id} />
          ))}
        </div>
        <button
          className="h-50 w-15 border-2"
          onClick={() => goright(tablica_zdjec)}
        >
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

  if (isLoading) return <p>Ładuje sigma obrazek o id: {id}...</p>;
  if (error) return <p>Jakis blad?!?!?! no nieeeeee :sob: {error.message}</p>;

  return (
    <div className="m-2">
      <img src={data.url} alt={`Picture ${id}`} className="w-75 h-75" />
    </div>
  );
}
