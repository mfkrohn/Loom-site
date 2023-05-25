import * as React from "react";
import {PageProps} from "gatsby";
import {PageLayout} from "../components/PageLayout";
import {StaticImage} from "gatsby-plugin-image";
import {Button} from "primereact/button";
import {Ripple} from "primereact/ripple";

const DynastyBasketball: React.FC<PageProps> = () => {

    return (
        <PageLayout>
            <div className="grid grid-nogutter surface-0 text-800">
                <div className="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center ">
                    <section>
                        <span className="block text-6xl font-bold mb-1">There's gonna be a lotto here</span>
                        <div className="text-6xl text-primary font-bold mb-3">Where you dickheads can navigate spin the
                            wheel
                        </div>
                        <p className="mt-0 mb-4 text-700 line-height-3">The Hinkie image should be centered but I'm
                            lazy</p>

                        <Button label="Awesome Button" type="button" className="mr-3 p-button-raised p-ripple">
                            <Ripple/>
                        </Button>
                        <Button label="Lame Button" type="button" className="p-button-outlined p-ripple">
                            <Ripple/>
                        </Button>
                    </section>
                </div>
                <div className="col-12 md:col-6 overflow-hidden">
                    <StaticImage src="../images/hinkie.jpg" alt="LOOM-BB" placeholder={"blurred"}
                                 className="md:ml-auto block md:h-full"
                                 style={{clipPath: 'polygon(8% 0, 100% 0%, 100% 100%, 0 100%)'}}/>
                </div>
            </div>
        </PageLayout>

    )
}

export default DynastyBasketball
