function loadComponent(id, file) {
    fetch(file)
      .then(response => {
        if (!response.ok) throw new Error("Gagal memuat " + file);
        return response.text();
      })
      .then(data => {
        document.getElementById(id).innerHTML = data;
  
        // Kalau komponen navbar dimuat, pasang event listener untuk tombol menu
        if (id === 'header-placeholder') {
          const menuBtn = document.getElementById('menu-btn');
          const sidebar = document.getElementById('sidebar');
          const backdrop = document.getElementById('backdrop');
  
          if (menuBtn && sidebar && backdrop) {
            menuBtn.addEventListener('click', () => {
              sidebar.classList.toggle('-translate-x-full');
              backdrop.classList.toggle('hidden');
  
              // Sembunyikan tombol menu saat sidebar terbuka
              if (!sidebar.classList.contains('-translate-x-full')) {
                menuBtn.classList.add('hidden');
              }
            });
  
            backdrop.addEventListener('click', () => {
              sidebar.classList.add('-translate-x-full');
              backdrop.classList.add('hidden');
  
              // Tampilkan kembali tombol menu saat sidebar ditutup
              menuBtn.classList.remove('hidden');
            });
          }
        }
      })
      .catch(error => console.error(error));
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    loadComponent('header-placeholder', 'komponen/navbar.html');
    // Kalau kamu punya footer.html, bisa diaktifkan juga
    // loadComponent('footer-placeholder', 'components/footer.html');
  });
  