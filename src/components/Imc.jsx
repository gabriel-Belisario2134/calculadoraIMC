import React, { useState } from 'react';

const Imc = () => {
    const [peso, setPeso] = useState("");
    const [altura, setAltura] = useState("");
    const [resultado, setResultado] = useState("");

    const calculeimc = () => {
        const pesoNum = parseFloat(peso);
        const alturaNum = parseFloat(altura);

        if (alturaNum === 0) {
            setResultado("Altura não pode ser zero.");
            return;
        }

        const calcimc = pesoNum / (alturaNum * alturaNum);
        setResultado(calcimc.toFixed(2));
    };

    return (
        <div className='Container'> 
            <div>
                <h1>Calculadora de IMC</h1>
            </div>
            <div className='typecontainer'>
                <p>Peso (kg)</p>
                <input type="number" placeholder="peso (kg)" value={peso} onChange={(e) => setPeso(e.target.value)} /> 
                <p>Altura (m)</p>
                <input type="number" placeholder="altura (m)" value={altura} onChange={(e) => setAltura(e.target.value)} />
            </div>  
            <button onClick={calculeimc}>Calcular</button>
            <h2>Seu IMC é: {resultado}</h2>
        </div>
    );
};

export default Imc;