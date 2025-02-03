/*
    Variabel `const` gak bisa dideklarasikan ulang
    Variabel `const` gak bisa diubah nilainya
    Variabel `const` memiliki cakupan blok
*/

// ---------------------------------------------------------------------------------------------------

// Cannot be reassigned
/* 
    Jadi variabel `const` tidak bisa diubah nilainya.
*/

const PI = 3.141592653589793;
PI = 3.41; // ini bisa menimbulkan masalah
PI = PI + 10; // ini sama" bisa menimbulkan masalah

// ---------------------------------------------------------------------------------------------------

// Must be Assigned
/*
    Variabel const dalam JavaScript harus memiliki nilai saat dideklarasikan
*/

// benar
const PT = 3.141592653589793;

// salah
// const P; // <- ('const' declarations must be initialized.)err karena harus memiliki...?
P = 3.1444444;

// ---------------------------------------------------------------------------------------------------

// When to use javascript `const`?
/*
    Kamu bisa selalu mendeklarasikan variable `const` ketika kamu tau kalo nilai/value tidak akan ada yang diubah" ...

    Gunakan `const` saat mendeklerasi:
     > A new Array
     > A new Object
     > A new Function
     > A new RegExp
*/

// ---------------------------------------------------------------------------------------------------

// Constant Object and Arrays
/*
    Kata kunci const bisa sedikit membingungkan😵‍💫
    const bukan untuk membuat nilai tetap, tetapi membuat referensi ke nilai tersebut tetap

    Karena itu kamu gak bisa:
     > Reassign a constant value
     > Reassign a constant array
     > Reassign a constant object

    tetapi kamu masih bisa:
     > Change the elements of constant array
     > Change the properties of constant object
*/

// <===========================>