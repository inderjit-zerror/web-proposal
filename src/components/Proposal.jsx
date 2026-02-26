"use client";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import { div } from "three/src/nodes/math/OperatorNode";
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

// =================================================================================================
const hoverIn = (selector) => {
  gsap.to(selector, {
    backgroundColor: "#2147c4",
    ease: "power3.out",
    duration: 0.4,
  });
};

const hoverOut = (selector) => {
  gsap.to(selector, {
    backgroundColor: "#2147c400",
    ease: "power3.in",
    duration: 0.4,
  });
};

const footerRows = [
  {
    id: "I",
    items: [
      {
        text: "Built to last.",
        align: "absolute top-[5%] left-[5%]",
        hover: "group-hover:top-[90%]",
      },
      {},
      { img: "", hover: "hover:pb-10" },
      {},
      {
        text: "Prototypes that bring ideas to life.",
        align: "absolute bottom-[5%] left-[5%]",
        hover: "group-hover:bottom-[80%]",
      },
      {},
      {
        text: "|",
        align: "absolute top-[5%] left-[5%]",
        hover: "group-hover:top-[88%]",
      },
      { img: "", hover: "hover:pb-10" },
      {},
    ],
  },
  {
    id: "S",
    items: [
      {
        text: "|",
        align: "absolute bottom-[5%] left-[5%]",
        hover: "group-hover:bottom-[88%]",
      },
      { img: "", hover: "hover:pb-10" },
      {},
      {
        text: "|",
        align: "absolute top-[5%] left-[5%]",
        hover: "group-hover:top-[88%]",
      },
      {},
      { img: "", hover: "hover:pb-10" },
      {
        text: "Mumbai, India",
        align: "absolute top-[5%] left-[5%]",
        hover: "group-hover:top-[85%]",
      },
      {
        text: "Design. Development. Marketing.",
        align: "absolute bottom-[5%] left-[5%]",
        hover: "group-hover:bottom-[80%]",
      },
      { img: "", hover: "hover:pb-10" },
    ],
  },
  {
    id: "T",
    items: [
      {
        text: "Where ideas become usable.",
        align: "absolute bottom-[5%] left-[5%]",
        hover: "group-hover:bottom-[80%]",
      },
      {},
      {
        text: "Crafted with intent.",
        align: "absolute top-[5%] left-[5%]",
        hover: "group-hover:top-[85%]",
      },
      {},
      { img: "", hover: "hover:pb-10" },
      {
        text: "Refine through feedback.",
        align: "absolute top-[5%] left-[5%]",
        hover: "group-hover:top-[82%]",
      },
      {
        text: "|",
        align: "absolute bottom-[5%] left-[5%]",
        hover: "group-hover:bottom-[88%]",
      },
      {},
      {
        text: "©2025 Zerror Studios. All rights reserved.",
        align: "absolute bottom-[5%] left-[5%]",
        hover: "group-hover:bottom-[67%]",
      },
    ],
  },
];

const mobileFooterData = [
  {
    label: "Built to last",
    alignment: "flex items-end",
  },
  {},
  {
    label: "I",
    alignment: "flex items-end",
  },
  {
    label: "I",
    alignment: "flex items-end",
  },
  {},
  {
    links: [
      {
        label: "Home",
        href: "/",
      },
      {
        label: "About",
        href: "/",
      },
      {
        label: "Work",
        href: "/",
      },
      {
        label: "services",
        href: "/",
      },
      {
        label: "Contact",
        href: "/",
      },
    ],
  },
  {
    label: "Mumbai, India",
    alignment: " flex items-end text-start",
  },
  {},
  {
    label: "crafted with intent",
    alignment: "flex items-end",
  },
  {
    label: "© 2025 Zerror Studio.",
    alignment: "",
  },
  {
    label: "I",
    alignment: "flex items-start",
  },
  {
    label: " All rights reserved.",
    alignment: "flex items-end",
  },
];

// =================================================================================================

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
    tl.to(
      ".symbol1",
      {
        scale: "0.7",
      },
      "a1",
    );
    tl.to(
      ".symbol2",
      {
        scale: "1",
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
    tl.to(
      ".symbol2",
      {
        scale: "0.7",
      },
      "a2",
    );
    tl.to(
      ".symbol3",
      {
        scale: "1",
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
    tl.to(
      ".symbol3",
      {
        scale: "0.7",
      },
      "a3",
    );
    tl.to(
      ".symbol4",
      {
        scale: "1",
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
    tl.to(
      ".symbol4",
      {
        scale: "0.7",
      },
      "a4",
    );
    tl.to(
      ".symbol5",
      {
        scale: "1",
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
    tl.to(
      ".symbol5",
      {
        scale: "0.7",
      },
      "a5",
    );
    tl.to(
      ".symbol6",
      {
        scale: "1",
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
    tl.to(
      ".symbol6",
      {
        scale: "0.7",
      },
      "a6",
    );
    tl.to(
      ".symbol7",
      {
        scale: "1",
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
    tl.to(
      ".symbol7",
      {
        scale: "0.7",
      },
      "a7",
    );
    tl.to(
      ".symbol8",
      {
        scale: "1",
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
    tl.to(
      ".symbol8",
      {
        scale: "0.7",
      },
      "a8",
    );
    tl.to(
      ".symbol9",
      {
        scale: "1",
      },
      "a8",
    );
    // --------------------------------
  }, []);


  useEffect(()=>{
    const LIT = gsap.timeline({
       scrollTrigger: {
        trigger: Card7.current,
        start: "top 30%",
        // end: "top 30%",
        toggleActions: "play none none reverse",
      },
    })
     LIT.from(
      ".llTimeline",
      {
        width: 0,
        duration:1,
        ease: "none",
      },
      "a6",
    );
  },[])

  // =====================================================================================================
  const flickerRefs = useRef([]);

  useEffect(() => {
    flickerRefs.current.forEach((el) => {
      if (!el) return;

      const delay = Math.random() * 10;
      el.style.animationDelay = `${delay}s`;
    });
  }, []);
  // =====================================================================================================

  // ----------------------------------------------------------------------------------- CARDS

  const ProposalCard1 = () => {
    return (
      <div
        ref={Card1}
        className="w-[70vw] h-[75vh] bg-[#1A42C2] cardD p-10 rounded-[10px] absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 "
      >
        <div className=" noise-bg w-full md:h-full bg_blue  padding relative z-100 ">
          <div className=" relative z-10 w-full hidden md:block  md:h-full p-3">
            {footerRows.map((row) => (
              <div
                key={row.id}
                className="w-full h-[50vh] md:h-1/3 grid grid-cols-3 md:grid-cols-9 "
              >
                {row.items.map((item, i) => {
                  const selector = `.hoverBg${row.id}${i}`;
                  const isImage = !!item.img;

                  return (
                    <div
                      key={i}
                      onMouseEnter={() => hoverIn(selector)}
                      onMouseLeave={() => hoverOut(selector)}
                      className={`w-full hoverBg${
                        row.id
                      }${i}  border relative  group border-white/10 rounded-md flex text-white  leading-tight
                   
                    ${
                      isImage
                        ? "px-0 py-0 justify-center  items-center"
                        : "p-10"
                    }
                  `}
                    >
                      {item.img && (
                        <img
                          ref={(el) => flickerRefs.current.push(el)}
                          src={item.img}
                          alt="icon"
                          className="flicker h-[6vw]"
                        />
                      )}

                      {item.text && (
                        <span
                          ref={(el) => flickerRefs.current.push(el)}
                          className={` flicker text-xs font-thin leading-tight tracking-wider  uppercase text-[#f5f5f5]  transition-all duration-300  ${item.align}
                        ${item.hover}
                     `}
                          style={{
                            willChange: "opacity",
                            transition:
                              "top 0.3s ease-in, bottom 0.3s ease-inOut",
                          }} // Only transition position, not opacity  }}
                        >
                          {item.text}
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
          <div className=" relative z-10 h-full w-full md:hidden relative text-white uppercase">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <img className="scale-150" src="/logo_white.svg" alt="logo" />
            </div>

            <div className=" grid grid-cols-3">
              {mobileFooterData.map((item, index) => {
                if (Object.keys(item).length === 0) {
                  return (
                    <div
                      className={`h-[25vh]  ${item.alignment} p-3 border border-white/10 rounded-xl`}
                      key={index}
                    />
                  );
                }

                if (item.label) {
                  return (
                    <div
                      ref={(el) => flickerRefs.current.push(el)}
                      key={index}
                      className={` h-[25vh] flicker ${item.alignment} p-3 border border-white/10 rounded-xl text-xs font-thin uppercase`}
                    >
                      <p>{item.label}</p>
                    </div>
                  );
                }

                if (item.links) {
                  return (
                    <div
                      key={index}
                      className={` h-[25vh] ${item.alignment} p-3 border border-white/10 rounded-xl flex flex-col gap-2`}
                    >
                      {item.links.map((link, i) => (
                        <a
                          ref={(el) => flickerRefs.current.push(el)}
                          key={i}
                          href={link.href}
                          className="flicker text-xs  hover:underline"
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                  );
                }
              })}
            </div>
          </div>
        </div>

        <div className=" absolute top-0 left-0 z-100 w-full h-full flex justify-center items-center pointer-events-none select-none">
          <p className="text-[2.5vw] text-white font-bold">ZERROR STUDIOS</p>
        </div>
      </div>
    );
  };

  const ProposalCard2 = () => {
    return (
      <div
        ref={Card2}
        className="w-[70vw] h-[75vh] bg-[#f5f5f5] cardD p-10 gap-10 rounded-[10px] flex absolute top-[100%] left-1/2 -translate-x-1/2 "
      >
        {/* left */}
        <div className="w-1/2 h-full bg-[#1A42C2] overflow-hidden group">
          <img
            src={`/zerror.png`}
            alt="Img"
            className="w-full h-full object-cover object-center group-hover:scale-[1.01] transition-all duration-200 ease-in will-change-transform"
          />
        </div>
        {/* right */}
        <div className="w-1/2 h-full flex gap-10 text-[#1A42C2]">
          {/* left */}
          <div className="w-1/2 h-full flex flex-col gap-5 text-justify capitalize">
            <p>
              We Exist To end the trade off. At zerror, design and technology
              move as one - from first thought to final uild. every decision in
              intentional. every detail measured. every release stable.
            </p>
            <p>
              To build zero-error digital products where design and technology
              move as one.
            </p>
          </div>
          {/* Right */}
          <div className="w-1/2 h-full flex flex-col gap-5 text-justify capitalize">
            <p>
              We work wih startups studios and growing brands to design and bild
              degital products that are clear, scalable and impactful. from
              strategy to launch, we focus on thoughtful design, clean code, and
              meaningful user experiences.
            </p>
          </div>
        </div>
      </div>
    );
  };

  const ProposalCard3 = () => {
    return (
      <div
        ref={Card3}
        className="w-[70vw] h-[75vh] overflow-hidden cardD bg-[#1A42C2] gap-10 p-10 rounded-[10px] flex absolute top-[100%] left-1/2 -translate-x-1/2 "
      >
        {/* Left */}
        <div className="w-[30%] h-full">
          {/* img */}
          <div className=" w-full h-1/2 bg-white/50 group overflow-hidden">
            <img
              src={`/zerror.png`}
              alt="IMG"
              className="w-full h-full object-center object-cover group-hover:scale-[1.01] transition-all duration-200 ease-in will-change-transform"
            />
          </div>
          <div className="w-full h-1/2 text-white mt-5">
            Lorem ipsum dolor sit amet consectetur
          </div>
        </div>
        {/* Right */}
        <div className="w-[70%] h-full flex flex-col">
          {/* img */}
          <div className=" w-full h-1/2 bg-white/50 group overflow-hidden">
            <img
              src={`/cir.png`}
              alt="IMG"
              className="w-full h-full object-center object-cover group-hover:scale-[1.01] transition-all duration-200 ease-in will-change-transform"
            />
          </div>
          {/* text */}
          <div className=" w-full h-1/2 flex text-white gap-10">
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
        className="w-[70vw] h-[75vh] p-10 bg-[#f5f5f5] cardD text-[#1A42C2] rounded-[10px] absolute top-[100%] left-1/2 -translate-x-1/2 "
      >
        {/* 1 */}
        <div className="w-full h-1/10 flex group justify-between items-center relative ">
          <p className="text-[1.5vw] leading-[3vw]">Home</p>
          {/* Img */}
          <div className="h-[70%] aspect-3/2 overflow-hidden ">
            <img
              src={`/1.jpg`}
              alt="IMG"
              className="w-full h-full object-cover object-center group-hover:scale-[1.01] transition-all duration-200 ease-in will-change-transform"
            />
          </div>
          {/* DIVLINER */}
          <div className=" absolute bottom-0 group-hover:w-full transition-all duration-200 ease-in left-0 w-0 h-[2px] bg-[#1A42C2] "></div>
        </div>
        {/* 2 */}
        <div className="w-full group h-1/10 flex justify-between items-center relative ">
          <p className="text-[1.5vw] leading-[3vw]">ABOUT</p>
          {/* Img */}
          <div className="h-[70%] aspect-3/2 overflow-hidden ">
            <img
              src={`/2.jpg`}
              alt="IMG"
              className="w-full h-full object-cover object-center group-hover:scale-[1.01] transition-all duration-200 ease-in will-change-transform"
            />
          </div>
          {/* DIVLINER */}
          <div className=" absolute bottom-0 group-hover:w-full transition-all duration-200 ease-in left-0 w-0 h-[2px] bg-[#1A42C2] "></div>
        </div>
        {/* 3 */}
        <div className="w-full h-1/10 group flex justify-between items-center relative">
          <p className="text-[1.5vw] leading-[3vw]">OUR WORK</p>
          {/* Img */}
          <div className="h-[70%] aspect-3/2 overflow-hidden">
            <img
              src={`/3.jpg`}
              alt="IMG"
              className="w-full h-full object-cover object-center group-hover:scale-[1.01] transition-all duration-200 ease-in will-change-transform"
            />
          </div>
          {/* DIVLINER */}
          <div className=" absolute bottom-0 group-hover:w-full transition-all duration-200 ease-in left-0 w-0 h-[2px] bg-[#1A42C2] "></div>
        </div>
        {/* 4 */}
        <div className="w-full h-1/10 flex group justify-between items-center relative">
          <p className="text-[1.5vw] leading-[3vw]">EXPERTISE</p>
          {/* Img */}
          <div className="h-[70%] aspect-3/2 overflow-hidden ">
            <img
              src={`/4.jpg`}
              alt="IMG"
              className="w-full h-full object-cover object-center group-hover:scale-[1.01] transition-all duration-200 ease-in will-change-transform"
            />
          </div>
          {/* DIVLINER */}
          <div className=" absolute bottom-0 group-hover:w-full transition-all duration-200 ease-in left-0 w-0 h-[2px] bg-[#1A42C2] "></div>
        </div>
        {/* 5 */}
        <div className="w-full h-1/10 flex group justify-between items-center relative">
          <p className="text-[1.5vw] leading-[3vw]">CONTACT</p>
          {/* Img */}
          <div className="h-[70%] aspect-3/2 overflow-hidden ">
            <img
              src={`/5.jpg`}
              alt="IMG"
              className="w-full h-full object-cover object-center group-hover:scale-[1.01] transition-all duration-200 ease-in will-change-transform"
            />
          </div>
          {/* DIVLINER */}
          <div className=" absolute bottom-0 group-hover:w-full transition-all duration-200 ease-in left-0 w-0 h-[2px] bg-[#1A42C2] "></div>
        </div>
        {/* 6 */}
        <div className="w-full h-1/10 flex group justify-between items-center relative">
          <p className="text-[1.5vw] leading-[3vw]">OUR CLIENTS</p>
          {/* Img */}
          <div className="h-[70%] aspect-3/2 overflow-hidden">
            <img
              src={`/1.jpg`}
              alt="IMG"
              className="w-full h-full object-cover object-center group-hover:scale-[1.01] transition-all duration-200 ease-in will-change-transform"
            />
          </div>
          {/* DIVLINER */}
          <div className=" absolute bottom-0 group-hover:w-full transition-all duration-200 ease-in left-0 w-0 h-[2px] bg-[#1A42C2] "></div>
        </div>

        {/* 7 */}
        <div className="w-full h-4/10  flex justify-end items-end">
          {/* left */}
          <div className="w-1/2 h-fit">Zerror Studios</div>
          {/* right */}
          <div className="w-1/2 h-fit flex justify-end items-end gap-10">
            {/* left */}
            <div className="w-fit h-fit">
              <p>15 Years of Experience</p>
              <p>1500+ Projects</p>
              <p>1500+ Happy Client's</p>
            </div>
            {/* Right */}
            <div className="w-fit h-fit">
              <p>Email</p>
              <p>WhatsApp</p>
              <p>Form</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // const ProposalCard5 = () => {
  //   return (
  //     <div
  //       ref={Card5}
  //       className="w-[70vw] h-[75vh] p-10 bg-[#1A42C2] cardD rounded-[10px] absolute top-[100%] left-1/2 -translate-x-1/2 "
  //     >
  //       {/* IMG_CONT */}
  //       <div className="w-full h-[70%] flex gap-10">
  //         {/* 1=img */}
  //         <div className="w-1/4 h-full flex flex-col">
  //           <div className="w-full h-full bg-white/50"></div>
  //           <p className="mt-2 text-white">Normal</p>
  //           <p className=" text-white">Text Normal</p>
  //         </div>

  //         {/* 2=img */}
  //         <div className="w-1/4 h-full flex flex-col">
  //           <div className="w-full h-[70%] bg-white/50"></div>
  //           <p className="mt-2 text-white">Normal</p>
  //           <p className=" text-white">Text Normal</p>
  //         </div>

  //         {/* 3=img */}
  //         <div className="w-1/4 h-full flex flex-col">
  //           <div className="w-full h-full bg-white/50"></div>
  //           <p className="mt-2 text-white">Normal</p>
  //           <p className=" text-white">Text Normal</p>
  //         </div>

  //         {/* 4=img */}
  //         <div className="w-1/4 h-full flex flex-col">
  //           <div className="w-full h-[70%] bg-white/50"></div>
  //           <p className="mt-2 text-white">Normal</p>
  //           <p className=" text-white">Text Normal</p>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // };
  const ProposalCard5 = () => {
    const images = ["/p1.webp", "/p2.webp", "/p3.webp", "/p4.webp"];
    return (
      <div
        ref={Card5}
        className="w-[70vw] h-[75vh] p-10 bg-[#1A42C2] cardD rounded-[10px] absolute top-[100%] left-1/2 -translate-x-1/2 "
      >
        <div className="w-full h-full overflow-hidden ">
          <div className="flex gap-10 animate-scroll min-w-max">
            {/* First Set */}
            {images.map((item, index) => (
              <Card key={`first-${index}`} img={item} />
            ))}

            {/* Second Set (duplicate) */}
            {images.map((item, index) => (
              <Card key={`second-${index}`} img={item} />
            ))}
          </div>
        </div>
      </div>
    );
  };

  const Card = ({ img }) => (
    <div className=" aspect-[1/3] flex-shrink-0 flex flex-col group">
      <div className="w-full h-[40vh] overflow-hidden">
        <img src={img} alt="IMG" className="w-full h-full object-cover group-hover:scale-[1.01] transition-all duration-200 ease-in will-change-transform" />
      </div>
      <p className="mt-2 text-white">Project</p>
      <p className="text-white">Zerror Studios</p>
    </div>
  );

  const ProposalCard6 = () => {
    return (
      <div
        ref={Card6}
        className="w-[70vw] h-[75vh] p-10 flex justify-between cardD bg-[#f5f5f5] rounded-[10px] absolute top-[100%] left-1/2 -translate-x-1/2 "
      >
        {/* Left */}
        <div className="w-[30%] h-full flex flex-col text-[#1A42C2]">
          <div className="w-full h-1/3">
            <p className="text-[2.5vw]">PROCESS</p>
          </div>
          <div className="w-full h-1/3 flex justify-start items-center pr-5">
            <p className="">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              natus, neque officia pariatur.
            </p>
          </div>

          {/* ImgCont */}
          <div className="w-full h-2/3">
            <div className="w-full h-full bg-[#1A42C2] overflow-hidden group ">
              <img src={`/1.jpg`} alt="IMG" className="w-full h-full object-center object-cover group-hover:scale-[1.01] transition-all duration-200 ease-in will-change-transform" />
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="w-[50%] h-full py-5 flex flex-col text-[#1A42C2] ">
          {/* 1 */}
          <div className="w-full h-1/4 flex ">
            {/* left */}
            <div className="w-1/2 h-full">
              <p className="text-[1.3vw]">PLANING</p>
            </div>
            {/* right */}
            <div className="w-1/2 h-full">
              <p className="w-[90%]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>
          </div>
          {/* 2 */}
          <div className="w-full h-1/4 flex ">
            {/* left */}
            <div className="w-1/2 h-full">
              <p className="text-[1.3vw]">DESIGN</p>
            </div>
            {/* right */}
            <div className="w-1/2 h-full">
              <p className="w-[90%]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>
          </div>
          {/* 3 */}
          <div className="w-full h-1/4 flex ">
            {/* left */}
            <div className="w-1/2 h-full">
              <p className="text-[1.3vw]">DEVELOPMENT</p>
            </div>
            {/* right */}
            <div className="w-1/2 h-full">
              <p className="w-[90%]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>
          </div>
          {/* 4 */}
          <div className="w-full h-1/4 flex ">
            {/* left */}
            <div className="w-1/2 h-full">
              <p className="text-[1.3vw]">TESTING</p>
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
        className="w-[70vw] h-[75vh] bg-[#1A42C2] cardD p-10 rounded-[10px] absolute top-[100%] left-1/2 -translate-x-1/2 "
      >
        {/* top */}
        <div className="w-full h-[20%]  flex justify-between text-white">
          {/* left */}
          <div className="w-1/2 h-full text-[2vw] p-5 leading-[2vw]">
            <p>PROJECT</p>
            <p>TIMELINE</p>
          </div>
          {/* Right */}
          <div className="w-1/2 h-full p-10 text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            dolores voluptatem labore dicta.
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
                      className={`absolute h-6 rounded-md llTimeline ${task.color}`}
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
        className="w-[70vw] h-[75vh] bg-[#f5f5f5] cardD text-[#1A42C2] rounded-[10px] p-10 absolute top-[100%] left-1/2 -translate-x-1/2 "
      >
        {/* Top Section */}
        <div className="flex justify-between items-start">
          {/* Left Title */}
          <h1 className="text-[2.5vw] tracking-tight uppercase">commercial</h1>

          {/* Right Title */}
          {/* <h1 className="text-[2.5vw] tracking-tight uppercase">Pricing</h1> */}
        </div>

        {/* Middle Section */}
        <div className="mt-12 h-[80%] flex flex-col justify-end ">
          <div className="flex justify-between mb-4 text-lg">
            <span>Copywriting</span>
            <span>₹ 20000.00</span>
          </div>

          <div className="flex justify-between mb-4 text-lg">
            <span>Strategy</span>
            <span>₹ 3000.00</span>
          </div>

          <div className="flex justify-between mb-6 text-lg">
            <span>Content Writing</span>
            <span>₹ 20000.00</span>
          </div>

          {/* Divider */}
          <div className="border-t border-[#1A42C2]/40 my-6"></div>

          {/* Subtotal & Tax */}
          <div className="flex justify-end ">
            <div className="w-[250px]">
              <div className="flex justify-between mb-2 text-sm uppercase tracking-wider">
                <span>Subtotal</span>
                <span>₹ 44500.00</span>
              </div>

              <div className="flex justify-between text-sm uppercase tracking-wider">
                <span>Tax</span>
                <span>₹ 2500.00</span>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="flex justify-between items-end ">
            <p className="text-xs opacity-70">All prices are in INR.</p>

            <h2 className="text-7xl font-serif tracking-tight">₹ 47000.00</h2>
          </div>
        </div>
      </div>
    );
  };

  const ProposalCard9 = () => {
    return (
      <div
        ref={Card9}
        className="w-[70vw] h-[75vh] bg-[#1A42C2] cardD rounded-[10px] flex p-10 absolute top-[100%] text-white left-1/2 -translate-x-1/2 "
      >
        {/* left */}
        <div className="w-1/2 h-full flex flex-col justify-between">
          <p className="text-[2.5vw]">CONTACT</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus,
            reprehenderit! Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Delectus, reprehenderit!
          </p>
        </div>

        {/* right */}
        <div className="w-1/2 h-full flex flex-col gap-10">
          {/* top */}
          <div className="w-full h-1/2 grid grid-cols-2 grid-rows-2 ">
            {/* Email */}
            <div className="w-full h-full flex flex-col">
              <p className=" opacity-50">Email</p>
              <div className="w-full h-full flex justify-start items-center">
                <p>hr.zerrorstudios.com</p>
              </div>
            </div>
            {/* address */}
            <div className="w-full h-full flex flex-col">
              <p className=" opacity-50">Address</p>
              <div className="w-full h-full flex justify-start items-center">
                <p>Mumbai City, India</p>
              </div>
            </div>

            {/* Social Media */}
            <div className="w-full h-full flex flex-col">
              <p className=" opacity-50">Social</p>
              <div className="w-full h-full flex gap-1 justify-start items-center">
                {/* Left */}
                <div className="w-1/2 h-full flex flex-col justify-end">
                  <p>Instagram</p>
                  <p>LinkedIn</p>
                </div>
                {/* Right */}
                <div className="w-1/2 h-full flex flex-col justify-end">
                  <p>YouTube</p>
                  <p>Website</p>
                </div>
              </div>
            </div>

            {/* Phone No */}
            <div className="w-full h-full flex flex-col">
              <p className=" opacity-50">Phone No</p>
              <div className="w-full h-full flex justify-start items-end">
                <p>+91 90xxxxxxxx</p>
              </div>
            </div>
          </div>

          {/* bottom */}
          <div className="w-full h-1/2 overflow-hidden group">
          <img src={`/zerror.png`} alt="IMG" className="w-full h-full object-center object-cover group-hover:scale-[1.01] transition-all duration-200 ease-in will-change-transform" />
          </div>
        </div>
      </div>
    );
  };

  // -----------------------------------------------------------------------------------

  const CardImg = [
    `/SS1.png`,
    `/SS2.png`,
    `/SS3.png`,
    `/SS4.png`,
    `/SS5.png`,
    `/SS6.png`,
    `/SS7.png`,
    `/SS8.png`,
    `/SS9.png`,
  ];

  useEffect(() => {
    const Last = gsap.timeline({
      scrollTrigger: {
        trigger: mainCont.current,
        start: "bottom bottom",
        end: "bottom bottom",
        toggleActions: "play none none reverse",
      },
    });
    Last.to(stickyCont.current, {
      opacity: 0,
      ease: "power3.inOut",
    });
    Last.to(".DIVH", {
      opacity: 1,
      ease: "power3.inOut",
      pointerEvents: "auto",
    });
    Last.to(".innerCarder", {
      y: 0,
      stagger: {
        opacity: 0,
        each: 0.05,
        ease: "power3.inOut",
      },
      opacity: 1,
      ease: "power3.inOut",
    });
  }, []);

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
                className={` symbol${item} ${item == 1 && "scale-[1]"} w-full scale-[0.7]  h-[2px] bg-white`}
              ></div>
            );
          })}
        </div>
      </div>

      {/* Div-Highlight */}
      <div className=" fixed w-[70vw] h-[75vh] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 gap-5 grid grid-cols-3 grid-rows-3 z-100 pointer-events-none DIVH select-none opacity-0">
        {CardImg.map((item, index) => {
          return (
            <div
              key={index}
              className="w-full h-full innerCarder flex -translate-y-50 opacity-0 group cursor-pointer"
            >
              <img
                src={item}
                className="w-full h-full object-cover object-center group-hover:opacity-70 transition-all duration-200 ease-in "
                alt="IMG"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Proposal;
