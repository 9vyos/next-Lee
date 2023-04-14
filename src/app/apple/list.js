import Link from "next/link";

export default async function List(props) {
  const data = props.data;
  return (
    <div className="list-bg">
      {data.map((data, i) => (
        <Link prefetch={false} href={"apple/" + data._id}>
          <div className="list-item" key={i}>
            <h4>{data.title}</h4>
            <p>{data.content}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
