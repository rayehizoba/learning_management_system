import React from 'react';
import TippyJs from "@tippyjs/react";

function Tippy({
                   content,
                   interactive = true,
                   trigger = 'click',
                   placement = 'bottom-end',
                   theme = 'light',
                   children,
                   ...restProps
               }) {
    return (
        <TippyJs
            content={content}
            interactive={interactive}
            placement={placement}
            trigger={trigger}
            theme={theme}
            {...restProps}
        >
            {children}
        </TippyJs>
    );
}

export default Tippy;
