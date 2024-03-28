import Skyblog from "./skyblog";
import Head from 'next/head';
import Illuminati from './illumati';
import Accueil from "./accueil";
import Mlg from "./mlg";

/* export default function MaPage() {
  return (
    <>
        <Skyblog/>
    <Illuminati />
    </> */


export default function Home() {
  return (
    <main className="scroll-container">

    {/* SKYBLOG */}
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

    <section className="snap-start overflow-hidden h-screen flex w-full "
    >
           <Illuminati /> 

    </section>
   
  </main>
  );
}
