<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\ContactPortfolio;

class ContactController extends Controller
{
    public function sendEmail(Request $request)
    {
        Mail::send(new ContactPortfolio($request));
        return "Email Sent";
    }
}