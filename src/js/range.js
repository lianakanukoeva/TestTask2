const progress = document.querySelector('.calculate__progress');

progress.addEventListener('input', function() {
    const value = this.value;
    this.style.background = `linear-gradient(to right, #FEE600 0%, #FEE600 ${value}%, #E1E1E3 ${value}%, #E1E1E3 100%)`
    console.log('right')
})

const progress_1 = document.querySelector('.second');

progress_1.addEventListener('input', function() {
    const value = this.value;
    this.style.background = `linear-gradient(to right, #FEE600 0%, #FEE600 ${value}%, #E1E1E3 ${value}%, #E1E1E3 100%)`
    console.log('right')
})