function myName(name, add) {
    console.log('Hello', name);
    add();
}

function add(){
    console.log('your Adress is Ghazipur');
}

myName('Archana', add);