export default class CPAM {
    fetchPatientData(){ 
        console.log("CPAM - Récupération des informations "); 
    }

    initializeInk(){ 
        console.log("CPAM - Préparation de l'encre"); 
    }
    
    verifySupport(){ 
        console.log("CPAM - Vérification du papier"); 
    }

    startPrint(){
        console.log("CPAM - Impression"); 
    }

    cutCard(){
        console.log("CPAM - Découpage"); 
    }

    finalizeCard(){
        console.log("CPAM - Carte finie"); 
    }
}