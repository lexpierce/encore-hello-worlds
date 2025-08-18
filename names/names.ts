import { api } from "encore.dev/api";
import { SQLDatabase } from "encore.dev/storage/sqldb";

const mydb = new SQLDatabase("encore_hello_worlds", {
  migrations: "./migrations",
});

export const getUser = api(
 { expose: true, method: "GET", path: "/names/:id" },
 async ({id}: {id:number}): Promise<{ id: number; name: string }> => {
   return await mydb.queryRow`SELECT * FROM users WHERE id = ${id}` as { id: number; name: string };
 }
);
