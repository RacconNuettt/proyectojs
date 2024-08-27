
import {postUsers} from "../services/postF.js"

const nombre=document.getElementById("nombre")
const sede=document.getElementById("sede")
const fechaSalida=document.getElementById("fechaSalida")
const fechaRegreso=document.getElementById("fechaRegreso")
const codigo=document.getElementById("codigo")
const enviar= document.getElementById("enviar")


enviar.addEventListener("click", async function () {
    
    const nombreValue = nombre.value
    const sedeValue = sede.value
    const fechaSalidaValue = fechaSalida.value
    const fechaRegresoValue = fechaRegreso.value
    const codigoValue = codigo.value

    postUsers(nombreValue,sedeValue,fechaSalidaValue,fechaRegresoValue,codigoValue)

    
})
console.log(getUsers())
