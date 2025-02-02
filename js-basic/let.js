/*  
    -> JavaScript Let
    Variabel yang dideklarasikan dengan let memiliki Cakupan Blok (Block Scope)
    Variabel yang dideklarasikan dengan let harus Dideklarasikan sebelum digunakan
    Variabel yang dideklarasikan dengan let tidak dapat dideklarasikan ulang dalam cakupan yang sama
*/

// ---------------------------------------------------------------------------------------------------

// Block scope
/* 
    Javascript memiliki ruang Global Scope dan Function Scope
    ES6 memperkenalkan dua keyword baru JavaScript : `Let` and `Const`
    Dua keyword ini memberikan `block scope` di JavaScript:
*/

// contoh
{
    let x = 2; // Variabel yang dinyatakan di dalam blok {} tidak dapat diakses dari luar blok:
}
// variable x tidak bisa di gunakan di luar sini

// ---------------------------------------------------------------------------------------------------

// Global scope
/*
    Variabel yang dideklarasikan menggunakan `var` selalu bersifat global
    Variabel dengan `var` tidak bisa terbatas hanya di dalam blok kode
*/

// contoh

{
    var x = 2; // Variabel var yang dideklarasikan di dalam blok { } tetap bisa diakses dari luar blok
}
// variable x bisa digunakan diluar blok


// ---------------------------------------------------------------------------------------------------

// Cannot be Redeclared
/*
    Variable yang dideklarasikan dengan `let` gak bisa dideklarasikan lagi
    Variabel `let` gak bisa dideklarasikan ulang walaupun tanpa sengaja
*/

// contoh (Dengan `let` kamu gak bisa ngelakuin ini)
let y = 3;
// let y = "hebat" 
// buka comment diatas untuk melihat err -> Cannot redeclare block-scoped variable 'y'

// <===========================>

// tetapi beda hal nya dengan `var`, var tetap bisa dideklarasikan...

// contoh (dengan `var` kamu bisa ngelakuin ini)
var a = 5;
var a = "keren"

// ---------------------------------------------------------------------------------------------------

// Redeclaring Variables
/*
    Mendeklarasikan ulang variabel dengan `var` tetap bisa menyebabkan masalah
*/

// contoh (Mendeklarasikan ulang variabel di dalam blok juga akan memengaruhi variabel di luar blok)
var a = 10;
// value dari a disini adalah 10

{
    var a = 40;
    // value dari a disini adalah 40
}

// value dari a disini adalah 40

// <===========================>

/*
    Tetapi mendeklarasikan ulang variable menggunakan `let` bisa menghidari masalah itu
*/

// contoh (Mendeklarasikan ulang variabel di dalam blok tidak akan memengaruhi variabel di luar blok)
let a = 10;
// value dari a disini adalah 10

{
    let a = 40;
    // value dari a disini adalah 40
}

// value dari a disini adalah 10

// ---------------------------------------------------------------------------------------------------

// Redeclaring Variables
/*
    Mendeklarasikan ulang variabel javascript dengan `var` bisa dimana saja luar ataupun dalam
*/

// contoh

var p = 2;
// value dari p disini adalah 2

var p = 5;
// value dari p disini adalah 5

// <===========================>

/*
    Dengan `let`, Mendeklarasikan ulang variabel di dalam blok yang sama adalah masalah
*/

// contoh

var t = 4; // bisa
let t = 4; // tidak bisa

{
    let t = 3; // bisa
    // let t = 4; // tidak bisa
}

{
    var t = 4; // bisa
    let t = 4; // tidak bisa
}

// <===========================>

/*
    Mendeklarasikan ulang variabel dengan `let`,  di dalam blok masing", itu tidak masalah
*/

let x = 2;   // bisa

{
    let x = 3;   // bisa
}

{
    let x = 4;    // bisa
}