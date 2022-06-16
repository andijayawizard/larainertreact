import Authenticated from "@/Layouts/Authenticated";
import { Head, InertiaLink, useForm, usePage } from "@inertiajs/inertia-react";
import React from "react";

function CreateOrUpdate(props) {
    // const { category } = usePage().props;
    const { data, errors, setData, put, post } = useForm({
        name: "",
        description: "",
    });
    function handleSubmit(e) {
        e.preventDefault();
        // if (category.id) {
        //     put(route("categories.update", category.id));
        // } else {
        post(route("categories.store"));
        // }
    }
    function destroy() {
        if (confirm("Are you sure you want to delete this data?")) {
            Inertia.delete(route("categories.destroy", category.id));
        }
    }
    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    <InertiaLink
                        href={route("categories.index")}
                        className="text-indigo-600 hover:text-indigo-700"
                    >
                        Category
                    </InertiaLink>
                    <span className="font-medium text-indigo-600"> / </span>
                    Edit
                </h2>
            }
        >
            <Head title="Edit Category" />
            <div className="mt-20">
                <div className="container flex flex-col justify-center mx-auto">
                    <div className="max-w-3xl p-8 bg-white rounded shadow">
                        <form name="createForm" onSubmit={handleSubmit}>
                            <div className="flex flex-col">
                                <div className="mb-4">
                                    <label className="">Name</label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-2"
                                        label="Title"
                                        name="name"
                                        value={data.name}
                                        onChange={(e) =>
                                            setData("name", e.target.value)
                                        }
                                    />
                                    <span className="text-red-600">
                                        {errors.name}
                                    </span>
                                </div>
                                <div className="mb-4">
                                    <label className="">Description</label>
                                    <textarea
                                        type="text"
                                        className="w-full rounded"
                                        label="description"
                                        name="description"
                                        errors={errors.description}
                                        value={data.description}
                                        onChange={(e) =>
                                            setData(
                                                "description",
                                                e.target.value
                                            )
                                        }
                                    />
                                    <span className="text-red-600">
                                        {errors.description}
                                    </span>
                                </div>
                            </div>
                            <div className="flex justify-between">
                                <button
                                    type="submit"
                                    className="px-4 py-2 text-white bg-green-500 rounded"
                                >
                                    Update
                                </button>
                                <button
                                    onClick={destroy}
                                    tabIndex="-1"
                                    type="button"
                                    className="px-4 py-2 text-white bg-red-500 rounded"
                                >
                                    Delete
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}

export default CreateOrUpdate;
