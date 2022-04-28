Vue.createApp({
    data() {
      return {
        message: "Hello Vue!",
        article: [],
      };
    },
    methods: {
      getArticle()
      {
        axios
          .get(
            "https://raw.githubusercontent.com/wicahma/tekweb2022/master_4/contents/articles.json"
            )
          .then((res) => {
            console.log(res.data); //melihat respon data pada console browser
            this.article = res.data; //memperbarui variabel article pada bagian data()
          })
          .catch((error) => {
            console.log(error); //melihat error jika pengambilan data adalah gagal
          });
      }
    },
    beforeMount() {
      this.getArticle() //eksekusi fungsi getArticles() pada bagian methods saat halaman terbuka
    },
  }).mount("#app");
