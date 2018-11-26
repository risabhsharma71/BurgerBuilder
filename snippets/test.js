const ingredients={
    cheese:2,
    bacon:1,
    meat:2
}
console.log("object.keys====>",Object.keys(ingredients));
const transformedIngridients=Object.keys(ingredients).map(igkey=>{
    console.log("pick a particular array=======>",ingredients[igkey])
  console.log("length of array for particular filed===================>",[...Array(ingredients[igkey])])
    return[...[...Array(ingredients[igkey])]].map((_,i)=>{
   
        return(igkey+i,igkey)

})
});
console.log(transformedIngridients)