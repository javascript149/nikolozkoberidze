//1.//
let arrayOfColours = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "]
let o = ["th","st","nd","rd"]
alert (arrayOfColours)
//2.//
alert (arrayOfColours[0])
//3.//
alert (arrayOfColours[6])
//4.//
alert (`${1 + o[1]} choice is ${arrayOfColours[0]}`)
alert (`${2 + o[2]} choice is ${arrayOfColours[1]}`)
alert (`${3 + o[3]} choice is ${arrayOfColours[2]}`)
alert (`${4 + o[0]} choice is ${arrayOfColours[3]}`)
alert (`${5 + o[0]} choice is ${arrayOfColours[4]}`)
alert (`${6 + o[0]} choice is ${arrayOfColours[5]}`)
alert (`${7 + o[0]} choice is ${arrayOfColours[6]}`)
//5.//
let person = {
    firstName: "nikolozi",
    lastName: "koberidze",
    age: 17,
    location: "batumi"
}
person.favouriteColor = "purple";
person['eyeColor'] = 'brown';

delete person.age;

person['age'] = 25;

alert (Object.values(person))
alert (person.favouriteColor)
alert (person.age)