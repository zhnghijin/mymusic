import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue';

// function resolve(dir) {
//   return join(__dirname,dir)
// }

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
	resolve:{
		alias:{
			'@':resolve(__dirname,'src')
		}
	}
})
