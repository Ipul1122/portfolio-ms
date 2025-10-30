document.addEventListener('DOMContentLoaded', () => {
const contactForm = document.getElementById('contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Mencegah form submit biasa

        // Ambil nilai dari form
        const name = document.getElementById('contact-name').value;
        const email = document.getElementById('contact-email').value;
        const message = document.getElementById('contact-message').value;

        // Nomor WhatsApp Anda (ganti +62 menjadi 62)
        const phone = '6285693672730';

        // Buat template pesan
        // \n digunakan untuk baris baru
        const waMessage = `Halo, saya ${name}.
        Email: ${email}
        Pesan:${message}`;
        // Encode pesan untuk URL (agar aman)
        const encodedMessage = encodeURIComponent(waMessage);

        // Buat URL WhatsApp
        const waURL = `https://api.whatsapp.com/send?phone=${phone}&text=${encodedMessage}`;

        // Buka WhatsApp di tab baru
        window.open(waURL, '_blank');
    });
}
});