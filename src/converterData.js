import { format, parse } from 'date-fns';

export default (data) => {

    let string = JSON.stringify(data+" 0:0:0"); 
    
    string=string.replaceAll(':',',');
    string=string.replaceAll(' ',',');
    string=string.replaceAll('-',',');
    string=string.replaceAll('"','');
    
    string=string.split(',');


    let novaData = new Date (parseInt(string[0]), parseInt(string[1]), 
    parseInt(string[2]),parseInt(string[3]), parseInt(string[4]), parseInt(string[5]));
        
    
    return format(novaData, "dd/MM/yyyy");

}