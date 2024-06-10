import React, { memo, useRef } from "react";
import ComponentRenderer from "./ComponentRenderer";

const Section = memo((props) => {
    const { components = [], sectionOptions = {} } = props;
    const { remove_container = false } = sectionOptions;

    console.log(props);

    return (
        <section className="">
            <div className={`${!remove_container ? "container" : ""}`}>
                <ComponentRenderer components={components} />
            </div>
        </section>
    )
})

export default Section;