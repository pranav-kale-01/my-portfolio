import React from "react";

const SocialsCard = ({ image, altText, link }) => {
  return (
    <div className="flex flex-col justify-start h-screen">
      <div
        onClick={() => {
          window.open(link, "_blank");
        }}
        className="bg-gray-600 h-fit mx-6 max-w-[20vw] p-12 w-full rounded-lg
        pointer-events-auto hover:scale-105 transition ease-in-out delay-15
        backdrop-filter backdrop-blur-md bg-opacity-10"
      >
        <div className="aspect-square">
          <img src={image} alt={altText} className="" />
        </div>
        <p className="text-white text-center text-3xl font-bold mt-16">
          {altText}
        </p>
      </div>
    </div>
  );
};

export default SocialsCard;
