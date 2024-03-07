import React, { useState } from "react";
import PoseCard from "./pose_card";
import Keycard from "./keycard";

// Initial data
const initialData = [
  {
    key: "left",
    src: "/images/left_key.png",
    pose: [
      {
        title: "Left hand Up",
        img: "/images/left_hand_up.png",
        desc: "Left hand lifted for the left key",
        selected: true,
      },
      {
        title: "Turn Left",
        img: "/images/left_moved.png",
        desc: "Turning left for the left key",
        selected: false,
      },
      {
        title: "Cross left hand Up",
        img: "/images/left_handcrossed.jpeg",
        desc: "Half left hand lifted across left",
        selected: false,
      },
    ],
  },
  {
    key: "right",
    src: "/images/right_key.png",
    pose: [
      {
        title: "Right hand Up",
        img: "/images/left_hand_up.png",
        desc: "Left hand lifted for the left key",
        selected: false,
      },
      {
        title: "Turn Right",
        img: "/images/left_moved.png",
        desc: "Turning left for the left key",
        selected: false,
      },
      {
        title: "Cross Right hand Up",
        img: "/images/rh.jpeg",
        desc: "Half right hand lifted across right",
        selected: true,
      },
    ],
  },
  {
    key: "Up",
    src: "/images/up_key.png",
    pose: [
      {
        title: "Right hand Up",
        img: "/images/left_hand_up.png",
        desc: "Left hand lifted for the left key",
        selected: false,
      },
      {
        title: "Turn Right",
        img: "/images/left_moved.png",
        desc: "Turning left for the left key",
        selected: true,
      },
      {
        title: "Cross Right hand Up",
        img: "/images/rh.jpeg",
        desc: "Half right hand lifted across right",
        selected: false,
      },
    ],
  },
  {
    key: "Sit",
    src: "/images/down_key.png",
    pose: [
      {
        title: "Right hand Up",
        img: "/images/left_hand_up.png",
        desc: "Left hand lifted for the left key",
        selected: true,
      },
      {
        title: "Turn Right",
        img: "/images/left_moved.png",
        desc: "Turning left for the left key",
        selected: false,
      },
      {
        title: "Cross Right hand Up",
        img: "/images/rh.jpeg",
        desc: "Half right hand lifted across right",
        selected: false,
      },
    ],
  },
];

const Cardsection = () => {
  const [data, setData] = useState(initialData);

  const handleClick = (key, title) => {
    const newData = [...data];

    const keyData = newData.find((item) => item.key === key);
    keyData.pose.forEach((pose) => {
      pose.selected = pose.title === title;
    });

    setData(newData);
  };

  return (
    <div className=" px-10 mx-auto bg-white dark:bg-gray-800 py-8 sm:py-16 flex justify-center items-center">
      <div>
        {data.map(({ key, src, pose }) => (
          <div key={key} className="flex flex-col">
            <div className="flex flex-wrap justify-center items-center">

            <Keycard src={src} pose={pose}/>
            <div className="flex gap-5 flex-wrap justify-center items-center">

            {pose.map(({ title, img, desc, selected }) => (
              <div key={title} onClick={() => handleClick(key, title)}>
                <PoseCard
                  title={title}
                  img={img}
                  desc={desc}
                  selected={selected}
                  />
              </div>
            ))}
            </div>
            </div>
            <hr className="w-full h-5 opacity-10"/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cardsection;
