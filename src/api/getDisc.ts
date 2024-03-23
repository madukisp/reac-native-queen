import axios from "axios";
import { AlbumModel } from "../components/CardView/props";
import { DISC_API_BASE_URL } from "../constants/disc";

interface ApiResponse {
  albums: AlbumModel[];
}

export const fetchGetDiscData = async (
  id: number,
  setDiscData: React.Dispatch<React.SetStateAction<AlbumModel | null>>
) => {
  try {
    const response = await axios.get<ApiResponse>(DISC_API_BASE_URL);
    const discData = response.data.albums.find((album) => album.id === id) || null;
    
    return discData;
  } catch (error) {
    console.log("Erro ao buscar dados da api:", error);
  }
};