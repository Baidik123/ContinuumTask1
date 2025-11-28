import {defineComponent,onMounted,onBeforeUnmount,watch, nextTick} from "vue";
import * as BABYLON from "babylonjs";
import { ArcRotateCamera } from "babylonjs";
import { en } from "vuetify/locale";

export default defineComponent({
    name:"ThreeD-Viewer",
    props:{
        panelOpen:{
            type:Boolean,
            default:false,
        }
    },
    setup(props){
        let engine: BABYLON.Engine | null = null;
        let scene: BABYLON.Scene | null = null;
        let camera: BABYLON.ArcRotateCamera | null = null;
        onMounted(() => {
            const canvas = document.getElementById("viewerCanvas") as HTMLCanvasElement;
            engine = new BABYLON.Engine(canvas, true);
            scene = new BABYLON.Scene(engine);
            //camera =new BABYLON.FreeCamera("camera1",new BABYLON.Vector3(0,5,-10),scene);
            
            camera = new BABYLON.ArcRotateCamera(
            "camera",
            Math.PI / 2,     
            Math.PI / 3,     
            10,              
            BABYLON.Vector3.Zero(), 
            scene
            );
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
        watch(
            () => props.panelOpen,
            
            ()=>{
                if(!engine)return;
                nextTick(()=>{
                    engine.resize();
                });
                
            }
        );

        onBeforeUnmount(() => {
            if(engine){
                engine.dispose();
            }
        });
        return {};
    },
});