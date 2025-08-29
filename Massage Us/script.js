function validateForm() {
    let name = document.getElementById('name-input').value.trim();
    let dateOfBirth = document.getElementById('tanggal').value;
    let gender = document.querySelector('input[name="gender"]:checked');
    let pesan = document.getElementById('pesan').value.trim();

    if (name === "" || dateOfBirth === "" || gender === null || pesan === "") {
        alert("Semua field wajib diisi!");
        return false;
    }

    let currentTime = new Date().toString();

    let output = `
        <b>Current time :</b> ${currentTime} <br><br>
        <b>Nama :</b> ${name} <br>
        <b>Tanggal Lahir :</b> ${dateOfBirth} <br>
        <b>Jenis Kelamin :</b> ${gender.value} <br>
        <b>Pesan :</b> ${pesan}
    `;

    document.getElementById('output').innerHTML = output;
    return false; // biar tidak reload
}