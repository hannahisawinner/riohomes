document.querySelectorAll('.faq-question').forEach(button => {
  button.addEventListener('click', () => {
    const item = button.closest('.faq-item');
    item.classList.toggle('open');
  });
});

// Open/Close Navbar Hamburger Overlay Menu
function openMenu() {
    document.getElementById("overlayMenu").classList.add("active");
    document.body.classList.add("menu-open");
}

function closeMenu() {
    document.getElementById("overlayMenu").classList.remove("active");
    document.body.classList.remove("menu-open");
}
