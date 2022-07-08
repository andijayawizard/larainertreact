<?php

namespace App\Http\Controllers;

use App\Models\MenuWebsite;
use App\Http\Requests\StoreMenuWebsiteRequest;
use App\Http\Requests\UpdateMenuWebsiteRequest;
use Inertia\Inertia;

class MenuWebsiteController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $title = 'Menu Website';
        $menuWebsite = MenuWebsite::latest()->get();
        return Inertia::render('Menuweb/Index', ['menuweb' => $menuWebsite])
            ->with('title', $title);
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
     * @param  \App\Http\Requests\StoreMenuWebsiteRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreMenuWebsiteRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\MenuWebsite  $menuWebsite
     * @return \Illuminate\Http\Response
     */
    public function show(MenuWebsite $menuWebsite)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\MenuWebsite  $menuWebsite
     * @return \Illuminate\Http\Response
     */
    public function edit(MenuWebsite $menuWebsite)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateMenuWebsiteRequest  $request
     * @param  \App\Models\MenuWebsite  $menuWebsite
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateMenuWebsiteRequest $request, MenuWebsite $menuWebsite)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\MenuWebsite  $menuWebsite
     * @return \Illuminate\Http\Response
     */
    public function destroy(MenuWebsite $menuWebsite)
    {
        //
    }
}