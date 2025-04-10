// Add your JavaScript code here
class VinylPluginJS {

    constructor() {
        this.init();
    }

    init() {
        // wait until DOM is ready
        document.addEventListener('DOMContentLoaded', () => {
            
            

            // function updateSvgColor() {
            //     const header = document.querySelector('.wp-block-kadence-header');
            //     const svg = header.querySelector('svg');
            //     const bgColor = getComputedStyle(document.elementFromPoint(
            //         svg.getBoundingClientRect().left + 10,
            //         svg.getBoundingClientRect().top + 10
            //     )).backgroundColor;

            //     console.log(bgColor);
                
            //     // Convert background color to grayscale value
            //     const rgb = bgColor.match(/\d+/g);
            //     const brightness = (parseInt(rgb[0]) * 0.299 + parseInt(rgb[1]) * 0.587 + parseInt(rgb[2]) * 0.114) / 255;
                
            //     // Set SVG color based on background brightness
            //     if (brightness > 0.5) {
            //       // Dark SVG for light backgrounds
            //       svg.querySelectorAll('path').forEach(path => path.style.fill = '#000000');
            //     } else {
            //       // Light SVG for dark backgrounds
            //       svg.querySelectorAll('path').forEach(path => path.style.fill = '#FFFFFF');
            //     }
            // }

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
                //document.querySelector('header').setAttribute('data-scroll-section', '');

                const scroll = new LocomotiveScroll({
                  el: document.querySelector('[data-scroll-container]'),
                  smooth: true,
                  lerp: 0.15, // Start with a moderately responsive lerp
                  multiplier: 0.8, // Multiplier for scroll speed
                  scrollFromAnywhere: true
                });
                

                var caseStudyOverlay = document.getElementById('caseStudyOverlay');
                var caseStudyHero = document.getElementById('caseStudyHero');
                console.log(caseStudyOverlay.length);

                if( caseStudyOverlay ) {
                    scroll.on('scroll', (obj) => {
                    
                        //
                        let scrollY = obj.scroll.y;

                        if( scrollY > 32 ) {
                            console.log(obj.scroll.y);
                            if( !caseStudyOverlay.classList.contains('active') ) {
                                caseStudyOverlay.classList.add('active' );
                                caseStudyHero.classList.add('active' );
                            }
                        }else{
                            if( caseStudyOverlay.classList.contains('active') ) {
                                caseStudyOverlay.classList.remove('active' );
                                caseStudyHero.classList.remove('active' );
                            }
                        }
                    });
                }

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

                // Track Changes in Document Height to keep element attached to cursor
                let previousHeight = document.documentElement.scrollHeight;
                const heightCheckInterval = setInterval(() => {
                    const currentHeight = document.documentElement.scrollHeight;
                    if (currentHeight !== previousHeight) {
                        // Document height has changed
                        console.log('Document height changed from', previousHeight, 'to', currentHeight);
                        previousHeight = currentHeight;
                        follow.destroy();

                        setTimeout(() => {
                            follow.initiate();
                        }, 200);
                    }
                }, 500); // Check every 500 milliseconds



            }



            // Work Navigation Feature

            const workNav = document.getElementById('work_navigation_feature');

            if (workNav) {
                const workNavItems = workNav.querySelectorAll('.kb-advanced-heading-link');

                workNavItems.forEach((item) => {

                    item.addEventListener('mouseenter', function() {

                        var bg_target = '#'+this.getAttribute('data-bg-target');
                        console.log(bg_target);
                        var bg_target = document.querySelector(bg_target);
                        console.log(bg_target);
                        var bg_targets = document.querySelectorAll('.work-nav-bg');

                        bg_targets.forEach((el) => {
                            el.classList.remove('active');
                        });
                        bg_target.classList.add('active');
                    });
                });
            }






            
            // // Run on scroll and page load
            // window.addEventListener('scroll', updateSvgColor);
            // window.addEventListener('load', updateSvgColor);







            
            
          
        });
    }
}

new VinylPluginJS();