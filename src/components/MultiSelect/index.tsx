import { FC } from "react";

import "./index.css";

interface MProps {
    options: string[]
    selected: string[]
    toggleOption: (id: string) => void
}

const MultiSelect: FC<MProps> = ({options, selected, toggleOption}) => {
    const selectText = selected.length ? selected.length : 'All';
    return (<div className="dropdown">
        <div className="selected">
            <div>{selectText} Selected</div>
        </div>
        <ul className="options">
            {options.map(option => {
                const isSelected = selected.includes(option);
                const isAll = option === 'All';
                return (
                    <li className="option" onClick={() => toggleOption(option)} key={option}>
                        {!isAll && <input
                            type="checkbox"
                            checked={isSelected}
                            className="checkbox"
                            onChange={() => {}}
                        />}
                        <span>{option}</span>
                    </li>
                )
            })}
        </ul>
    </div>)
};

export default MultiSelect;