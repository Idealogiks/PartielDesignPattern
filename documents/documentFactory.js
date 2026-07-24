import carteVitale from "./carteVitale.js";
import id from "./id.js";
import passeport from "./passeport.js";

export default class DocumentFactory {
    create(item) {
        switch (item.type.toLowerCase()) {
            case 'carteVitale':
                return new carteVitale(item);
            case 'id':
                return new id(item);
            case 'passeport':
                return new passeport(item);
            default:
                throw new Error(`Le type de document "${item.type}" n'est pas reconnu.`);
        }
    }
}