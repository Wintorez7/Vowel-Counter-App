function checkVowel(){
    let text = document.getElementById("inputText").value;
    let vowelCount = 0;

    // converting into lower case for any letter
    text = text.toLowerCase();

    for(let i = 0; i < text.length; i++ ){
        let char = text.charAt(i);
        if(isVowel(char)){
            vowelCount++;
        }
    } 

    let result = document.getElementById("result");
    result.textContent = "Total Vowel: " + vowelCount;

}

function isVowel(char){
    let vowel = ["a","e","i","o","u"];
    return vowel.includes(char);
}
