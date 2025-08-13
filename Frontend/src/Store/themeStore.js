import { create } from 'zustand'

export const useThemeStore = create((set) => {
    let savedTheme= localStorage.getItem("theme") || "light";
    localStorage.setItem("theme", savedTheme);
    localStorage.setItem("theme", savedTheme);
    document.documentElement.classList.toggle("dark", savedTheme==='dark');

  return {
    theme: savedTheme,
    toggleTheme: ()=> set((state)=>{
        const newTheme= state.theme==='dark'?'light':'dark';
        localStorage.setItem("theme",newTheme);
        document.documentElement.classList.toggle("dark",newTheme==='dark');
        return {theme: newTheme};
    })
  };
})