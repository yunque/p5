// ***************************************************** //
// Assignment 1: Port an Image to Code
//
// Primitive reconstruction of a crop of Paul Klee's Dream City (1921)
// c.f. http://uploads7.wikiart.org/images/paul-klee/dream-city-1921%281%29.jpg
//
// TODO: llenar el lienzo, o ampliar todo hasta llenarlo
//
// ***************************************************** //

// Despliega el lienzo
createCanvas(1024, 768);

// Background
background(0, 200, 170);
rect(0, 0, 300, 250);
fill(0, 170, 170);
rect(30, 30, 300, 220);

// Faint circle
fill(80, 70, 0);
ellipse(200, 100, 200, 180);
rotate(PI/7);

// Yellow crescent
fill(200, 150, 0);
ellipse(100, 100, 200, 180);
rotate(PI/7);

// Aqua circle
fill(0, 150, 100);
ellipse(75, 25, 60, 50);
