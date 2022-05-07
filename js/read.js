Vue.createApp({
    data() {
      return {       
        article: null,
      };
    },
    methods: {
      getMarkdownData()
      {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const artikel = urlParams.get('article');        
        var converter = new showdown.Converter();
        console.log(artikel);
        axios
          .get(
            src="../contents/"+artikel
          )
          .then((res) => {
            var html = converter.makeHtml(res.data);           
            this.article = html;
            console.log(html);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
    beforeMount() {
      this.getMarkdownData();
    },
  }).mount("#app");

  document.querySelector('.dn').addEventListener('click',()=> {
    document.body.classList.toggle('light')
  })
