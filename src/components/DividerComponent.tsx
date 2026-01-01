import {JSX} from "react";
import "./css/divider.css"

export function DividerComponent(): JSX.Element {
    return (
        <div className="divider">
            <div style={{height: "0.7px", backgroundColor: "#CDCDCD"}}></div>
        </div>
    );
}