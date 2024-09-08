(function() {
    const createCounterElement = () => {
        const counterDiv = document.createElement('div');
        counterDiv.style.position = 'absolute';
        counterDiv.style.top = '100px';
        counterDiv.style.left = '20px';
        counterDiv.style.backgroundColor = '#000';
        counterDiv.style.color = '#fff';
        counterDiv.style.padding = '10px';
        counterDiv.style.borderRadius = '5px';
        document.body.appendChild(counterDiv);
        return counterDiv;
    };

    const updateVisitCount = async (counterElement) => {
        try {
            const response = await fetch('https://api.countapi.xyz/update/tekya/visitas?amount=1');
            const data = await response.json();
            counterElement.textContent = `Visitas: ${data.value}`;
        } catch (error) {
            console.error('Error al actualizar el contador:', error);
            counterElement.textContent = 'Error al obtener visitas';
        }
    };

    const counterElement = createCounterElement();
    updateVisitCount(counterElement);
})();
