const inter= document.getElementById('tivo')
const titulo= document.getElementById('titulo')
const cambio= document.getElementById('cambio')
const rojo= document.getElementById('rojo')
const azul= document.getElementById('azul')
const amarillo= document.getElementById('amarillo')

cambio.addEventListener('click',()=>manejadorTitulo() )



rojo.addEventListener('click',()=>{
    inter.style.color="red"
})

azul.addEventListener('click',()=>{
    inter.style.color="blue"
})

amarillo.addEventListener('click',()=>{
    inter.style.color="yellow"
})

const manejadorTitulo = () =>{
            //inter.innerText='nuevo titulo'innertext tenemos un camnbio en el texto
        const nuevotitulo=titulo.value
        inter.innerText=nuevotitulo
        //inter.style.color='blue'
}