import Image from 'next/image'
import svg from '../../public/bxs-tag.svg'

export default async function Home() {
  const data = await fetch('http://localhost:5000/area/alldata', {
    headers: {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoibWFyY2lvLXZvdCIsImNwZiI6IjEwMzkwNDc1OTk4IiwiaWF0IjoxNjk1NTg5MTc1LCJleHAiOjE2OTYxOTM5NzUsImF1ZCI6InVzZXIiLCJpc3MiOiJzdGFnZS1jYXNlIiwic3ViIjoiNiJ9.5fUL5QjePSGtd4J-vu0MnShYrhcNbON4TNgfcLNccJk`,
    },
    next: { revalidate: 10 },
  })
    .then((res) => res.json())
    .catch((err) => console.log(err))
  return (
    <main>
      <h1 className="font-bold text-4xl">
        HELLO WORLD! {process.env.TEST ?? 'n deu'}
        <p>{process.env.TEST2 ?? 'n deu dnv'}</p>
      </h1>
      <Image src={svg} alt="svg" height={24} width={24} />
    </main>
  )
}
