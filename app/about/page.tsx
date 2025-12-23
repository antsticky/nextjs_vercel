export default async function AboutPage() {
  const apiUrl = process.env.NEXT_PUBLIC_FASTAPI_URL;
  console.log("FASTAPI_URL =", process.env.NEXT_PUBLIC_FASTAPI_URL);

  const res = await fetch(apiUrl, { cache: "no-store" });
  const data = await res.json();

  return (
    <div style={{ padding: '2rem' }}>
      <h1>About</h1>
      <p>
        FastAPI says: <strong>{data.message}</strong>
      </p>

      <p>
        This application demonstrates how to build a Next.js project with a dynamic hamburger menu,
        infinite scrolling homepage, and responsive panels...
      </p>
    </div>
  );
}
