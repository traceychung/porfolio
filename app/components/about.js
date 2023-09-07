import { Player } from "@lottiefiles/react-lottie-player";
import Image from "next/image";

export default function About() {
  return (
    <div className="mb-5">
      <h1 className="text-3xl font-semibold mb-2 flex justify-center">
        About Me
      </h1>
      <div className="lg:flex lg:justify-center lg:items-center">
        <div className="lg:order-2 flex justify-center">
          <Player
            autoplay
            loop
            src="https://lottie.host/1220a00d-fbc4-4a8a-bfe0-943cd1db3ca1/LrBYM5Y7U2.json"
            style={{ height: "16.25rem", width: "16.25rem" }}></Player>
        </div>
        <div className="lg:order-1">
          <p className="text-neutral-600">
            Hi, I&apos;m <strong>Tracey</strong>! I&apos;m a full-stack software
            engineer who is an <strong>eager learner</strong> and a{" "}
            <strong>passionate problem solver</strong>. I&apos;m excited to
            explore all that this field has to offer and continue growing as a
            software engineer.
            <br />
            <br />
            When I&rsquo;m not coding, you can find me at local craft fairs,
            bothering my cats, or exploring new places :)
          </p>
        </div>
      </div>
    </div>
  );
}
