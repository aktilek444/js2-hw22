
let birthYear = prompt("Введите год вашего рождения:");


if (!birthYear || isNaN(birthYear)) {
    alert("Пожалуйста, введите корректно.");
а} else {
    let age = new Date().getFullYear() - birthYear;
    if (age < 0) {
        alert("Вы еще не родились!");
    } else if (age <= 30) {
        alert("Вы младше 30 лет. Вы молодой человек!");
    } else if (age > 60) {
        alert("Вы старше 30 лет, но младше 60 лет. Кризис среднего возраста.");
    } else {
        alert("Вы старше 60 лет. Вам советуется посетить доктора.");
    }
}