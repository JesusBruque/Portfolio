import React from "react";
import PropTypes from "prop-types"

const Layout = (props) => {
    return (
        <>
            <div>
                {props.children}
            </div>
        </>
    )
}

Layout.propsTyps = {
    children: PropTypes.func
}

export default Layout;