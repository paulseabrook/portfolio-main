<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\ContactFormMail; // Create this Mailable class

class ContactFormController extends Controller
{
    public function submit(Request $request)
        {
            $validatedData = $request->validate([
                'name' => 'required|string|max:255',
                'email' => 'required|email|max:100',
                'message' => 'required|string',
            ]);

        try {
            \Mail::to('paulwarrenseabrook@gmail.com')->send(new \App\Mail\ContactFormMail($validatedData));
        } catch (\Exception $e) {
            // Log the specific mail error if this is the cause
            \Log::error('Mail Error: ' . $e->getMessage()); 
            // Re-throw or handle gracefully
        }

            return response()->json(['message' => 'Your message has been sent successfully!']);
        }
}
