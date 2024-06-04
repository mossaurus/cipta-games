class resources {
    constructor () {
        this.toload = {
            kota: "/assets/background-kota/bg.png",
            balkot: "/assets/building/balkot.png",
        }
    }
};

this.image = {};

Object.keys(this.toload).forEach(key => {
    const img = new Image ();
    img.src = this.toload[key];
    this.image[key] = {
        image:img,
        isloaded:false
    }
    img.onload = () =>{
        this.image[key].isloaded =true
    }
})

export const resources = new resources ();
