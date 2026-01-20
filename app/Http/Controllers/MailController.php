<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\Contact;

class MailController extends Controller
{
    public function sendMail(){

        Mail::to('fake@mail.com')->send(new Contact());
        return view('welcome');
    }
}
