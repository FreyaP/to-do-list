
export default function FormatDate() {
    let year = new Date().getFullYear();
    let day = new Date().getDate();
    if (day < 10) {
        day = `0${day}`
    } 
    let month = new Date().getMonth();
    if (month < 10) {
        month = `0${month}`
    }
    let today = `${year}-${month}-${day}`;
   

    return today
    
}