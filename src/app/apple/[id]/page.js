import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function Page(props) {
  const client = await connectDB;
  const db = client.db("forum");
  let result = await db.collection("post").findOne({ _id: new ObjectId(props.params.id) });
  return (
    <>
      <div>{result.title}</div>
      <div>{result.content}</div>
    </>
  );
}
