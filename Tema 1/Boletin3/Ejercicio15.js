/*
Vamos facer unha simulación do xogo da canción infantil pim-pam-pum.
Consiste en ir dicindo alternativamente cada neno os números naturais dende o 1 ata o 30 de maneira que:
- Se o número é divisible por 2 dise "pim"
- Se o número é divisible por 3 dise "pam"
- Se o número é divisible por 5 dise "pum"
- Se é divisible por máis dun número faise a combinación correspondente.
- Se non é divisible por ningún dos números dise o número
*/
for(let i = 1; i <= 30; i++){
    if(i % 2 == 0){
        document.write("</br>pim");
    }else if(i % 3 == 0){
        document.write("</br>pam");
    }else if(i % 5 == 0){
        document.write("</br>pum");
    }else if(i % 2 == 0 && i % 3 == 0){
        document.write("</br>pim pam");
    }else if(i % 2 == 0 && i % 5 == 0){
        document.write("</br>pim pum");
    }else if(i % 3 == 0 && i % 5 == 0){
        document.write("</br>pam pum");
    }else{
        document.write(`</br>${i}`);
    }
}