import React from 'react';
import * as classNames from "classnames";
import CSSTransition from "../components/CSSTransition";
import useModal from "../lib/useModal";

function ModalTemplate({containerClassName, className, children, title}) {
    const {dismiss, dismissed} = useModal();
    return (
        <div
            tabIndex="-1"
            aria-hidden="true"
            className="fixed inset-0 overflow-y-auto bg-black/75 z-50"
        >
            <div className="fixed inset-0" onClick={dismiss}/>
            <div className={classNames("max-w-6xl mx-auto p-2 py-5 md:py-20", className)}>
                <CSSTransition
                    in={!dismissed}
                    classNames="scale"
                    className="origin-top"
                    timeout={{enter: 300, exit: 150,}}
                >
                    <div className={classNames(
                        "bg-white rounded-lg relative transform-gpu origin-top shadow",
                        containerClassName,
                    )}>
                        {/* Modal header */}
                        <header className="p-5 pb-0 rounded-t">
                            <div className="flex justify-between items-start">
                                <h3 className="text-xl font-bold">
                                    {title}
                                </h3>
                                <button
                                    type="button"
                                    onClick={dismiss}
                                    className="bg-transparent hover:bg-gray-200 text-gray-400 hover:text-gray-800 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center transition"
                                >
                                    <svg aria-hidden="true" className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd"
                                              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                              clipRule="evenodd"></path>
                                    </svg>
                                    <span className="sr-only">Close modal</span>
                                </button>
                            </div>
                        </header>
                        {children}
                    </div>
                </CSSTransition>
            </div>
        </div>
    );
}

export default ModalTemplate;
