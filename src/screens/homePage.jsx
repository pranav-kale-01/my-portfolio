import React, { useEffect, useRef, useState, useCallback } from "react";
import { GiFallDown } from "react-icons/gi";
import Spline from "@splinetool/react-spline";
import SocialsComponent from "../components/socialsComponent";
import ProjectComponent from "../components/projectComponent";
import TechComponent from "../components/techComponent";

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

  // showing scroll down option
  const [showScrollText, setShowScrollText] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [y, setY] = useState(window.scrollY);

  // Track the last known mouse position
  const mouseX = useRef(0);
  const mouseY = useRef(0);

  // Update the cursor position with interpolation
  const updateCursorPosition = useCallback(
    (e) => {
      mouseX.current = e.pageX;
      mouseY.current = e.pageY - window.scrollY;
    },
    [mouseX, mouseY]
  );

  const onLoad = (spline) => {
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
      boxes.current.rotation.y += 0.8;

      setInitialRotation(boxes.current.rotation.y);

      setInitialCubeScale(glowingCube.current.scale.x);
      setInitialCubePosition(glowingCube.current.position.y);

      setInitialCameraRotationX(splineCamera.current.rotation.x);
    }

    setIsLoading(false);
  };

  const moveObj = useCallback(() => {
    const min = 0;
    const max = 200;
    const a = 0;
    const b = 200;

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
  }, [
    initialCameraRotationX,
    initialCubePosition,
    initialCubeScale,
    initialRotation,
  ]);

  useEffect(() => {
    const handleScroll = (e) => {
      // for scroll down text
      if (showScrollText === true) {
        setShowScrollText(false);
      }

      // for background animation
      moveObj();
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
        cursor.style.transform = `translate(${mouseX.current - 24}px, ${
          mouseY.current - 24
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
  }, [mouseX, mouseY, updateCursorPosition]);

  return (
    <div className="relative cursor-none">
      <div
        id="mainContainer"
        className="stacked-container flex flex-col bg-black"
      >
        {isLoading && (
          <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
            <div className="flex space-x-2 text-white font-quattrocento-sans">
              <span className="loading-text-words animate-blur">L</span>
              <span className="loading-text-words animate-blur">O</span>
              <span className="loading-text-words animate-blur">A</span>
              <span className="loading-text-words animate-blur">D</span>
              <span className="loading-text-words animate-blur">I</span>
              <span className="loading-text-words animate-blur">N</span>
              <span className="loading-text-words animate-blur">G</span>
            </div>
          </div>
        )}

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
              <div className="flex flex-col p-16 text-white items-start w-1/3 mt-48 mr-24 h-full bg-gray-800 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10">
                <h2 className="text-4xl pt-6">I am a Software Engineer</h2>
                <p className="py-6 text-xl text-left">
                  {" "}
                  Who also loves to explore new things in domains like AI and
                  Machine Learning.{" "}
                </p>
              </div>
            </div>

            {/* Four Contains  */}
            <div className="w-full h-[5.5%] p-16 mt-[15%]">
              <TechComponent />

              <ProjectComponent />

              <SocialsComponent />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
