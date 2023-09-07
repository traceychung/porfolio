import { projectData } from "@/data/projectData";
import Link from "next/link";
import RootLayout from "@/app/layout";
import Image from "next/image";

export function getAllProjIds() {
  return projectData.map((proj) => {
    return {
      params: {
        id: proj.id.toString(),
      },
    };
  });
}

export async function getStaticPaths() {
  const paths = getAllProjIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Project({ projData }) {
  return (
    <RootLayout>
      <div key={projData.id} className="mb-4">
        <div>
          <h1 className="text-2xl font-semibold mb-2 flex justify-center">
            <Link href={projData.link} target="_blank">
              {projData.title}
            </Link>
          </h1>
          <Link
            href={projData.link}
            target="_blank"
            className="flex justify-center">
            <Image
              src={projData.image}
              alt={projData.title}
              width={780}
              height={300}
            />
          </Link>
        </div>
        <p>
          <em className="text-sm md:text-base text-neutral-600">
            {projData.description}
          </em>
        </p>
        <br />
        <h2 className="text-base md:text-xl font-semibold mb-2 text-neutral-600">
          Responsibilities:
        </h2>
        <ul className="list-disc ml-6">
          {projData.responsibilities.map((responsibility, index) => (
            <li key={index} className="text-sm md:text-base text-neutral-600">
              {responsibility}
            </li>
          ))}
        </ul>
      </div>
    </RootLayout>
  );
}

export async function getStaticProps({ params }) {
  const projData = getProjectData(params.id);
  return {
    props: {
      projData,
    },
  };
}

export function getProjectData(id) {
  id = Number(id)
  const matchedProject = projectData.find(project => project.id === id);

  if (!matchedProject) {
    return null;
  }

  return matchedProject;
}
