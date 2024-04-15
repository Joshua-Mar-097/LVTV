<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Http;

Route::get('/proxy/code', function (\Illuminate\Http\Request $request) {
    try {
        $response = Http::get('https://adgard.net/code', [
            'id' => $request->query('id'),
            'type' => $request->query('type'),
        ]);

        return $response->json();
    } catch (\Exception $e) {
        \Log::error('Proxy Error: ' . $e->getMessage());

        return response()->json(['error' => $e->getMessage()], $e->getCode() ?: 500);
    }
});

Route::get('/', function () {
    return view('welcome');
});
