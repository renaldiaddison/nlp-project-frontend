import {Footer} from "../../components/Footer.tsx";
import {TextArea} from "../../components/TextArea.tsx";
import {AiOutlineSwap} from "react-icons/ai";
import ParticleBackground from "../../components/ParticleBackground.tsx";
import useViewModel from "./HomePageViewModel.ts";

export const HomePage = () => {

    const {
        fromLanguage,
        setFromLanguage,
        toLanguage,
        setToLanguage,
        fromText,
        setFromText,
        toText,
        setToText
    } = useViewModel()

    return (
        <div className="text-gray-600 flex flex-col gradient relative justify-center items-center">
            <ParticleBackground/>
            <form className="h-[60vh] w-full">
                <div className="flex flex-row justify-center item-center w-full h-[10vh] gap-1">
                    <div className="flex sm:w-[35%] w-[40%] relative">
                        <div
                            className="p-1 absolute bottom-0 text-2xl before:absolute before:bottom-0 before:w-full before:bg-black before:h-[5%]">
                            {fromLanguage}
                        </div>
                    </div>
                    <div className="w-[5%] h-full flex justify-center items-center"/>
                    <div className="flex sm:w-[35%] w-[40%] relative">
                        <div
                            className="p-1 absolute bottom-0 text-2xl before:absolute before:bottom-0 before:w-full before:bg-black before:h-[5%]">
                            {toLanguage}
                        </div>
                    </div>
                </div>
                <div className="flex flex-row justify-center item-center w-full h-[50vh] gap-1">
                    <div className="sm:w-[35%] w-[40%] h-full relative">
                        <TextArea disabled={false} value={fromText} setValue={setFromText} placeholder="Enter text"/>
                    </div>
                    <div className="w-[5%] h-full flex justify-center items-center">
                        <AiOutlineSwap size={35} className="cursor-pointer hover:scale-110 transition-all select-none" onClick={() => {
                            setFromLanguage(toLanguage)
                            setToLanguage(fromLanguage)
                        }}/>
                    </div>
                    <div className="sm:w-[35%] w-[40%] h-full relative">
                        <TextArea value={toText} disabled={true} setValue={setToText} placeholder="Translation"/>
                    </div>
                </div>
            </form>
            <Footer/>
        </div>
    );
};
