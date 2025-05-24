import ProjectCard from "@/components/ProjectCard";
// https://release-trading-ai.heavens.pro/

const projects = [
  {
    title: "Producer Party",
    description: "Web application for a music studio promoting musicians",
    technologies: ["Next JS", "Three.js", "SCSS"],
    link: "https://project-pp.heavens.pro/"
  },
  {
    title: "Quantum",
    description: "Virtual Server Provider that offers hosting and management services for virtual machines",
    technologies: ["Next JS", "Redux", "Tailwind"],
    link: "https://quantum-rdp.com/"
  },
  {
    title: "Breezy reads",
    description: "Development of a web application module to automate the workplace of the administrator of the online bookstore “Breezy reads”",
    technologies: ["Laravel", "HTML", "Tailwind"],
    link: "https://github.com/ksunwy/breezy-reads"
  },
  {
    title: "Metaverse",
    description: "A landing concept with widgets, purple color gradients, and bold data visualizations",
    technologies: ["React", "Framer Motion", "Tailwind"],
    link: "https://metaversus-ksunwy.vercel.app/"
  }
];

const Projects = () => {
  return (
    <section className="w-full h-[100dvh] flex flex-col gap-28 items-center justify-center">
      <div className="text-center mb-4">
        <h1 className="text-6xl font-bold mb-12 text-[#383f5c]">Projects</h1>
        <p className="text-[#6671A3] max-w-[57rem] text-3xl leading-10">
          A few saleable examples of my web-development journey, blending minimalism and delightful UX.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-center">
        {projects.slice(0, 4).map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            link={project.link}
          />
        ))}
      </div>
    </section>
  )
}

export default Projects
