import { openDB } from "idb";

const dbPromise = openDB("meu-app-db", 1, {
  upgrade(db) {
    if (!db.objectStoreNames.contains("feeds")) {
      db.createObjectStore("feeds", {
        keyPath: "id",
        autoIncrement: true,
      });
    }
  },
});

export const salvarFeed = async (feed) => {
  const db = await dbPromise;

  return await db.add("feeds", {
    ...feed,
    data: new Date().toISOString(),
  });
};

export const buscarFeed = async (id) => {
  const db = await dbPromise;

  return await db.get("feeds", Number(id));
};

export const listarFeeds = async () => {
  const db = await dbPromise;

  return await db.getAll("feeds");
};

export const excluirFeed = async (id) => {
  const db = await dbPromise;

  return await db.delete("feeds", Number(id));
};