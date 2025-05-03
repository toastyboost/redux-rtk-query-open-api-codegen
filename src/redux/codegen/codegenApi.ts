import { baseApi as api } from "../api";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    getUsersById: build.query<GetUsersByIdResponse, GetUsersByIdProps>({
      query: (queryArg) => ({ url: `/users/${queryArg.id}` }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as codegenApi };
export type GetUsersByIdResponse = /** status 200 Успешный ответ */ User;
export type GetUsersByIdProps = {
  id: number;
};
export type User = {
  id: number;
  username: string;
  email: string;
  createdAt?: string;
};
export type Error = {
  message: string;
  code: number;
};
export const { useGetUsersByIdQuery, useLazyGetUsersByIdQuery } =
  injectedRtkApi;
