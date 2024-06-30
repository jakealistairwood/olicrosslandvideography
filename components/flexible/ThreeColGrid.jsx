import React from "react";

const ThreeColGrid = ({ columns = [] }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-14">
            {columns?.map((col, i) => (
                <div key={`grid-col-${col?._key}`} className="flex flex-col">
                    <h3 className="uppercase font-heading font-light text-xl tracking-[0.24em]">{col?.heading}</h3>
                    <p className="mt-[30px] font-body text-white-80 font-light text-lg tracking-[0.02em]">{col?.description}</p>
                </div>
            ))}
        </div>
    )
}

export default ThreeColGrid;