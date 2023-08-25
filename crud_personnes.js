//declare all ids
let nom = document.getElementById('nom'),
 prenom = document.getElementById("prenom"),
 tel = document.getElementById("tel"),
 email = document.getElementById("email"),
 adress = document.getElementById("adresse"),
 submit = document.getElementById("submit");



//add personnes
let person_data;
if(localStorage.persone != null)
{
person_data =JSON.parse(localStorage.persone);
}
else
{
     person_data = [];
}


function Add_person()
{
   
    let new_person = {Nom:nom.value,
                      Prenom:prenom.value,
                      Tel:tel.value,
                      Email:email.value,
                      Adress:adress.value};
    person_data.push(new_person);
    localStorage.setItem('persone',JSON.stringify(person_data));
   // p = localStorage.persone.Tel;
    //console.log(p);
   
    Clear_person_after_add();
    Show_person();
}

function Clear_person_after_add()
{
    nom.value='';
    prenom.value='';
    tel.value='';
    email.value='';
    adress.value='';

    Show_person()
}

function Show_person()
{
let table ='';
for(let i =0;i < person_data.length;i++)
{
    table += "<tr><td>"+i+"</td><td>"+person_data[i].Nom+"</td><td>"+ person_data[i].Prenom +"</td><td>"+person_data[i].Tel+"</td><td>"+person_data[i].Email+"</td><td>"+ person_data[i].Adress +"</td> <td><button onclick='Edit_person("+i+");' type='submit' id='modifier'>Modifier</button></td><td><button onclick='Delete_person("+i+");' type='submit' id='supprimer'>Supprimer</button></td>";
}
document.getElementById('tbody').innerHTML = table;
                                                  
}

function Edit_person(i)
{
    
    nom.value=person_data[i].Nom;
    prenom.value=person_data[i].Prenom;
    tel.value=person_data[i].Tel;
    email.value=person_data[i].Email;
    adress.value=person_data[i].Adress;
    Show_person();
}



Show_person();



























