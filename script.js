const themeToggleBtn = document.getElementById('themeToggle');
const menuToggleBtn = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
const itemInput = document.getElementById('itemInput');
const btnAdd = document.getElementById('btnAdd');
const itemList = document.getElementById('itemList');

menuToggleBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    if (document.body.classList.contains('dark-mode')) {
        themeToggleBtn.textContent = '☀️ Mode Baik';
    } else {
        themeToggleBtn.textContent = '🌙 Mode Jahat';
    }
});

function addItem() {
    const text = itemInput.value.trim();
    if (text === '') {
        alert('Tuliskan sesuatu terlebih dahulu!');
        return;
    }

    const li = document.createElement('li');
    const span = document.createElement('span');
    const deleteBtn = document.createElement('button');

    span.textContent = text;
    deleteBtn.textContent = 'Hapus';
    deleteBtn.className = 'btn-delete';

    deleteBtn.addEventListener('click', () => {
        itemList.removeChild(li);
    });

    li.appendChild(span);
    li.appendChild(deleteBtn);
    itemList.appendChild(li);

    itemInput.value = '';
}

btnAdd.addEventListener('click', addItem);
itemInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addItem();
});