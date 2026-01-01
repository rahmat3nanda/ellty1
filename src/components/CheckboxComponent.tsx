import {JSX, useEffect, useState, useRef} from "react";
import "./css/checkbox.css";
import {ReactComponent as CheckIcon} from "../assets/check.svg";

interface CheckboxComponentProps {
    label?: string;
    checked?: boolean;
    onChange?: (checked: boolean) => void;
}

export function CheckboxComponent({
                                      label = "All pages",
                                      checked = false,
                                      onChange,
                                  }: CheckboxComponentProps): JSX.Element {
    const [showGlow, setShowGlow] = useState(false);
    const prevCheckedRef = useRef(checked);

    useEffect(() => {
        if (prevCheckedRef.current !== checked) {
            setShowGlow(true);
            const timer = setTimeout(() => {
                setShowGlow(false);
            }, 300);
            prevCheckedRef.current = checked;
            return () => clearTimeout(timer);
        }
    }, [checked]);

    const handleClick = () => {
        onChange?.(!checked);
    };

    return (
        <div
            className="checkbox-container"
            onClick={handleClick}
        >
            <span className="checkbox-label">{label}</span>
            <div className={`checkbox-square ${checked ? "checked" : ""} ${showGlow ? "glow-effect" : ""}`}>
                {checked && (
                    <CheckIcon
                        className="check-icon checked-icon"
                        style={{color: '#878787'}}
                    />
                )}
                {!checked && (
                    <CheckIcon
                        className="check-icon hover-check"
                        style={{color: '#878787'}}
                    />
                )}
            </div>
        </div>
    );
}

