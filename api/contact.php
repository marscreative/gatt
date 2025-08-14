<?php
/**
 * Contact Form Handler for Gracious Angeli Travel & Tours
 * Secure form processing with validation and email sending
 */

// Security headers
header('Content-Type: application/json');
header('X-Content-Type-Options: nosniff');
header('X-Frame-Options: DENY');
header('X-XSS-Protection: 1; mode=block');

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

// Configuration
$config = [
    'to_email' => 'info@graciousangeli.com',
    'from_email' => 'noreply@graciousangeli.com',
    'subject_prefix' => 'Website Inquiry - ',
    'max_message_length' => 5000,
    'required_fields' => ['name', 'email', 'subject', 'message']
];

// Rate limiting (simple implementation)
session_start();
$now = time();
$rate_limit_key = 'last_submission_' . $_SERVER['REMOTE_ADDR'];

if (isset($_SESSION[$rate_limit_key]) && ($now - $_SESSION[$rate_limit_key]) < 60) {
    http_response_code(429);
    echo json_encode(['error' => 'Please wait before submitting another message']);
    exit;
}

try {
    // Get and validate input
    $input = json_decode(file_get_contents('php://input'), true);
    
    // If JSON input is not available, try POST data
    if (!$input) {
        $input = $_POST;
    }
    
    // Validate required fields
    $errors = [];
    foreach ($config['required_fields'] as $field) {
        if (empty($input[$field]) || !is_string($input[$field])) {
            $errors[] = "Field '$field' is required";
        }
    }
    
    if (!empty($errors)) {
        http_response_code(400);
        echo json_encode(['error' => 'Validation failed', 'details' => $errors]);
        exit;
    }
    
    // Sanitize inputs
    $name = trim(strip_tags($input['name']));
    $email = trim(filter_var($input['email'], FILTER_SANITIZE_EMAIL));
    $subject = trim(strip_tags($input['subject']));
    $message = trim(strip_tags($input['message']));
    
    // Additional validation
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo json_encode(['error' => 'Invalid email address']);
        exit;
    }
    
    if (strlen($message) > $config['max_message_length']) {
        http_response_code(400);
        echo json_encode(['error' => 'Message too long']);
        exit;
    }
    
    // Check for spam patterns
    $spam_patterns = [
        '/\b(viagra|cialis|casino|lottery|winner)\b/i',
        '/\b(click here|visit now|buy now)\b/i',
        '/http[s]?:\/\//i' // URLs in message
    ];
    
    $full_text = $name . ' ' . $email . ' ' . $subject . ' ' . $message;
    foreach ($spam_patterns as $pattern) {
        if (preg_match($pattern, $full_text)) {
            // Log potential spam attempt
            error_log("Potential spam submission from IP: " . $_SERVER['REMOTE_ADDR']);
            http_response_code(400);
            echo json_encode(['error' => 'Message contains prohibited content']);
            exit;
        }
    }
    
    // Prepare email
    $to = $config['to_email'];
    $email_subject = $config['subject_prefix'] . $subject;
    
    // Create email body
    $email_body = "New contact form submission from Gracious Angeli website:\n\n";
    $email_body .= "Name: " . $name . "\n";
    $email_body .= "Email: " . $email . "\n";
    $email_body .= "Subject: " . $subject . "\n";
    $email_body .= "Message:\n" . $message . "\n\n";
    $email_body .= "---\n";
    $email_body .= "Submitted on: " . date('Y-m-d H:i:s') . "\n";
    $email_body .= "IP Address: " . $_SERVER['REMOTE_ADDR'] . "\n";
    $email_body .= "User Agent: " . ($_SERVER['HTTP_USER_AGENT'] ?? 'Unknown') . "\n";
    
    // Email headers
    $headers = [
        'From: ' . $config['from_email'],
        'Reply-To: ' . $email,
        'X-Mailer: Gracious Angeli Contact Form',
        'Content-Type: text/plain; charset=UTF-8',
        'X-Priority: 3'
    ];
    
    // Send email
    $mail_sent = mail($to, $email_subject, $email_body, implode("\r\n", $headers));
    
    if ($mail_sent) {
        // Update rate limiting
        $_SESSION[$rate_limit_key] = $now;
        
        // Log successful submission
        error_log("Contact form submission from: $email");
        
        // Return success response
        echo json_encode([
            'success' => true,
            'message' => 'Thank you for your message! We will get back to you soon.'
        ]);
    } else {
        // Log email failure
        error_log("Failed to send contact form email to: $to");
        
        http_response_code(500);
        echo json_encode(['error' => 'Failed to send message. Please try again later.']);
    }
    
} catch (Exception $e) {
    // Log the error
    error_log("Contact form error: " . $e->getMessage());
    
    http_response_code(500);
    echo json_encode(['error' => 'An unexpected error occurred. Please try again later.']);
}
?>