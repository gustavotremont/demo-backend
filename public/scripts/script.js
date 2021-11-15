document.getElementById('changeColor').addEventListener('click', (e) => {
    const elements = document.getElementsByClassName('product_list')
    for (const element of elements) {
        element.style.backgroundColor = "red";
    }   
})