var tl = gsap.timeline()

tl.from("#nav", {
    opacity:0,
    delay:0.5,
})

tl.from("#nav h1, #nav h3, #nav h4", {
    y:-100,
    opacity:0,
    duration:1,
    stagger:0.2
})

tl.from("#left h1", {
    x:-500,
    opacity:0,
    duration:1,
    stagger:0.4
})

tl.from("#left h1 img", {
    scale:0,
    opacity:0,
    stagger:0.2
})

tl.from("#right img", {
    scale:2,
    opacity:0,
    duration:1
})

gsap.from("#page-2 #box-1, #page-2 #box-2, #page-2 #box-3", {
    scale:0,
    opacity:0,
    duration:1,
    stagger:0.4,
    scrollTrigger:{
        trigger:"#page-2 #box-1, #page-2 #box-2, #page-2 #box-3",
        scroller:"body"
    }
})