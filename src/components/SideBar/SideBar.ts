import { defineComponent } from "vue";
export default defineComponent({
    name: "SideBar",
    data() {
      return {
        sections:[
            {title:'Building Element Info', children:['Item 1.1','Item 1.2','Item 1.3']},
            {title:'Estimate Setting', children:['Item 2.1','Item 2.2']},
            {title:'Material Database', children:['Item 3.1','Item 3.2','Item 3.3','Item 3.4']},
            {title:'Labor Database', children:['Item 4.1','Item 4.2']}
        ]
      };
  } 
});