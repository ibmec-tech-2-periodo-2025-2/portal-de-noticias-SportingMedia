document.addEventListener('DOMContentLoaded', function() {
    const btnNFC = document.getElementById('btn-nfc');
    const btnAFC = document.getElementById('btn-afc');
    const nfcGrid = document.getElementById('nfc-grid');
    const afcGrid = document.getElementById('afc-grid');

    function mostrarNFC() {
        nfcGrid.style.display = 'grid';
        afcGrid.style.display = 'none';
        btnNFC.classList.add('active');
        btnAFC.classList.remove('active');
    }

    function mostrarAFC() {
        nfcGrid.style.display = 'none';
        afcGrid.style.display = 'grid';
        btnAFC.classList.add('active');
        btnNFC.classList.remove('active');
    }

    btnNFC.addEventListener('click', mostrarNFC);
    btnAFC.addEventListener('click', mostrarAFC);

    mostrarNFC();
});
