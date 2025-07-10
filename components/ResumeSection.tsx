export default function ResumeSection() {
  return (
    <section className="max-w-xl mx-auto p-6 rounded-xl bg-white/10 backdrop-blur shadow-xl my-12 text-center">
      <h2 className="text-3xl font-bold mb-6">Download My Resume</h2>
      <a
        href="/resume.pdf"
        download
        className="inline-block px-8 py-4 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition"
      >
        Download Resume
      </a>
    </section>
  );
}
