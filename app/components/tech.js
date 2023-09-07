import { techstackData } from "@/data/techStackData";

export default function Tech() {
  // Filter technologies based on their tags
  const feTech = techstackData.filter((tech) => tech.tag === "FE");
  const beTech = techstackData.filter((tech) => tech.tag === "BE");
  const pTech = techstackData.filter((tech) => tech.tag === "P");

  return (
    <section>
      <h1 className="text-3xl font-semibold mb-5 flex justify-center">
        Tech Stack
      </h1>
      <div className="">
        <div className="grid grid-cols-3 justify-items-center">
          {techstackData.map((tech) => (
            <div className="" key={tech.id}>
              <tech.image color={tech.color} className="h-10 w-10" />
              {/* <p className="invisible lg:visible">{tech.title}</p> */}
            </div>
          ))}
        </div>
      </div>
      {/* <div className="mb-5">
        <h2 className="font-semibold mb-2">Front-End Technologies</h2>
        <div className="grid grid-cols-3 justify-items-center">
          {feTech.map((tech) => (
            <div className="" key={tech.id}>
              <tech.image color={tech.color} className="h-10 w-10" />
              <p className="invisible lg:visible">{tech.title}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-5">
        <h2 className="font-semibold mb-2">Back-End Technologies</h2>
        <div className="grid grid-cols-3 justify-items-center">
          {beTech.map((tech) => (
            <div className="flex items-center" key={tech.id}>
              <tech.image color={tech.color} className="h-10 w-10" />
              <p className="invisible lg:visible">{tech.title}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="font-semibold mb-2">Programming</h2>
        <div className="grid grid-cols-3 justify-items-center">
          {pTech.map((tech) => (
            <div className="flex items-center" key={tech.id}>
              <tech.image color={tech.color} className="h-10 w-10" />
              <p className={`invisible lg:visible`}>{tech.title}</p>
            </div>
          ))}
        </div>
      </div> */}
    </section>
  );
}
