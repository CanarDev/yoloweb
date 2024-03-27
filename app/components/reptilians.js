'use client'
import { ImgComparisonSlider } from '@img-comparison-slider/react';

export default function Reptilians() {
    // Style for ImgComparisonSlider element


    return (
        <section className="w-full min-h-screen h-max bg-gradient-to-b from-dark-blue to-green-reptilian p-8 flex flex-col items-center justify-center reptiliansSection">
            <h1 className="font-workbench text-8xl uppercase text-center text-yellow mb-4 title">Reptilians are among us</h1>
            <p className="font-linefont text-3xl text-center text-yellow mb-8">Reptilians are among us, they are watching us, they are controlling us, they are us.</p>

            <ImgComparisonSlider value="10" hover="hover" className="flex items-center overflow-hidden rounded-3xl reptilian-slider">
                <div slot="first" className="h-full w-full">
                    <h2 className="font-linefont text-9xl absolute text-center w-full top-1/2 h-fit transform -translate-y-1/2 text-dark-blue">ReptiliansReptiliansReptiliansRepti</h2>
                    <img className="object-cover h-full w-full" src="/reptilians/MattyReptilian.png"
                         alt="Reptilian Eye"/>
                </div>
                <div slot="second" className="h-full w-full">
                    <h2 className="font-workbench text-9xl absolute uppercase text-center w-full top-1/2 h-fit transform -translate-y-1/2 text-[#FF6F61]">Reptilians ?</h2>
                    <img className="object-cover h-full w-full" src="/reptilians/Matty.png"
                         alt="Reptilian Eye"/>
                </div>
            </ImgComparisonSlider>
        </section>
    );
}
