import React from 'react';
import PageTemplate from "./PageTemplate";
import AsideToggleBtn from "../components/AsideToggleBtn";
import GridListToggle from "../components/GridListToggle";
import {useDispatch, useSelector} from "react-redux";
import {
    selectFiles,
    selectFilesFetch,
    selectFilesFetchError,
    selectFilesFetchSuccess, selectPinnedFiles
} from "../store/files/files.selectors";
import {selectGrid} from "../store/app/app.selectors";
import * as appActions from "../store/app/app.actions";
import * as courseActions from "../store/course/course.actions";
import * as filesActions from "../store/files/files.actions";
import * as foldersActions from "../store/folders/folders.actions";
import {
    selectFolders,
    selectFoldersFetch,
    selectFoldersFetchError,
    selectFoldersFetchSuccess
} from "../store/folders/folders.selectors";
import ApiError from "../components/ApiError";
import Collapsible from "react-collapsible";

function FilesFoldersPage(props) {
    const dispatch = useDispatch();
    const files = useSelector(selectFiles);
    const pinnedFiles = useSelector(selectPinnedFiles);
    const filesFetch = useSelector(selectFilesFetch);
    const filesFetchSuccess = useSelector(selectFilesFetchSuccess);
    const filesFetchError = useSelector(selectFilesFetchError);
    const folders = useSelector(selectFolders);
    const foldersFetch = useSelector(selectFoldersFetch);
    const foldersFetchSuccess = useSelector(selectFoldersFetchSuccess);
    const foldersFetchError = useSelector(selectFoldersFetchError);
    const grid = useSelector(selectGrid);
    const onChangeGrid = value => dispatch(appActions.setGrid(value));

    const onClickFolder = folder => () => {
        // dispatch(folderActions.setFolder(folder));
    }

    React.useEffect(() => {
        if (!filesFetchSuccess) {
            dispatch(filesActions.fetchFiles());
            dispatch(foldersActions.fetchFolders());
        }
    }, []);

    return (
        <PageTemplate title="Files & Folders">
            <header className="p-5 border-b flex items-center space-x-5">
                <div className="w-10/12 flex items-center justify-between">
                    <div className="text-2xl font-bold">
                        {filesFetch || foldersFetch
                            ? <div className="text-gray-400">Fetching Files & Folders...</div>
                            : <>
                                <span className="whitespace-nowrap">{files.length} <span
                                    className="text-gray-400">Files,</span></span>&nbsp;
                                <span className="whitespace-nowrap">{folders.length} <span className="text-gray-400">Folders</span></span>
                            </>
                        }
                    </div>
                    <ul className="flex justify-end items-center h-full space-x-7">
                        <li>
                            <button
                                className="text-gray-400 hover:opacity-50 transition text-sm flex items-center whitespace-nowrap">
                                <i className="text-lg mdi mdi-check-circle-outline mr-1"></i>
                                All status
                            </button>
                        </li>
                        <li>
                            <button
                                className="text-gray-400 hover:opacity-50 transition text-sm flex items-center whitespace-nowrap">
                                <i className="text-lg mdi mdi-filter-variant mr-1"></i>
                                Filter
                            </button>
                        </li>
                        <li>
                            <button
                                className="text-gray-400 hover:opacity-50 transition text-sm flex items-center whitespace-nowrap">
                                <i className="text-lg mdi mdi-sort-variant mr-1"></i>
                                Sort
                            </button>
                        </li>
                        <li>
                            <GridListToggle/>
                        </li>
                    </ul>
                </div>
                <div className="w-2/12">
                    <div className="w-full relative">
                        <button className="w-full btn-primary">
                            + Add New
                        </button>
                        {/*        <ul*/}
                        {/*            x-show="open" x-transition.scale.origin.top*/}
                        {/*        @click.outside="open = false"*/}
                        {/*        class="mt-2 absolute w-full top-full bg-white border rounded-md shadow-md divide-y text-sm"*/}
                        {/*        >*/}
                        {/*        <li*/}
                        {/*        @click="newFile = true"*/}
                        {/*        class="p-2 px-3 flex items-center hover:bg-gray-100 transition cursor-pointer"*/}
                        {/*        >*/}
                        {/*        <i class="text-gray-400 mdi mdi-upload text-lg mr-2"></i>*/}
                        {/*        File*/}
                        {/*    </li>*/}
                        {/*    <li*/}
                        {/*                                @click="newFolder = true"*/}
                        {/*    class="p-2 px-3 flex items-center hover:bg-gray-100 transition cursor-pointer"*/}
                        {/*        >*/}
                        {/*        <i class="text-gray-400 mdi mdi-folder-plus-outline text-lg mr-2"></i>*/}
                        {/*    Folder*/}
                        {/*    </li>*/}
                        {/*</ul>*/}
                    </div>
                </div>
            </header>

            <ApiError error={filesFetchError || foldersFetchError} className="px-5"/>

            {filesFetchSuccess && foldersFetchSuccess && (
                <section className="flex divide-x">
                    <aside className="w-80 px-5">
                        <ul className="py-3 sticky top-16 space-y-5">
                            <li>
                                <h3 className="text-lg font-bold px-3 py-2">
                                    <i className="mdi mdi-pin-outline text-xl"></i>
                                    Pinned ({pinnedFiles.length})
                                </h3>
                                <ul>
                                    {pinnedFiles.map(each => (
                                        <li
                                            key={each.id}
                                            className="flex items-center hover:bg-gray-100 transition p-1 rounded-md text-gray-400 px-4 cursor-pointer"
                                        >
                                            <i className="mdi mdi-file-document-outline text-red-500 text-2xl mr-2"></i>
                                            {each.path}
                                        </li>
                                    ))}
                                </ul>
                            </li>
                            <li>
                                <h3 className="text-lg font-bold px-3 py-2">
                                    <i className="mdi mdi-clock-outline text-xl"></i>
                                    Recent Upload (8)
                                </h3>
                                <ul>
                                    <li className="flex items-center hover:bg-gray-100 transition p-1 rounded-md text-gray-400 px-4 cursor-pointer">
                                        <i className="mdi mdi-music text-yellow-500 text-2xl mr-2"></i>
                                        toefl speaking test.mp3
                                    </li>
                                    <li className="flex items-center hover:bg-gray-100 transition p-1 rounded-md text-gray-400 px-4 cursor-pointer">
                                        <i className="mdi mdi-video-outline text-teal-500 text-2xl mr-2"></i>
                                        illustrator tutorial.mp4
                                    </li>
                                </ul>
                                <button className="text-teal-500 text-sm hover:underline mx-5 mt-2">
                                    View All Recent Uploads
                                </button>
                            </li>
                            <li>
                                <h3 className="text-lg font-bold px-3 py-2">
                                    Folders ({folders.length})
                                </h3>
                                <ul>
                                    <li>
                                        <Collapsible
                                            transitionTime={75}
                                            trigger={
                                                <div
                                                    className="flex items-center hover:bg-gray-100 transition p-1 rounded-md text-gray-400 px-4 cursor-pointer text-teal-500 select-none">
                                                    <i className="mdi mdi-folder-open-outline text-teal-500 text-2xl mr-2"></i>
                                                    Design Course Materials
                                                </div>
                                            }
                                        >
                                            <ul className="ml-8">
                                                <li className="relative">
                                                    <div className="border-l w-px h-full absolute left-0 top-0"></div>
                                                    <div className="flex items-center">
                                                        <div className="w-5 border-t relative">
                                                            <div
                                                                className="h-1.5 w-1.5 rounded-full bg-gray-300 absolute right-0 -mt-1"></div>
                                                        </div>
                                                        <div
                                                            className="flex-1 flex items-center hover:bg-gray-100 transition p-1 rounded-md text-gray-400 px-4 cursor-pointer">
                                                            <i className="mdi mdi-folder-outline text-gray-400 text-2xl mr-2"></i>
                                                            Figma resources
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="relative">
                                                    <div className="border-l w-px h-1/2 absolute left-0 top-0"></div>
                                                    <div className="flex items-center">
                                                        <div className="w-5 border-t relative">
                                                            <div
                                                                className="h-1.5 w-1.5 rounded-full bg-gray-300 absolute right-0 -mt-1"></div>
                                                        </div>
                                                        <div
                                                            className="flex-1 flex items-center hover:bg-gray-100 transition p-1 rounded-md text-gray-400 px-4 cursor-pointer">
                                                            <i className="mdi mdi-folder-outline text-gray-400 text-2xl mr-2"></i>
                                                            Beginner Material
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </Collapsible>
                                    </li>
                                    {folders.map(each => (
                                        <li
                                            key={each.id}
                                            className="flex items-center hover:bg-gray-100 transition p-1 rounded-md text-gray-400 px-5 cursor-pointer"
                                        >
                                            <i className="mdi mdi-folder-outline text-gray-400 text-2xl mr-2"></i>
                                            {each.name}
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        </ul>
                    </aside>
                    <div className="p-5 px-7 flex-1 space-y-5">
                        <nav>
                            <ul className="flex items-center space-x-3">
                                <li>
                                    <a href="#" className="text-gray-400 hover:underline">
                                        Files & Folders
                                    </a>
                                </li>
                                <li>
                                    <i className="mdi mdi-chevron-right text-2xl"></i>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-800 hover:underline">
                                        Design Course Materials
                                    </a>
                                </li>
                            </ul>
                        </nav>
                        <ul className="max-w-4xl grid grid-cols-4 gap-3">
                            {folders.map(each => (
                                <li key={each.id}>
                                    <div className="w-full aspect-square border rounded-md p-3 relative">
                                        <div
                                            className="js-tippy-parent absolute inset-x-3 top-2 flex items-center justify-between">
                                            <label htmlFor="cb"
                                                   className="cursor-pointer relative w-5 h-5 flex items-center justify-center">
                                                <input id="cb" type="checkbox" className="peer sr-only"/>
                                                <i className="z-10 mdi mdi-check text-transparent peer-checked:text-white transition text-xl scale-50 peer-checked:scale-100"></i>
                                                <span
                                                    className="bg-white absolute inset-0 rounded-sm border peer-checked:bg-teal-500 peer-checked:border-teal-500 transition"></span>
                                            </label>
                                            <button
                                                type="button"
                                            >
                                                <i className="mdi mdi-dots-horizontal text-gray-400 text-2xl"></i>
                                            </button>

                                            <ul className="w-48 py-2 px-1 grid grid-cols-5 gap-1.5">
                                                <li
                                                    className="aspect-square w-full bg-gray-300 cursor-pointer hover:shadow-lg transition flex items-center justify-center"
                                                >
                                                    <i className="mdi mdi-check text-white text-xl"></i>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="flex flex-col justify-center w-full h-full">
                                            <i className="mdi mdi-folder text-red-700 text-6xl mt-5"></i>
                                            <div className="text-gray-800 text-sm">
                                                {each.name}
                                            </div>
                                            <small className="text-gray-400 text-xs">
                                                3 Files, 2 Folders
                                            </small>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>

                        <h3 className="text-lg font-semibold text-gray-400">
                            Files ({files.length})
                        </h3>

                        <ul className="max-w-4xl grid grid-cols-4 gap-3">
                            {files.map(each => (
                                <li key={each.id}>
                                    <div className="w-full border rounded-md relative">
                                        <div className="absolute inset-x-3 top-2 flex items-center justify-between">
                                            <label htmlFor="cb1"
                                                   className="cursor-pointer relative w-5 h-5 flex items-center justify-center">
                                                <input id="cb1" type="checkbox" className="peer sr-only"/>
                                                <i className="z-10 mdi mdi-check text-transparent peer-checked:text-white transition text-xl scale-50 peer-checked:scale-100"></i>
                                                <span
                                                    className="bg-white absolute inset-0 rounded-sm border peer-checked:bg-teal-500 peer-checked:border-teal-500 transition"></span>
                                            </label>
                                            <button>
                                                <i className="mdi mdi-dots-horizontal text-gray-400 text-2xl drop-shadow-sm"></i>
                                            </button>
                                        </div>
                                        <div className="aspect-square bg-gray-200">
                                        </div>
                                        <div className="px-2 py-1 h-16 leading-none">
                                            <div className="flex items-center text-sm">
                                                <i className="mdi mdi-video-outline text-teal-500 mr-1 text-xl"></i>
                                                <span className="text-ellipsis overflow-hidden whitespace-nowrap">{each.name}.</span>{each.ext}
                                            </div>
                                            <small className="text-gray-400 text-xs font-medium">
                                                57.1 Mb
                                            </small>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>
            )}
        </PageTemplate>
    );
}

export default FilesFoldersPage;
