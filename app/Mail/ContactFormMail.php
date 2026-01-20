<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class ContactFormMail extends Mailable
{
    use Queueable, SerializesModels;
    /**
     * Create a new message instance.
     */

    public $formData; // Make sure this is public

    public function __construct(array $formData) {
        // FIX: Remove the extra '$' symbol
        $this->formData = $formData; 
    }

    /**
     * Get the message envelope.
     */
public function envelope(): Envelope
{
   return new Envelope(
       subject: 'Message from portfolio',
   );
}

    /**
     * Get the message content definition.
     */
public function content(): Content
    {
        // Change $this->user->name to $this->formData['name'] 
        // and add the other fields from your $validatedData array.
        return new Content(
            view: 'emails.contact',
            with: [
                'name'    => $this->formData['name'],
                'email'   => $this->formData['email'],
                'message' => $this->formData['message'],
            ],
        );
    }

    /**
     * Get the attachments for the message.
     *
     * @return array<int, \Illuminate\Mail\Mailables\Attachment>
     */
    public function attachments(): array
    {
        return [];
    }
}
