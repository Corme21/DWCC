/*Dado un vector de N elementos, modificar ese vector para que cada elemento 
conteña a suma dos anteriores.
*/

var vectorNormal = [5,1,2,9,7,6];

if(vectorNormal.length >= 3){
  for(let i = 2; i < vectorNormal.length; i++){
    vectorNormal[i] = vectorNormal[i - 1] + vectorNormal[i - 2];
  }  
}

console.log(vectorNormal);