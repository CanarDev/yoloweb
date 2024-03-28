import Image from "next/image";
import HoverVideoImage from "./hoverVideoImage";

export default function Skyblog() {
    return (
        <main className="h-screen bg-[url('/skyblog/fond.png')] bg-cover flex p-10 flex-col gap-2">
            <h1 className="text-center text-5xl text-[#F5DF4D]">Skyblog</h1>
            <div className="flex">
                <div className="w-1/4 bg-[#BB2649] m-2 flex flex-col rounded-lg">
                    <div className="flex flex-col items-center gap-2 mt-5">
                        <div className="text-[#F5DF4D] w-1/2 text-center text-3xl w-full">Blog de Norman</div>
                        <div className="w-1/2">
                            <Image src="/skyblog/norman.png" alt="Description de l'image" width={200} height={200}/>
                        </div>
                        <div className="text-[#F5DF4D] w-1/2 text-justify">
                            Description: <br/>
                            Doggo ipsum heckin snoot heckin good boys heckin you are doin me a concern pats, mlem pupper clouds long bois.  Borkdrive extremely cuuuuuute clouds super chub, sub woofer. 
                        </div>
                    </div>
                </div>
                <div className="w-1/2 bg-[#BB2649] m-2 flex flex-col text-[#F5DF4D] gap-2 rounded-lg">
                    <div className="flex flex-col m-2">
                        <div className="bg-[#6667AB] flex p-3 rounded-lg">
                            <div className="w-1/2 m-2">
                                <Image src="/skyblog/lorie.png" alt="Description de l'image" width={200} height={200}/>
                            </div>
                            <div className="flex flex-col gap-3">
                                <h2 className="text-2xl text-center">Juju</h2>
                                <p>Coucou mon petit Normanou, j’ai vu ton petit message mais jaio pas compri la tof que tu ma envoyer!! sa ressemble a une petite souri toute mimie hihi :3. plein de smackkkksss smackkkksss smackkkksss t bogosss =D =) =D </p>
                            </div>
                        </div>
                        <div className="bg-[#91A8D0] flex justify-around rounded-lg text-sm">
                            <div>Posté le 03 décembre 2011 à 15h56</div>
                            <div>Derniere modification le 03 décembre 2011 à 16h23</div>
                        </div>
                    </div>
                    <div className="flex flex-col m-2">
                        <div className="bg-[#6667AB] flex p-3 rounded-lg">
                            <div className="flex">
                                <div className="flex flex-col">
                                    <div className="m-2 h-full">
                                        <Image className="h-full" src="/skyblog/creepypasta.png" alt="Description de l'image" width={200} height={200}/>
                                    </div>
                                    <div className="m-2 h-full">
                                        <Image className="h-full" src="/skyblog/zelda.png" alt="Description de l'image" width={200} height={200}/>
                                    </div>
                                </div>
                                <div className="m-2">
                                    <Image src="/skyblog/momo.png" alt="Description de l'image" width={200} height={200}/>
                                </div>
                            </div>
                            <div className="flex flex-col gap-3">
                                <h2 className="text-2xl text-center">CREEPYPASTA</h2>
                                <p>Nouvelle vidéo Creepypasta, le mystère de l’avant ville sur Pokemon.
                                    <br/>
                                    <br/>Bonne vidéo à tous
                                </p>
                            </div>
                        </div>
                        <div className="bg-[#91A8D0] flex justify-around rounded-lg text-sm">
                            <div>Posté le 03 décembre 2011 à 15h56</div>
                            <div>Derniere modification le 03 décembre 2011 à 16h23</div>
                        </div>
                    </div>
                </div>
                <div className="w-1/4 bg-[#BB2649] m-2 flex flex-col rounded-lg">
                    <h2 className="text-[#F5DF4D] text-3xl text-center mt-5">Amis</h2>
                    <div className="flex flex-col">
                        <div className="m-2 flex gap-1">
                            <HoverVideoImage srcImage="/skyblog/thekairi.png" srcVideo="/skyblog/thekairi.mp4" alt="TheKairi" />
                            <HoverVideoImage srcImage="/skyblog/squeezie.png" srcVideo="/skyblog/squeezie.mp4" alt="Squeezie" />
                        </div>
                        <div className="m-2 flex gap-1">
                            <HoverVideoImage srcImage="/skyblog/antoine_daniel.png" srcVideo="/skyblog/antoine_daniel.mp4" alt="Antoine Daniel" />
                            <HoverVideoImage srcImage="/skyblog/cyprien.png" srcVideo="/skyblog/cyprien.mp4" alt="Cyprien" />
                        </div>
                        <div className="m-2 flex gap-1">
                            <HoverVideoImage srcImage="/skyblog/ibratv.png" srcVideo="/skyblog/ibratv.mp4" alt="Ibratv" />
                            <HoverVideoImage srcImage="/skyblog/misterv.png" srcVideo="/skyblog/misterv.mp4" alt="Mister V" />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
};