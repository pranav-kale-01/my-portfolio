import tflogo from "../assets/tf.png";
import reactlogo from "../assets/rct.png";
import flutterlogo from "../assets/flutter.png";
import pythonlogo from "../assets/python.png";
import hflogo from "../assets/hf.png";
import lclogo from "../assets/lc.png";
import jslogo from "../assets/js.png";
import javalogo from "../assets/java.png";
import TechCard from "../components/techCard";
import ScrollComponent from "./ScrollComponent";

const TechComponent = () => {
    return (
        <ScrollComponent text="I Love to Work With">
        <TechCard image={tflogo} altText={"TensorFlow"} />
        <TechCard image={reactlogo} altText={"React"} />
        <TechCard image={flutterlogo} altText={"Flutter"} />
        <TechCard image={jslogo} altText={"JavaScript"} />
        <TechCard image={pythonlogo} altText={"Python"} />
        <TechCard image={hflogo} altText={"HuggingFace"} />
        <TechCard image={lclogo} altText={"LangChain"} />
        <TechCard image={javalogo} altText={"Java"} />
        <div className="w-[600px]"></div>
      </ScrollComponent>
    );
};

export default TechComponent;