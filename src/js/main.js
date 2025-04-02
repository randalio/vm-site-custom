// Add your JavaScript code here
class VinylPluginJS {

    constructor() {
        this.init();
    }

    init() {
        // wait until DOM is ready
        document.addEventListener('DOMContentLoaded', () => {
            // Initialize Locomotive Scroll


            // const sections = document.querySelectorAll('.entry-content .wp-block-kadence-rowlayout');

            // sections.forEach((section, index) => {
            //     section.setAttribute('data-scroll-section', '');
            // });

            //document.getElementById('colophon').setAttribute('data-scroll-section', '');

            // const scroll = new LocomotiveScroll({
            //   el: document.querySelector('[data-scroll-container]'),
            //   smooth: true,
            //   lerp: 0.1, // Start with a moderately responsive lerp
            //   multiplier: 0.8, // Multiplier for scroll speed
            //   scrollFromAnywhere: true
            // });

            const follow = new Follow({
                //debug: true,
                //factor: 50,
                //attribute: 'follow',
                //initiate: false
            }) 
          
        });
    }
}

new VinylPluginJS();