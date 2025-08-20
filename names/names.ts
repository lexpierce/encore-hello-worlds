import { SQLDatabase } from "encore.dev/storage/sqldb";
import { api } from "encore.dev/api";

// Welcome to Encore!
// This is a simple "Hello World" project to get you started.
//
// To run it, execute "encore run" in your favorite shell.

// ==================================================================

// This is a simple REST API that queries a database for a username matching a provided id.
// To call it, run in your terminal:
//
//      curl http://localhost:4000/names/1
//

const mydb = new SQLDatabase("mydb", {
  migrations: "./migrations",
});

export const getUser = api(
 { expose: true, method: "GET", path: "/names/:id" },
 async ({id}: {id:number}): Promise<{ id: number; name: string }> => {
   return await mydb.queryRow`SELECT * FROM users WHERE id = ${id}` as { id: number; name: string };
 }
);

export const putUser = api(
  { expose: true, method: "GET", path: "/names/add/:new_user" },
  async ({new_user}: {new_user:string}): Promise<{ new_user: string }> => {
    return await mydb.exec`INSERT INTO users (name) VALUES (${new_user})`;
  }
);
