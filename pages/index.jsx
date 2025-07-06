export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 py-12">
      <h1 className="text-5xl font-extrabold text-blue-600 mb-6">Aleksandr Tolkachev</h1>
      <p className="text-xl max-w-xl text-center mb-12">
        Welcome to my portfolio site! I am a web developer passionate about creating modern and efficient websites.
      </p>

      <section id="projects" className="w-full max-w-3xl">
        <h2 className="text-3xl font-semibold mb-4">Projects</h2>
        <ul className="space-y-6">
          <li className="p-4 border rounded-lg shadow-sm hover:shadow-md transition">
            <h3 className="text-2xl font-bold">Project One</h3>
            <p>A cool project using React and Next.js to build a portfolio.</p>
          </li>
          <li className="p-4 border rounded-lg shadow-sm hover:shadow-md transition">
            <h3 className="text-2xl font-bold">Project Two</h3>
            <p>Another project showcasing Tailwind CSS and responsive design.</p>
          </li>
        </ul>
      </section>
    </main>
  )
}
