import React from "react";
import { Inertia } from "@inertiajs/inertia";
import { InertiaLink, usePage } from "@inertiajs/inertia-react";
import { Head } from "@inertiajs/inertia-react";
import Authenticated from "@/Layouts/Authenticated";
import Guest from "@/Layouts/Guest";

const Index = (props) => {
    const { menuweb, title } = usePage().props;
    const data = menuweb;

    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={
                <>
                    <div className="flex items-center justify-between mb-0">
                        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                            {title}
                        </h2>
                        <InertiaLink
                            className="px-6 py-2 text-white bg-green-500 rounded-md focus:outline-none"
                            href={route("menuweb.create")}
                        >
                            Create {title}
                        </InertiaLink>
                    </div>
                </>
            }
        >
            <Head title={title} />
            <div className="container mx-auto">
                {/* <h1 className="mb-8 text-3xl font-bold text-center">Post</h1> */}

                <div className="overflow-x-auto bg-white rounded shadow">
                    <table className="w-full whitespace-nowrap">
                        <thead className="text-white bg-gray-600">
                            <tr className="font-bold text-left">
                                <th className="px-6 pt-5 pb-4">#</th>
                                <th className="px-6 pt-5 pb-4">Name</th>
                                <th className="px-6 pt-5 pb-4">Description</th>
                                <th className="px-6 pt-5 pb-4">Published</th>
                                <th className="px-6 pt-5 pb-4">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map(({ id, name, description, isPub }) => (
                                <tr key={id} className="">
                                    <td className="border-t">
                                        <InertiaLink
                                            href={route("menuweb.edit", id)}
                                            className="flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none"
                                        >
                                            {id}
                                        </InertiaLink>
                                    </td>
                                    <td className="border-t">
                                        <InertiaLink
                                            href={route("menuweb.edit", id)}
                                            className="flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none"
                                        >
                                            {name}
                                        </InertiaLink>
                                    </td>
                                    <td className="border-t">
                                        <InertiaLink
                                            tabIndex="1"
                                            className="flex items-center px-6 py-4"
                                            href={route("menuweb.edit", id)}
                                        >
                                            {description}
                                        </InertiaLink>
                                    </td>
                                    <td className="border-t">
                                        {isPub == 1
                                            ? "published"
                                            : "not published"}
                                    </td>
                                    <td className="border-t">
                                        <InertiaLink
                                            tabIndex="1"
                                            className="px-4 py-2 mx-2 text-sm text-white bg-blue-500 rounded"
                                            href={route("menuweb.show", id)}
                                        >
                                            Detail
                                        </InertiaLink>
                                        <InertiaLink
                                            tabIndex="1"
                                            className="px-4 py-2 mx-2 text-sm text-white bg-blue-500 rounded"
                                            href={route("menuweb.edit", id)}
                                        >
                                            Edit
                                        </InertiaLink>
                                    </td>
                                </tr>
                            ))}
                            {data.length === 0 && (
                                <tr>
                                    <td
                                        className="px-6 py-4 border-t"
                                        colSpan="4"
                                    >
                                        No {title} found.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </Authenticated>
    );
};

export default Index;
