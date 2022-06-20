export function getRandomName() {
    var text = "";
    var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    for (var i = 0; i < 5; i++)
        text += alphabet.charAt(Math.floor(Math.random() * alphabet.length));
    return text;
 }
 export function getUniqueRef(digits) {
    var randomNum = Math.floor((Math.random() * (10 ** digits)) + 1);
    return randomNum;
}
export function todaysDate() {

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

        today = mm + '/' + dd + '/' + yyyy;
        return today;
 }
 