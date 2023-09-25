export default async function Home() {
  const data = await fetch('http://localhost:5000/area/alldata', {
    headers: {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoibWFyY2lvLXZvdCIsImNwZiI6IjEwMzkwNDc1OTk4IiwiaWF0IjoxNjk1NTg5MTc1LCJleHAiOjE2OTYxOTM5NzUsImF1ZCI6InVzZXIiLCJpc3MiOiJzdGFnZS1jYXNlIiwic3ViIjoiNiJ9.5fUL5QjePSGtd4J-vu0MnShYrhcNbON4TNgfcLNccJk`,
    },
    next: { revalidate: 10 },
  })
    .then((res) => res.json())
    .catch((err) => console.log(err))
  console.log(data)
  return (
    <main>
      <h1>HELLO WORLD!</h1>
    </main>
  )
}
