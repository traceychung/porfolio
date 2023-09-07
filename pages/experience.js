// import { resumeData } from "@/data/resumeData";
// import Layout from "@/app/components/layout";
// import RootLayout from "@/app/layout";
// import { Root } from "postcss";

// export default function Resume() {
//   return (
//     <RootLayout>
//       <div className="container">
//           <h1 className="text-3xl font-semibold mb-2">
//             Professional Experience
//           </h1>
//           <ol className="relative border-l border-gray-200">
//             {resumeData.map((role) => (
//               <li className="mb-10 ml-4">
//                 <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white"></div>
//                 <time className="mb-1 text-sm font-normal leading-none text-gray-400">
//                   {role.startDate} - {role.endDate}
//                 </time>
//                 <h3 className="text-lg font-semibold text-gray-900">
//                   {role.company} | <em>{role.title}</em>
//                 </h3>
//                 <ul className="text-base font-normal text-gray-500">
//                   {role.responsibilities.map((responsibility) => (
//                     <li className="list-disc ml-6" key={responsibility.id}>
//                       {responsibility}
//                     </li>
//                   ))}
//                 </ul>
//               </li>
//             ))}
//           </ol>
//       </div>
//     </RootLayout>
//   );
// }


import Resume from "@/app/components/resume";
import RootLayout from "@/app/layout";

export default function Experience() {
  return (
    <RootLayout>
      <Resume />
    </RootLayout>
  );
}
