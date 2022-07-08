import Authenticated from "@/Layouts/Authenticated";
import { Head, InertiaLink, usePage } from "@inertiajs/inertia-react";
import React from "react";

const Show = (props) => {
    const { menuweb, title } = usePage().props;
    const data = {
        name: menuweb.name,
        description: menuweb.description,
    };
    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    <InertiaLink
                        href={route("menuweb.index")}
                        className="text-indigo-600 hover:text-indigo-700"
                    >
                        {title}
                    </InertiaLink>
                    <span className="font-medium text-indigo-600"> / </span>
                    Edit
                </h2>
            }
        >
            <Head title={data.name} />
            <div className="mt-4">
                <div className="container flex flex-col justify-center mx-auto">
                    <div className="max-w-3xl p-8 bg-white rounded shadow">
                        <table className="w-full ">
                            <tbody>
                                <tr>
                                    <td>Name</td>
                                    <td>{data.name}</td>
                                </tr>
                                <tr>
                                    <td>Description</td>
                                    <td>{data.description}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
};

export default Show;
