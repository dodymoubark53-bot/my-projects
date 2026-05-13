// دالة لفتح النافذة
function openLogin() {
    const modal = document.getElementById("loginModal");
    if (modal) modal.style.display = "block";
}

// دالة لإغلاق النافذة
function closeLogin() {
    const modal = document.getElementById("loginModal");
    if (modal) modal.style.display = "none";
}

// إغلاق النافذة عند الضغط في أي مكان خارج الصندوق الأبيض
window.onclick = function (event) {
    const modal = document.getElementById("loginModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    console.log("تم تحميل ملف السكريبت بنجاح!");

    // تعديل كود المنيو هنا
    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.getElementById("navMenu");

    if (menuToggle && navMenu) {
        menuToggle.addEventListener("click", () => {
            navMenu.classList.toggle("active");
            console.log("المنيو فتحت/قفلت!");
        });
    }

    // مثال: لو عايزة تعملي حاجة لما يدوس على الكارت
    const cards = document.querySelectorAll('.feature-card');
    cards.forEach(card => {
        card.addEventListener('click', () => {
            console.log("تم الضغط على كارت المميزات");
        });
    });
});