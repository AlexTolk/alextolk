"use client";

import Image from "next/image";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-16 px-4 max-w-6xl mx-auto">
      <h2 className="text-4xl font-semibold mb-12 text-center text-white">Projects</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <a
            href={project.link}
            key={index}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-3xl overflow-hidden shadow-xl backdrop-blur bg-white/5 border border-white/10 hover:scale-105 transition-transform"
          >
            <Image
              src={project.image}
              alt={project.title}
              width={800}
              height={400}
              className="w-full object-cover h-48"
            />
            <div className="p-6 text-white">
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-300">{project.description}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
