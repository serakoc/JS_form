var tableau_de_valeur = [];
var compteur = 1;
var value_input = undefined;
 
var tableau_de_titre = [
    "Votre nom :",
    "Votre prenom :",
    "Votre sexe :",
    "Votre date de naissance :",
    "Votre adresse :",
    "Votre code postal :",
    "Votre ville",
    "Votre email :",
    "Votre sujet :",
    "Votre demande :",
    "J'accepte le traitement informatique de ce formulaire"
];
var tab_id = 
[
    "nom",
    "prenom",
    "sexe",
    "date",
    "adresse",
    "postal",
    "ville",
    "email",
    "sujet",
    "demande",
    "confirmation"
];

var nbr_etape = 0;
var etape_plus = 100/tableau_de_titre.length;


$("#titre").text(tableau_de_titre[0]);

$("#valeur").click(function()
{   
    //Prend la valeur de l'input et l'attribut a une variable.
    value_input = $("#cobaye").val();

    //Supprime l'erreur car c'est nouvelle insertion 
    $("#danger").remove();
    if(value_input != undefined && value_input != "" && compteur != 4)
    {
        //Affiche une value différente lorsque le derniers champs du 
        //formulaire est atteint.
        if(compteur+1 == tableau_de_titre.length)
        {
            $("#valeur").val("Valider le formulaire");
            $("#cobaye").attr("placeholder","taper 'ok' pour valider !");
        }

        //insérer la valeur de l'input dans le tableau en derniere position.
        tableau_de_valeur.push(value_input);

        //Vide le champs de l'input quand on clique sur l'évenement
        //et après avoir insérer la valeur de l'input dans le tableau.
        $("#cobaye").val("");
    
        //si le nombre de champs du formulaire a atteint son maximum :
        //teste avec le nombre de variable insérer dans tableau de titre
        //alors on supprime tous les champs inutiles et l'on envoie le formulaire.
        if(compteur == tableau_de_titre.length)
        {
        //     $("#titre").remove();
        //     $("#cobaye").remove();
        //     $("#valeur").remove();
            envoie_form();
        }
        //si tout les champs n'ont pas été remplis, donc que compteur
        //ne vaut pas le nombre d'insertion dans le tableau alors 
        //on prend la valeur suivante, en simulant un changement de champs
        //en changeant simplement le titre.
        else
        {
            $("#titre").remove();
            $("#insert").prepend('<p id="titre"></p>')
            $("#titre").text(tableau_de_titre[compteur]); 
        }
        //on incrémente le compteur seulement quand le champs n'est pas vide 
        //donc considérer comme valider.
        
    
        if(compteur == 2)
        {
            $("#cobaye").hide();
            $("#div_sexe").show();
        }
        compteur++;
        nbr_etape+=etape_plus;
        $("#progression-bar").width(nbr_etape+"%");
    }
    else if(compteur == 3)
    {
        // n'est pas finie manque l'attribution a une variable
        var h = $("#h").is(':checked');
        var f = $("#f").is(':checked');
        console.log(h + " " + f);
        $("#titre").remove();
        $("#insert").prepend('<p id="titre"></p>')
        $("#titre").text(tableau_de_titre[compteur]); 
        $("#div_sexe").hide();
        $("#date_input").show();

        //ici gérer le cas pour compteur 3 donc la date de naissance
        compteur++;
        nbr_etape+=etape_plus;
        $("#progression-bar").width(nbr_etape+"%");
    }
    else if(compteur == 4)
    {
        //gerer l'attriution des variables 
        $("#titre").remove();
        $("#insert").prepend('<p id="titre"></p>')
        $("#titre").text(tableau_de_titre[compteur]); 
        $("#date_input").hide();
        $("#cobaye").show();
        console.log($("#date_input").val());
        compteur++;
        nbr_etape+=etape_plus;
        $("#progression-bar").width(nbr_etape+"%");
    }
    //si le champs de l'input est vide alors on 
    //affiche simplement l'erreur concernée.
    else
    {
        document.getElementById("insert").insertAdjacentHTML("beforeend","<span id='danger'>Votre input est vide !</span>");
    }
    console.log(compteur);
});

function envoie_form()
{
    //inseres les valeurs des inputs du tableau dans le formulaire via des attr
    //envoie le formulaires suites a sa.
    for (i = 0; i < tab_id.length; i++ )
    {
        $("#"+tab_id[i]).attr("value",tableau_de_valeur[i]);
        $("form").submit();
    }
}