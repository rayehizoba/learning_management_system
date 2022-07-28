import React from 'react';
import classNames from "classnames";
import SectionItem from "./SectionItem";
import {useDispatch, useSelector} from "react-redux";
import {
    selectSections,
    selectSectionsFetchError,
    selectSectionsFetchSuccess
} from "../store/sections/sections.selectors";
import * as sectionActions from "../store/section/section.actions";
import * as sectionsActions from "../store/sections/sections.actions";
import {useParams} from "react-router-dom";
import {selectSection} from "../store/section/section.selectors";
import * as appActions from "../store/app/app.actions";

function CourseContent(props) {
    const dispatch = useDispatch();
    const {course_id} = useParams();
    const section = useSelector(selectSection);
    const sections = useSelector(selectSections);
    const sectionsFetchSuccess = useSelector(selectSectionsFetchSuccess);
    const sectionsFetchError = useSelector(selectSectionsFetchError);

    const [expand, setExpand] = React.useState(true);

    const toggleExpand = () => setExpand(!expand);
    const onSetSection = section => () => {
        dispatch(sectionActions.setSection(section));
    };

    React.useEffect(() => {
        if (course_id && !sectionsFetchSuccess) {
            dispatch(sectionsActions.fetchSections(course_id));
        }
        return () => {
            dispatch(appActions.clearErrors());
            dispatch(sectionsActions.clearSections());
            dispatch(sectionActions.setSection());
        }
    }, []);

    React.useEffect(() => {
        if (!section && sections.length) {
            const firstSection = sections[0];
            dispatch(sectionActions.setSection(firstSection));
        }
    }, [section, sections]);

    return (
        <section className="flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x">
            <div className="md:w-1/4">
                <ul
                    className={classNames(
                        "md:max-h-fit overflow-hidden transition-all flex-1 divide-y divide-gray-200",
                        expand ? 'max-h-[1000vh] border-b' : 'max-h-0'
                    )}
                >
                    {sections.map((each, index) => (
                        <li
                            key={index}
                            onClick={onSetSection(each)}
                        >
                            <SectionItem
                                section={each}
                                active={Boolean(section) && JSON.stringify(section) == JSON.stringify(each)}
                                defaultName={'Section - ' + (index + 1)}
                            />
                        </li>
                    ))}
                </ul>
                <div
                    onClick={toggleExpand}
                    className="p-4 border-t font-bold bg-gray-100 hover:bg-teal-100 md:hidden flex items-center"
                >
                    <i className="mdi mdi-unfold-more-horizontal text-2xl text-gray-400"></i>
                    <div>
                        {expand ? 'Hide Course Sections' : 'View Course Sections'}
                    </div>
                </div>
            </div>
            <article className="md:w-3/4 p-4 md:p-5">
                <p className="text-2xl font-bold mb-1">Lorem ipsum dolor sit amet.</p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam asperiores autem commodi, corporis
                eius fugiat, ipsum minus molestias, perferendis placeat quos velit voluptates. Blanditiis deleniti
                ipsum quasi quisquam rerum voluptatibus.
            </article>
        </section>
    );
}

export default CourseContent;
