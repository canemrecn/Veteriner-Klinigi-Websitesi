// Belirli bir eşik değerini tanımlayın. Bu değeri ne zaman aşarsanız sayfa aşağı kayacak.
const scrollThreshold = 200;

// Kaydırma olayını dinleyin
window.addEventListener('scroll', () => {
    // Mevcut kaydırma konumunu alın
    const scrollY = window.scrollY;

    // Eğer mevcut kaydırma konumu eşik değerini aşıyorsa
    if (scrollY > scrollThreshold) {
        // Sayfayı aşağı doğru kaydırın
        window.scrollBy(0, scrollThreshold);
    }
});

