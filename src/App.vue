<template>
  <v-app>
    <v-app-bar
      app
      color="black"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAclBMVEX///8AAADz8/M5OTmPj4/f39/4+PjNzc0pKSmhoaH8/PxgYGCoqKiYmJjp6env7+/V1dUPDw9UVFRMTEyurq5bW1t1dXWBgYHY2NgfHx87Ozt7e3tra2vq6uomJia9vb0wMDBEREQVFRXDw8MUFBRHR0dG+dq0AAAEb0lEQVR4nO2c21biQBBFOwESCZJwlYvcGf7/F2eUGQWhKtUuhHVqzn7WXtkSqdNVSYdACCGEEEIIIYQQQgghhBBCCCGEEEIIIf8rVctCGrVmaVrzjOqH9P7wnFhYxCxZjE1rntH+KT+rYbKPWLLoIBr2C++GSdO9YdJybzg236eohsnIveFq6d0weXFvmOTuDVfuDZOue8OkdG9oSuDQhsnaveGTYaeIbZhMDIbx+8O+OTDFsx4MDvPNrG++mGm9YXM8OGw3T4ZFx5PuKC/LZRWxOfsGWVWWrWmv13uxGA5ta6bLsvW+aD4Tl2oYI8TtaJo+xMgbqniSFpqZas9NsRn2rQn8SCYa2vLDTbEZmhP4Ednw/h+h1TCqLSUbzn6wgyhhNZzHLCoaNuKasDfBahjTlgI1jPkXAjXs2BcFNTQl8COohhvz5aEaWhL4EVhDa1sK2HBrXBTX0JrAgQ0T2xUiG9oSOLKhLYFDG24t1whtaNrDYhtaBsPghoa2FLihIYFjGM5Fw1lWtyiGYT4QFWsTOIZhryUa1iZwDMNc+Rcd1jTkUQyznahYMzZCMQxr0TDR+54whkEemeltKRzDlnyfqgkcxzB0RcO5dq1AhtlBVNQSOJBh6ImGWgJHMgwT0VBJ4FCGmWiotKWgDMNIVhSTDZZhGIqGYgIHM1QSeE9YFMxQKYpDYaeIZpjKm2EhgaMZhlw03F0fDMMZhoWoeD2B4xmmouH1thSeofI04+paUQQ0DHJb6loCRzSMS+CIhkpbanC5KKRhthEVLxM4pGHYi4aXj+NhGiptqYvBMKhhKRpeJHBQw9AWDedfiiKqYSEXxS8JHNVQKYq/zosirKHSljp/OQrXsJDfFzlL4LiGyqzmbDAMbKgUxdPnwJENW/J9evJlg2yotKVOEji0oTKr+Uzg0IZKW2r10ZbCNgyvouJHAgc3VGY1/34H3FCZ1fT//gS6YX1bCt5wKhfF45cNvKHSljomcHzDrCEqvidwfEOlKL4fT+DAUJnVvA2GPRhWouHb8QQeDJW21MGJoVIUn50Yym2pXSmeqQBlqBTFVyeGqXy8x16ql1iGyqwmkWIdmGGIP1cIzVBpSzkxVNpSXgyLrXdD7QEGJ4bKrMaLYRr3ZQNoqD1C7MRQSeBeDKOKIqRhVFHENMy23g2VtpQXQ2VW48VQmdU4MbQfiAprGOTBsBfDqXtD6+ETwIapPKt5tKH4TR95Gq7Slnqsofz4dux5v6a21AMM5fFDrKEyq3mkobK7Wy+rNOo8avmP9QjDLK2W5bSt7e1mm8Z2OO50Fi+TZndkcC3kl03vbbh/XQwb8mkJ17AcPG9J4HcyjO5yWq+svi2FbpitvBtqx704MaxtS+EbKm+2OzGsK4oODDO9KDowrCmKHgz1tpQLQ7Ut5cJQLYo+DLWi6MRQeYTYiaHSlvJimInHvdzJ8BvHzpr2h5+IRTFyne+St6Ox7PFPGd1oHUIIIYQQQgghhBBCCCGEEEIIIYQQQgjxyW9cqVFps0DH3AAAAABJRU5ErkJggg=="
          transition="scale-transition"
          width="40"
        />

        <h1>NewsHub</h1>
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://newsapi.org/"
        target="_blank"
        text
      >
        <span class="mr-2">API source</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>

    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'App',

  components: {
  },

  data: () => ({
    //
  }),
});
</script>
