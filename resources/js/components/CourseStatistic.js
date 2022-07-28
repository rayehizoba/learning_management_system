import React from 'react';

function CourseStatistic(props) {
    return (
        <section className="">
            <p className="text-lg font-bold p-5 pb-0">
                Overall Course Stat
            </p>
            <div className="grid md:grid-cols-2 gap-8 md:gap-16 p-5 w-fit">
                <div className="flex items-center space-x-5">
                    <div className="aspect-[1/1] w-14 rounded-full bg-teal-200 text-teal-600 grid place-content-center">
                        <i className="mdi mdi-check-decagram text-3xl"></i>
                    </div>
                    <div className="font-semibold">
                        <p className="text-gray-400 text-sm">
                            Average Completion Rate
                        </p>
                        <p className="text-lg">
                            100%
                        </p>
                    </div>
                </div>
                <div className="flex items-center space-x-5">
                    <div
                        className="aspect-[1/1] w-14 rounded-full bg-yellow-200 text-yellow-600 grid place-content-center">
                        <i className="mdi mdi-emoticon text-3xl"></i>
                    </div>
                    <div className="font-semibold">
                        <p className="text-gray-400 text-sm">
                            Average Learner Reaction
                        </p>
                        <p className="text-lg">
                            75% Useful
                        </p>
                    </div>
                </div>
            </div>
            <div className="p-5">
                <div className="aspect-[4/1] w-full bg-teal-50 grid place-content-center text-teal-400">
                    line chart area
                </div>
            </div>

            <p className="text-lg font-bold p-5 pb-0">
                Course Section Stat
            </p>
            <div className="overflow-x-auto">
                <table className="table-auto w-full text-left border-b text-sm md:text-base">
                    <thead className="border-b text-gray-400 whitespace-nowrap">
                    <tr>
                        <th className="pl-5 py-3 font-normal min-w-[20ch]">
                            Section Name
                        </th>
                        <th className="px-5 font-normal min-w-[18ch]">
                            Last Updated
                        </th>
                        <th className="px-5 font-normal">
                            Completion Rate
                        </th>
                        <th className="px-5 font-normal">
                            Total Learners Completed
                        </th>
                    </tr>
                    </thead>
                    <tbody className="divide-y">
                    <tr>
                        <td className="pl-5 py-5">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit?</p>
                        </td>
                        <td className="px-5">
                            <p>Last Updated: March 17, 2022</p>
                        </td>
                        <td className="px-5">
                            <p>100%</p>
                        </td>
                        <td className="px-5">
                            <p>87 Learner</p>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </section>
    );
}

export default CourseStatistic;
