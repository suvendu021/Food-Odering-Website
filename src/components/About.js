import { useState } from "react";
import FAQ from "./FAQ";
import faqData from "../utils/faqData";
import Footer from "./Footer";

const About = () => {
  const [showItems, setShowItems] = useState(null);

  const toggleShowItems = (index) => {
    setShowItems((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <>
      <div className="container mx-auto py-12">
        <h1 className="text-3xl font-bold mb-8 text-center">
          More About this project
        </h1>
        <div className="accordion">
          {faqData.map((data, index) => (
            <FAQ
              key={data.id}
              showItems={index === showItems}
              toggleShowItems={() => toggleShowItems(index)}
              title={data.title}
              description={data.description}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
