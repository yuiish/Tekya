const counterElement = document.createElement('div');
counterElement.style.position = 'absolute';
counterElement.style.top = '100px';
counterElement.style.left = '20px';
counterElement.style.backgroundColor = '#000';
counterElement.style.color = '#fff';
counterElement.style.padding = '10px';
counterElement.style.borderRadius = '5px';
document.body.appendChild(counterElement);


async function updateVisitCount() {
    const response = await fetch('https://api.countapi.xyz/update/tekya/visitas?amount=1');
    const data = await response.json();
    counterElement.textContent = `Visitas: ${data.value}`;
}

updateVisitCount();
