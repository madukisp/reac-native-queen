import { fetchGetDiscData } from "../../api/getDisc";
import { AlbumModel } from "./props";

//fazer uma solicitação pra api
export const loadDiscData = async (
  id: number,
  setDiscData: React.Dispatch<React.SetStateAction<AlbumModel | null>>
) => {
  const response = await fetchGetDiscData(id, setDiscData);

  try {  
    if (response)  {
    setDiscData(response);}

  } catch (error) {
    console.error("Erro ao buscar dados da api:", error);
    setDiscData(null);
  }
};

// As chamadas devem apenas receber o id e então usar setDiscData com o resultado:
export const handlePreviousItem = async (
  discData: AlbumModel | null,
  setDiscData: React.Dispatch<React.SetStateAction<AlbumModel | null>>
) => {
  let response = null;
  try {
    if (discData && discData?.id > 1) {
      response = await fetchGetDiscData(discData.id - 1, setDiscData);

      if (response) {
        setDiscData(response);
      }
    }
  } catch (error) {
    console.error("Erro ao buscar dados da api:", error);
    setDiscData(null);
  }
};

export const handleNextItem = async (
  discData: AlbumModel | null,
  setDiscData: React.Dispatch<React.SetStateAction<AlbumModel | null>>
) => {
  if (discData && discData.id < 6) {
    const response = await fetchGetDiscData(discData.id + 1, setDiscData);
    if (response) {
      setDiscData(response);
    } else {
      setDiscData(null);
    }
  }
};
