class Alquileres{
    constructor(id_libro,id_usuario){
        this.id_libro=id_libro,
        this.id_usuario=id_usuario,
        this.fecha=new Date(),
        this.fecha_caduca=this.fecha+26
    }
}

export { Alquileres }