import React from "react";
import { Inertia } from "@inertiajs/inertia";
import { InertiaLink, usePage } from "@inertiajs/inertia-react";
import { Head } from "@inertiajs/inertia-react";
import Authenticated from "@/Layouts/Authenticated";
import Guest from "@/Layouts/Guest";

const Index = (props) => {
    const { blog, title } = usePage().props;
    const data = blog;

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
                            href={route("blog.create")}
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
                                <th className="px-6 pt-5 pb-4">Title</th>
                                <th className="px-6 pt-5 pb-4">Category</th>
                                <th className="px-6 pt-5 pb-4">Author</th>
                                {/* <th className="px-6 pt-5 pb-4">Action</th> */}
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((data) => (
                                <tr key={data.id} className="">
                                    <td className="border-t">
                                        <InertiaLink
                                            href={route("blog.edit", data.id)}
                                            className="flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none"
                                        >
                                            {data.id}
                                        </InertiaLink>
                                    </td>
                                    <td className="border-t">
                                        <InertiaLink
                                            href={route("blog.edit", data.id)}
                                            className="flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none"
                                        >
                                            {data.name}
                                        </InertiaLink>
                                    </td>
                                    <td className="border-t">
                                        <InertiaLink
                                            tabIndex="1"
                                            className="flex items-center px-6 py-4"
                                            href={route(
                                                "categories.show",
                                                data.category_id
                                            )}
                                        >
                                            {data.catname}
                                        </InertiaLink>
                                    </td>
                                    <td className="border-t">
                                        <InertiaLink
                                            tabIndex="1"
                                            className="flex items-center px-6 py-4"
                                            href={route(
                                                "user.show",
                                                data.user_id
                                            )}
                                        >
                                            {data.author}
                                        </InertiaLink>
                                    </td>
                                    {/* <td className="border-t">
                                        <InertiaLink
                                            tabIndex="1"
                                            className="px-4 py-2 mx-2 text-sm text-white bg-blue-500 rounded"
                                            href={route("blog.show", id)}
                                        >
                                            Detail
                                        </InertiaLink>
                                        <InertiaLink
                                            tabIndex="1"
                                            className="px-4 py-2 mx-2 text-sm text-white bg-blue-500 rounded"
                                            href={route("blog.edit", id)}
                                        >
                                            Edit
                                        </InertiaLink>
                                    </td> */}
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