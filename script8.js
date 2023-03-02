// 1
class movie{
    constructor(title,studio,rating){
      this.title=title;
      this.rating=rating;
    }
  rating(){
      return this.rating;
    }
  }
  var m1=new movie("Casino Royale", "Eon Productions","PG­13");
  console.log(m1.rating);

//  2
class circle{
    constructor(color,radius){
      this.color=color;
      this.radius=radius;
    }
  circumference(){
      return (2*3.14*this.radius);
    }
  }
  var c1=new circle("red",1.0);
  console.log(c1.circumference());

//  3
class person{
    constructor(name,age,year){
        this.name=name;
        this.age=age;
        this.year=year;
    }
    
    age(){
        return this.age;
      }
    }
    var p1=new person("priya",32,2023);
    console.log(p1.age);
    
    // 4
    class uber{
        constructor(name,km){
          this.name=name;
          this.km=km;
      }
      price(){
        return this.km*18;
      }
      }
      var u1=new uber("viji",32);
      console.log(u1.price)();
