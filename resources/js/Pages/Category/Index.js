import Authenticated from "@/Layouts/Authenticated";
import { Head, InertiaLink, usePage } from "@inertiajs/inertia-react";
import React from "react";

function Index(props) {
    const { categories, title } = usePage().props;
    const data = categories;
    function destroy(e) {
        if (confirm(`Are you sure you want to delete this ${title}?`)) {
            Inertia.delete(route("categories.destroy", e.currentTarget.id));
        }
    }
    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={
                <div className="flex items-center justify-between mb-0">
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                        {title}
                    </h2>
                    <InertiaLink
                        className="px-6 py-2 text-white bg-green-500 rounded-md focus:outline-none"
                        href={route("categories.create")}
                    >
                        Create {title}
                    </InertiaLink>
                </div>
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
                                {/* <th className="px-6 pt-5 pb-4">Description</th> */}
                                <th className="px-6 pt-5 pb-4">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map(({ id, name, description }) => (
                                <tr key={id} className="">
                                    <td className="border-t">
                                        <InertiaLink
                                            href={route("categories.edit", id)}
                                            className="flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none"
                                        >
                                            {id}
                                        </InertiaLink>
                                    </td>
                                    <td className="border-t">
                                        <InertiaLink
                                            href={route("categories.edit", id)}
                                            className="flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none"
                                        >
                                            {name}
                                        </InertiaLink>
                                    </td>
                                    {/* <td className="border-t">
                                        <InertiaLink
                                            tabIndex="1"
                                            className="flex items-center px-6 py-4"
                                            href={route("posts.edit", id)}
                                        >
                                            {description}
                                        </InertiaLink>
                                    </td> */}
                                    <td className="border-t">
                                        <InertiaLink
                                            tabIndex="1"
                                            className="px-4 py-2 mx-2 text-sm text-white bg-blue-500 rounded"
                                            href={route("categories.show", id)}
                                        >
                                            Detail
                                        </InertiaLink>
                                        <InertiaLink
                                            tabIndex="1"
                                            className="px-4 py-2 mx-2 text-sm text-white bg-blue-500 rounded"
                                            href={route("categories.edit", id)}
                                        >
                                            Edit
                                        </InertiaLink>
                                        <button
                                            onClick={destroy}
                                            id={id}
                                            tabIndex="-1"
                                            type="button"
                                            className="mx-1 px-4 py-2 text-sm text-white bg-red-500 rounded"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                            {data.length === 0 && (
                                <tr>
                                    <td
                                        className="px-6 py-4 border-t"
                                        colSpan="4"
                                    >
                                        No contacts found.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </Authenticated>
    );
}

export default Index;
