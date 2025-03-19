<script>
    function navigateTo(page) {
        document.querySelectorAll('.page').forEach(section => {
            section.classList.add('hidden');
        });
        document.getElementById(`${page}-section`).classList.remove('hidden');
        
        document.querySelectorAll('nav ul li a').forEach(link => {
            link.classList.remove('active');
        });
        document.getElementById(page).classList.add('active');
    }
</script>