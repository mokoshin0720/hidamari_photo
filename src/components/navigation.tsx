import React, { Fragment, ReactNode } from "react";

type Props = {
    children: ReactNode
}

const Navigation: React.FC<Props> = ({children}: Props) => {
    return (
        <Fragment>
            <p>navigation</p>
            { children }
        </Fragment>
    )
}

export default Navigation;