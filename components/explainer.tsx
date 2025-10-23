"use client"

import { ArrowRight } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export default function Explainer() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section className="py-20 md:py-32 bg-muted/30" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 
            className={`text-3xl md:text-4xl font-bold text-foreground mb-4 transition-all duration-700 ${
              isVisible ? "animate-fade-in-up opacity-100" : "opacity-0 translate-y-10"
            }`}
          >
            How We Operate
          </h2>
          <p 
            className={`text-lg text-muted-foreground transition-all duration-700 ${
              isVisible ? "animate-fade-in-up opacity-100" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: isVisible ? "0.1s" : "0s" }}
          >
            From extraction to delivery, we ensure excellence at every step
          </p>
        </div>

        {/* Circular Chain Layout */}
        <div className="relative max-w-5xl mx-auto">
          {/* Desktop Circular Layout */}
          <div className="hidden md:block relative h-[500px] w-full">
            {/* Center point for perfect circle positioning */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px]">
              {[
                { step: "1", title: "Extraction", desc: "Oil field operations", angle: 0 },     // Top
                { step: "2", title: "Refining", desc: "Processing & quality", angle: 72 },      // Top-right
                { step: "3", title: "Transport", desc: "Logistics network", angle: 144 },       // Bottom-right
                { step: "4", title: "Distribution", desc: "Market delivery", angle: 216 },      // Bottom-left
                { step: "5", title: "Support", desc: "Construction & services", angle: 288 },   // Top-left
              ].map((item, index) => {
                const radius = 180;
                const angleRad = (item.angle - 90) * (Math.PI / 180); // -90 to start from top
                const x = Math.cos(angleRad) * radius;
                const y = Math.sin(angleRad) * radius;
                
                return (
                  <div
                    key={index}
                    className="absolute"
                    style={{
                      left: `calc(50% + ${x}px)`,
                      top: `calc(50% + ${y}px)`,
                      transform: 'translate(-50%, -50%)'
                    }}
                  >
                    <div 
                      className={`bg-card border-2 border-accent rounded-full w-36 h-36 flex flex-col items-center justify-center text-center hover:border-secondary hover:shadow-lg hover:shadow-accent/30 transition-all duration-300 hover:scale-110 cursor-pointer ${
                        isVisible ? "animate-fade-in-up opacity-100" : "opacity-0 translate-y-10"
                      }`}
                      style={{ transitionDelay: isVisible ? `${index * 0.15}s` : "0s" }}
                    >
                      <div className="w-10 h-10 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold mb-2">
                        {item.step}
                      </div>
                      <h3 className="font-semibold text-foreground text-sm mb-1 px-2">{item.title}</h3>
                      <p className="text-xs text-muted-foreground leading-tight px-1">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            
            {/* Connecting Chain Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              {/* Pentagon connecting all circles */}
              <g className="transform translate-x-1/2 translate-y-1/2">
                {[0, 72, 144, 216, 288].map((angle, index) => {
                  const nextIndex = (index + 1) % 5;
                  const nextAngle = [0, 72, 144, 216, 288][nextIndex];
                  
                  const radius = 180;
                  const startAngleRad = (angle - 90) * (Math.PI / 180);
                  const endAngleRad = (nextAngle - 90) * (Math.PI / 180);
                  
                  const x1 = Math.cos(startAngleRad) * radius;
                  const y1 = Math.sin(startAngleRad) * radius;
                  const x2 = Math.cos(endAngleRad) * radius;
                  const y2 = Math.sin(endAngleRad) * radius;
                  
                  return (
                    <line
                      key={index}
                      x1={x1}
                      y1={y1}
                      x2={x2}
                      y2={y2}
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeDasharray="10,5"
                      className={`text-accent transition-all duration-1000 ${
                        isVisible ? "opacity-50" : "opacity-0"
                      }`}
                      style={{ transitionDelay: isVisible ? `${0.8 + index * 0.1}s` : "0s" }}
                    />
                  );
                })}
                
                {/* Chain link dots */}
                {[0, 72, 144, 216, 288].map((angle, index) => {
                  const nextIndex = (index + 1) % 5;
                  const nextAngle = [0, 72, 144, 216, 288][nextIndex];
                  
                  const radius = 180;
                  const midAngle = (angle + (nextAngle > angle ? nextAngle : nextAngle + 360)) / 2;
                  const midAngleRad = (midAngle - 90) * (Math.PI / 180);
                  
                  const x = Math.cos(midAngleRad) * radius;
                  const y = Math.sin(midAngleRad) * radius;
                  
                  return (
                    <circle
                      key={index}
                      cx={x}
                      cy={y}
                      r="5"
                      fill="currentColor"
                      className={`text-secondary transition-all duration-500 animate-pulse ${
                        isVisible ? "opacity-70" : "opacity-0"
                      }`}
                      style={{ transitionDelay: isVisible ? `${1.3 + index * 0.1}s` : "0s" }}
                    />
                  );
                })}
              </g>
            </svg>
          </div>

          {/* Mobile Linear Layout */}
          <div className="md:hidden space-y-6">
            {[
              { step: "1", title: "Extraction", desc: "Oil field operations" },
              { step: "2", title: "Refining", desc: "Processing & quality" },
              { step: "3", title: "Transport", desc: "Logistics network" },
              { step: "4", title: "Distribution", desc: "Market delivery" },
              { step: "5", title: "Support", desc: "Construction & services" },
            ].map((item, index) => (
              <div key={index} className="relative">
                <div 
                  className={`bg-card border-2 border-accent rounded-full w-40 h-40 mx-auto flex flex-col items-center justify-center text-center hover:border-accent hover:shadow-lg transition-all duration-300 hover:scale-105 ${
                    isVisible ? "animate-fade-in-up opacity-100" : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: isVisible ? `${index * 0.1}s` : "0s" }}
                >
                  <div className="w-10 h-10 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold mb-2">
                    {item.step}
                  </div>
                  <h3 className="font-semibold text-foreground text-sm mb-1">{item.title}</h3>
                  <p className="text-xs text-muted-foreground px-2">{item.desc}</p>
                </div>
                
                {/* Chain link between circles on mobile */}
                {index < 4 && (
                  <div className="flex justify-center my-4">
                    <div className="flex flex-col items-center">
                      <div className="w-0.5 h-6 bg-accent opacity-40"></div>
                      <div className="w-2 h-2 bg-accent rounded-full opacity-60"></div>
                      <div className="w-0.5 h-6 bg-accent opacity-40"></div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
