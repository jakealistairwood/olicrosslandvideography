import React, { memo, useRef } from "react";
import ComponentRenderer from "./ComponentRenderer";

const Section = memo((props) => {
    const { components = [] } = props;

    return (
        <section className="">
            <div className="">
                <ComponentRenderer components={components} />
            </div>
        </section>
    )
})

export default Section;