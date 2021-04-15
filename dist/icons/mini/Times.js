import * as React from 'react';
function SvgTimes() {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 16 16" },
        React.createElement("mask", { id: "times_svg__a", width: 16, height: 16, x: 0, y: 0, maskUnits: "userSpaceOnUse" },
            React.createElement("path", { fill: "#fff", d: "M0 0h16v16H0z" })),
        React.createElement("g", { stroke: "currentColor", strokeLinecap: "round", strokeWidth: 2, mask: "url(#times_svg__a)" },
            React.createElement("path", { d: "M4.991 4.991l5.817 5.817M10.808 4.991L4.99 10.808" }))));
}
export default SvgTimes;
