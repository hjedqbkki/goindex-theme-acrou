import Vue from "vue";

var godownload = Vue.component("godownload", {
  props: ['url'],
  template: `
    <div v-if="url">
      <a :href=url class="mdui-fab mdui-fab-fixed mdui-ripple mdui-color-theme-accent"><i class="mdui-icon material-icons">file_download</i></a>
    </div>
  `,
});

export default godownload;
