import React from "react";
import AboutSvg from "../assets/images/about.svg";

const About = () => {
  return (
    <div className="bg-gray-500/20 py-14 px-2 md:px-20 rounded-md grid grid-cols-1 md:grid-cols-5 gap-8 justify-center">
      <div className="md:col-span-5">
        <h3 className="text-2xl md:text-3xl font-semibold text-white text-center mb-2">
          About Us
        </h3>
        <p className="text-gray-200 text-xs md:text-sm text-center mb-6">
          We are a blog that focuses on sharing knowledge and experiences
        </p>
      </div>
      <div className="text-gray-200 md:col-span-3">
        <p className="mb-2">
          Welcome to this Blog, a place where creativity meets insightfulness
          and knowledge meets passion. Our mission is simple: to provide a space
          for talented individuals to share their thoughts, experiences, and
          expertise with the world.
        </p>
        <p className="mb-2">
          As a reader, you will find a diverse range of topics covered by our
          contributors, including but not limited to current events, travel,
          fashion, technology, health, lifestyle, business, and more. Each
          author brings their unique perspective and style to the table,
          offering readers a wealth of information and entertainment.
        </p>
        <p className="mb-2">
          For those interested in joining our team, we accept guest submissions
          from writers of all backgrounds and experience levels. Our goal is to
          promote fresh voices and give aspiring authors a chance to reach a
          wider audience. If you have a story to tell or insights to share,
          please consider pitching us your idea.
        </p>
        <p className="mb-2">
          In addition to our articles, we also feature podcasts, videos, and
          other media formats to keep things interesting and engage multiple
          learning styles. No matter how you prefer to consume information, we
          have something for everyone at this Blog.
        </p>
        <p>
          Thank you for visiting our site. Please take some time to explore our
          archives, leave comments, and connect with us on social media. We look
          forward to hearing from you soon!
        </p>
      </div>
      <div className="md:col-span-2 flex items center">
        <img src={AboutSvg} alt="About Us" />
      </div>
    </div>
  );
};

export default About;
