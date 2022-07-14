import React from 'react';
import PublishedState from "./PublishedState";
import NewMenu from "./NewMenu";
import Tippy from "@tippyjs/react";
import CourseSettingsMenu from "./CourseSettingsMenu";

function CourseGridItem({course}) {
    return (
        <div className="border rounded divide-y">
            <header>
                <div className="p-3 flex items-center justify-between">
                    <PublishedState published={course.published}/>
                    <Tippy content={<CourseSettingsMenu course={course}/>}>
                        <button
                            className="h-5 w-5 hover:bg-gray-400 transition rounded-full flex items-center justify-center text-gray-400 hover:text-white"
                            type="button"
                        >
                            <i className="mdi mdi-dots-horizontal text-2xl"></i>
                        </button>
                    </Tippy>
                </div>
                <a href="" className="group">
                    <figure className="w-full aspect-[3/1] bg-gray-300 text-gray-100 grid place-content-center">
                        <i className="mdi mdi-image text-5xl"></i>
                    </figure>
                    <div className="p-3">
                        <p className="font-semibold line-clamp-1 group-hover:underline">
                            {course.name}
                        </p>
                        <div className="flex items-center space-x-5">
                            <div className="flex items-center space-x-1 text-gray-400">
                                <i className="mdi mdi-account-circle-outline"></i>
                                <span className="text-xs">24 Learners</span>
                            </div>
                            <div className="flex items-center space-x-1 text-gray-400">
                                <i className="mdi mdi-license"></i>
                                <span className="text-xs">Design</span>
                            </div>
                        </div>
                    </div>
                </a>
            </header>

            {course.published ? (
                <div className="divide-x flex h-16">
                    <div className="w-1/2 flex items-center">
                        <div className="p-3 space-y-1">
                            <p className="text-gray-400 text-xs">
                                Completion rate
                            </p>
                            <div className="flex items-center space-x-1 text-sm">
                                <i className="mdi mdi-check-circle-outline"></i>
                                <p>65%</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/2 flex items-center">
                        <div className="p-3 space-y-1">
                            <p className="text-gray-400 text-xs">
                                Learner reaction
                            </p>
                            <div className="flex items-center space-x-1 text-sm">
                                <i className="mdi mdi-emoticon-outline"></i>
                                <p>50% Useful</p>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="flex items-center justify-center h-16 text-gray-400 space-x-2">
                    <i className="mdi mdi-finance"></i>
                    <p className="text-sm">This course has no stats yet</p>
                </div>
            )}

            <footer className="p-4">
                <button disabled={!course.published} className="btn-primary-outline w-full">
                    <i className="mdi mdi-plus"></i>
                    Assign
                </button>
            </footer>
        </div>
    );
}

export default CourseGridItem;
