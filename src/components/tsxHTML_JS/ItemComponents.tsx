// 2
// home and filter item component on dashboard 


import { StyleItemComponents } from "../tsxCSS/StyleItemComponents";
export default function homeIcon(props: {  mode: string , dataIcon:string }) {
    return (
        <StyleItemComponents>

            <button className="home">
                <div>
                <span className="iconify hicon" data-icon={props.dataIcon}></span> 
                <span className="pad">
                    {props.mode}
                </span>
                </div>
            </button>

        </StyleItemComponents>
    )

}
