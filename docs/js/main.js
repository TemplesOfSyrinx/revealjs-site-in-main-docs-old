// Also available as an ES module, see:
// https://revealjs.com/initialization/
Reveal.initialize({
    menu: {
        themes: true,
        // Specifies the path to the default theme files.
        themesPath: 'revealjs/dist/theme/',
        custom: [
            {
                title: 'About',
                icon: '<i class="fa fa-info">',
                content: '<p>This slidedeck is created with reveal.js</p>'
                // OR src: 'links.html'
            }
        ]
    },
    fsfx: {
        baseclass: "fsbutton",
        hideifnofs: true
    },
    // Learn about plugins: https://revealjs.com/plugins/
    plugins: [
        RevealZoom,
        RevealNotes,
        RevealSearch,
        RevealMarkdown,
        RevealHighlight,
        RevealMenu,
        FsFx
    ]
});
