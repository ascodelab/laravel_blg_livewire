/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');
//configuring vuex
import Vuex from 'vuex';
Vue.use(Vuex);
import {storeData} from "./store/index";
const store = new Vuex.Store(
   storeData
);
/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('header-component', require('./components/HeaderComponent.vue').default);
Vue.component('banner-component', require('./components/BannerComponent.vue').default);
Vue.component('features-component', require('./components/FeaturesComponent.vue').default);
Vue.component('about-component', require('./components/AboutComponent.vue').default);
Vue.component('newsletter-component', require('./components/NewsletterComponent.vue').default);
Vue.component('footer-cta-component', require('./components/FooterCallToActionComponent.vue').default);
Vue.component('footer-component', require('./components/FooterComponent.vue').default);
/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
// blog related components
Vue.component('render-article-component', require('./components/ArticleRenderComponent.vue').default);


const app = new Vue({
    el: '#app',
    store,
});
