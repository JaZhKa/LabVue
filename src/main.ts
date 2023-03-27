// main.ts
import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import App from './App.vue';
import router from './router';
import { createI18n, useI18n } from 'vue-i18n';
import { languages } from './langs';
import { defaultLocale } from './langs';

const app = createApp(App, {
	setup() {
		const { t } = useI18n();
		return { t };
	},
});

const messages = Object.assign(languages);
const i18n = createI18n({
	legacy: false,
	fallbacklocal: 'en',
	locale: defaultLocale,
	messages,
});

app.use(ElementPlus);
app.use(router);
app.use(i18n);
app.mount('#app');
