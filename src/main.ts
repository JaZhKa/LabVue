// main.ts
import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import App from './App.vue';
import router from './router';
import { createI18n, useI18n } from 'vue-i18n';
import { languages, defaultLocale, dateTimeFormats } from './langs';
import store from './store';

const app = createApp(App, {
	setup() {
		const { t } = useI18n();
		return { t };
	},
});

const datetimeFormats = Object.assign(dateTimeFormats);
const messages = Object.assign(languages);
const i18n = createI18n({
	legacy: false,
	fallbacklocal: 'cn',
	locale: defaultLocale,
	globalInjection: true,
	messages,
	datetimeFormats,
});

app.use(ElementPlus);
app.use(router);
app.use(i18n);
app.use(store);
app.mount('#app');
