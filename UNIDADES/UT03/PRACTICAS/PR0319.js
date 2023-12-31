let arrayOrdenado=sortDates(['24-05-2020', '02-12-2018', '24-05-2020'] );
console.log(arrayOrdenado);


function sortDates(arr) {
    let compararFechas = (fecha1,fecha2) =>{
        let [dia1, mes1, anio1] = fecha1.split('-').map(Number);
        let [dia2, mes2, anio2] = fecha2.split('-').map(Number);
        return (anio1!==anio2) ? anio1-anio2 : (mes1!==mes2) ? mes1-mes2 : dia1-dia2;
    };
    return arr.sort(compararFechas);
}