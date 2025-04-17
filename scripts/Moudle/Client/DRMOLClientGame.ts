import { pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit } from "../../Engine.js";


//Client
pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.gl$_ubu_init(() => {
    //alert("Clinet Initialized");
})

pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.gl$_ubu_init(() => {

    if (pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.RUN_TIME_.globalVars.GAME_RUN_TYPE != "CLIENT") return
    pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.RUN_TIME_.objects.Mul.addEventListener("message", e => {
        //alert("Client Get Message")
        //@ts-ignore
        if (e.message.tag === "chatbo") {
            //@ts-ignore
            //alert(e.message.id + ": " + e.message.mes)
            for (let players of pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.RUN_TIME_.objects.Player.instances()) {
                //@ts-ignore
                console.log(players)
                console.log(players.instVars.IDstring)
                //@ts-ignore
                console.log(typeof(e.message.id))
                //@ts-ignore
                if (players.instVars.IDstring == e.message.id) {
                    //@ts-ignore
                    pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.RUN_TIME_.callFunction("PutMesBubble", e.message.mes, players.x, players.y-players.height/2)
                    console.log("PutMesBubble")
                }
            }

        }
    })
})


//Server
pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.gl$_ubu_init(() => {

    var MUL_INSTANCE = pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.RUN_TIME_.objects.Mul;

    console.log(pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.RUN_TIME_.globalVars.GAME_RUN_TYPE)
    if (pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.RUN_TIME_.globalVars.GAME_RUN_TYPE == "SERVER") {
        MUL_INSTANCE.addEventListener("message", e => {
            //alert("Server Get Message")
            //@ts-ignore
            MUL_INSTANCE.hostBroadcastMessage(MUL_INSTANCE.myId, e.message)
        })
    }

})

