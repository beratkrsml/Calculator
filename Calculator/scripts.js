var tbcal="";
const userinp= document.getElementById('useinp');
const compinp= document.getElementById('compout');
function calcad(value){
    tbcal += value;
    useinp.value = tbcal;
}
function removech(){
    tbcal= tbcal.substring(0,tbcal.length - 1);
    useinp.value=tbcal;
}
function execm(){
    if(tbcal.length== 0||tbcal==""){
        alert("Değer Giriniz");
        return;
    }
    try{
        ans=eval(tbcal);
        compinp.value = ans;
    }
    catch(err){
        alert("Geçersiz Değer");
    }
}
function reset(){
    useinp.value="";
    compinp.value="";
    tbcal="";
}