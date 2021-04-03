// Write code to return the the number of vowels in `str`

// var vowelCount = function(str) {
//     var vowelNum = 0;

//     for (var i = 0; i < str.length; i++){
//         var currentLetter = str[i].toLowerCase();

//         if (currentLetter === "a" || currentLetter === "e" || currentLetter === "i" || currentLetter === "o" || currentLetter === "u") {
//             vowelNum += 1;
//         }
//     }
//     return vowelNum;
// };

//Or

var vowelCount = function(str) {
    var vowelNum = 0;
    var vowels = ["a", "e", "i", "o", "u"]

    for (var i = 0; i < str.length; i++){
        var currentLetter = str[i].toLowerCase();

        if (vowels.indexOf(currentLetter) != -1 )
            vowelNum += 1;
        }
    return vowelNum;
};
    




