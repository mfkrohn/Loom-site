import * as React from "react";
import {PageProps} from "gatsby";
import {PageLayout} from "../components/PageLayout";
import {StaticImage} from "gatsby-plugin-image";
import {Button} from "primereact/button";
import {Ripple} from "primereact/ripple";
import PrimeReact from "primereact/api";
import Wheel from "../components/Wheel/Wheel";

const DynastyBasketball: React.FC<PageProps> = () => {
    PrimeReact.ripple = true;

    return (
        <PageLayout>
            <div className="grid surface-0 text-800 col-8">
                <div className="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center ">
                    <section>
                        <span className="block text-6xl font-bold mb-1">There's gonna be a lotto here</span>
                        <div className="text-6xl text-primary font-bold mb-3">Where you dickheads can spin the
                            wheel
                        </div>
                        <p className="mt-0 mb-4 text-700 line-height-3">The Hinkie image should be centered but I'm
                            lazy</p>

                        <Button label="Awesome Button" type="button" className="mr-3 p-button-raised p-ripple">
                            <Ripple/>
                        </Button>
                        <Button label="Lame Button" type="button" className="p-button-outlined"/>
                    </section>
                </div>
                <div className="col-12 md:col-6 overflow-hidden">
                    <StaticImage src="../images/hinkie.jpg" alt="LOOM-BB" placeholder={"blurred"}
                                 className="md:ml-auto block md:h-full"
                                 style={{clipPath: 'polygon(8% 0, 100% 0%, 100% 100%, 0 100%)'}}/>
                </div>
            </div>

                <div className="grid w-full">
                    <div className="grid col-12">
                        <div
                            className="col bg-blue-700 align-items-center font-bold flex justify-content-center p-4 m-3 border-round">1
                        </div>
                        <div
                            className="col bg-bluegray-200 align-items-center font-bold flex justify-content-center p-4 m-3 border-round">
                            <Wheel/>
                        </div>
                        <div
                            className="col bg-yellow-700 align-items-center font-bold flex justify-content-center p-4 m-3 border-round">3
                        </div>
                    </div>
                    <div className="grid col-6 justify-content-center col-offset-3">
                        <div
                            className="col bg-blue-700 align-items-center font-bold flex justify-content-center p-4 m-3 border-round">1
                        </div>
                        <div
                            className="col bg-green-700 align-items-center font-bold flex justify-content-center p-4 m-3 border-round">2
                        </div>
                        <div
                            className="col bg-yellow-700 align-items-center font-bold flex justify-content-center p-4 m-3 border-round">3
                        </div>
                    </div>
                </div>
        </PageLayout>

)
}

export default DynastyBasketball
