class Tree {
    name = "";
    age = 10;
    type = "";

    set name(x){
        if (x == "yes"){
            this.name = "testing";
        } else {
            this.name = x;
        }
    }
}

let x = new Tree();
x.name = "mango";
console.log(x.name);