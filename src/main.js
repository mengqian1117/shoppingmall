import Vue from 'vue'
import App from './App'
import router from './router'
import {Button,Tabbar,TabbarItem,NavBar,Search,Swipe,SwipeItem,Lazyload,Icon,Cell,CellGroup,Row,Col,Tag,Dialog,List} from "vant"
Vue.use(Button).use(Tabbar).use(TabbarItem).use(NavBar).use(Search).use(Swipe).use(SwipeItem).use(Lazyload).use(Icon).use(CellGroup).use(Cell).use(Row).use(Col).use(Tag).use(List).use(Dialog);
Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
