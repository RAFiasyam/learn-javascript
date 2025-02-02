// <- ini single komentar

// menganti text dari id "hero" <- contoh single komentar
document.getElementById('hero').innerHTML = "Tambahkan micin";


/* ini multi-line comments */
/* 
 Komentar multi-line dimulai dengan / * dan akhiri dengan * /.
 Teks apa pun antara / * dan * / akan diabaikan oleh JavaScript.
*/

//contoh dari multi-line ada di bawah
/*
 menganti text dari id "hero" dan
 menganti text dari id "sub"
 di tampilan web kita
*/
document.getElementById('hero').innerHTML = "Tambahkan micin dan";
document.getElementById('sub').innerHTML = "lalu Tambahkan micin";

