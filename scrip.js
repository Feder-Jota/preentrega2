
function max(arrayGrupoF)
const arrayGrupoF = [
   { nombre: "Marruecos", Pos: 1, Ganados: 2, empatado: 1, perdidos: 0, puntos: 7 },
   { nombre: "Croacia", Pos: 2, Ganados: 1, empatado: 2, perdidos: 0, puntos: 5 },
   { nombre: "Bélgica", Pos: 3, Ganados: 1, empatado: 1, perdidos: 1, puntos: 4 },
   { nombre: "Canadá", Pos: 4, Ganados: 0, empatado: 0, perdidos: 2, puntos: 0 },
]

function max(arrayGroupF){
   const mayor= arrayGroupF.reduce((inicial,actual)=> (inicial.puntos > actual.puntos) ? inicial: actual).puntos
   return mayor
   
}
reduce()

let resultado=max(arrayGroupF)

let total = 0

   for (let i=0; i <arrayGrupoF.length; i++){
   console.table(arrayGrupoF[i].puntos)
   total= (total+ arrayGrupoF[i].puntos)
 }

console.log("El total de Puntos del gurpo F es ", total)