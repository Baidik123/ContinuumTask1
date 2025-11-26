import {defineComponent,onMounted,onBeforeUnmount} from "vue";
import * as BABYLON from "babylonjs";

export default defineComponent({
    name:"ThreeD-Viewer",
    setup(){
        let engine: BABYLON.Engine | null = null;
        let scene: BABYLON.Scene | null = null;
        onMounted(() => {
            const canvas = document.getElementById("viewerCanvas") as HTMLCanvasElement;
            engine = new BABYLON.Engine(canvas, true);
            scene = new BABYLON.Scene(engine);
            const camera =new BABYLON.FreeCamera("camera1",new BABYLON.Vector3(0,5,-10),scene);
            camera.setTarget(BABYLON.Vector3.Zero());
            camera.attachControl(canvas,true);
            const light = new BABYLON.HemisphericLight("light1",new BABYLON.Vector3(0,1,0),scene);
            light.intensity = 0.7;
            const sphere = BABYLON.MeshBuilder.CreateSphere("sphere",{diameter:2,segments:32},scene);
            sphere.position.y = 1;
            BABYLON.MeshBuilder.CreateGround("ground",{width:6,height:6},scene);
            engine.runRenderLoop(() => {
                if(scene){
                    scene.render();
                }
            });
            window.addEventListener("resize", () => {
                if(engine){
                    engine.resize();
                }
            });
        });

        onBeforeUnmount(() => {
            if(engine){
                engine.dispose();
            }
        });
        return {};
    },
});