import React from "react";
import "primereact/resources/themes/lara-dark-indigo/theme.css"
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css"
import "/node_modules/primeflex/primeflex.css"
import {Menubar} from "primereact/menubar";
import {MenuItem, MenuItemCommandEvent} from "primereact/menuitem";
import {navigate} from "gatsby";
import {StaticImage} from "gatsby-plugin-image";



export const PageLayout = ({children}: any) => {

    const footballLogo = <StaticImage className="m-2" src="../images/american-football.png" alt="" width={12} height={12}/>
    const basketBallLogo = <StaticImage className="m-2" src="../images/basketball.png" alt="" width={12} height={12}/>
    const canLogo = <StaticImage src="../images/daddy.png" alt="Daddy Can" placeholder={"blurred"} width={32} height={32}/>



    const menuItems: Array<MenuItem> = [
        {
            label: 'Home', icon: 'pi pi-fw pi-home', command: () => {
                return navigate("/")
            }
        },
        {
            label: 'Football', icon: footballLogo, command: () => {
                return navigate("/football")
            }
        },
        {
            label: 'Dynasty Basketball', icon: basketBallLogo, items: [
                {
                    label: 'Lotto',
                    icon: 'pi pi-fw pi-percentage',
                    command: () => {
                        return navigate("/dynasty-basketball")
                    }
                }
            ]
        },
    ]

    return (
        <React.Fragment>
            <Menubar start={canLogo} model={menuItems} end={"LOOM SITE BETA"} className="mb-4"/>
            <div className="flex justify-content-center">
            {children}
            </div>
        </React.Fragment>
    )
}