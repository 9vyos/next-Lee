import { connectDB } from "@/util/database";
import List from "./list";

export default async function Page() {
  const client = await connectDB;
  const db = client.db("forum");
  let result = await db.collection("post").find().toArray();

  return (
    <div>
      <List data={result} />
    </div>
  );
}
