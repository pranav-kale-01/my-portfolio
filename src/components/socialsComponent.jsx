import linkedinlogo from "../assets/linkedin.png";
import githublogo from "../assets/github.png";
import gmaillogo from "../assets/gmail.png";
import twitterlogo from "../assets/twitter.png";
import instagramlogo from "../assets/insta.png";
import SocialsCard from "./socialsCard";
import ScrollComponent from "./ScrollComponent";

const SocialsComponent = () => {
    return (
        <div className="w-full h-[5.5%] p-16 mt-[120%]">
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
    );
}; 

export default SocialsComponent;