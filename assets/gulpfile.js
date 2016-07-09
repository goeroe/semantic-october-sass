var elixir = require('laravel-elixir');

elixir(function(mix){

    /* COPY SEMANTIC-UI STUFF */
    //mix.copy('bower_components/semantic-ui-sass/app/assets/fonts', 'fonts');
    //mix.copy('bower_components/semantic-ui-sass/app/assets/images', 'images');
    //mix.copy('bower_components/semantic-ui-sass/app/assets/javascripts', 'js/vendor');
    //mix.copy('bower_components/semantic-ui-sass/app/assets/stylesheets', 'sass');

    /* COPY SCRIPTS */
    //mix.copy('bower_components/jquery/dist/jquery.min.js', 'js/vendor/jquery.min.js');

    /* MIX SASS */
    mix.sass('../../../sass/semantic-ui.scss', 'css/semantic-ui.css');
    mix.sass('../../../sass/magic.scss', 'css/magic.css');

});