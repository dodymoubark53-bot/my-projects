
// دالة لفتح النافذة
function openLogin() {
    document.getElementById("loginModal").style.display = "block";
}

// دالة لإغلاق النافذة
function closeLogin() {
    document.getElementById("loginModal").style.display = "none";
}

// إغلاق النافذة عند الضغط في أي مكان خارج الصندوق الأبيض
window.onclick = function (event) {
    var modal = document.getElementById("loginModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// هنا ممكن تضيفي أي تفاعل بالجافا سكريبت
document.addEventListener("DOMContentLoaded", () => {
    console.log("تم تحميل ملف السكريبت بنجاح!");

    // مثال: لو عايزة تعملي حاجة لما يدوس على الكارت
    const cards = document.querySelectorAll('.feature-card');
    cards.forEach(card => {
        card.addEventListener('click', () => {
            console.log("تم الضغط على كارت المميزات");
        });
    });
});