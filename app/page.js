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

              {/* content left */}
                <div className="flex flex-col w-[calc(100%-80px)] h-full">
                  <div className="group-hover/item:visible invisible overflow-hidden"><SliderComponent src="/nyancatgif.gif" direction={'LeftToRight'}/></div>
                  {/* main */}
                    <div className="h-full w-full flex flex-col justify-between group/item cursor-pointer transition ease-in-out delay-50 bg-yellow hover:bg-[#e6d251]">
                     
                      <div className="mt-10 group-hover/item:visible flex flex-col items-center">
                        <div class="scroll-msg-container h-full w-3">
                          <div class="scroll-msg-inner border-4 border-dark-blue">
                            <div class="scroll-up-msg-wheel bg-dark-blue"></div>
                          </div>
                        </div>
                        <p className="  text-center w-full mt-4 italic text-dark-blue">Naviguez vers le haut pour yolo web</p>
                      </div>

                      <h1 className=" text-shadow-title drop-shadow-md text-center text-8xl font-bold text-dark-blue">NAVIGATE</h1>
                      <div className="mb-10 w-full h-auto flex items-center justify-center"><Image  src="/blueyellonyan.png"
                      className=" object-cover  "
                      width={200}
                      height={200}
                      alt="Picture of yoloweb"
                      />
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
                  <div className="h-full flex flex-col justify-between">
                  <div className="mt-[-40px] w-full h-auto flex items-center justify-center"><Image src="/yelluminati.png"
                  className=" object-cover "
                  width={350}
                  height={350}
                  alt="Picture of yoloweb"
                  /></div>
                  
                  <h1 className=" text-shadow-title drop-shadow-md text-center text-8xl font-bold text-yellow">THROUGH WEBIVERSES</h1>

                  <div className="flex flex-col items-center group-hover/item:visible invisible mb-10"><p className="text-center w-full italic text-yellow mb-4">Naviguez vers le bas pour le monde des complots</p>
                    <div class="scroll-msg-container h-auto w-3">
                      <div class="scroll-msg-inner border-4 border-yellow">
                        <div class="scroll-msg-wheel bg-yellow"></div>
                      </div>
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
      </section>
     
    </main>
  );
}
