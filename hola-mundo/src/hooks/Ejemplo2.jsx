/**
 * Ejemplo del uso de:
 * - useState()
 * - useRef()
 * - useEffect()
 */

import React, { useState, useRef, useEffect } from 'react';

const Ejemplo2 = () => {

    //Vamos a crear dos contadores distintos
    //cada uno en unestado diferente
    const [contdaor1, setContador1] = useState(0);
    const [Contador2, setContador2] = useState(0);

    //vamos a crear una refenrecia con useRef() para asociar una variable 
    //con un elemento del DOM del componente (vista HTML)
    const miRef = useRef();

    function incrementar1(){
        setContador1(contdaor1 + 1);
    }

    function incrementar2(){
        setContador2(Contador2 + 1);
    }


    /**
     * Trabajando con UseEffect
     */

    /**
     * ? Caso 1: Ejecutar SIEMPRE un snippet de código
     * Cada vez que haya un cambio en el estado del componente
     * se ejecuta aquello que esté dentro del useEffect()
     */

    //useEffect(() => {
    //    console.log('CAMBIO EN EL ESTADO DEL COMPONENTE');
    //    console.log('Mostrar Referencia a elemento del DOM');
    //    console.log(miRef);
    //})

    /**
     * ? Caso 2: Ejecutar SOLO CUANDO CAMBIE CONTADOR1
     * cada vez que haya un cambio en contador 1, se ejecuta lo que diga el useEffect()
     * En caso de que cambie contador2, no habra ejecucion
     */

    //useEffect(() => {
    //    console.log('CAMBIO EN EL ESTADO DEL COntador 1');
    //    console.log('Mostrar Referencia a elemento del DOM');
    //    console.log(miRef);
    //}, [contdaor1]);

    /**
     * ? Caso 3: Ejecutar SOLO CUANDO CAMBIE CONTADOR1 o CONTADOR2
     * cada vez que haya un cambio en contador 1, se ejecuta lo que diga el useEffect()
     * cada vez que haya un cambio en contador 2, se ejecuta lo que diga el useEffect()
     */

    useEffect(() => {
        console.log('CAMBIO EN EL ESTADO DEL Contador 1 / Contador 2');
        console.log('Mostrar Referencia a elemento del DOM');
        console.log(miRef);
    }, [contdaor1, Contador2]);

    return (
        <div>
            <h1>*** Ejemplo de useState(), useRef() y useEffect() ***</h1>
            <h2>CONTADOR 1: {contdaor1}</h2>
            <h2>CONTADOR 2: {Contador2}</h2>
            { /* Elemento referenciado */}
            <h4 ref={miRef}>
                Ejemplo de elemento referenciado
            </h4>
            { /* Botones para cambiar los contadores */}
            <div>
                <button onClick={incrementar1}>Incrementar contador 1</button>
                <button onClick={incrementar2}>Incrementar contador 2</button>
            </div>
        </div>
    );
}

export default Ejemplo2;
