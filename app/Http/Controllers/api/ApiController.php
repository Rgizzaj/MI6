<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Person;
use Illuminate\Http\Request;

class ApiController extends Controller
{
    //
    public function search(Request $request)
    {
        $results = $request->input('search');
        $people = Person::where('name','like',$results.'%')->limit(20)->get();
        return response()->json($people);
        return view('test',compact('people'));
    }
}
