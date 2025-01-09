"use client";

import { useEffect, useState } from "react";

export function CyberLoader({ size = "md" }) {
  const [dots, setDots] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prev => {
        if (prev === "...") return "";
        return prev + ".";
      });
    }, 500);

    return () => clearInterval(interval);
  }, []);

  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12", 
    lg: "w-16 h-16",
    xl: "w-20 h-20"
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <div className={`${sizeClasses[size]} relative`}>
        {/* Outer rotating ring */}
        <div className="absolute inset-0 border-4 border-cyan-500/20 rounded-full"></div>
        
        {/* Inner rotating ring */}
        <div className="absolute inset-1 border-2 border-cyan-400 rounded-full animate-spin"></div>
        
        {/* Center dot */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
        </div>
        
        {/* Scanning line */}
        <div className="absolute inset-0 rounded-full overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse"></div>
        </div>
      </div>
      
      <div className="text-cyan-300 font-mono text-sm tracking-wider">
        PROCESSING{dots}
      </div>
    </div>
  );
}

export function MatrixLoader() {
  const [lines, setLines] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setLines(prev => {
        const newLines = [...prev];
        if (newLines.length > 10) {
          newLines.shift();
        }
        newLines.push({
          id: Date.now(),
          text: "01001000 01100101 01101100 01101100 01101111",
          delay: Math.random() * 1000
        });
        return newLines;
      });
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">
      <div className="text-center">
        <div className="text-6xl font-bold text-cyan-400 mb-8 tracking-wider">
          VEHICL<span className="text-emerald-400">AI</span>
        </div>
        <div className="space-y-1 font-mono text-green-400 text-sm">
          {lines.map(line => (
            <div 
              key={line.id} 
              className="opacity-70"
              style={{ animationDelay: `${line.delay}ms` }}
            >
              {line.text}
            </div>
          ))}
        </div>
        <div className="mt-8 text-cyan-300 text-lg">
          INITIALIZING NEURAL NETWORK...
        </div>
      </div>
    </div>
  );
}
