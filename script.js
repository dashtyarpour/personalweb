let themes = document.querySelectorAll('.themes')
let themeContainer = document.querySelector('.theme_container')
let themesBtn = document.querySelector('.nav_center_section_thems')
let main_themes = document.querySelectorAll('.main_themes')
// console.log(main_themes);
themesBtn.addEventListener('click' , function(){
    themeContainer.style.top = '1rem'
})

themes.forEach(function(theme){
    theme.addEventListener('click' , function(event){
        let themeColor = event.target.style.backgroundColor
        document.body.style.setProperty('--themcolor' , themeColor)
        themeContainer.style.top = '-5rem'

        

    })

})

main_themes.forEach(function(a){
    a.addEventListener('click' , function(event){
        let themeColor = event.target.style.backgroundColor
        document.body.style.setProperty('--maintheme' , themeColor)
        themeContainer.style.top = '-5rem'
        
        if(themeColor === "rgb(252, 252, 244)"){
            document.body.style.setProperty('--texttheme' , "black")
        }else{
            document.body.style.setProperty('--texttheme' , "white")
        }

        

    })

})




// setTimeout(() => {
//     function createCircle() {
//         const circle = document.createElement('div');
//         circle.className = 'circle';
//         document.body.appendChild(circle);
    
//         const initialPosition = Math.random() * window.innerWidth -20;
//         const initialSize = Math.random() * 5 + 2; // Random size between 10 and 30 pixels
    
//         circle.style.left = initialPosition + 'px';
//         circle.style.width = initialSize + 'px';
//         circle.style.height = initialSize + 'px';
    
//         const animation = circle.animate(
//             [
//                 { top: '-' + initialSize + 'px' },
//                 { top: document.body.clientHeight  + 'px' }
//             ],
//             {
//                 duration: 30000, // Animation duration in milliseconds
//                 easing: 'linear',
//                 fill: 'forwards'
//             }
//         );
    
//         animation.onfinish = () => {
//             document.body.removeChild(circle);
//         };
//         // setTimeout(() => {
//         //     document.body.removeChild(circle);
//         // }, 30000);
//     }
    
//     function createCirclesInterval() {
//         setInterval(() => {
//             for (let i = 0; i < 5; i++) {
//                 createCircle();
//             }
//         }, 1000);
//     }
//     createCirclesInterval();
// }, 20000);


// Start the animation
