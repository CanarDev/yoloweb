import Skyblog from "./skyblog";
import Head from 'next/head';
import Illuminati from './illumati';
import Accueil from "./accueil";
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
      <section id="1" className="section ">
        <Skyblog/>
      </section>
      {/* ACCUEIL */}
       <section id="home" className="snap-start h-screen ">
         <Accueil />
      </section> 

      <section className="section "
      >
             <Illuminati /> 

      </section>
     
    </main>
  );
}
