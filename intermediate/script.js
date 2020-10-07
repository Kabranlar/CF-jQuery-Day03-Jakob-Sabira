var jsonData = JSON.parse(products);
console.log(jsonData);

console.table(jsonData);

for (let i = 0; i < jsonData.length; i++) {
    $(".container").append(`<div id="${i}" class="img-container ${jsonData[i].type}"><img id="img${i}"src='${jsonData[i].image}'><button>buy one</button></div>`);

}
$(".notebook").css("background-color", "red");
$(".phone").css("background-color", "blue");
$(".tablet").css("background-color", "green");