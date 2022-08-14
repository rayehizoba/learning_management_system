import React from 'react';
import PageTemplate from "./PageTemplate";
import classNames from "classnames";
import AsideToggleBtn from "../components/AsideToggleBtn";
import {Link} from "react-router-dom";

function UserEditPage(props) {
    const [manual, setManual] = React.useState(true);

    const header = (
        <div className="flex flex-col space-y-3 md:flex-row md:space-y-0 md:space-x-3 justify-between">
            <div className="flex items-center flex-1">
                <AsideToggleBtn/>
                <div className="h-10 md:h-7 border-l border-gray-300 mx-3 md:mx-5"></div>
                <div className="text-lg font-bold py-1.5">
                    Add User
                </div>
            </div>
        </div>
    );

    const navigation = (
        <div className="flex flex-col divide-y divide-white/50 overflow-y-auto flex-1">
            <header className="sticky top-0 backdrop-blur divide-y divide-white/50">
                <div className="flex items-center space-x-2 relative group mt-5 px-3 py-5">
                    <Link to="/users" className="absolute inset-0"></Link>
                    <div
                        className="block border border-teal-500 rounded-full w-8 h-8 md:w-6 md:h-6 grid place-content-center group-hover:bg-teal-500 group-hover:text-white transition">
                        <i className="mdi mdi-chevron-left text-2xl"></i>
                    </div>
                    <div className="font-medium">
                        Back to User List
                    </div>
                </div>
                <ul className="flex-1 divide-y divide-white/50">
                    <li
                        onClick={() => setManual(true)}
                        className={classNames(
                            manual ? '!border-l-yellow-400 bg-blue-100/50' : '!border-l-gray-400 hover:bg-gray-100/50',
                            "border-l-4 p-4 cursor-pointer transition-all"
                        )}
                    >
                        <p className="font-semibold py-1">
                            Manual Setup
                        </p>
                    </li>
                    <li
                        onClick={() => setManual(false)}
                        className={classNames(
                            !manual ? '!border-l-yellow-400 bg-blue-100/50' : '!border-l-gray-400 hover:bg-gray-100/50',
                            "border-l-4 p-4 cursor-pointer transition-all"
                        )}
                    >
                        <p className="font-semibold py-1">
                            Email Invite
                        </p>
                    </li>
                </ul>
            </header>

            <div className="flex-1"></div>

            <div className="space-y-3 sticky bottom-0 backdrop-blur p-5 pt-3">
                <a href="#" className="group px-2 block">
                    <div className="text-gray-400 text-xs">Powered by</div>
                    <div className="font-bold text-xl text-red-900 group-hover:text-red-700 transition">Razortech</div>
                </a>
            </div>
        </div>
    );

    const userRole = (
        <div className="space-y-3">
            <h1 className="text-xl md:text-2xl font-bold">
                User Role
            </h1>
            <ul className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-10 font-bold">
                <li>
                    <label className="flex items-center">
                        <input type="radio" name="role" className="peer sr-only"/>
                        <span
                            className="mr-2 w-5 h-5 border rounded-full peer-checked:border-teal-500 transition-all peer-checked:border-4"></span>
                        <span>Learner</span>
                    </label>
                </li>
                <li>
                    <label className="flex items-center">
                        <input type="radio" name="role" className="peer sr-only"/>
                        <span
                            className="mr-2 w-5 h-5 border rounded-full peer-checked:border-teal-500 transition-all peer-checked:border-4"></span>
                        <span>Admin</span>
                    </label>
                </li>
                <li>
                    <label className="flex items-center">
                        <input type="radio" name="role" className="peer sr-only"/>
                        <span
                            className="mr-2 w-5 h-5 border rounded-full peer-checked:border-teal-500 transition-all peer-checked:border-4"></span>
                        <span>Super Admin</span>
                    </label>
                </li>
            </ul>
        </div>
    );

    const manualSetup = manual && (
        <>
            {/*Profile Picture*/}
            <div className="space-y-2">
                <h1 className="text-xl md:text-2xl font-bold">
                    Profile Picture
                </h1>
                <p className="text-sm text-gray-300">
                    We recommend an image of at least 500 x 500. You can upload a PNG or JPG under 10MB
                </p>
                <div className="flex items-center space-x-8">
                    <div className="bg-gray-100 rounded-full w-32 aspect-square"></div>
                    <div className="grid gap-3 sm:grid-cols-2">
                        <button className="btn-primary" type="button">
                            Change Picture
                        </button>
                        <button className="btn-outline font-semibold px-" type="button">
                            Remove
                        </button>
                    </div>
                </div>
            </div>

            {/*Personal Information*/}
            <div className="space-y-4">
                <h1 className="text-xl md:text-2xl font-bold">
                    Personal Information
                </h1>

                <div className="md:col-span-2 space-y-2 flex flex-col">
                    <label className="font-bold after:content-['*'] after:text-red-600">
                        Fullname
                    </label>
                    <input className="form-input" placeholder="Fullname"/>
                </div>

                <div className="grid md:grid-cols-2 gap-3 md:gap-5">
                    <div className="space-y-2 flex flex-col">
                        <label className="font-bold after:content-['*'] after:text-red-600">
                            SSN Number
                        </label>
                        <input className="form-input" placeholder="SSN Number"/>
                    </div>
                    <div className="space-y-4">
                        <label className="font-bold">
                            Gender
                        </label>
                        <ul className="flex items-center space-x-10">
                            <li>
                                <label className="flex items-center">
                                    <input type="radio" name="gender" className="peer sr-only"/>
                                    <span
                                        className="mr-2 w-5 h-5 border rounded-full peer-checked:border-teal-500 transition-all peer-checked:border-4"></span>
                                    <span>Male</span>
                                </label>
                            </li>
                            <li>
                                <label className="flex items-center">
                                    <input type="radio" name="gender" className="peer sr-only"/>
                                    <span
                                        className="mr-2 w-5 h-5 border rounded-full peer-checked:border-teal-500 transition-all peer-checked:border-4"></span>
                                    <span>Female</span>
                                </label>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/*Contact Information*/}
            <div className="space-y-4">
                <h1 className="text-xl md:text-2xl font-bold">
                    Contact Information
                </h1>

                <div className="grid md:grid-cols-2 gap-3 md:gap-5">
                    <div className="space-y-2 flex flex-col">
                        <label className="font-bold after:content-['*'] after:text-red-600">
                            Email
                        </label>
                        <input className="form-input" placeholder="Email"/>
                    </div>

                    <div className="space-y-2 flex flex-col">
                        <label className="font-bold after:content-['*'] after:text-red-600">
                            Mobile Number
                        </label>
                        <div className="flex flex-1">
                            <select className="form-input !rounded-r-none !border-r-0">
                                <option>
                                    +1
                                </option>
                            </select>
                            <input className="form-input !rounded-l-none flex-1" placeholder="Mobile Number"/>
                        </div>
                    </div>

                    <div className="space-y-2 flex flex-col">
                        <label className="font-bold after:content-['*'] after:text-red-600">
                            Country
                        </label>
                        <select className="form-input"></select>
                    </div>

                    <div className="space-y-2 flex flex-col">
                        <label className="font-bold after:content-['*'] after:text-red-600">
                            State
                        </label>
                        <select className="form-input"></select>
                    </div>

                    <div className="space-y-2 flex flex-col">
                        <label className="font-bold after:content-['*'] after:text-red-600">
                            City
                        </label>
                        <select className="form-input"></select>
                    </div>

                    <div className="space-y-2 flex flex-col">
                        <label className="font-bold after:content-['*'] after:text-red-600">
                            Postal Code
                        </label>
                        <input className="form-input" placeholder="Postal Code"/>
                    </div>
                </div>
            </div>
        </>
    );

    const emailInvite = !manual && (
        <div className="md:col-span-2 space-y-2 flex flex-col flex-1">
            <label className="font-bold">
                User Email Address
            </label>
            <textarea rows="10" className="form-input" placeholder="User email"></textarea>
        </div>
    );

    return (
        <PageTemplate
            header={header}
            navigation={navigation}
        >
            <section className="p-3 px-4 md:px-7 flex-1 flex flex-col">
                <form className="space-y-12 md:space-y-10 max-w-3xl flex flex-col flex-1">
                    {userRole}
                    {manualSetup}
                    {emailInvite}
                    <footer className="grid gap-3 grid-cols-2 sm:w-fit pb-3 sm:pb-5">
                        <button className="btn-primary !px-12" type="button">
                            Save
                        </button>
                        <button className="btn-outline font-semibold" type="button">
                            Cancel
                        </button>
                    </footer>
                </form>
            </section>
        </PageTemplate>
    );
}

export default UserEditPage;
