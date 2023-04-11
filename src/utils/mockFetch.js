let productos = [
    { id: '1' ,tipo: 'remera', nombre: 'remera-1', stock:50, precio: 40, foto: 'https://i.pinimg.com/236x/22/87/59/22875911db347d5e19283a62d6d77cec.jpg'},
    { id: '2' ,tipo: 'remera', nombre: 'remera-2', stock:40, precio: 30, foto: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/008/089/products/_remera-100industrial-amarillo_041-572e21773a43e170ab16770971003056-640-0.webp'},
    { id: '3' ,tipo: 'remera', nombre: 'remera-3', stock:30, precio: 20, foto: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/008/089/products/_remera-juiciofinal-negro_041-6fa6cd0af45e9160ab16770971098588-640-0.webp'},
    { id: '4' ,tipo: 'buzos', nombre: 'buzo-1', stock:50, precio: 40, foto: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/008/089/products/_buzo-black-rider-negro_071-0b6502f2499a78130316801216395585-640-0.webp'},
    { id: '5' ,tipo: 'buzos', nombre: 'buzo-2', stock:40, precio: 30, foto: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/008/089/products/_campera-zip-negro_041-caf04dd9f1786d145d16800682425344-640-0.webp'},
    { id: '6' ,tipo: 'buzos', nombre: 'buzo-3', stock:30, precio: 20, foto: 'https://i.pinimg.com/564x/97/ca/b3/97cab31bd75407ec9edf34fe612470c7.jpg'},
    { id: '7' ,tipo: 'pantalones', nombre: 'pantalones-1', stock:50, precio: 40, foto: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/008/089/products/_jeancargo-lift-acid_041-b0cb53cf1b9e473ca316799757798488-640-0.webp'},
    { id: '8' ,tipo: 'pantalones', nombre: 'pantalones-2', stock:40, precio: 30, foto: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/008/089/products/_jean-monograma-denim_071-cf54fd9c645af9b13816783162736903-640-0.webp'},
    { id: '9' ,tipo: 'pantalones', nombre: 'pantalones-3', stock:30, precio: 20, foto: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/008/089/products/_pantalon-spice-negro_071-3b478202166792b10c16771661164366-640-0.webp'},
]

export let mockFetch = (id) =>{
    return new Promise ( (resolve, reject)=>{
        setTimeout(()=>{
            resolve(id ? productos.find(prod => prod.id === id) : productos )
        }, 1000)  
    } )
}


