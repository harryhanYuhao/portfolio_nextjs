// import { unstable_noStore as noStore } from "next/cache";

export async function fetchPost(postName: string) {
  try {
    const res = await fetch(
      `http://${process.env.VIR_IP}:${process.env.DOWNLOAD_SERVER_PORT}/download/${postName}`,
      {
        method: "GET",
      },
    )
    const data: string = await res.text();

    return data;
  } catch (error) {
    console.error("Error fetching data", error);
  }
}
