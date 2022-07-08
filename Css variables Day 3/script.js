const input = document.querySelectorAll("input");

function handleUpdate(){
    const suffix = this.dataset.sizing ||'';

document.documentElement.style.setProperty(`--${this.name}`,this.value + suffix);

}

input.forEach(element => element.addEventListener('change',handleUpdate));
input.forEach(element => element.addEventListener('mousemove',handleUpdate));