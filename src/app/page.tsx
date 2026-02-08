"use client"

import FeaturedCourses from "../components/FeaturedCourses";
import HeroSection from "../components/HeroSection";
import WhyChooseUs from "../components/WhyChooseUs";

 
 const page = () => {
   return (
     <div>
       <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
         <HeroSection />
         <FeaturedCourses />
         <WhyChooseUs />
       </main>
     </div>
   );
 }
 
 export default page
 