import { useMutation, useQueryClient } from "@tanstack/react-query";
import { axios } from "../../../api/axios";
import transformFormData, { authJsonHeader } from "../../../util/util";
import { notifications } from "@mantine/notifications";
import { IconCheck, IconX } from "@tabler/icons-react";

interface MusicProp {
  name: string;
  artist_id: number;
  song_mp3: File | null;
  description: string;
  song_image: File | null;
  album_id: number;
}

const createMusic = (payload: MusicProp) => {
  const data = axios.post(`music`, transformFormData(payload), {
    headers: authJsonHeader(),
  });
  return data;
};

export const useCreateMusic = () => {
  const query = useQueryClient();
  return useMutation({
    mutationFn: (payload: MusicProp) => createMusic(payload),
    onSuccess: () => {
      query.invalidateQueries({ queryKey: ["music"] });
      notifications.show({
        // title: "Login Success",
        message: "Music create Successfully",
        icon: <IconCheck />,
        color: "green",
      });
    },
    onError: (data) => {
      console.log({ err: data });

      notifications.show({
        title: "Music create fail",
        message: "Please try again!",
        icon: <IconX />,
        color: "red",
      });
    },
  });
};

const deleteMusic = async (id: number) => {
  const { data } = await axios.delete(`music/${id}`, {
    headers: authJsonHeader(),
  });
  return data;
};

export const useDeleteMusic = () => {
  const query = useQueryClient();
  return useMutation({
    mutationFn: (id: number) => deleteMusic(id),
    onSuccess: () => {        
      query.invalidateQueries({ queryKey: ["music"] });
      notifications.show({
        message: "Music delete Successfully",
        icon: <IconCheck />,
        color: "green",
      });
    },
    onError: (data) => {
      console.log({ err: data });

      notifications.show({
        title: "Music delete fail",
        message: "Please try again!",
        icon: <IconX />,
        color: "red",
      });
    },
  });
};
