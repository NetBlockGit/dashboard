import React from "react";
import { StyleUserNumber } from "./StyleUseNumber";


export default function Uses_number(props: { queryProcess: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }) {

    return (
        <StyleUserNumber>

            <div className="content">
                <div className="pad">
                    <p className="ctitle">Queries processed</p>
                    <div className="box">
                        <p className="nobox">
                            <span className="no">{props.queryProcess}</span>
                            <span className="iconify pos" data-icon="akar-icons:download"></span>
                        </p>
                        <p className="mostv">Most visited - google.com, discord.com</p>
                        <p className="viewa">View all
                        <span className="iconify next" data-icon="ic:round-navigate-next"></span>
                        </p>
                    </div>
                </div>
            </div>
        </StyleUserNumber>

    )
}


