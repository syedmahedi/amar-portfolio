import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import config from "../api/index.json";

const Achievements = () => {
  return (
    <div className="section" id="achievements">
      <div className="container mx-auto">
        <div className=" flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          <motion.h2
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="text-4xl uppercase font-medium mb-2 tracking-wide"
          >
            Achievements
          </motion.h2>
          <VerticalTimeline layout="1-column">
            <motion.div
              variants={fadeIn("right", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
            >
              <VerticalTimelineElement
                variants={fadeIn("right", 0.4)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
                className="vertical-timeline-element"
                contentStyle={{
                  background: "rgb(14, 45, 85)",
                  color: "#fff",
                  boxShadow: "0 3px 5px rgba(0, 0, 0, 0.5)",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid  rgb(14, 45, 85)",
                }}
                date={config.achievements1.date}
                iconStyle={{ background: "#1abc9c", color: "#fff" }}
              >
                <h3 className="vertical-timeline-element-title">
                  {config.achievements1.tittle}
                </h3>
                <p>{config.achievements1.describtion}</p>
              </VerticalTimelineElement>

              <VerticalTimelineElement
                className="vertical-timeline-element"
                contentStyle={{
                  background: "rgb(14, 45, 85)",
                  color: "#fff",
                  boxShadow: "0 3px 5px rgba(0, 0, 0, 0.5)",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid  rgb(14, 45, 85)",
                }}
                date={config.achievements2.date}
                iconStyle={{ background: "#3498db", color: "#fff" }}
              >
                <h3 className="vertical-timeline-element-title">
                  {config.achievements2.tittle}
                </h3>
                <p>{config.achievements2.describtion}</p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element"
                contentStyle={{
                  background: "rgb(14, 45, 85)",
                  color: "#fff",
                  boxShadow: "0 3px 5px rgba(0, 0, 0, 0.5)",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid  rgb(14, 45, 85)",
                }}
                date={config.achievements3.date}
                iconStyle={{ background: "#e74c3c", color: "#fff" }}
              >
                <h3 className="vertical-timeline-element-title">
                  {config.achievements3.tittle}
                </h3>
                <p>{config.achievements3.describtion}</p>
              </VerticalTimelineElement>
            </motion.div>
          </VerticalTimeline>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
