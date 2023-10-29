import axios from "axios";
import { useMutation, useQuery, useQueryClient } from "react-query";

export const useAxios = axios.create({
  baseURL: "",
  headers: {
    Authorization: "",
  },
});

export const useGetter = ({
  endPoint,
  key,
  timer,
  reFaildTime,
  cashing,
}: {
  endPoint: string;
  key: string;
  timer?: number;
  reFaildTime?: number;
  cashing?: number;
}) =>
  useQuery({
    queryKey: [key],
    staleTime: timer || Infinity,
    cacheTime: cashing || 3600,
    retry: reFaildTime,
    queryFn: async () => {
      const req = await useAxios.get(endPoint);
      const data = await req.data;
      return data;
    },
  });

export const useSetter = ({
  endPoint,
  key,
  reFaildTime,
}: {
  endPoint: string;
  key: string;
  reFaildTime?: number;
}) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: [key],
    retry: reFaildTime,
    mutationFn: async (data: any) => {
      return useAxios.post(endPoint, data);
    },
    onSuccess: (res) => {
      const { data } = res;
      queryClient.invalidateQueries({ queryKey: [key] });
      return data;
    },
  });
};
