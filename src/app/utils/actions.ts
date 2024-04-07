"use server";

import { type TableData } from "./types";

export const getTableData = async (): Promise<TableData> => {
  const res = await fetch(
    "https://pr3-machina-8f32.encr.app/v1/random/seller/feedback"
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json() as Promise<TableData>;
};
