import { create } from 'zustand'
import apiRequest from '../utilities/apiRequest';
import {persist} from 'zustand/middleware'

export const useAuthStore = create(persist((set) => ({
  user:null,
  loading:false,
  error:null,
  register:async(userData)=>{
    set({loading:true,error:null});
    try{
      const {data}= await apiRequest.post('/api/auth/register',userData);
      set({user: data.user.username, loading:false, error:null});
      return true;
    }catch(err){
      set({loading:false,error:err.response?.data?.message || "login failed"});
      return false;
    }
  },
  login:async(userData)=>{
    set({loading:true,error:null});
    try{
      const {data}= await apiRequest.post('/api/auth/login',userData);
      set({user: data.user.username, loading:false, error:null});
      return true;
    }catch(err){
      set({loading:false,error:err.response?.data?.message || "login failed"})
      return false;
    }
  },
  logout:async()=>{
    set({loading:true,error:null});
    try{
      await apiRequest.post('/api/auth/logout');
      set({user: null, loading:false, error:null});
    }catch(err){
      set({loading:false, error:err.response?.data?.message || "logout failed"})
    }
  },
  
})));