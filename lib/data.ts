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

export async function fetchPostList() {
  try {
    const res = await fetch(
      `http://${process.env.VIR_IP}:${process.env.DOWNLOAD_SERVER_PORT}/list/`,
      {
        method: "GET",
      },
    )
    const data = await res.json();
    var arr = [];
    for (let i = 0; i < data.length; i++) {
      arr.push(data[i]);
    }
    return arr;
  } catch (error) {
    console.error("Error fetching data", error);
  }
}
