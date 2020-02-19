var tableau_de_valeur = [];
var compteur = 0;
var value_input = undefined;

var regexNom = /^[a-zA-Zéèçàê]+-?[a-zA-Zéèçàê]+$/;
var regexPrenom = /^[a-zA-Zéèçàê]+-?[a-zA-Zéèçàê]+$/;
var regexEmail = /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/;
var regPostal = /^[0-9]{5,5}$/;
var regAdresse = /^[a-zA-Z0-9\-\ ]+$/;
var regVille = /^[A-Za-z\-\ ]+$/;
var regText = /^[A-Za-z\ ]+$/;
var regDemande = /^[A-Za-z\ 0-9]+$/;


var tableau_de_titre = [
    "Votre nom :",
    "Votre prenom :",
    "Votre sexe :",
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
        "adresse",
        "postal",
        "ville",
        "email",
        "sujet",
        "demande",
        "confirmation"
    ];

var nbr_etape = 0;
var etape_plus = 100 / tableau_de_titre.length;


$("#titre").text("go");
$("#cobaye").hide();
$("#retour").hide();


$("#retour").click(function () {
    if (compteur > 0) {
        console.log(compteur);
        //compteur décrementer pour pouvoir "attraper" l'étape
        compteur--;

        //soustraction de nbr_etape pour pouvoir actualiser la barre de progression
        nbr_etape -= etape_plus;
        $("#progression-bar").width(nbr_etape + "%");
        console.log(compteur);
        switch (compteur) {
            case 0:
                //on supprimer le titre afin de pouvoir l'acutaliser
                $("#titre").remove();
                //on supprime la dernier valeur du tableau
                tableau_de_valeur.pop();
                //on insere le code html correspondant
                $("#insert").prepend('<p id="titre"></p>')
                $("#titre").text("go");
                $("#cobaye").hide();
                $("#retour").hide();

                // $("#div_sexe").show();
                // $("#cobaye").show();
                break;
            case 1:
                //on supprimer le titre afin de pouvoir l'acutaliser
                $("#titre").remove();
                //on supprime la dernier valeur du tableau
                tableau_de_valeur.pop();
                //on insere le code html correspondant
                $("#insert").prepend('<p id="titre"></p>')
                $("#titre").text(tableau_de_titre[compteur - 1]);
                $("#" + compteur).remove();

                break;
            case 2:
                //on supprimer le titre afin de pouvoir l'acutaliser
                $("#titre").remove();
                //on supprime la dernier valeur du tableau
                tableau_de_valeur.pop();
                //on insere le code html correspondant
                $("#insert").prepend('<p id="titre"></p>')
                $("#titre").text(tableau_de_titre[compteur - 1]);
                $("#div_sexe").hide();
                $("#cobaye").show();
                $("#" + compteur).remove();
                break;

            case 3:
                //on supprimer le titre afin de pouvoir l'acutaliser
                $("#titre").remove();
                //on supprime la dernier valeur du tableau
                tableau_de_valeur.pop();
                //on insere le code html correspondant
                $("#insert").prepend('<p id="titre"></p>')
                $("#titre").text(tableau_de_titre[compteur - 1]);
                $("#div_sexe").show();
                $("#cobaye").hide();
                $("#" + compteur).remove();
                break;

            case 4:
                //on supprimer le titre afin de pouvoir l'acutaliser
                $("#titre").remove();
                //on supprime la dernier valeur du tableau
                tableau_de_valeur.pop();
                //on insere le code html correspondant
                $("#insert").prepend('<p id="titre"></p>')
                $("#titre").text(tableau_de_titre[compteur - 1]);
                $("#" + compteur).remove();
                break;
            case 5:
                //on supprimer le titre afin de pouvoir l'acutaliser
                $("#titre").remove();
                //on supprime la dernier valeur du tableau
                tableau_de_valeur.pop();
                //on insere le code html correspondant
                $("#insert").prepend('<p id="titre"></p>')
                $("#titre").text(tableau_de_titre[compteur - 1]);
                $("#" + compteur).remove();
                break;
            case 6:
                //on supprimer le titre afin de pouvoir l'acutaliser
                $("#titre").remove();
                //on supprime la dernier valeur du tableau
                tableau_de_valeur.pop();
                //on insere le code html correspondant
                $("#insert").prepend('<p id="titre"></p>')
                $("#titre").text(tableau_de_titre[compteur - 1]);
                $("#" + compteur).remove();
                break;
            case 7:
                //on supprimer le titre afin de pouvoir l'acutaliser
                $("#titre").remove();
                //on supprime la dernier valeur du tableau
                tableau_de_valeur.pop();
                //on insere le code html correspondant
                $("#insert").prepend('<p id="titre"></p>')
                $("#titre").text(tableau_de_titre[compteur - 1]);
                $("#" + compteur).remove();
                break;
            case 8:
                //on supprimer le titre afin de pouvoir l'acutaliser
                $("#titre").remove();
                //on supprime la dernier valeur du tableau
                tableau_de_valeur.pop();
                //on insere le code html correspondant
                $("#insert").prepend('<p id="titre"></p>')
                $("#titre").text(tableau_de_titre[compteur - 1]);
                $("#" + compteur).remove();
                break;
            case 9:
                //on supprimer le titre afin de pouvoir l'acutaliser
                $("#titre").remove();
                //on supprime la dernier valeur du tableau
                tableau_de_valeur.pop();
                //on insere le code html correspondant
                $("#insert").prepend('<p id="titre"></p>')
                $("#titre").text(tableau_de_titre[compteur - 1]);
                $("#" + compteur).remove();
                break;
            case 10:
                //on supprimer le titre afin de pouvoir l'acutaliser
                $("#titre").remove();
                //on supprime la dernier valeur du tableau
                tableau_de_valeur.pop();
                //on insere le code html correspondant
                $("#insert").prepend('<p id="titre"></p>')
                $("#titre").text(tableau_de_titre[compteur - 1]);
                $("#" + compteur).remove();
                break;
        }

    }
    else {

    }
    console.log(compteur);
});


$("#valeur").click(function () {

    //Prend la valeur de l'input et l'attribut a une variable.
    value_input = $("#cobaye").val();

    //Supprime l'erreur car c'est nouvelle insertion 
    $("#danger").remove();
    console.log(compteur);
    if (compteur == -1) {
        compteur++;
    }
    switch (compteur) {
        case 0:
            $("#cobaye").show();
            $("#retour").show();
            console.log(compteur);
            //Vide le champs de l'input quand on clique sur l'évenement
            //et après avoir insérer la valeur de l'input dans le tableau.
            $("#cobaye").val("");
            $("#titre").remove();
            $("#insert").prepend('<p id="titre"></p>')
            $("#titre").text(tableau_de_titre[compteur]);
            //on incrémente le compteur seulement quand le champs n'est pas vide 
            //donc considérer comme valider.

            compteur++;
            nbr_etape += etape_plus;
            $("#progression-bar").width(nbr_etape + "%");
            break;
        case 1:
            $("#insert").show();
            $("#cobaye").show();
            $("#retour").show();
            if (value_input != undefined && value_input != "") {
                if (regexNom.test(value_input)) {
                    //Affiche une value différente lorsque le derniers champs du 
                    //formulaire est atteint.
                    if (compteur + 1 == tableau_de_titre.length) {
                        $("#valeur").val("Valider le formulaire");
                        $("#cobaye").attr("placeholder", "taper 'ok' pour valider !");
                    }

                    //insérer la valeur de l'input dans le tableau en derniere position.
                    tableau_de_valeur.push(value_input);

                    //Vide le champs de l'input quand on clique sur l'évenement
                    //et après avoir insérer la valeur de l'input dans le tableau.
                    $("#cobaye").val("");

                    //si le nombre de champs du formulaire a atteint son maximum :
                    //teste avec le nombre de variable insérer dans tableau de titre
                    //alors on supprime tous les champs inutiles et l'on envoie le formulaire.
                    if (compteur == tableau_de_titre.length) {
                        //     $("#titre").remove();
                        //     $("#cobaye").remove();
                        //     $("#valeur").remove();
                        envoie_form();
                    }
                    //si tout les champs n'ont pas été remplis, donc que compteur
                    //ne vaut pas le nombre d'insertion dans le tableau alors 
                    //on prend la valeur suivante, en simulant un changement de champs
                    //en changeant simplement le titre.
                    else {
                        $("#titre").remove();
                        $("#insert").prepend('<p id="titre"></p>')
                        $("#titre").text(tableau_de_titre[compteur]);
                    }
                    //on incrémente le compteur seulement quand le champs n'est pas vide 
                    //donc considérer comme valider.

                    $("#topo").append("<span class=\"update\" id=" + compteur + ">Nom</span>");
                    $("#" + compteur).click(function () {
                        var compteur_boucle = parseInt(this.id);
                        while (compteur > compteur_boucle) {
                            $("#retour").click();
                        }
                    });
                    compteur++;
                    nbr_etape += etape_plus;
                    $("#progression-bar").width(nbr_etape + "%");

                }
                else {
                    document.getElementById("insert").insertAdjacentHTML("beforeend", "<span id='danger'>Votre nom contient des chiffres. Attention !</span>");
                }
            }
            else {
                document.getElementById("insert").insertAdjacentHTML("beforeend", "<span id='danger'>Votre input est vide !</span>");
            } break;
        case 2:
            if (value_input != undefined && value_input != "") {
                if (regexPrenom.test(value_input)) {
                    //Affiche une value différente lorsque le derniers champs du 
                    //formulaire est atteint.
                    if (compteur + 1 == tableau_de_titre.length) {
                        $("#valeur").val("Valider le formulaire");
                        $("#cobaye").attr("placeholder", "taper 'ok' pour valider !");
                    }

                    //insérer la valeur de l'input dans le tableau en derniere position.
                    tableau_de_valeur.push(value_input);

                    //Vide le champs de l'input quand on clique sur l'évenement
                    //et après avoir insérer la valeur de l'input dans le tableau.
                    $("#cobaye").val("");

                    //si le nombre de champs du formulaire a atteint son maximum :
                    //teste avec le nombre de variable insérer dans tableau de titre
                    //alors on supprime tous les champs inutiles et l'on envoie le formulaire.
                    if (compteur == tableau_de_titre.length) {
                        //     $("#titre").remove();
                        //     $("#cobaye").remove();
                        //     $("#valeur").remove();
                        envoie_form();
                    }
                    //si tout les champs n'ont pas été remplis, donc que compteur
                    //ne vaut pas le nombre d'insertion dans le tableau alors 
                    //on prend la valeur suivante, en simulant un changement de champs
                    //en changeant simplement le titre.
                    else {
                        $("#titre").remove();
                        $("#insert").prepend('<p id="titre"></p>')
                        $("#titre").text(tableau_de_titre[compteur]);
                    }
                    //on incrémente le compteur seulement quand le champs n'est pas vide 
                    //donc considérer comme valider.
                    $("#cobaye").hide();
                    $("#div_sexe").show();
                    $("#topo").append("<span class=\"update\" id=" + compteur + ">Prénom</span>");
                    $("#" + compteur).click(function () {
                        var compteur_boucle = parseInt(this.id);
                        while (compteur > compteur_boucle) {
                            $("#retour").click();
                        }
                    });
                    compteur++;
                    nbr_etape += etape_plus;
                    $("#progression-bar").width(nbr_etape + "%");
                }
                else {
                    document.getElementById("insert").insertAdjacentHTML("beforeend", "<span id='danger'>Votre prénom contient des chiffres. Attention !</span>");
                }
            }
            else {
                document.getElementById("insert").insertAdjacentHTML("beforeend", "<span id='danger'>Votre input est vide !</span>");
            } break;

        case 3:
            var h = $("#h").is(':checked');
            var f = $("#f").is(':checked');
            if ((!h && !f) || (h && f)) {
                document.getElementById("insert").insertAdjacentHTML("beforeend", "<span id='danger'>(des boutons radios vont être ajoutées)</span>");
            }
            else {
                if (h) {
                    tableau_de_valeur.push("homme");
                }
                else if (f) {
                    tableau_de_valeur.push("femme");
                }
                $("#danger").remove();
                $("#titre").remove();
                $("#insert").prepend('<p id="titre"></p>');
                $("#titre").text(tableau_de_titre[compteur]);
                $("#div_sexe").hide();
                $("#cobaye").show();
                $("#titre").remove();
                $("#insert").prepend('<p id="titre"></p>')
                $("#titre").text(tableau_de_titre[compteur]);

                $("#topo").append("<span class=\"update\" id=" + compteur + ">Sexe</span>");
                $("#" + compteur).click(function () {
                    var compteur_boucle = parseInt(this.id);
                    while (compteur > compteur_boucle) {
                        $("#retour").click();
                    }
                });
                //ici gérer le cas pour compteur 3 donc la date de naissance
                compteur++;
                nbr_etape += etape_plus;
                $("#progression-bar").width(nbr_etape + "%");
            }
            console.log(compteur);
            break;
        case 4:
            if (value_input != undefined && value_input != "") {
                if (regAdresse.test(value_input)) {
                    //Affiche une value différente lorsque le derniers champs du 
                    //formulaire est atteint.
                    if (compteur + 1 == tableau_de_titre.length) {
                        $("#valeur").val("Valider le formulaire");
                        $("#cobaye").attr("placeholder", "taper 'ok' pour valider !");
                    }

                    //insérer la valeur de l'input dans le tableau en derniere position.
                    tableau_de_valeur.push(value_input);

                    //Vide le champs de l'input quand on clique sur l'évenement
                    //et après avoir insérer la valeur de l'input dans le tableau.
                    $("#cobaye").val("");

                    //si le nombre de champs du formulaire a atteint son maximum :
                    //teste avec le nombre de variable insérer dans tableau de titre
                    //alors on supprime tous les champs inutiles et l'on envoie le formulaire.
                    if (compteur == tableau_de_titre.length) {
                        //     $("#titre").remove();
                        //     $("#cobaye").remove();
                        //     $("#valeur").remove();
                        envoie_form();
                    }
                    //si tout les champs n'ont pas été remplis, donc que compteur
                    //ne vaut pas le nombre d'insertion dans le tableau alors 
                    //on prend la valeur suivante, en simulant un changement de champs
                    //en changeant simplement le titre.
                    else {
                        $("#titre").remove();
                        $("#insert").prepend('<p id="titre"></p>')
                        $("#titre").text(tableau_de_titre[compteur]);
                    }
                    //on incrémente le compteur seulement quand le champs n'est pas vide 
                    //donc considérer comme valider.

                    $("#topo").append("<span class=\"update\" id=" + compteur + ">Adresse</span>");
                    $("#" + compteur).click(function () {
                        var compteur_boucle = parseInt(this.id);
                        while (compteur > compteur_boucle) {
                            $("#retour").click();
                        }
                    });
                    compteur++;
                    nbr_etape += etape_plus;
                    $("#progression-bar").width(nbr_etape + "%");
                }
                else {
                    document.getElementById("insert").insertAdjacentHTML("beforeend", "<span id='danger'>Votre adresse peut contenir des chiffres, lettres, caractères spéciaux - et espaces.</span>");
                }
            }
            else {
                document.getElementById("insert").insertAdjacentHTML("beforeend", "<span id='danger'>Votre input est vide !</span>");
            } break;
        case 5:
            if (value_input != undefined && value_input != "") {
                if (regPostal.test(value_input)) {
                    //Affiche une value différente lorsque le derniers champs du 
                    //formulaire est atteint.
                    if (compteur + 1 == tableau_de_titre.length) {
                        $("#valeur").val("Valider le formulaire");
                        $("#cobaye").attr("placeholder", "taper 'ok' pour valider !");
                    }

                    //insérer la valeur de l'input dans le tableau en derniere position.
                    tableau_de_valeur.push(value_input);

                    //Vide le champs de l'input quand on clique sur l'évenement
                    //et après avoir insérer la valeur de l'input dans le tableau.
                    $("#cobaye").val("");

                    //si le nombre de champs du formulaire a atteint son maximum :
                    //teste avec le nombre de variable insérer dans tableau de titre
                    //alors on supprime tous les champs inutiles et l'on envoie le formulaire.
                    if (compteur == tableau_de_titre.length) {
                        //     $("#titre").remove();
                        //     $("#cobaye").remove();
                        //     $("#valeur").remove();
                        envoie_form();
                    }
                    //si tout les champs n'ont pas été remplis, donc que compteur
                    //ne vaut pas le nombre d'insertion dans le tableau alors 
                    //on prend la valeur suivante, en simulant un changement de champs
                    //en changeant simplement le titre.
                    else {
                        $("#titre").remove();
                        $("#insert").prepend('<p id="titre"></p>')
                        $("#titre").text(tableau_de_titre[compteur]);
                    }
                    //on incrémente le compteur seulement quand le champs n'est pas vide 
                    //donc considérer comme valider.

                    $("#topo").append("<span class=\"update\" id=" + compteur + ">Postal</span>");
                    $("#" + compteur).click(function () {
                        var compteur_boucle = parseInt(this.id);
                        while (compteur > compteur_boucle) {
                            $("#retour").click();
                        }
                    });
                    compteur++;
                    nbr_etape += etape_plus;
                    $("#progression-bar").width(nbr_etape + "%");

                }
                else {
                    document.getElementById("insert").insertAdjacentHTML("beforeend", "<span id='danger'>Votre code postal doit contenir 5 chiffres qui sont obligatoires (00000/99999)</span>");
                }
            }
            else {
                document.getElementById("insert").insertAdjacentHTML("beforeend", "<span id='danger'>Votre input est vide !</span>");
            } break;
        case 6:
            if (value_input != undefined && value_input != "") {
                if (regVille.test(value_input)) {
                    //Affiche une value différente lorsque le derniers champs du 
                    //formulaire est atteint.

                    if (compteur + 1 == tableau_de_titre.length) {
                        $("#valeur").val("Valider le formulaire");
                        $("#cobaye").attr("placeholder", "taper 'ok' pour valider !");
                    }

                    //insérer la valeur de l'input dans le tableau en derniere position.
                    tableau_de_valeur.push(value_input);

                    //Vide le champs de l'input quand on clique sur l'évenement
                    //et après avoir insérer la valeur de l'input dans le tableau.
                    $("#cobaye").val("");

                    //si le nombre de champs du formulaire a atteint son maximum :
                    //teste avec le nombre de variable insérer dans tableau de titre
                    //alors on supprime tous les champs inutiles et l'on envoie le formulaire.
                    if (compteur == tableau_de_titre.length) {
                        //     $("#titre").remove();
                        //     $("#cobaye").remove();
                        //     $("#valeur").remove();
                        envoie_form();
                    }
                    //si tout les champs n'ont pas été remplis, donc que compteur
                    //ne vaut pas le nombre d'insertion dans le tableau alors 
                    //on prend la valeur suivante, en simulant un changement de champs
                    //en changeant simplement le titre.
                    else {
                        $("#titre").remove();
                        $("#insert").prepend('<p id="titre"></p>')
                        $("#titre").text(tableau_de_titre[compteur]);
                    }
                    //on incrémente le compteur seulement quand le champs n'est pas vide 
                    //donc considérer comme valider.

                    $("#topo").append("<span class=\"update\" id=" + compteur + ">Ville</span>");
                    $("#" + compteur).click(function () {
                        var compteur_boucle = parseInt(this.id);
                        while (compteur > compteur_boucle) {
                            $("#retour").click();
                        }
                    });
                    compteur++;
                    nbr_etape += etape_plus;
                    $("#progression-bar").width(nbr_etape + "%");
                }
                else {
                    document.getElementById("insert").insertAdjacentHTML("beforeend", "<span id='danger'>Votre ville peut contenir des lettres, - et espaces.</span>");
                }
            }
            else {
                document.getElementById("insert").insertAdjacentHTML("beforeend", "<span id='danger'>Votre input est vide !</span>");
            } break;
        case 7:
            if (value_input != undefined && value_input != "") {
                if (regexEmail.test(value_input)) {

                    //Affiche une value différente lorsque le derniers champs du 
                    //formulaire est atteint.
                    if (compteur + 1 == tableau_de_titre.length) {
                        $("#valeur").val("Valider le formulaire");
                        $("#cobaye").attr("placeholder", "taper 'ok' pour valider !");
                    }

                    //insérer la valeur de l'input dans le tableau en derniere position.
                    tableau_de_valeur.push(value_input);

                    //Vide le champs de l'input quand on clique sur l'évenement
                    //et après avoir insérer la valeur de l'input dans le tableau.
                    $("#cobaye").val("");

                    //si le nombre de champs du formulaire a atteint son maximum :
                    //teste avec le nombre de variable insérer dans tableau de titre
                    //alors on supprime tous les champs inutiles et l'on envoie le formulaire.
                    if (compteur == tableau_de_titre.length) {
                        //     $("#titre").remove();
                        //     $("#cobaye").remove();
                        //     $("#valeur").remove();
                        envoie_form();
                    }
                    //si tout les champs n'ont pas été remplis, donc que compteur
                    //ne vaut pas le nombre d'insertion dans le tableau alors 
                    //on prend la valeur suivante, en simulant un changement de champs
                    //en changeant simplement le titre.
                    else {
                        $("#titre").remove();
                        $("#insert").prepend('<p id="titre"></p>')
                        $("#titre").text(tableau_de_titre[compteur]);
                    }
                    //on incrémente le compteur seulement quand le champs n'est pas vide 
                    //donc considérer comme valider.

                    $("#topo").append("<span class=\"update\" id=" + compteur + ">E-mail</span>");
                    $("#" + compteur).click(function () {
                        var compteur_boucle = parseInt(this.id);
                        while (compteur > compteur_boucle) {
                            $("#retour").click();
                        }
                    });
                    compteur++;
                    nbr_etape += etape_plus;
                    $("#progression-bar").width(nbr_etape + "%");

                }
                else {
                    document.getElementById("insert").insertAdjacentHTML("beforeend", "<span id='danger'>Votre email doit êtres conformes : format0@mail.fr</span>");
                }
            }
            else {
                document.getElementById("insert").insertAdjacentHTML("beforeend", "<span id='danger'>Votre input est vide !</span>");
            } break;
        case 8:
            if (value_input != undefined && value_input != "") {
                if (regText.test(value_input)) {
                    //Affiche une value différente lorsque le derniers champs du 
                    //formulaire est atteint.
                    if (compteur + 1 == tableau_de_titre.length) {
                        $("#valeur").val("Valider le formulaire");
                        $("#cobaye").attr("placeholder", "taper 'ok' pour valider !");
                    }

                    //insérer la valeur de l'input dans le tableau en derniere position.
                    tableau_de_valeur.push(value_input);

                    //Vide le champs de l'input quand on clique sur l'évenement
                    //et après avoir insérer la valeur de l'input dans le tableau.
                    $("#cobaye").val("");

                    //si le nombre de champs du formulaire a atteint son maximum :
                    //teste avec le nombre de variable insérer dans tableau de titre
                    //alors on supprime tous les champs inutiles et l'on envoie le formulaire.
                    if (compteur == tableau_de_titre.length) {
                        //     $("#titre").remove();
                        //     $("#cobaye").remove();
                        //     $("#valeur").remove();
                        envoie_form();
                    }
                    //si tout les champs n'ont pas été remplis, donc que compteur
                    //ne vaut pas le nombre d'insertion dans le tableau alors 
                    //on prend la valeur suivante, en simulant un changement de champs
                    //en changeant simplement le titre.
                    else {
                        $("#titre").remove();
                        $("#insert").prepend('<p id="titre"></p>')
                        $("#titre").text(tableau_de_titre[compteur]);
                    }
                    //on incrémente le compteur seulement quand le champs n'est pas vide 
                    //donc considérer comme valider.

                    $("#topo").append("<span class=\"update\" id=" + compteur + ">Sujet</span>");
                    $("#" + compteur).click(function () {
                        var compteur_boucle = parseInt(this.id);
                        while (compteur > compteur_boucle) {
                            $("#retour").click();
                        }
                    });
                    compteur++;
                    nbr_etape += etape_plus;
                    $("#progression-bar").width(nbr_etape + "%");
                }
                else {
                    document.getElementById("insert").insertAdjacentHTML("beforeend", "<span id='danger'>Votre sujet ne doit contenir aux choses que des lettres et espaces.</span>");
                }
            }
            else {
                document.getElementById("insert").insertAdjacentHTML("beforeend", "<span id='danger'>Votre input est vide !</span>");
            } break;
        case 9:
            if (value_input != undefined && value_input != "") {
                if (regVille.test(value_input)) {
                    //Affiche une value différente lorsque le derniers champs du 
                    //formulaire est atteint.
                    if (compteur + 1 == tableau_de_titre.length) {
                        $("#valeur").val("Valider le formulaire");
                        $("#cobaye").attr("placeholder", "taper 'ok' pour valider !");
                    }

                    //insérer la valeur de l'input dans le tableau en derniere position.
                    tableau_de_valeur.push(value_input);

                    //Vide le champs de l'input quand on clique sur l'évenement
                    //et après avoir insérer la valeur de l'input dans le tableau.
                    $("#cobaye").val("");

                    //si le nombre de champs du formulaire a atteint son maximum :
                    //teste avec le nombre de variable insérer dans tableau de titre
                    //alors on supprime tous les champs inutiles et l'on envoie le formulaire.
                    if (compteur == tableau_de_titre.length) {
                        //     $("#titre").remove();
                        //     $("#cobaye").remove();
                        //     $("#valeur").remove();
                        envoie_form();
                    }
                    //si tout les champs n'ont pas été remplis, donc que compteur
                    //ne vaut pas le nombre d'insertion dans le tableau alors 
                    //on prend la valeur suivante, en simulant un changement de champs
                    //en changeant simplement le titre.
                    else {
                        $("#titre").remove();
                        $("#insert").prepend('<p id="titre"></p>')
                        $("#titre").text(tableau_de_titre[compteur]);
                    }
                    //on incrémente le compteur seulement quand le champs n'est pas vide 
                    //donc considérer comme valider.

                    $("#topo").append("<span class=\"update\" id=" + compteur + ">Demande</span>");
                    $("#" + compteur).click(function () {
                        var compteur_boucle = parseInt(this.id);
                        while (compteur > compteur_boucle) {
                            $("#retour").click();
                        }
                    });
                    compteur++;
                    nbr_etape += etape_plus;
                    $("#progression-bar").width(nbr_etape + "%");

                }
                else {
                    document.getElementById("insert").insertAdjacentHTML("beforeend", "<span id='danger'>Votre demande ne peut contenir que des lettres, chiffre et espaces</span>");
                }
            }
            else {
                document.getElementById("insert").insertAdjacentHTML("beforeend", "<span id='danger'>Votre input est vide !</span>");
            } break;
        case 10:
            if (value_input == "ok") {
                //Affiche une value différente lorsque le derniers champs du 
                //formulaire est atteint.
                if (compteur + 1 == tableau_de_titre.length) {
                    $("#valeur").val("Valider le formulaire");
                    $("#cobaye").attr("placeholder", "taper 'ok' pour valider !");
                }

                //insérer la valeur de l'input dans le tableau en derniere position.
                tableau_de_valeur.push(value_input);

                //Vide le champs de l'input quand on clique sur l'évenement
                //et après avoir insérer la valeur de l'input dans le tableau.
                $("#cobaye").val("");

                //si le nombre de champs du formulaire a atteint son maximum :
                //teste avec le nombre de variable insérer dans tableau de titre
                //alors on supprime tous les champs inutiles et l'on envoie le formulaire.
                if (compteur == tableau_de_titre.length) {
                    //     $("#titre").remove();
                    //     $("#cobaye").remove();
                    //     $("#valeur").remove();
                    envoie_form();
                }
                //si tout les champs n'ont pas été remplis, donc que compteur
                //ne vaut pas le nombre d'insertion dans le tableau alors 
                //on prend la valeur suivante, en simulant un changement de champs
                //en changeant simplement le titre.
                else {
                    $("#titre").remove();
                    $("#insert").prepend('<p id="titre"></p>')
                    $("#titre").text(tableau_de_titre[compteur]);
                }
                //on incrémente le compteur seulement quand le champs n'est pas vide 
                //donc considérer comme valider.
                compteur++;
                nbr_etape += etape_plus;
                $("#progression-bar").width(nbr_etape + "%");

            }
            else {
                document.getElementById("insert").insertAdjacentHTML("beforeend", "<span id='danger'>Votre input est vide !</span>");
            } break;
    }console.log(compteur);
});

function envoie_form() {
    //inseres les valeurs des inputs du tableau dans le formulaire via des attr
    //envoie le formulaires suites a sa.
    for (i = 0; i < tab_id.length; i++) {
        if (i == 9) {
            if (tableau_de_valeur[i] == "ok") {
                $("#confirmation").attr("checked", "");
            }
        }
        else {
            $("#" + tab_id[i]).attr("value", tableau_de_valeur[i]);
        }
    }
    $("form").submit();
}
