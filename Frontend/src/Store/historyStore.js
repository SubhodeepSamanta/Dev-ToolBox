import { create } from 'zustand'
import { useAuthStore } from './authStore';
import apiRequest from '../utilities/apiRequest';

export const useHistoryStore = create((set) => ({
    history:[],
    addHistory:async({type,input,output})=>{
        const user= useAuthStore.getState().user;
        const entry={
            type, input, output, timestamp: new Date().toISOString()
        };
        if(user){
            try{
                const response= await apiRequest.post('/api/history',entry)
                set({history: response.data.history});
            }catch(err){
                console.log('error adding history',err);
            }
        }else{
            let current= JSON.parse(localStorage.getItem("history")) || [];
            const updated= [...current,entry];
            localStorage.setItem("history",JSON.stringify(updated));
            set({history: updated});
        }
    },
    loadHistory:async()=>{
        const user= useAuthStore.getState().user;
        if(user){
            try{
                const response= await apiRequest.get('/api/history');
                set({history:response.data.history});
            }catch(err){
                console.log('error fetching history',err);
            }
        }else{
            const stored= JSON.parse(localStorage.getItem("history"))||[];
            set({history:stored});
        }

    },
    clearHistory:async()=>{
        const user= useAuthStore.getState().user;
        if(user){
            try{
                await apiRequest.delete('/api/history');
                set({history:[]});
            }catch(err){
                console.log('error clearing history',err);
            }
        }else{
            localStorage.removeItem("history");
            set({history:[]});
        }
    }
}));