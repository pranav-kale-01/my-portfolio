import React from "react";
import ProjectCard from "./projectCard";
import frame1 from "../assets/frame1-nobg.png";
import frame2 from "../assets/frame2.png";
import frame3 from "../assets/frame3.png";

const ProjectComponent = () => {
  return (
    <div className="w-full h-full p-16 mt-[15%]">
      <h1 className="text-6xl font-bold text-white mb-24">My projects</h1>

      <div className="w-full h-full flex flex-col gap-12">
        <ProjectCard
          position="left"
          title="Excess Food Locator"
          description="Excess Food Locator helps people having excess food connect with other resources and distributors. This application is based on a map view to provide users with quicker and easier acess to resources."
          image={frame1}
          animate={true}
          technologies={["Flutter", "Google Maps API", "Firebase"]}
          link="https://github.com/pranav-kale-01/excess-food-locator"
        />
        <ProjectCard
          position="right"
          title="SAHARA"
          description="SAHARA integrates advanced technology into a compact, user-friendly device with features like obstacle detection, visual message-to-speech conversion, and precise currency identification and counting. By leveraging cutting-edge sensors and AI algorithms, SAHARA aims to enhance safety, accessibility, and financial independence, ultimately fostering a more inclusive and empowered society."
          image={frame3}
          animate={false}
          technologies={["Python", "C++", "Machine Learning"]}
          link="https://www.google.com"
        />
           <ProjectCard
          position="left"
          title="LetterShelf"
          description="A Clean, Fast, and Easy to Use Email Client that sorts newsletters from regular emails. LetterShelf is built using Flutter along with Google's Gmail API and Firebase."
          image={frame2}
          technologies={["Flutter", "Google Gmail API", "Firebase"]}
          animate={true}
          link="https://github.com/pranav-kale-01/LetterShelf"
        />
      </div>
    </div>
  );
};

export default ProjectComponent;
