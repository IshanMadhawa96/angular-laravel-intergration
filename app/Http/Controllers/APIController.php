<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class APIController extends Controller
{
    //
    public function getData(){
        $cars = array("Volvo", "BMW", "Toyota");
        $response['data'] =$cars;
        return response()->json($response);
    }
}
