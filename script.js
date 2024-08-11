function calculateInterest() {
    // Get values from input fields
    const principal = parseFloat(document.getElementById('principal').value);
    const rate = parseFloat(document.getElementById('rate').value);
    const time = parseFloat(document.getElementById('time').value);

    if (isNaN(principal) || isNaN(rate) || isNaN(time) || principal <= 0 || rate <= 0 || time <= 0) {
        document.getElementById('result').innerHTML = "Please enter valid positive numbers.";
        return;
    }

    // Calculating Simple Interest
    const simpleInterest = (principal * rate * time) / 100;
    const totalSimple = principal + simpleInterest;

    // Calculating Compound Interest
    const compoundInterest = principal * Math.pow((1 + (rate / 100)), time) - principal;
    const totalCompound = principal + compoundInterest;

    // Show results
    document.getElementById('result').innerHTML = `
        <p><strong>Simple Interest:</strong> $${simpleInterest.toFixed(2)}</p>
        <p><strong>Total Amount (Simple Interest):</strong> $${totalSimple.toFixed(2)}</p>
        <p><strong>Compound Interest:</strong> $${compoundInterest.toFixed(2)}</p>
        <p><strong>Total Amount (Compound Interest):</strong> $${totalCompound.toFixed(2)}</p>
    `;
}
