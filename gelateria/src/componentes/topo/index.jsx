import Image from "next/image";
import Style from "./Topo.module.css"
export default function(){
    return(
        <div className={Style.container_pai}>
            <div className={Style.container_filho}>
                <Image></Image>
            </div>
            <div className={Style.container_filho}>
                <div className={Style.Link}>
                    <link rel="stylesheet" href="" />
                </div>
                <div className={Style.Link}>
                    <link rel="stylesheet" href="" />
                </div>
                <div className={Style.Link}>
                    <link rel="stylesheet" href="" />
                </div>
            </div>
        </div>
    )
}