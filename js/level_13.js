function randomNumber() {
    var x = document.getElementById("randNumber") //inisiasi variabel x untuk mengetahui apakah perintah sudah diakses
    x.innerHTML = Math.floor((Math.random() * 200) + 1); //untuk menampilkan data yang diminta
}