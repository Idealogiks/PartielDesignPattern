import DocumentFactory from "./documents/documentFactory.js";

const demandes = [
    {
        type:"id"
    },
    {
        type: "passeport"
    },
    { 
        type: "carte_vitale"
    },
];

demandes.forEach(item => {
    DocumentFactory.create(item).imprimerDocument();
});