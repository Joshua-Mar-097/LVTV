<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;

class UserController extends Controller
{
    public function signup(Request $request)
    {
        $request->validate([
            'name' => 'required|string|min:5|max:255',
            'phone_number' => 'required|numeric',
            'email' => 'required|email|unique:users,email',
            'password' => 'required|min:7|max:16',
        ]);

        $user = User::create([
            'name' => $request->name,
            'phone_number' => $request->phone_number,
            'email' => $request->email,
            'password' => bcrypt($request->password)
        ]);

        if ($user) {
            return response(compact('user'));
        }

        return response()->json([
            'message' => 'Error: user not created',
            'status' => 500
        ]);
    }

    public function login(Request $request) 
    {
        $credentials = $request->validate([
            'email' => 'required|exists:users,email',
            'password' => 'required|correct_password',
        ]);

        if (!Auth::attempt($credentials)) {
            return response()->json(['message' => 'Invalid email or password'], 422);
        }

        $user = Auth::user();

        if ($user->user_type == '2') {
            throw ValidationException::withMessages(['email' => 'Your account is not approved. Please contact the admin for assistance.']);
        }

        $token = $user->createToken('main')->plainTextToken;

        return response(compact('user', 'token'));
    }

    public function logout(Request $request)
    {
        $user = $request->user();
        $user->currentAccessToken()->delete();
        return response()->json(['message' => 'logout successfully', 200]);
    }
}