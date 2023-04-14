import { connectDB } from "@/util/database";

export default async function handler(req, res) {
  if (req.method === "POST") {
    if (req.body.title == "") {
      return req.status(500).json("제목을 입력해주세요.");
    } else if (req.body.content == "") {
      return req.status(500).json("내용을 입력해주세요.");
    }
    const db = (await connectDB).db("forum");
    let result = await db.collection("post").insertOne(req.body);
    return res.status(200).redirect("/apple");
  }
}
