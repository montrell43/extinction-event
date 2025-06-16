
const lines = document.querySelectorAll("ol li");
// Once cliked the ol properties will be striked through with line upon effect
lines.forEach(line => {
    line.addEventListener("click", function(event) {
    event.target.style.textDecoration = "line-through";
})
})

const fades = document.querySelectorAll("ul li");
// When clicked the properties of the ul elements will fade out using opacityto .0
fades.forEach(fade => {
    fade.addEventListener("click", function(event) {
        event.target.style.opacity = "0.0";
    })
})

const images = document.querySelectorAll("img");
// for each img element upon clicking I will trasiton the using transform making img ease out of view by 2sec of a frame
images.forEach(img => {
    img.style.transition = "transform 0.2s ease-out"
    img.addEventListener("click", function(event) {
        event.target.style.transform = "scaleX(0)";
        
    })
})

function metroExtin() {
    // applying changes to all elements ol at once using the fro each method
    const lines = document.querySelectorAll('ol li');
    lines.forEach(line => {
        line.style.textDecoration = "line-through";
    })
    // applying change to all elements ul at once using the for each method
    const fades = document.querySelectorAll('ul li');
    fades.forEach(fade => {
        fade.style.opacity = '0.0';
    })
    
    // applying change to all elements img at once using the for each method
    const pictures = document.querySelectorAll("img");
    pictures.forEach(img => {
        img.style.transition = "transform 0.6s ease-out"
        img.style.transformOrigin = "top"
        img.style.transform = "rotateX(90deg)";
        });
}
// Upon Clicking this event listener all the ul, ol and img will be triggered at once destroying them from view
const button = document.querySelector('#destroy-all')
button.addEventListener('click', metroExtin)
 

