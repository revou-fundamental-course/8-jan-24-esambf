function persegi( )
{
var s,l,k;
s = parseInt(document.getElementById("sisi").value);
l = s*s; 
k = s*4;
document.getElementById("hasil1").innerHTML="Luas Persegi : "+l;
document.getElementById("hasil2").innerHTML="Keliling Persegi : "+k;
}