let magicians : string[] =[
    "DON","RAMEEZ","CHRIS"
];
function make_great(magicians: string[]){
    for(let i = 0; i < magicians.length; i++){
        magicians[i] = magicians[i] + "The Great";
    }
}
make_great(magicians);
console.log(magicians)