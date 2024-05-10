// Menambahkan event listener untuk menangani pengiriman formulir
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah pengiriman formulir secara default
    
    // Penangkapan nilai-nilai formulir
    var name = document.getElementById('name').value; // Menangkap nilai Nama
    var email = document.getElementById('email').value; // Menangkap nilai Email
    var dob = document.getElementById('dob').value; // Menangkap nilai Tanggal Lahir
    var gender = document.querySelector('input[name="gender"]:checked').value; // Menangkap nilai Gender
    var program = document.getElementById('program').value; // Menangkap nilai Program Studi
    var address = document.getElementById('address').value; // Menangkap nilai Alamat
    var phone = document.getElementById('phone').value; // Menangkap nilai Nomor Telepon
    var phoneCode = document.getElementById('countryCode').value; // Menangkap nilai Kode Negara
    var motherName = document.getElementById('motherName').value; // Menangkap nilai Nama Ibu
    var fatherName = document.getElementById('fatherName').value; // Menangkap nilai Nama Ayah
    
    // Validasi nomor telepon
    if (!/^[0-9]{8,12}$/gm.test(phone)) {
        document.getElementById('phoneError').textContent = '*Hanya dapat mengisi angka';
        return; // Menghentikan eksekusi lebih lanjut jika nomor telepon tidak valid
    } else {
        document.getElementById('phoneError').textContent = ''; // Menghapus pesan kesalahan jika nomor telepon valid
    }
    // Validasi email
    if (!/^(([a-z0-9]{3,})([\.]{0,1})){1,}[\@]([a-z]{2,})([\.]([a-z]{2,})){1,}/gm.test(email)) {
        document.getElementById('emailError').textContent = 'Email Invalid'; // Menghapus pesan kesalahan jika email valid
        return; // Menghentikan eksekusi lebih lanjut jika email tidak valid
    } else {
        document.getElementById('emailError').textContent = ''; // Menghapus pesan kesalahan jika email valid
    }
    
    // Penangkapan foto yang diunggah
    var photoInput = document.getElementById('photo'); // Mendapatkan input foto
    var photo = photoInput.files[0]; // Mendapatkan foto yang diunggah
    var photoURL = ''; // URL foto
    
    // Jika ada foto yang diunggah
    if (photo) {
        var reader = new FileReader(); // Membuat objek FileReader
        reader.onload = function(event) { // Menangani ketika foto selesai dibaca
            photoURL = event.target.result; // Mendapatkan URL foto
            displayOutput(); // Menampilkan output
        };
        reader.readAsDataURL(photo); // Membaca foto sebagai URL data
    } else {
        displayOutput(); // Menampilkan output jika tidak ada foto yang diunggah
    }

    // Fungsi untuk menampilkan hasil tangkapan
    function displayOutput() {
        // Menampilkan nilai-nilai yang ditangkap
        var output = document.getElementById('output'); // Mendapatkan elemen output
        output.innerHTML = `
            <h3>Registration Details:</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Date of Birth:</strong> ${dob}</p>
            <p><strong>Gender:</strong> ${gender}</p>
            <p><strong>Program of Interest:</strong> ${program}</p>
            <p><strong>Address:</strong> ${address}</p>
            <p><strong>Phone Number:</strong> ${phoneCode}${phone}</p>
            <p><strong>Mother's Name:</strong> ${motherName}</p>
            <p><strong>Father's Name:</strong> ${fatherName}</p>
        `;
        // Jika URL foto tersedia, tambahkan tag img untuk menampilkan foto
        if (photoURL) {
            output.innerHTML += `<img src="${photoURL}" alt="Uploaded Photo" style="max-width: 100%;">`;
        }

        // Mengosongkan formulir
        document.getElementById('registrationForm').reset();

        // Slide ke output secara otomatis
        output.scrollIntoView({ behavior: 'smooth', block: 'start' });
        
        // Menampilkan pesan tambahan
        document.getElementById('emailMessage').style.display = 'block';
    }
});

// Menambahkan event listener saat mouse masuk ke bidang Tanggal Lahir
document.getElementById('registrationForm').addEventListener('mouseenter', function(event) {
    var dob = document.getElementById('dob').value; // Mendapatkan nilai Tanggal Lahir

    var today = new Date().toISOString().split('T')[0]; // Mendapatkan tanggal hari ini dalam format ISO
    var dobInput = document.getElementById('dob'); // Mendapatkan elemen input Tanggal Lahir

    dobInput.setAttribute('max', today); // Menetapkan atribut max pada input Tanggal Lahir menjadi tanggal hari ini
});
