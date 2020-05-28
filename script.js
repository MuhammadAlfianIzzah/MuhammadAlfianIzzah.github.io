const sidenav = document.querySelectorAll('.sidenav');
M.Sidenav.init(sidenav);
const slider = document.querySelectorAll('.slider');
M.Slider.init(slider, {
    indicators: true,
    duration: 500,
    interval: 4000
});
const collapsible = document.querySelectorAll('.collapsible');
M.Collapsible.init(collapsible);
const scroolSpy = document.querySelectorAll('.scrollspy');
M.ScrollSpy.init(scroolSpy, {
    scrollOffset: 90
});
const materialboxed = document.querySelectorAll('.materialboxed');
M.Materialbox.init(materialboxed);
console.log('OKE');