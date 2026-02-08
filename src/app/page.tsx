"use client"

import HeroSection from "../components/HeroSection";

 
 const page = () => {
   return (
     <div>
       <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
         <h1 className="text-2xl text-center">Home</h1>
         <HeroSection />
       </main>
     </div>
   );
 }
 
 export default page
 