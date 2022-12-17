import React from 'react';

let importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
try {importAll(require.context('../icons', true, /\.svg$/));} catch (error) {console.log(error);}

type Props = {
    name?: string
    className?:string
}

const Icon = (props: Props) => {
    return (
        <svg className={`icon ${props.className||''}`}>
           <use xlinkHref={'#' + props.name}/>
        </svg>
    );
};

export default Icon;