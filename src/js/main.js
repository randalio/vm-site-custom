// Add your JavaScript code here
class VinylPluginJS {

    constructor() {
        this.init();
    }

    init() {
        // wait until DOM is ready
        document.addEventListener('DOMContentLoaded', () => {
            // Initialize Locomotive Scroll


            //const modalElement = document.getElementById('#videomodal'); // Replace with your modal's actual ID

            function addClassNameListener(elemId, callback) {
                var elem = document.getElementById(elemId);
                var lastClassName = elem.className;
                window.setInterval( function() {   
                   var className = elem.className;
                    if (className !== lastClassName) {
                        callback();   
                        lastClassName = className;
                    }
                },10);
            }


            if( document.querySelectorAll('#videomodal').length > 0 ) {
                            // get #videomodal's inner HTML
                const modalContent = document.getElementById('videomodal').innerHTML;

                addClassNameListener('videomodal', function() {
                    const modalElement = document.getElementById('videomodal');
                    const modalVideo = modalElement.querySelector('video');

                    if (modalElement.classList.contains('is-open')) {
                        modalElement.innerHTML = modalContent;
                        //console.log('video modal is open');
                    } else {
                        modalElement.innerHTML = '';
                        //console.log('video modal is not open');
                    }
                });
                
            }



            // const pixelDensity = window.devicePixelRatio;
            // console.log("Pixel density:", pixelDensity);
            // if( pixelDensity > 1 ) {
            //     document.querySelector('body').classList.add('high-dpi');
            // }


            const loco = document.querySelectorAll('.locomotive');

            if (loco.length > 0) {

                const sections = document.querySelectorAll('.entry-content > .wp-block-kadence-rowlayout');

                sections.forEach((section, index) => {
                    section.setAttribute('data-scroll-section', '');
                });

                document.getElementById('colophon').setAttribute('data-scroll-section', '');
                document.querySelector('header').setAttribute('data-scroll-section', '');

                const scroll = new LocomotiveScroll({
                  el: document.querySelector('[data-scroll-container]'),
                  smooth: true,
                  lerp: 0.1, // Start with a moderately responsive lerp
                  multiplier: 0.8, // Multiplier for scroll speed
                  scrollFromAnywhere: true
                });

            }

            const no_follow = document.querySelectorAll('.no-follow');
            console.log(no_follow);

            if( no_follow.length == 0 ) {

                const follow = new Follow({
                    //debug: true,
                    factor: 1,
                    //attribute: 'follow',
                    initiate: false
                });
    
                setTimeout(() => {
                    follow.initiate();
                }, 200);

            }

            
            
          
        });
    }
}

new VinylPluginJS();