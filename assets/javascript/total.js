let total=0;

let button1 = document.querySelector(".button1");
    button1.addEventListener('click', function(event) {
        let displayTable = document.querySelector("#displayTable");
        let row = document.createElement('tr');
        let hargasatuan =  1599000;
        let namabarang = "X2 Smart Door Lock Fingerprint Wifi Handle Pintu Sidik Jari Tuya App";
        row.innerHTML = "<td>" + 1 + "</td>";
        row.innerHTML += "<td>" + namabarang + "</td>";
        row.innerHTML += "<td>" + hargasatuan + "</td>";
        displayTable.appendChild(row);
        total+=hargasatuan;
    });

let button2 = document.querySelector(".button2");
    button2.addEventListener('click', function(event) {
        let displayTable = document.querySelector("#displayTable");
        let row = document.createElement('tr');
        let hargasatuan =  1409800;
        let namabarang = "Xiaomi Mijia Smart Door Lock Keyless Bluetooth Fingerprint Kunci Pintu Rumah - ZNMS01XMYP - Black";
        row.innerHTML = "<td>" + 2 + "</td>";
        row.innerHTML += "<td>" + namabarang + "</td>";
        row.innerHTML += "<td>" + hargasatuan + "</td>";
        displayTable.appendChild(row);
        total+=hargasatuan;
    });

let button3 = document.querySelector(".button3");
    button3.addEventListener('click', function(event) {
        let displayTable = document.querySelector("#displayTable");
        let row = document.createElement('tr');
        let hargasatuan =  1297126;
        let namabarang = "Douwin Korea Password Kunci Pintu Keypad Digital";
        row.innerHTML = "<td>" + 3 + "</td>";
        row.innerHTML += "<td>" + namabarang + "</td>";
        row.innerHTML += "<td>" + hargasatuan + "</td>";
        displayTable.appendChild(row);
        total+=hargasatuan;
    });

let button4 = document.querySelector(".button4");
    button4.addEventListener('click', function(event) {
        let displayTable = document.querySelector("#displayTable");
        let row = document.createElement('tr');
        let kata = "Total Harga"
        row.innerHTML = "<td colspan=2>" + kata + "</td>";
        row.innerHTML += "<td>" + total + "</td>";
        displayTable.appendChild(row);
        alert("Terimakasih Sudah Membeli, Jumlah Pemabayaran = Rp"+total)
    });



