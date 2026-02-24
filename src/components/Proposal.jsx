"use client";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
gsap.registerPlugin(ScrollTrigger);

const tasks = [
  {
    name: "Requirement Gathering",
    start: 0,
    duration: 2,
    color: "bg-orange-500",
  },
  {
    name: "Design",
    start: 1,
    duration: 1,
    color: "bg-gray-400",
  },
  {
    name: "Development",
    start: 2,
    duration: 2,
    color: "bg-black",
  },
  {
    name: "Testing",
    start: 3,
    duration: 2,
    color: "bg-gray-400",
  },
  {
    name: "Deployment",
    start: 4,
    duration: 2,
    color: "bg-orange-500",
  },
];

const Proposal = () => {
  const mainCont = useRef();
  const stickyCont = useRef();
  const Card1 = useRef();
  const Card2 = useRef();
  const Card3 = useRef();
  const Card4 = useRef();
  const Card5 = useRef();
  const Card6 = useRef();
  const Card7 = useRef();
  const Card8 = useRef();
  const Card9 = useRef();

  //   SCROLL CARD ANIMATE
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: mainCont.current,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        // markers: true,
      },
    });
    tl.to(
      Card1.current,
      {
        top: "45%",
        scale: 0.9,
        ease: "none",
      },
      "a1",
    );
    tl.to(
      Card2.current,
      {
        top: "50%",
        translateY: "-50%",
        ease: "none",
      },
      "a1",
    );

    // --------------------------------
    tl.to(
      Card2.current,
      {
        top: "45%",
        scale: 0.9,
        ease: "none",
      },
      "a2",
    );
    tl.to(
      Card3.current,
      {
        top: "50%",
        translateY: "-50%",
        ease: "none",
      },
      "a2",
    );
    tl.to(
      Card1.current,
      {
        opacity: 0,
        ease: "none",
      },
      "a2",
    );
    // --------------------------------
    tl.to(
      Card3.current,
      {
        top: "45%",
        scale: 0.9,
        ease: "none",
      },
      "a3",
    );
    tl.to(
      Card4.current,
      {
        top: "50%",
        translateY: "-50%",
        ease: "none",
      },
      "a3",
    );
    tl.to(
      Card2.current,
      {
        opacity: 0,
        ease: "none",
      },
      "a3",
    );
    // --------------------------------
    tl.to(
      Card4.current,
      {
        top: "45%",
        scale: 0.9,
        ease: "none",
      },
      "a4",
    );
    tl.to(
      Card5.current,
      {
        top: "50%",
        translateY: "-50%",
        ease: "none",
      },
      "a4",
    );
    tl.to(
      Card3.current,
      {
        opacity: 0,
        ease: "none",
      },
      "a4",
    );
    // --------------------------------
    tl.to(
      Card5.current,
      {
        top: "45%",
        scale: 0.9,
        ease: "none",
      },
      "a5",
    );
    tl.to(
      Card6.current,
      {
        top: "50%",
        translateY: "-50%",
        ease: "none",
      },
      "a5",
    );
    tl.to(
      Card4.current,
      {
        opacity: 0,
        ease: "none",
      },
      "a5",
    );
    // --------------------------------
    tl.to(
      Card6.current,
      {
        top: "45%",
        scale: 0.9,
        ease: "none",
      },
      "a6",
    );
    tl.to(
      Card7.current,
      {
        top: "50%",
        translateY: "-50%",
        ease: "none",
      },
      "a6",
    );
    tl.to(
      Card5.current,
      {
        opacity: 0,
        ease: "none",
      },
      "a6",
    );
    // --------------------------------
    tl.to(
      Card7.current,
      {
        top: "45%",
        scale: 0.9,
        ease: "none",
      },
      "a7",
    );
    tl.to(
      Card8.current,
      {
        top: "50%",
        translateY: "-50%",
        ease: "none",
      },
      "a7",
    );
    tl.to(
      Card6.current,
      {
        opacity: 0,
        ease: "none",
      },
      "a7",
    );
    // --------------------------------
    tl.to(
      Card8.current,
      {
        top: "45%",
        scale: 0.9,
        ease: "none",
      },
      "a8",
    );
    tl.to(
      Card9.current,
      {
        top: "50%",
        translateY: "-50%",
        ease: "none",
      },
      "a8",
    );
    tl.to(
      Card7.current,
      {
        opacity: 0,
        ease: "none",
      },
      "a8",
    );
    // --------------------------------
  }, []);

  // ----------------------------------------------------------------------------------- CARDS

  const ProposalCard1 = () => {
    return (
      <div
        ref={Card1}
        className="w-[70vw] h-[75vh] bg-[#1A42C2] rounded-[10px] absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 "
      ></div>
    );
  };

  const ProposalCard2 = () => {
    return (
      <div
        ref={Card2}
        className="w-[70vw] h-[75vh] bg-[#f5f5f5] rounded-[10px] absolute top-[100%] left-1/2 -translate-x-1/2 "
      ></div>
    );
  };

  const ProposalCard3 = () => {
    return (
      <div
        ref={Card3}
        className="w-[70vw] h-[75vh] overflow-hidden bg-[#1A42C2] gap-5 p-5 rounded-[10px] flex absolute top-[100%] left-1/2 -translate-x-1/2 "
      >
        {/* Left */}
        <div className="w-[30%] h-full">
          {/* img */}
          <div className=" w-full h-1/2 bg-white/50"></div>
          <div className="w-full h-1/2 text-white mt-5">
            Lorem ipsum dolor sit amet consectetur
          </div>
        </div>
        {/* Right */}
        <div className="w-[70%] h-full flex flex-col">
          {/* img */}
          <div className=" w-full h-1/2 bg-white/50"></div>
          {/* text */}
          <div className=" w-full h-1/2 flex text-white gap-5">
            {/* left-T */}
            <div className="w-1/2 h-full mt-5 text-justify tracking-tight">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
              magni sit minima error repellat dolorem obcaecati perspiciatis
              reiciendis earum recusandae, alias facere! Et officiis voluptas
              optio nulla odit nostrum minus numquam, harum ipsum molestias rem
              vero hic necessitatibus sequi! Est placeat fugit illo perferendis
              laborum suscipit iste consectetur saepe ipsum.
            </div>
            {/* Right-T */}
            <div className="w-1/2 h-full mt-5 text-justify tracking-tight">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
              magni sit minima error repellat dolorem obcaecati perspiciatis
              reiciendis earum recusandae, alias facere! Et officiis voluptas
              optio nulla odit nostrum minus numquam, harum ipsum molestias rem
              vero hic necessitatibus sequi!
            </div>
          </div>
        </div>
      </div>
    );
  };

  const ProposalCard4 = () => {
    return (
      <div
        ref={Card4}
        className="w-[70vw] h-[75vh] p-5 bg-[#f5f5f5] text-[#1A42C2] rounded-[10px] absolute top-[100%] left-1/2 -translate-x-1/2 "
      >
        {/* 1 */}
        <div className="w-full h-1/6 flex group justify-between items-center relative">
          <p className="text-[2.5vw] leading-[3vw]">STUDIO</p>
          {/* Img */}
          <div className="h-[70%] aspect-3/2 bg-[#1A42C2]"></div>
          {/* DIVLINER */}
          <div className=" absolute bottom-0 group-hover:w-full transition-all duration-200 ease-in left-0 w-0 h-[2px] bg-[#1A42C2] "></div>
        </div>
        {/* 2 */}
        <div className="w-full group h-1/6 flex justify-between items-center relative">
          <p className="text-[2.5vw] leading-[3vw]">AGENCY</p>
          {/* Img */}
          <div className="h-[70%] aspect-3/2 bg-[#1A42C2]"></div>
          {/* DIVLINER */}
          <div className=" absolute bottom-0 group-hover:w-full transition-all duration-200 ease-in left-0 w-0 h-[2px] bg-[#1A42C2] "></div>
        </div>
        {/* 3 */}
        <div className="w-full h-1/6 group flex justify-between items-center relative">
          <p className="text-[2.5vw] leading-[3vw]">ABOUT</p>
          {/* Img */}
          <div className="h-[70%] aspect-3/2 bg-[#1A42C2]"></div>
          {/* DIVLINER */}
          <div className=" absolute bottom-0 group-hover:w-full transition-all duration-200 ease-in left-0 w-0 h-[2px] bg-[#1A42C2] "></div>
        </div>
        {/* 4 */}
        <div className="w-full h-1/6 flex group justify-between items-center relative">
          <p className="text-[2.5vw] leading-[3vw]">CONTACT</p>
          {/* Img */}
          <div className="h-[70%] aspect-3/2 bg-[#1A42C2]"></div>
          {/* DIVLINER */}
          <div className=" absolute bottom-0 group-hover:w-full transition-all duration-200 ease-in left-0 w-0 h-[2px] bg-[#1A42C2] "></div>
        </div>
        {/* 5 */}
        <div className="w-full h-1/6 flex group justify-between items-center relative">
          <p className="text-[2.5vw] leading-[3vw]">SERVICES</p>
          {/* Img */}
          <div className="h-[70%] aspect-3/2 bg-[#1A42C2]"></div>
          {/* DIVLINER */}
          <div className=" absolute bottom-0 group-hover:w-full transition-all duration-200 ease-in left-0 w-0 h-[2px] bg-[#1A42C2] "></div>
        </div>
        {/* 6 */}
        <div className="w-full h-1/6 flex group justify-between items-center relative">
          <p className="text-[2.5vw] leading-[3vw]">PROJECTS</p>
          {/* Img */}
          <div className="h-[70%] aspect-3/2 bg-[#1A42C2]"></div>
          {/* DIVLINER */}
          <div className=" absolute bottom-0 group-hover:w-full transition-all duration-200 ease-in left-0 w-0 h-[2px] bg-[#1A42C2] "></div>
        </div>
      </div>
    );
  };

  const ProposalCard5 = () => {
    return (
      <div
        ref={Card5}
        className="w-[70vw] h-[75vh] p-5 bg-[#1A42C2] rounded-[10px] absolute top-[100%] left-1/2 -translate-x-1/2 "
      >
        {/* IMG_CONT */}
        <div className="w-full h-[70%] flex gap-5">
          {/* 1=img */}
          <div className="w-1/4 h-full flex flex-col">
            <div className="w-full h-full bg-white/50"></div>
            <p className="mt-2 text-white">Normal</p>
            <p className=" text-white">Text Normal</p>
          </div>

          {/* 2=img */}
          <div className="w-1/4 h-full flex flex-col">
            <div className="w-full h-[70%] bg-white/50"></div>
            <p className="mt-2 text-white">Normal</p>
            <p className=" text-white">Text Normal</p>
          </div>

          {/* 3=img */}
          <div className="w-1/4 h-full flex flex-col">
            <div className="w-full h-full bg-white/50"></div>
            <p className="mt-2 text-white">Normal</p>
            <p className=" text-white">Text Normal</p>
          </div>

          {/* 4=img */}
          <div className="w-1/4 h-full flex flex-col">
            <div className="w-full h-[70%] bg-white/50"></div>
            <p className="mt-2 text-white">Normal</p>
            <p className=" text-white">Text Normal</p>
          </div>
        </div>
      </div>
    );
  };

  const ProposalCard6 = () => {
    return (
      <div
        ref={Card6}
        className="w-[70vw] h-[75vh] p-5 flex justify-between bg-[#f5f5f5] rounded-[10px] absolute top-[100%] left-1/2 -translate-x-1/2 "
      >
        {/* Left */}
        <div className="w-[30%] h-full flex flex-col text-[#1A42C2]">
          <div className="w-full h-1/3">
            <p className="text-[2.5vw]">PROCESS</p>
          </div>
          <div className="w-full h-1/3 flex justify-start items-center pr-5">
            <p className="">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              natus, neque officia pariatur dolor consequuntur voluptas eum
              aspernatur. Officia, repellat.
            </p>
          </div>

          {/* ImgCont */}
          <div className="w-full h-2/3">
            <div className="w-full h-full bg-[#1A42C2]"></div>
          </div>
        </div>

        {/* Right */}
        <div className="w-[50%] h-full py-5 flex flex-col text-[#1A42C2] ">
          {/* 1 */}
          <div className="w-full h-1/5 flex">
            {/* left */}
            <div className="w-1/2 h-full">
              <p className="text-[1.3vw]">LISTEN</p>
            </div>
            {/* right */}
            <div className="w-1/2 h-full">
              <p className="w-[90%]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>
          </div>
          {/* 2 */}
          <div className="w-full h-1/5 flex">
            {/* left */}
            <div className="w-1/2 h-full">
              <p className="text-[1.3vw]">LISTEN</p>
            </div>
            {/* right */}
            <div className="w-1/2 h-full">
              <p className="w-[90%]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>
          </div>
          {/* 3 */}
          <div className="w-full h-1/5 flex">
            {/* left */}
            <div className="w-1/2 h-full">
              <p className="text-[1.3vw]">LISTEN</p>
            </div>
            {/* right */}
            <div className="w-1/2 h-full">
              <p className="w-[90%]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>
          </div>
          {/* 4 */}
          <div className="w-full h-1/5 flex">
            {/* left */}
            <div className="w-1/2 h-full">
              <p className="text-[1.3vw]">LISTEN</p>
            </div>
            {/* right */}
            <div className="w-1/2 h-full">
              <p className="w-[90%]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>
          </div>
          {/* 5 */}
          <div className="w-full h-1/5 flex">
            {/* left */}
            <div className="w-1/2 h-full">
              <p className="text-[1.3vw]">LISTEN</p>
            </div>
            {/* right */}
            <div className="w-1/2 h-full">
              <p className="w-[90%]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const ProposalCard7 = () => {
    return (
      <div
        ref={Card7}
        className="w-[70vw] h-[75vh] bg-[#1A42C2] p-5 rounded-[10px] absolute top-[100%] left-1/2 -translate-x-1/2 "
      >
        {/* top */}
        <div className="w-full h-[30%]  flex justify-between text-white">
          {/* left */}
          <div className="w-1/2 h-full text-[2vw] p-5 leading-[2vw]">
            <p>PROJECT</p>
            <p>TIMELINE</p>
          </div>
          {/* Right */}
          <div className="w-1/2 h-full p-5 text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            dolores voluptatem labore dicta, doloremque at et corrupti a magni
            in voluptas error! Ipsa asperiores vero, distinctio repellendus fuga
            eos quis.
          </div>
        </div>

        {/* Bottom */}
        <div className="w-full h-[70%] text-white">
          <div className="w-full max-w-6xl mx-auto p-6">
            {/* Grid */}
            <div className="grid grid-cols-7 border border-gray-400">
              {/* Header Row */}
              <div className="p-3 font-semibold border-r border-gray-400">
                Task
              </div>
              {["Jan 1", "Jan 5", "Jan 12", "Feb 10", "Feb 20", "Feb 22"].map(
                (date, i) => (
                  <div
                    key={i}
                    className="p-3 text-center font-semibold border-l border-gray-300"
                  >
                    {date}
                  </div>
                ),
              )}

              {/* Rows */}
              {tasks.map((task, index) => (
                <div key={index} className="contents">
                  {/* Task Name */}
                  <div className="p-3 border-t border-r border-gray-300">
                    {task.name}
                  </div>

                  {/* Timeline Area */}
                  <div className="col-span-6 relative border-t border-gray-300 h-14">
                    <div
                      className={`absolute h-6 rounded-md ${task.color}`}
                      style={{
                        left: `${task.start * 16.66}%`,
                        width: `${task.duration * 16.66}%`,
                        top: "50%",
                        transform: "translateY(-50%)",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const ProposalCard8 = () => {
    return (
      <div
        ref={Card8}
        className="w-[70vw] h-[75vh] bg-[#f5f5f5] text-[#1A42C2] rounded-[10px] p-10 absolute top-[100%] left-1/2 -translate-x-1/2 "
      >
        {/* Top Section */}
        <div className="flex justify-between items-start">
          {/* Left Title */}
          <h1 className="text-6xl tracking-tight">Project</h1>

          {/* Right Title */}
          <h1 className="text-6xl tracking-tight">Pricing</h1>
        </div>

        {/* Middle Section */}
        <div className="mt-12 h-[80%] flex flex-col justify-end ">
          <div className="flex justify-between mb-4 text-lg">
            <span>Copywriting</span>
            <span>$2000.00</span>
          </div>

          <div className="flex justify-between mb-4 text-lg">
            <span>Strategy</span>
            <span>$300.00</span>
          </div>

          <div className="flex justify-between mb-6 text-lg">
            <span>Content Writing</span>
            <span>$2000.00</span>
          </div>

          {/* Divider */}
          <div className="border-t border-[#1A42C2]/40 my-6"></div>

          {/* Subtotal & Tax */}
          <div className="flex justify-end ">
            <div className="w-[250px]">
              <div className="flex justify-between mb-2 text-sm uppercase tracking-wider">
                <span>Subtotal</span>
                <span>$4450.00</span>
              </div>

              <div className="flex justify-between text-sm uppercase tracking-wider">
                <span>Tax</span>
                <span>$250.00</span>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
        <div className="flex justify-between items-end ">
          <p className="text-xs opacity-70">All prices are in USD.</p>

          <h2 className="text-7xl font-serif tracking-tight">$4700.00</h2>
        </div>
        </div>

        
      </div>
    );
  };

  const ProposalCard9 = () => {
    return (
      <div
        ref={Card9}
        className="w-[70vw] h-[75vh] bg-[#1A42C2] rounded-[10px] absolute top-[100%] left-1/2 -translate-x-1/2 "
      >
        
      </div>
    );
  };

  // -----------------------------------------------------------------------------------

  return (
    <div ref={mainCont} className="w-full h-[800vh] relative bg-[#1e1e1e]">
      <div
        ref={stickyCont}
        className="w-full h-screen sticky top-0 left-0 bg-[#1e1e1e]"
      >
        <ProposalCard1 />
        <ProposalCard2 />
        <ProposalCard3 />
        <ProposalCard4 />
        <ProposalCard5 />
        <ProposalCard6 />
        <ProposalCard7 />
        <ProposalCard8 />
        <ProposalCard9 />

        {/* Liner */}
        <div className="w-[30px] h-[100px] absolute top-1/2 right-[5%]  flex flex-col justify-between">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => {
            return (
              <div
                key={index}
                className={` symbol${item} w-full scale-[0.7] h-[2px] bg-white`}
              ></div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Proposal;
