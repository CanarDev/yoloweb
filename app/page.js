'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image'
import Skyblog from "./skyblog";
import Head from 'next/head';
import Illuminati from './illumati';
import Accueil from "./accueil";
import Mlg from "./mlg";
import Reptilians from './Components/reptilians';
/* export default function MaPage() {
  return (
    <>
        <Skyblog/>
    <Illuminati />
    </> */


export default function Home() {
  const [loading,setLoading]= useState(true);
  useEffect(() => {
    const scrollToElement = () => {
      const element = document.getElementById('home');
      if (element) {
        element.scrollIntoView();
      }
    };

    // Scroll to element on component mount
    setTimeout(()=>{scrollToElement();setLoading(false)}, 2000);

   
    // Cleanup
    return () => {
      // Add cleanup code if needed
    };
  }, []);

  return (
    <main className="scroll-container">
    {loading &&<section className="absolute top-0 left-0 h-screen flex items-center justify-center flex-col bg-yellow text-dark-blue w-full">
      <div className="flex flex-col"><h1 className="text-8xl font-bold ">La page a chargé...</h1>
      <div  className="flex w-full justify-center items-center" disabled>
        <Image width="300" height="300" alt="faux" src="/skyblog/norman.png" className="mt-10"/>
  <div className='absolute text-9xl font-bold opacity-70 w-fit'>FAUX!</div>
</div>
</div> 
    </section>
}
    <section id="1" className="snap-start h-screen flex w-full ">
      <Skyblog/>
    </section>
    
    <section id="2" className="snap-start h-screen ">
      <Mlg />
    </section>

    {/* ACCUEIL */}
     <section id="home" className="snap-start h-screen flex relative w-full ">
       <Accueil />
    </section> 

    <section id="" className="snap-start h-screen flex relative w-full">
  <Reptilians/>
</section>
    <section className="snap-start overflow-hidden h-screen flex w-full "
    >
           <Illuminati /> 

    </section>
    {/* SKYBLOG */}
    
   
  </main>
  );
}
