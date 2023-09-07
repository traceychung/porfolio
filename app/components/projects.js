import { projectData } from "@/data/projectData";
import Link from "next/link";
import { Player } from "@lottiefiles/react-lottie-player";

export default function Proj() {
  return (
    <div>
      <h1 className="text-3xl font-semibold flex justify-center ">
        Top Projects
      </h1>
      <div>
        <Player
          autoplay
          loop
          src="https://lottie.host/afa596c2-d177-45c7-badc-701098f1b13a/C6AK75RW3I.json"
          style={{ height: "300px", width: "300px" }}></Player>
      </div>
      {/* <div className="grid grid-cols-3"> */}
        {projectData.map((project) => (
          <div key={project.id} className="flex justify-center mb-5 mr-3 ">
            <div className="max-w-xl rounded overflow-hidden shadow-md">
              <Link href={`/projects/${project.id}`}>
                <img
                  className="w-full"
                  src={project.image}
                  alt={project.title}
                  height={170}
                  width={300}
                />
              </Link>
              <div className="px-6 py-4">
                <Link href={`/projects/${project.id}`}>
                  <div className="font-bold text-xl mb-2">
                    {project.title}
                  </div>
                </Link>
                <p className="text-neutral-600 text-sm">
                  {project.description}
                </p>
              </div>
              <div className="px-6 pt-3 pb-2">
                {project.technologies.map((tech) => (
                  <span className="inline-block bg-rose-300 rounded-full px-3 py-1 text-xs font-semibold text-rose-50 mr-2 mb-2">
                    #{tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      {/* </div> */}
    </div>
  );
}



          {/* <h1>
            <Link href={`/projects/${project.id}`}>
              <h3 className="text-xl font-semibold">{project.title}</h3>
            </Link>
          </h1>
          <Link href={`/projects/${project.id}`}>
            <img
              src={project.image}
              alt={project.title}
              // height={144}
              // width={250}
            />
          </Link>
          <p>
            <em>{project.description}</em>
          </p>
          <br />
        </div> */}
