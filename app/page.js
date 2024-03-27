import Image from 'next/image'
import SliderComponent from './components/SliderComponent/SliderComponent';
import VerticalInfiniteSlider from './components/VerticalInfiniteSlider/VerticalInfiniteSlider';
export default function Home() {
  return (
    <main className="flex flex-co l">
      <section className="h-screen flex relative w-full ">
          <div className="w-1/2 relative h-full flex  group/item flex-col  items-center justify-center bg-yellow">
            <div className="flex h-full w-full">      
              <div className="group-hover/item:visible invisible w-20 h-full overflow-hidden">
                <VerticalInfiniteSlider src="/nyancatgif.gif" direction="Vertic"/>
              </div>
                <div className="flex flex-col w-[calc(100%-80px)] h-full">
                  <div className="group-hover/item:visible invisible overflow-hidden"><SliderComponent src="/nyancatgif.gif" direction={'LeftToRight'}/></div>
                    <div className="h-full w-full relative group/item cursor-pointer transition ease-in-out delay-50 bg-yellow hover:bg-[#e6d251]"><Image  src="/OriginalNyan.webp"
                      className=" absolute left-[50%] ml-[-123px] translate-y-[-60px] top-[50%] object-cover sepia cursor-pointer brightness-100 hover:brightness-90 "
                      width={200}
                      height={200}
                      alt="Picture of yoloweb"
                      />
                      <div className=" group-hover/item:visible invisible">
                        <div class="absolute left-[49%] top-10 scroll-msg-container h-8 w-3">
                          <div class="scroll-msg-inner border-4 border-dark-blue">
                            <div class="scroll-up-msg-wheel bg-dark-blue"></div>
                          </div>
                        </div>
                        <p className=" right-0 absolute text-center w-full top-32 italic text-dark-blue">Naviguez vers le haut pour yolo web</p>
                      </div>
                    </div>
                  <div className="group-hover/item:visible overflow-hidden invisible"><SliderComponent src="/nyancatgif.gif" direction={'RightToLeft'}/></div>
              </div>

                </div>    
                




          </div>

          <div className="w-1/2 relative h-full group/item items-center justify-center bg-dark-blue">
            <div className="flex h-full w-full">      

              <div className="h-full flex flex-col w-[calc(100%-80px)] relative cursor-pointer bg-dark-blue group/item transition ease-in-out delay-50 hover:bg-[#0b487d]">
                <div className="group-hover/item:visible overflow-hidden invisible"><SliderComponent src="/illuminablue.png" direction={'LeftToRight'}/></div>

                  <Image src="/illuminati.png"
                  className=" absolute left-[50%] opacity-70 ml-[-175px] translate-y-[-175px] top-[50%] object-cover cursor-pointer brightness-100 hover:brightness-90 "
                  width={350}
                  height={350}
                  alt="Picture of yoloweb"
                  />
                  
                
                  <div className=" group-hover/item:visible invisible h-full"><p className="absolute text-center w-full bottom-36 italic text-yellow">Naviguez vers le bas pour le monde des complots</p>
                    <div class="absolute left-[49%] bottom-28 scroll-msg-container h-8 w-3">
                      <div class="scroll-msg-inner border-4 border-yellow">
                        <div class="scroll-msg-wheel bg-yellow"></div>
                      </div>
                    </div>
                  </div>
                  <div className="group-hover/item:visible overflow-hidden invisible"><SliderComponent src="/illuminablue.png" direction={'RightToLeft'}/></div>
              </div>
              
              <div className="group-hover/item:visible invisible w-20 h-full overflow-hidden">
                <VerticalInfiniteSlider src="/illuminablue.png" direction="VerticReverse"/>
              </div>
          </div>
          </div>
          <h1 className="text-shadow-title drop-shadow-md absolute top-[50%] translate-y-[-50%] text-center text-9xl font-bold text-dark-blue">NAVIGATE THROUGH UNIVERSES</h1>
      </section>
     
    </main>
  );
}
