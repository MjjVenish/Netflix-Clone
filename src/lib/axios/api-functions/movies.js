import server from "../server";

export const getAllMovies = async () => await server.get("/movies");
export const recentAddedMovies = async () => await server.get("/recent");
export const myCart = async () => await server.get("/myList");
export const trendingMovies = async () => await server.get("/trending");
export const upcomingMovies = async () => await server.get("/upComing ");
export const topratedMovies = async () => await server.get("/topRated");
export const popularMovies = async () => await server.get("/popular");
export const userDetails = async () => await server.get("/users");
export const recentAdded = async (data) => await server.post("recent", data);
export const addlist = async (data) => await server.post("myList", data);
export const deleteCart = async (cart) =>
  await server.delete(`/myList/${cart}`);
export const recentDelete = async (data) =>
  await server.delete(`/recent/${data.id}`);
