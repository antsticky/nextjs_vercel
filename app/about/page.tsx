export default async function AboutPage() {
  const res = await fetch("https://fastapi-vercel-iota.vercel.app/");
  const data = await res.json();

  return (
    <div style={{ padding: '2rem' }}>
      <h1>About</h1>
      <p>
        FastAPI says: <strong>{data.message}</strong>
      </p>

      <p>
        This application demonstrates how to build a Next.js project with a dynamic hamburger menu,
        infinite scrolling homepage, and responsive panels.
      </p>
    </div>
  );
}
