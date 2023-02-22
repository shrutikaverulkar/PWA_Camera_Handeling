import{startBtn,  
    captureBtn,
    closeBtn,  
    player,    
    switchBtn, 
    canvas,    
    restartBtn,
    // changeMode,
    // getMode
} from "./constant.js"


let mode = "user"


export const changeMode = () => {
    mode = mode === "user" ?  "environment" : "user"
}



export const closeCamera = () => {
    console.log(player.srcObject.getVideoTracks());
    const tracks = player.srcObject.getVideoTracks()
    for (let i = 0; i < tracks.length; i++) {
        tracks[i].stop()
    }

    captureBtn.classList.add("d-none")
    closeBtn.classList.add("d-none")
    startBtn.classList.remove("d-none")
    player.classList.add("d-none")
    switchBtn.classList.add("d-none")
    canvas.classList.add("d-none")
    restartBtn.classList.add("d-none")


    }
export const openCamera = async () => {
    //handleCamera start
    if (navigator.mediaDevices) {
        document.getElementById("loader").innerHTML =
            `Opening Camera <div class="spinner-border text-dark"></div>`

        startBtn.setAttribute("disabled", true)
        try {
            const x = await navigator.mediaDevices.getUserMedia({
                video: {
                    facingMode: mode

                },
            })
            player.srcObject = x                 //...... live video
        } catch (error) {
            console.log(error);
        }

        document.getElementById("loader").innerHTML = ""
        startBtn.removeAttribute("disabled")
    } else {
        console.error("mediaDevices not Supported");
    }

    //handleCamera end
    player.classList.remove("d-none")
    startBtn.classList.add("d-none")
    captureBtn.classList.remove("d-none")
    closeBtn.classList.remove("d-none")
    switchBtn.classList.remove("d-none")


    }