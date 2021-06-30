class Usuarios {
    constructor (email,password){
        this.id =  Number(new Date()), //genera automaticamente el indentificador de usuario (ID)
        this.email=email,
        this.password=password
    }
}

export { Usuarios }