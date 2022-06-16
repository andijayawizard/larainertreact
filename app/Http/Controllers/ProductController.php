<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $products = Product::select('products.*', 'categories.name as category')->join('categories', 'categories.id', '=', 'products.category_id')->get();
        return Inertia::render('Product/Index', ['products' => $products]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $product = Product::select('products.*', 'categories.name as category')->join('categories', 'categories.id', '=', 'products.category_id')->findOrFail($id);
        $join = [
            'product' => [
                'name' => $product->name,
                'description' => $product->description,
                'category_id' => $product->category_id,
                'category' => $product->category,
            ]
        ];
        return Inertia::render('Product/Show', $join);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $cat = Category::select('*')->latest()->get();
        // $cat = [
        //     'cat' => [
        //         'id' => $cat->id,
        //         'name' => $cat->name,
        //     ]
        // ];
        $product = Product::select('products.*', 'categories.name as category')
            ->join('categories', 'categories.id', '=', 'products.category_id')
            ->findOrFail($id);
        $product = [
            'product' => [
                'id' => $product->id,
                'name' => $product->name,
                'description' => $product->description,
                'category_id' => $product->category_id,
                'category' => $product->category,
            ]
        ];
        return Inertia::render('Product/Edit', $product);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Product $product)
    {
        $request->validate([
            'name' => 'required|min:4',
            'description' => 'required|min:4',
            // 'category_id' => 'required|min:4',
        ]);
        $product->update($request->all());
        return Redirect::route('products.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function destroy(Product $product)
    {
        //
    }
}