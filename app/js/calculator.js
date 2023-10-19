document.getElementById("addPlace").addEventListener("click", function() {
    const additionalItems = document.getElementById("additionalItems");
    const newPlace = document.createElement("div");
    newPlace.innerHTML = `
                <label class="calculator__inner-form-label" for="additionalWeight">Вага, кг</label>
                <input class="calculator__inner-form-input" type="number" name="additionalWeight" step="0.1" min="0.1">
                  <br>
                        <b>Розмір</b><br>
                    <br>
                <label class="calculator__inner-form-label" for="additionalLength">Довжина, см</label>
                <input class="calculator__inner-form-input" type="number" name="additionalLength">
                
                <label class="calculator__inner-form-label" for="additionalWidth">Ширина, см</label>
                <input class="calculator__inner-form-input"  type="number" name="additionalWidth">
                
                <label class="calculator__inner-form-label" for="additionalHeight">Висота, см</label>
                <input class="calculator__inner-form-input"  type="number" name="additionalHeight">
            `;
    additionalItems.appendChild(newPlace);
});

document.getElementById("deliveryForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const departureCountry = document.getElementById("departureCountry").value;
    const destinationCountry = document.getElementById("destinationCountry").value;
    const numberOfItems = parseInt(document.getElementById("numberOfItems").value);
    const weight = parseFloat(document.getElementById("weight").value);
    const length = parseFloat(document.getElementById("length").value);
    const width = parseFloat(document.getElementById("width").value);
    const height = parseFloat(document.getElementById("height").value);


    let cost = 0;

    const volumetricWeight = (length * width * height) / 4000;

    const actualWeight = Math.max(weight, volumetricWeight);

    if (departureCountry === "Ірландія" && destinationCountry === "Україна") {
        if (actualWeight <= 10) {
            cost = actualWeight * 2.5;
        } else {
            cost = actualWeight * 2.5;
        }
    } else if (departureCountry === "Україна" && destinationCountry === "Ірландія") {
        if (actualWeight <= 10) {
            cost = actualWeight * 3;
        } else {
            cost = actualWeight * 3;
        }
    }

    const additionalWeights = document.querySelectorAll("input[name='additionalWeight']");
    additionalWeights.forEach(function(input) {
        const additionalWeight = parseFloat(input.value);
        if (!isNaN(additionalWeight)) {
            if (additionalWeight <= 10) {
                cost += additionalWeight * 2.5;
            } else {
                cost += additionalWeight * 2.5;
            }
        }
    });

    document.getElementById("result").innerHTML = `Вартість доставки: ${cost}євро <br><br>
    <div>* Ця сума є приблизною, остаточна вартість визначається при передачі посилки</div>
    `;
});