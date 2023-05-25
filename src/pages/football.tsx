import * as React from "react";
import {PageProps} from "gatsby";
import {PageLayout} from "../components/PageLayout";
import {StaticImage} from "gatsby-plugin-image";
import {Button} from "primereact/button";

const Football: React.FC<PageProps> = () => {

    return (
        <PageLayout>
            <div className="grid grid-nogutter surface-0 text-800">
                <div className="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center ">
                    <section>
                        <span className="block text-6xl font-bold mb-1">LOOM FF home page</span>
                        <div className="text-6xl text-primary font-bold mb-3">Where you dickheads can navigate FF stuff</div>
                        <p className="mt-0 mb-4 text-700 line-height-3">When this is done there's gonna be some much cool shit omg.</p>

                        <Button label="Doesn't work" type="button" className="mr-3 p-button-raised" />
                        <Button label="Also Broken" type="button" className="p-button-outlined" />
                    </section>
                </div>
                <div className="col-12 md:col-6 overflow-hidden">
                    <StaticImage src="../images/jacked-guy-shop.png" alt="LOOM" placeholder={"blurred"} className="md:ml-auto block md:h-full" style={{ clipPath: 'polygon(8% 0, 100% 0%, 100% 100%, 0 100%)' }} />
                </div>
            </div>
        </PageLayout>

    )
}

export default Football
