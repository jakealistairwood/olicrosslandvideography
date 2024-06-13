import React from "react";

const PortfolioMasthead = ({ activeCategory, setActiveCategory, categories }) => {

    return (
        <header>
            <div className="container">
                <div className="flex flex-col">
                    <h1 className="font-heading text-[7.875rem] uppercase tracking-[0.04em] text-ice font-medium pt-20">My Portfolio</h1>
                    {categories && categories.length > 0 && (
                        <div className="flex items-center gap-x-8 w-full flex-wrap font-light font-heading text-2xl uppercase tracking-[0.13em]">
                            <button key={`project-category-button-${0}`} onClick={() => setActiveCategory(0)} className={`uppercase ${activeCategory === 0 ? "opacity-100" : "opacity-40"} hover:opacity-100 duration-300 ease transition-opacity`} type="button">All</button>
                            {categories?.map((category, i) => (
                                <button key={`project-category-button-${i + 1}`} onClick={() => setActiveCategory(i + 1)} className={`uppercase ${activeCategory === (i + 1) ? "opacity-100" : "opacity-40"} hover:opacity-100 duration-300 ease transition-opacity`} type="button">{category?.category_name}</button>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </header>
    )
}

export default PortfolioMasthead;