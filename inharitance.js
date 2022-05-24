let shape = { is2D : true}
let circle = {radius : 3}
let rectangle={lenghth :1 , breadth :2}
circle._proto_ = shape;
console.log (shape.is2D, circle.radius);
rectangle._proto_=shape;
console.log (rectangle.is2D,rectangle.lenghth,rectangle.breadth);