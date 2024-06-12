import React from "react";

const PortfolioMasthead = ({ activeCategory, setActiveCategory, categories }) => {

    return (
        <header>
            <div className="container">
                <div className="flex flex-col">
                    <h1 className="font-heading text-[7.875rem] uppercase tracking-[0.06em] text-ice font-semibold pt-20">My Portfolio</h1>
                    {categories && categories.length > 0 && (
                        <div className="flex items-center gap-x-8 w-full flex-wrap font-light font-heading text-2xl uppercase tracking-[0.13em]">
                            <button className={`uppercase opacity-100`} type="button">All</button>
                            {categories?.map((category, i) => (
                                <button className="uppercase opacity-60" type="button">{category?.category_name}</button>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </header>
    )
}

export default PortfolioMasthead;