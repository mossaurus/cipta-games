import './css/stlye.css'
import { resources } from './resources'

const canvas = document.querySelector("#game-canvas")
const ctx = canvas.getContext ("2d")

const draw = () => {
    const kota =resources.image.kota;
    if (kota.isload) {
        ctx.drawImage(sky.image, 0, 0)
    }
}
setInterval(() => {
   console.log("draw") 
}, interval); 
draw()