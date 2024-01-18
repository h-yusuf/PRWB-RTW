import React from "react";
import Navbar from "../components/partials/navbar";
import bgimg from "../assets/skils/UI UX.jpg";
import bgblue from "../assets/bg-blue.png";
const UIUXskils = () => {
  return (
    <>
      <div className="bg-site bg-no-repeat bg-cover overflow-hidden">
        <Navbar
          name="MySkill"
        />
        <div className="relative -mt-[150px] top-0 w-full">
          <div className="w-full ">
            <img className="w-full top-0" src={bgimg} alt="" />
            <img
              src={bgblue}
              alt=""
              className="rounded-full w-32 h-32 absolute bottom-0 left-12 lg:left-32 -mb-14"
            />
          </div>
        </div>
        <div className="container mx-auto my-20 grid gap-8">
          <div className=" bg-gray-800 bg-opacity-25 border border-gray-700 rounded-lg shadow p-8">
            <p className="text-justify">
              My UI/UX design portfolio highlights expertise in user-centered
              design, encompassing skills like user research, wireframing, and
              usability testing. Proficient in visual design with a focus on
              aesthetics, I excel in creating intuitive and brand-aligned
              interfaces. My capabilities extend to interaction design, information
              architecture, and responsive design, supported by proficiency in
              prototyping tools like Sketch and Figma. I emphasize collaboration and
              effective communication while conducting usability testing, iterating
              designs based on feedback. With problem-solving skills, I approach
              design challenges innovatively, ensuring the delivery of impactful and
              user-centric digital experiences.
            </p>
            <div className="lg:flex grid gap-12 my-4">
              <div className="flex flex-col gap-6">
                <div className="">
                  <a className="text-gradient btn-link">Deliverables</a>
                  <p>
                    Interaction Design: High-fidelity interactive prototypes for key
                    tasks on iOS
                  </p>
                </div>
                <div className="">
                  <a className="text-gradient btn-link">UX/UI Design:</a>
                  <ul className="list-disc ml-5">
                    <li>Competitive analysis</li>
                    <li>User surveys and one-on-one interviews</li>
                    <li>
                      User surveys and one-on-one interviewsUser journeys and task
                      flows
                    </li>
                    <li>Site map</li>
                    <li>Low-fidelity wireframes</li>
                    <li>High-fidelity mockups and prototypes</li>
                    <li>Design system and UI kit</li>
                    <li>Usability tests and findings</li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col gap-6">
                <div className="">
                  <a className="text-gradient btn-link">Roles</a>
                  <p>
                    I assumed the following roles designing this app:
                  </p>
                  <ul className="list-disc ml-5">
                    <li>User Experience (UX) Designer</li>
                    <li>Interaction (IxD) Designer</li>
                    <li>User Interface (UI) Designer</li>
                    <li> Visual Designer</li>
                  </ul>
                </div>
                <div className="">
                  <a className="text-gradient btn-link">Tools</a>
                  <ul className="list-disc ml-5">
                    <li>Figma</li>
                    <li>Flaticon</li>
                    <li> Photoshop</li>
                    <li> Illustrator</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* <img className="w-full top-0" src={bgimg} alt="" /> */}
          </div>

        </div>

      </div>
    </>
  );
};

export default UIUXskils;
