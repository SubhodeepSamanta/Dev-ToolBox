import { create } from 'zustand'
import { useAuthStore } from './authStore';

export const useHistoryStore = create((set) => ({
    history:[],
    addHistory:({type,input,output})=>{
        const user= useAuthStore.getState().user;
        const entry={
            type, input, output, timestamp: new Date().toISOString()
        };
        if(user){
            console.log("user");
        }else{
            let current= JSON.parse(localStorage.getItem("history")) || [];
            const updated= [...current,entry];
            localStorage.setItem("history",JSON.stringify(updated));
            set({history: updated});
        }
    },
    loadHistory:()=>{
        const user= useAuthStore.getState().user;
        if(user){
            console.log("user");
        }else{
            const stored= JSON.parse(localStorage.getItem("history"))||[];
            set({history:stored});
        }

    },
    clearHistory:()=>{
        const user= useAuthStore.getState().user;
        if(user){
            console.log("user");
        }else{
            localStorage.removeItem("history");
            set({history:[]});
        }
    }
}));