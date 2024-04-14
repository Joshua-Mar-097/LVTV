import { useRef } from "react";

const TeleRadio = () => {
    const iframeRef = useRef<HTMLIFrameElement>(null);

    const openOwncastPage = () => {
        window.open("http://localhost:8080", "_blank");
    };

    const handleIframeClick = () => {
        openOwncastPage();
    };
    return (
        <div>
            {/* Add your other components and content here */}
            <div className="divide-y-8 px-10 m-10 divide-yellow-400">
                <div className="m-10">
                    <div className="flex justify-center p-10 text-4xl font-bold text-white 2-[92%] mx-auto">
                        <h1>TeleRadio</h1>
                    </div>
                    <div className="">
                        <div
                            className="flex justify-center p-10 bg-white"
                            onClick={openOwncastPage}
                        >
                            <div className="relative w-full h-full">
                                <iframe
                                    src="http://localhost:3000/embed/video"
                                    width="854"
                                    height="480"
                                    frameBorder={0}
                                    scrolling="no"
                                    className="absolute top-0 left-0 w-full"
                                ></iframe>
                            </div>
                        </div>

                        {/* Upcoming Live */}
                        <div>
                            <div className="flex justify-center text-2xl font-bold text-white">
                                Upcoming Live
                            </div>
                            <div className="m-10">
                                <div className="mx-auto flex rounded-sm w-96 h-20 bg-white shadow m-5 hover:shadow-lg"></div>
                                <div className="mx-auto flex rounded-sm w-96 h-20 bg-white shadow m-5 hover:shadow-lg"></div>
                                <div className="mx-auto flex rounded-sm w-96 h-20 bg-white shadow m-5 hover:shadow-lg"></div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Upcoming Live END */}

                {/* Weekly Host Start */}
                <div>
                    <div>
                        <div className="pl-20 m-10 text-2xl font-bold text-white">
                            Weekly Host
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-around m-10">
                            <div className="mx-auto flex rounded-sm w-40 h-60 bg-white shadow hover:shadow-lg"></div>
                            <div className="mx-auto flex rounded-sm w-40 h-60 bg-white shadow hover:shadow-lg"></div>
                            <div className="mx-auto flex rounded-sm w-40 h-60 bg-white shadow hover:shadow-lg"></div>
                            <div className="mx-auto flex rounded-sm w-40 h-60 bg-white shadow hover:shadow-lg"></div>
                        </div>
                    </div>
                </div>
                {/* Weekly Host End */}

                {/* Previous Broadcast Start */}
                <div>
                    <div>
                        <div className="pl-20 m-10 text-2xl font-bold text-white">
                            Previous Broadcast
                        </div>
                    </div>

                    <div>
                        <div className="flex justify-around h-96 m-10">
                            <div className="flex rounded-sm size-full mx-20 bg-white shadow hover:shadow-lg"></div>
                        </div>
                    </div>

                    <div className="m-10">
                        <div className="pl-20 text-xl font-bold text-white">
                            Broadcast Title
                        </div>
                        <div className="pl-20 text-ml indent-5 text-white">
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Optio itaque, reprehenderit sit dolorem libero
                            laborum, reiciendis esse mollitia, delectus pariatur
                            nobis corrupti maxime id exercitationem quia nihil
                            eos voluptatem quis.
                        </div>
                    </div>
                </div>
                {/* Previous Broadcast End */}

                {/* Programs Start */}
                <div>
                    <div>
                        <div className="flex justify-center pt-10 text-2xl font-bold text-white">
                            Programs
                        </div>
                    </div>

                    <div>
                        <div className="flex justify-center">
                            <div className="m-5">
                                <div className="mx-10 flex rounded-sm w-96 h-40  m-10 bg-white shadow hover:shadow-lg"></div>
                                <div className="mx-10 flex rounded-sm w-96 h-40  m-10 bg-white shadow hover:shadow-lg"></div>
                                <div className="mx-10 flex rounded-sm w-96 h-40  m-10 bg-white shadow hover:shadow-lg"></div>
                            </div>
                            <div className="m-5">
                                <div className="mx-10 flex rounded-sm w-96 h-40 px-10 m-10 bg-white shadow hover:shadow-lg"></div>
                                <div className="mx-10 flex rounded-sm w-96 h-40 px-10 m-10 bg-white shadow hover:shadow-lg"></div>
                                <div className="mx-10 flex rounded-sm w-96 h-40 px-10 m-10 bg-white shadow hover:shadow-lg"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        /* Programs End */
    );
};
export default TeleRadio;
