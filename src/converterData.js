import { format } from 'date-fns';

export default (data) => {

    let string = JSON.stringify(data);
    let novaData = new Date (string.replace("-", "/"));
    return format (novaData, "dd/MM/yyyy");

}