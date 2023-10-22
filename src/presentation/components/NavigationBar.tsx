import {GrLogout} from "react-icons/gr";

export const NavigationBar = () => {
    return (
        <div className="bg-white p-6 w-full shadow-md flex justify-center item-center">
            <div className="max-w-screen-xl w-full flex justify-between items-center">
                <div className="">
                    <div className="text-2xl font-bold">
                        Translator
                    </div>
                    <div className="">
                        Binus University
                    </div>
                </div>
                <GrLogout size="25"/>
            </div>
        </div>
    );
};
