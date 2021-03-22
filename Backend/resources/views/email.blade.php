<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Contact form</title>


</head>

<body>
    <h1>Contacto Portfolio</h1>
    <h3>Mensaje de {{ $email['name'] }}</h3>
    <p>Correo electrónico: {{ $email['email'] }}</p>
    <p>Asunto: {{ $email['subject'] }}</p>
    <p>Mensaje: {{ $email['bodymessage'] }}</p>
</body>

</html>