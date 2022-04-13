Vue.createApp({
    data() {
      return {     
        header: {} // variabel yang diakses oleh template
      };
    },
    methods: { //tempat menambahkan fungsi-fungsi
      getHeaderData(){} //contoh fungsi
    },
    beforeMount() { //fungsi yang dipanggil oleh vue sebelum mount terjadi
      this.getHeaderData() //contoh fungsi dalam methods yang dipanggil saat halaman terbuka
    },
  }).mount("#app");
  