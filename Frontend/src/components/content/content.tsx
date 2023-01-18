import { ReactNode } from "react";

const Content = (props:{children: ReactNode}) => {

    return(
        <section id="Content" className="p-6 flex flex-col gap-4 font-display">
            {props.children}
        </section>
    )
}

export default Content;