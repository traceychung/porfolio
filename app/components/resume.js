import { resumeData } from "@/data/resumeData";
import { Player } from "@lottiefiles/react-lottie-player";

export default function Resume() {
  return (
    <div>
      <h1 className="text-3xl font-semibold flex justify-center text-center">
        Professional Experience
      </h1>
      <Player
        autoplay
        loop
        src="https://lottie.host/d8036c54-4dc7-4c8a-b491-46b1c2fe6ee0/aNSCpNU9NA.json"
        style={{ height: "300px", width: "300px" }}></Player>
      <div className="relative border-l border-teal-500">
        {resumeData.map((role, index) => (
          <div className="mb-8 ml-4" key={index}>
            <div className="absolute w-3 h-3 bg-teal-500 rounded-full mt-1.5 -left-1.5 border border-teal-500"></div>
            <time className="mb-1 text-sm font-semibold leading-none text-teal-500">
              {role.startDate} - {role.endDate}
            </time>
            <h3 className="md:text-lg font-semibold text-pink-400">
              {role.company} | <em>{role.title}</em>
            </h3>
            <ul className="text-sm md:text-base font-normal text-neutral-600">
              {role.responsibilities.map((responsibility, subIndex) => (
                <li className="list-disc ml-6" key={subIndex}>
                  {responsibility}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
