async function getData() {
  const res = await fetch("https://api.thecatapi.com/v1/images/search");
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Page() {
  const data = await getData();
  console.log(data);
  return (
    <main>
      {data.map((item) => (
        <>
          <p>{item.id}</p>
          <img src={item.url} width={item.width} height={item.height} alt="" />
        </>
      ))}
    </main>
  );
}
