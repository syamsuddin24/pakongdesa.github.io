// Ambil elemen-elemen yang ingin diberi efek animasi
const animatedElements = document.querySelectorAll('.animate-on-scroll');

// Fungsi untuk mengecek apakah elemen terlihat di layar
function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Fungsi untuk menambahkan kelas animasi saat elemen terlihat
function animateElementsOnScroll() {
    animatedElements.forEach(element => {
        if (isElementInViewport(element)) {
            element.classList.add('animate');
        }
    });
}

// Event listener untuk menangani scroll
document.addEventListener('scroll', () => {
    animateElementsOnScroll();
});

// Panggil fungsi saat halaman pertama kali dimuat
animateElementsOnScroll();
