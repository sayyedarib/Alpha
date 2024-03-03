import PoseCard from "./pose_card";
import Keycard from "./keycard";
const data = [
  {
    key: "left",
    src:"/images/left_key.png",
    pose: [
      {
        title: "Left hand Up",
        img: "/images/left_hand_up.png",
        desc: "Left hand lifted for the left key",
      },
      {
        title: "Turn Left",
        img: "/images/left_moved.png",
        desc: "Turning left for the left key",
      },
      {
        title: "Cross left hand Up",
        img: "/images/left_handcrossed.jpeg",
        desc: "Half left hand lifted across left",
      },
    ],
  },
  {
    key:"right",
    src:"/images/right_key.png",
    pose:[
    {
    title: "Right hand Up",
    img: "/images/left_hand_up.png",
    desc: "Left hand lifted for the left key",
  },
  {
    title: "Turn Right",
    img: "/images/left_moved.png",
    desc: "Turning left for the left key",
  },
  {
    title: "Cross Right hand Up",
    img: "/images/rh.jpeg",
    desc: "Half right hand lifted across right",
  },
],
  },
  {
    key:"Up",
    src:"/images/up_key.png",
    pose:[
    {
    title: "Right hand Up",
    img: "/images/left_hand_up.png",
    desc: "Left hand lifted for the left key",
  },
  {
    title: "Turn Right",
    img: "/images/left_moved.png",
    desc: "Turning left for the left key",
  },
  {
    title: "Cross Right hand Up",
    img: "/images/rh.jpeg",
    desc: "Half right hand lifted across right",
  },
],
  },
  {
    key:"Sit",
    src:"/images/down_key.png",
    pose:[
    {
    title: "Right hand Up",
    img: "/images/left_hand_up.png",
    desc: "Left hand lifted for the left key",
  },
  {
    title: "Turn Right",
    img: "/images/left_moved.png",
    desc: "Turning left for the left key",
  },
  {
    title: "Cross Right hand Up",
    img: "/images/rh.jpeg",
    desc: "Half right hand lifted across right",
  },
],
  }
];


const Cardsection = () => {
  
    return (
        <div className=" px-10 mx-auto bg-white dark:bg-gray-800 py-8 sm:py-16 flex justify-center items-center">      
          <div className="flex-col">
            {data.map(({ key,src,pose }) => (   
              <div key={key} className="flex">
                <Keycard src={src} pose={pose} className='rounded-2xl'/>
                {pose.map(({title,img,desc}) => (
                  <div key={title}>
                    <PoseCard title={title} img={img} desc={desc} />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      );
                }
export default Cardsection;
