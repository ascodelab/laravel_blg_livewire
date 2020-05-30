<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>{{ config('app.name', 'Laravel') }}</title>
    <script src="{{ asset('js/app.js') }}" defer></script>
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <link href="{{ asset('css/style.css') }}" rel="stylesheet">
</head>
<body>
    <div id="app">
        <div class="header-component">
            <header-component></header-component>
        </div>
        <main class="side-main">
            @yield('content')
        </main>
        <div class="footer-wrapper" style="position:relative:top:-80px;">
            <section class="section call-to-action is-primary has-text-centered">
                <footer-cta-component></footer-cta-component>   
            </section>
            <section class="section newsletter">
                <newsletter-component></newsletter-component>   
            </section>
            <div class="footer-component">
                <footer-component></footer-component> 
            </div>
        </div>
    </div>
</body>
<script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script>
<script src="{{ asset('js/main.js') }}" defer></script>
</html>
