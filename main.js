// 1
// A butun son berilgan. Jumlani rostlikka tekshiring: A son musbat

// {
//     function checkPositive(num) {
//         if(num > 0){
//             console.log('musbat');
//         }else{
//             console.log('manfiy');
//         }
//     }
//     checkPositive(20)
// }



// 2
// A butun son berilgan. Jumlani rostlikka tekshiring: A toq son

// {
//     function checkOdd(num) {
//         if(num % 2 !== 0){
//             console.log('toq');
//         }else{
//             console.log('juft');
//         }
//     }
//     checkOdd(15)
// }



// 3
// A butun son berilgan. Junlani rostlikka tekshiring: A juft son

// {
//     function checkPositive(a){
//         if(a % 2 == 0){
//             console.log('juft');
//         }else{
//             console.log('toq');
//         }
//     }
//     checkPositive(4)

// }



// 4
// Ikkita butun son berilgan. Jumlani rostlikka tekshiring. M-s a > 0 && b > 0

// {
//     function checkPositive(a,b) {
//         if(a > 0 && b > 0){
//             console.log(true);
//         }else{
//             console.log(false);
//         }
//     }
//     checkPositive(5,8)
// }




// 5
// 3 ta son berilgan a,b,c. a bdan katta b c dan katta rostlikka tekshiring

// {
//     function checkPositive(a,b,c) {
//         if(a > b && b > c){
//             console.log(true);
//         }else{
//             console.log(false);
//         }
//     }
//     checkPositive(15,10,5)
// }




// 6
// a, b, c, son berilgan. B son a va c sonlarni orasida yotadi.

// {
//     function checkABC(a,b,c) {
//         if(a < b && b < c && a < c){
//             console.log(true);
//         }else{
//             console.log(false);
//         }
//     }
//     checkABC(24,34,43)
// }



// 7
// a, b sonlar berilgan sonlarni toq songa tekshiring.

// {
//     function checktoq(a,b) {
//         if(a % 2 !== 0 && b % 2 !== 0){
//             console.log(true);
//         }else{
//             console.log(false);
//         }
//     }
//     checktoq(5,7)
// }




// 8
// a,b,c,d sonlar berilgan barchasi musbat

// {
//     function checkJuft(a,b,c,d) {
//         if(a > 0 && b > 0 && c > 0 && d > 0){
//             console.log(true);
//         }else{
//             console.log(false);
//         }
//     }
//     checkJuft(6,14,4,18,)
// }




// 9
// a,b,c sonlar berilgan kamida ikkitasi musbat berilgan

// {
//     function check(a,b,c) {
//         if(a > 0 && b > 0 && c < 0){
//             console.log(true);
//         }else if(a < 0 && b > 0 && c > 0){
//             console.log(true);
//         }else if(a > 0 && b < 0 && c > 0){
//             console.log(true);
//         }
//     }
//     check(10, -10 ,10)
// }




// 10
// hafta kunlari berilgan raqamga qarab hafta kunlarini nomini chiqaring

// {
//     function checkday(day) {
//         if (day == 1) {
//             console.log('dushanba');
//         }else if(day == 2){
//             console.log('seshanba');
//         }else if(day == 3){
//             console.log('chorshanba');
//         }else if(day == 4){
//             console.log('payshanba');
//         }else if(day == 5){
//             console.log('Juma');
//         }else if(day == 6){
//             console.log('shanba');
//         }else if(day == 7){
//             console.log('yakshanba');
//         }
//     }
//     checkday(day = 5)
// }



// 11
// Telefon nomer kodi orqali qaysi kompaniya ekanligini tekshiring

// {
//     function checkSimCode(code) {
//         if (code == 99){
//             console.log('uzmobile');
//         }else if(code == 90){
//             console.log('beeline');
//         }else if(code == 97){
//             console.log('ums');
//         }else if(code == 94){
//             console.log('usell');
//         }
//     }
//     checkSimCode(code = 90)
// }


// 12
// Butun son berilgan agar son musbat bo'lsa unda sonni bittaga oshiring aks xolda 1taga kamaytiring

// {
//     function checkPlusMinus(num) {
//         if(num ++){
//             console.log(num ++);
//         }else{
//             console.log(num --);
//         }
//     }
//     checkPlusMinus(-11)
// }



// 13
// Butun son berilgan agar son musbat bo'lsa sonni 3 ga oshiring manfiy bo'lsa unda 2ga kamaytiring

// {
//     function checkIncrement(num) {
//         if(num > 0){
//             console.log(num += 3);
//         }else{
//             console.log(num -= 2);
//         }
//     }
//     checkIncrement(5)
// }



// 14
// Ikkita butun son berilgan kattasin aniqlovchi dastur tuzing

// {
//     function checkIdentifying (a,b) {
//         if(a > b){
//             console.log(a);
//         }else{
//             console.log(b);
//         }
//     }
//     checkIdentifying(9,7)
// }



// 15
// 3 ta butun son berilgan eng kattasini aniqlovchi dastur tuzing

// {
//     function checkIdentifying (a,b,c) {
//         if(a > b && b < c){
//                     console.log(c);
//         }else if(a < b && b > c){
//                     console.log(b);
//         }else if(a > b && b > c){
//                     console.log(a);
//         }else if(a < b && b < c){
//                     console.log(c);
//         }
//     }
//     checkIdentifying(25,30,20)
// }



// 16
// 3 ta son berilgan eng kichikin aniqlovchi dastur tuzing

// {
//     function checkIdentifying (a,b,c) {
//         if(a < b && b < c){
//             console.log(a);
//         }else if(a > b && b > c){
//             console.log(c);
//         }else if(a > b && b < c){
//             console.log(b);
//         }else if(a < b && b > c){
//             console.log(c);
//         }
//     }
//     checkIdentifying(6,10,25)
// }


// 17
// Jinsga qarab rasm chiqivchi dastur tuzing!

// {
//     function checkGender(gender) {
//         if(gender === 'women'){
//             console.log('img-women');
//         }else if(gender === 'men'){
//             console.log('img-men');
//         }
//     }
//     checkGender('men')
// }


// 18
// Bahoga qarab stependiyani aniqlovchi dastur tuzing

// {
//     function checkStipendy(grade) {
//         if(grade = 5){
//             console.log(600);
//         }else if(grade = 4){
//             console.log(500);
//         }else if(grade = 3){
//             console.log("SANGA PUL YOQ IKKICHI!!");
//         }
//         checkStipendy(grade = 5)
//     }
// }



// 19
// Butun son berilgan shu songa qarab toq musbat, toq manfiy, juft musbat, juft manfiy deb chiqaruvchi dastur tuzing

// {
//     function checked(a) {
//         if(a > 0 && a % 2 == 0){
//             console.log('juft musbat');
//         }else if(a < 0 && a % 2 != 0){
//             console.log('toq manfiy');
//         }else if(a < 0 && a % 2 == 0){
//             console.log('juft manfiy');
//         }else if(a > 0 && a % 2 != 0){
//             console.log('toq musbat');
//         }
//     }
//     checked(-14)
// }



// 20
// Yilga qarab yoshin aniqlovchi dastur tuzing

// {
//     function checkAgo(year) {
//      var i = 2023
//      var res = i - year
//      if(i - year){
//         console.log(res);
//        }
//     }
//     checkAgo(2006)
// }



// 21
// 3 ta butun son berilgan jumlani rostlikkar tekshiring. A <= B <= C

// {
//     function checkPositive(a,b,c) {
//         if(a <= b <= c){
//             console.log(true);
//         }
//     }
//     checkPositive(25,30,42)
// }


// 22
// ikki butun son berilgan ikki sondan faqat 1tasi toq son hisoblanadi

// {
//     function checkOdd(a,b) {
//         if(a % 2 == 0 && b % 2 != 0){
//             console.log(true);
//         }else{
//             console.log(false);
//         }
//     }
//     checkOdd(8,11)
// }



// 23
// a,b,c sonlar berilgan har biri musbat son

// {
//     function checkPositive(a,b,c) {
//         if (a > 0 && b > 0 && c > 0) {
//             console.log('Musbat sonlar');
//         }else{
//             console.log('Manfiy son mavjud!');
//         }
//     }
//     checkPositive(10,20,30)
// }





// 24
// a,b,c sonlardan biri musbat son

// {
//     function checkPositive(a,b,c) {
//         if (a > 0 && b < 0 && c < 0) {
//             console.log('a musbat son');
//         }else if(a < 0 && b > 0 && c < 0){
//             console.log('b musbat son');
//         }else if(a < 0 && b < 0 && c > 0){
//             console.log('c musbat son');
//         }
//     }
//     checkPositive(-10,20,-30)
// }






// 25
// 3 xonali son berilgan har bir raqamlari har xil

// {
//     function checkNum(a,b,c) {
//         if (a,b,c * 1 == a,b,c ) {
//             console.log('har xil');
//         }else if(a,b,c * 1 != a,b,c){
//             console.log('bir xil');
//         }
//     }
//     checkNum(5,5,5)
// }


// 26
// 3 xonali son berilgan raqamlari ketma ket o'sib boruvchi joylashgan

// {
//     function name(params) {
        
//     }
// }





// 27
// Kompyuter nomiga qarab kompyuter summasini chiqaruvchi dastur yarating

// {
//     function checkKomp(Nomi) {
//         if (Nomi == 'asus') {
//             console.log('5 mln');
//         }else if(Nomi == 'apple'){
//             console.log('10 mln');
//         }else if(Nomi == 'hp'){
//             console.log('6 mln');
//         }
//     }
//     checkKomp('apple')
// }





// 28
// Sonlar berilgan shu sonlar ichidan faqat murakkab sonlarni chiqaruvchi dastur tuzing (for)!

// {
//     var sonlar = [2,3,4,5,6,7]
//     function checkComposite(arr) {
//         for(var i = 0; i < 6; i % 2){
//             console.log(arr[i]);
//         }
//     }
//     checkComposite(sonlar)
// }

















