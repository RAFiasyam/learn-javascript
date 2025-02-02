/*  
    -> JavaScript Let
    Variabel yang dideklarasikan dengan let memiliki Cakupan Blok (Block Scope).
    Variabel yang dideklarasikan dengan let harus Dideklarasikan sebelum digunakan.
    Variabel yang dideklarasikan dengan let tidak dapat dideklarasikan ulang dalam cakupan yang sama.
*/

// Block scope
/* 
    Javascript memiliki ruang Global Scope dan Function Scope.
    ES6 memperkenalkan dua keyword baru JavaScript : `Let` and `Const`.
    Dua keyword ini memberikan `block scope` di JavaScript:
*/

{
    let x = 2; // Variabel yang dinyatakan di dalam blok {} tidak dapat diakses dari luar blok:
}
// variable x tidak bisa di gunakan di luar sini

// Global scope