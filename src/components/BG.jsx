'use client'
import React, { useEffect, useState } from "react";
import { Heatmap } from "@paper-design/shaders-react";

const BG = () => {

    const [MainWH, SetMainWH] = useState({
        width:0,
        height:0,
    })

    useEffect(()=>{
        const CalculateS = () => {
            SetMainWH({width:window.innerWidth, height:window.innerHeight})
        }
        CalculateS()
        window.addEventListener('resize',CalculateS);
        return()=>window.removeEventListener('resize', CalculateS)
    },[])
    
  return (
    <div className="w-full h-full fixed top-0 left-0">
      <Heatmap
        width={MainWH.width}
        height={MainWH.height}
        image="https://shaders.paper.design/images/logos/diamond.svg"
        colors={["#112069", "#1f3ca3"]}
        colorBack="#121212"
        contour={0.37}
        angle={108}
        noise={0.48}
        innerGlow={0.67}
        outerGlow={0.53}
        speed={1.06}
        scale={4}
        rotation={60}
        offsetX={0.08}
        offsetY={0.06}
      />
    </div>
  );
};

export default BG;
