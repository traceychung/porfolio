import { projectData } from "@/data/projectData";
import Link from "next/link";
import { Player } from "@lottiefiles/react-lottie-player";
import Image from "next/image";

export default function Proj() {
  return (
    <div>
      <h1 className="text-3xl font-semibold flex justify-center">
        Top Projects
      </h1>
      <div>
        <Player
          autoplay
          loop
          src="https://lottie.host/afa596c2-d177-45c7-badc-701098f1b13a/C6AK75RW3I.json"
          style={{ height: "300px", width: "300px" }}></Player>
      </div>
      {projectData.map((project) => (
        <div key={project.id} className="flex justify-center mb-5 mr-3 ">
          <div className="max-w-xl rounded overflow-hidden ">
            <Link href={`/projects/${project.id}`}>
              <Image
                className="w-full"
                src={project.image}
                alt={project.title}
                height={300}
                width={600}
              />
            </Link>
            <div className="px-6 py-4">
              <Link href={`/projects/${project.id}`}>
                <div className="font-bold md:text-xl">{project.title}</div>
              </Link>
              <p className="text-neutral-600 text-sm">{project.description}</p>
            </div>
            <div className="px-6 pb-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech.id}
                  className="inline-block bg-rose-300 rounded-full px-2  md:px-3 md:py-1 text-xs font-semibold text-rose-50 mr-2 mb-2">
                  #{tech.tech}
                </span>
              ))}
            </div>
            <p className="text-indigo-500 text-center">───── ⋆⋅☆⋅⋆ ─────</p>
          </div>
        </div>
      ))}
    </div>
  );
}
