import React, { useEffect, useRef, useState } from "react";
import { GiFallDown } from "react-icons/gi";
import Spline from "@splinetool/react-spline";
import ScrollComponent from "../components/ScrollComponent";
import tflogo from "../assets/tf.png";
import reactlogo from "../assets/rct.png";
import flutterlogo from "../assets/flutter.png";
import pythonlogo from "../assets/python.png";
import hflogo from "../assets/hf.png";
import lclogo from "../assets/lc.png";
import jslogo from "../assets/js.png";
import javalogo from "../assets/java.png";
import TechCard from "../components/techCard";
import SocialsCard from "../components/socialsCard";
import linkedinlogo from "../assets/linkedin.png";
import githublogo from "../assets/github.png";
import gmaillogo from "../assets/gmail.png";
import twitterlogo from "../assets/twitter.png";
import instagramlogo from "../assets/insta.png";

const HomePage = () => {
  // boxes related
  const boxes = useRef();
  const [initialRotation, setInitialRotation] = useState();

  // cube related
  const glowingCube = useRef();
  const [initialCubeScale, setInitialCubeScale] = useState();
  const [initialCubePosition, setInitialCubePosition] = useState();

  // camera related
  const splineCamera = useRef();
  const [initialCameraRotationX, setInitialCameraRotationX] = useState();
  // const [initialCameraRotationY, setInitialCameraRotationY] = useState();
  // const [initialCameraRotationZ, setInitialCameraRotationZ] = useState();

  // showing scroll down option
  const [showScrollText, setShowScrollText] = useState(true);

  // for rotating them circles
  const [rotationValue, setRotationValue] = useState();
  const [sticky, setSticky] = useState();

  const [y, setY] = useState(window.scrollY);
  const min = 0;
  const max = 200;
  const a = 0;
  const b = 200;

  // Track the last known mouse position
  let mouseX = 0;
  let mouseY = 0;

  // Update the cursor position with interpolation
  const updateCursorPosition = (e) => {
    mouseX = e.pageX;
    mouseY = e.pageY - window.scrollY;
  };

  useEffect(() => {
    const handleScroll = (e) => {
      // for scroll down text
      if (showScrollText === true) {
        setShowScrollText(false);
      }

      // for background animation
      moveObj(e);
      setY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [y, moveObj, showScrollText]);

  useEffect(() => {
    const cursor = document.getElementById("glowing-cursor");

    const animateCursor = () => {
      if (cursor) {
        // Directly move the cursor towards the mouse position
        cursor.style.transform = `translate(${mouseX - 24}px, ${
          mouseY - 24
        }px)`;
      }
      requestAnimationFrame(animateCursor); // Request the next animation frame
    };

    // Start the animation loop
    animateCursor();

    // Event listeners for mousemove
    document.addEventListener("mousemove", updateCursorPosition);

    // Cleanup event listeners on component unmount
    return () => {
      document.removeEventListener("mousemove", updateCursorPosition);
    };
  }, []);

  function onLoad(spline) {
    boxes.current = spline.findObjectById(
      "b01f79ce-02e1-4819-9cc3-1959cac3cba5"
    );
    glowingCube.current = spline.findObjectById(
      "034724f1-b8db-45e3-a386-ab43efbcf3d8"
    );
    splineCamera.current = spline.findObjectById(
      "f1f7a4bc-5d97-4ea2-a96d-228ab3f765f2"
    );

    if (
      boxes.current != null &&
      glowingCube.current != null &&
      splineCamera.current != null
    ) {
      // first rotating the boxes
      boxes.current.rotation.y += 0.8;

      setInitialRotation(boxes.current.rotation.y);

      setInitialCubeScale(glowingCube.current.scale.x);
      setInitialCubePosition(glowingCube.current.position.y);

      setInitialCameraRotationX(splineCamera.current.rotation.x);
      // setInitialCameraRotationY(splineCamera.current.rotation.y);
      // setInitialCameraRotationZ(splineCamera.current.rotation.z);
    }
  }

  function moveObj(e) {
    if (
      boxes.current != null &&
      glowingCube.current != null &&
      splineCamera.current != null
    ) {
      if (window.scrollY < 2388) {
        const scaledOffset = ((b - a) * (window.scrollY - min)) / max - min;
        boxes.current.rotation.y = initialRotation + scaledOffset / 1000;
        glowingCube.current.position.y =
          initialCubePosition + scaledOffset / 10 + 1;
      } else if (window.scrollY < 5550) {
        const scaledOffset =
          ((b - a) * (window.scrollY - 2388 - min)) / max - min;

        // change camera position from this point on
        splineCamera.current.rotation.x =
          initialCameraRotationX + scaledOffset / 5000;

        // splineCamera.current.rotation.y =initialCameraRotationY - scaledOffset / 10000;
        // splineCamera.current.rotation.z = initialCameraRotationZ + scaledOffset / 5000;

        boxes.current.rotation.y = initialRotation + scaledOffset / 1000 - 0.8;

        glowingCube.current.scale.z = initialCubeScale + scaledOffset / 1000;
        glowingCube.current.scale.x = initialCubeScale + scaledOffset / 1000;
      } else {
        const scaledOffset =
          ((b - a) * (window.scrollY + 5550 - min)) / max - min;
        boxes.current.rotation.y = initialRotation + scaledOffset / 1000;
      }
    }
  }

  return (
    <div className="relative cursor-none">
      <div
        id="mainContainer"
        className="stacked-container flex flex-col bg-black"
      >
        {/* Background Spline */}
        <div className="fixed h-full w-full">
          <Spline
            scene="https://prod.spline.design/nNC4pgLFc-2VVzIn/scene.splinecode"
            onLoad={onLoad}
          />
        </div>

        <div className="fixed h-full w-full pointer-events-none z-100">
          <div
            id="glowing-cursor"
            className="absolute w-16 h-16 rounded-full transition-transform duration-75"
          ></div>
        </div>

        {/* Foreground Scrollable Content */}
        <div className="flex flex-col absolute h-[950vh] w-full text-center top-0 left-0 bg-opacity-10 pointer-events-none">
          <div className="relative w-full h-full">
            <div className="flex flex-row items-center mt-[15%]">
              <h1 className="text-9xl font-bold text-white text-left w-[30vw] ml-36 top-[2.4%] mb-4 w-fit">
                Hi! I'm <br /> Pranav Kale
              </h1>
            </div>

            <div
              className={
                showScrollText
                  ? "w-full flex flex-col items-center transition-opacity opacity-100"
                  : "w-full flex flex-col items-center transition-opacity opacity-0"
              }
            >
              <h2 className="w-fit text-xl text-white mt-72 flex flex-col items-center">
                {" "}
                Please scroll down
              </h2>
              <GiFallDown className="w-6 h-6 mt-4 text-white" />
            </div>

            {/* First Information Container */}
            <div className="flex flex-col items-end w-full h-[4%]">
              <div className="flex flex-col p-16 text-white items-start w-2/4 mt-48 mr-24 h-full bg-gray-800 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10">
                <h2 className="text-5xl pt-6">I am a Software Engineer</h2>
                <p className="py-6 text-2xl text-left">
                  {" "}
                  Who also loves to explore new things in domains like AI and
                  Machine Learning.{" "}
                </p>
              </div>
            </div>

            {/* Four Contains  */}
            <div className="w-full h-[5.5%] p-16 mt-[15%]">
              <ScrollComponent text="I Love to Work With">
                <TechCard image={tflogo} altText={"TensorFlow"} />
                <TechCard image={reactlogo} altText={"React"} />
                <TechCard image={flutterlogo} altText={"Flutter"} />
                <TechCard image={jslogo} altText={"JavaScript"} />
                <TechCard image={pythonlogo} altText={"Python"} />
                <TechCard image={hflogo} altText={"HuggingFace"} />
                <TechCard image={lclogo} altText={"LangChain"} />
                <TechCard image={javalogo} altText={"Java"} />
                <div className="w-[400px]"></div> {/* Empty div for padding */}
              </ScrollComponent>

              <div className="w-full h-[180vh] p-16 mt-[15%] bg-emerald-500 opacity-30"></div>

              <div className="w-full h-[5.5%] p-16 mt-[15%]">
                <ScrollComponent
                  text={"You can find me on any of these Platform"}
                >
                  <SocialsCard
                    image={linkedinlogo}
                    altText="Linkedin"
                    link="https://www.linkedin.com/in/pranavkale013/"
                  >
                    {" "}
                  </SocialsCard>
                  <SocialsCard
                    image={githublogo}
                    altText="Github"
                    link="https://www.linkedin.com/in/pranav-kale-8b1b4a1b6/"
                  >
                    {" "}
                  </SocialsCard>
                  <SocialsCard
                    image={twitterlogo}
                    altText="X / Twitter"
                    link="https://x.com/pranavkale013"
                  >
                    {" "}
                  </SocialsCard>
                  <SocialsCard
                    image={gmaillogo}
                    altText="Mail"
                    link="mailto:pranavkale021998@gmail.com"
                  >
                    {" "}
                  </SocialsCard>
                  <SocialsCard
                    image={instagramlogo}
                    altText="Instagram"
                    link="https://www.instagram.com/"
                  >
                    {" "}
                  </SocialsCard>
                  <SocialsCard
                    image={linkedinlogo}
                    altText="Linkedin"
                    link="https://www.linkedin.com/in/pranavkale013/"
                  >
                    {" "}
                  </SocialsCard>
                  <SocialsCard
                    image={githublogo}
                    altText="Github"
                    link="https://www.linkedin.com/in/pranav-kale-8b1b4a1b6/"
                  >
                    {" "}
                  </SocialsCard>
                  <div className="w-[1000px]"></div>{" "}
                  {/* Empty div for padding */}
                </ScrollComponent>
              </div>

              <div className="w-screen px-12 bg-emerald-500 h-screen mt-[130%] -translate-x-[3%]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
