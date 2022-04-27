Vue.createApp({
    data() {
      return {

        // Untuk page tentang
        tentang: {
          judul: "Tentang",
          p1: "Aku merupakan seorang Mahasiswa yang mengambil jurusan SI di Universitas Ahmad Dahlan. Ya, salah satu Universitas Islam yang ada di Jogjakota",
          p2: "Dalam berkuliah di Universitas Ahmad Dahlan, saya sudah mempelajari banyak hal. Dimulai dari mempelajari bahasa pemrograman Phyton, lalu dilanjutkan dengan belajar menggunakan aplikasi Statistik yaitu IBM Statistic. Selanjutnya, saya mempelajari bahasa pemrograman Html, CSS dan Javascript, dimana bahasa tersebut merupakan bahsa yang lumayan sulit unntuk dipelajari dimana waktu untuk mempelajarinya hanya 6 bulan dengan banyak bahasa pemrograman lainnya yang harus dipelajari, tetapi alhamdulillah saya bisa melewati masa sulit untuk mempelajarinya dan kini sudah memahami sebagian materi Html dan jugapemrograman yanng ada pada semester sebelumnya, Berikut adalah list materi dan juga bahasa yang sudah saya kuasali dan juga pelajari semasa kuliah",
          dt_diri1: [
            {
              judul: "Tanggal Lahir",
              data: "22 Oktober 2002",
            },
            {
              judul: "Telepon",
              data: "+62 857 5108 0434",
            },
            {
              judul: "Kota",
              data: "Yogyakarta, Indonesia",
            },
          ],
          dt_diri2: [
            {
              judul: "Umur",
              data: "19 Tahun",
            },
            {
              judul: "Pendidikan sekarang",
              data: "Sarjana",
            },
            {
              judul: "Email",
              data: "teguh.dc.kusuma@gmail.com",
            },
          ],

        },
        list: {
          data: [
            {
              judul: "HTML",
              teks: "Bahasa pemrograman yang biasanya sering digunakan untuk memmbuat sebuah website.",
              url: "https://id.wikipedia.org/wiki/HTML",
            },
            {
              judul: "CSS",
              teks: "Bahasa pemrograman yang mendampingi Html, hanya saja ia berfungsi khusus untuk mempercantik tampilan Html.",
              url: "https://id.wikipedia.org/wiki/Cascading_Style_Sheets",
            },
            {
              judul: "Python",
              teks: "Merupakan bahasa pemrograman yang memilki barisan kode program yang sangat simpel dan mudah untuk dipahami.",
              url: "https://id.wikipedia.org/wiki/Python_(bahasa_pemrograman)",
            },
            {
              judul: "Java",
              teks: "Saya baru mempelajari java pada seemster 4 ini mengggunakan aplikasi Netbeans.",
              url: "https://id.wikipedia.org/wiki/Java",
            },
            {
              judul: "GIS",
              teks: "Memungkinkan kita dapat memahami dan memvisualisasikan data geografi sehingga dapat mengetahui pola, hubungan dan tren dalam bentuk peta, tabel dan grafik serta laporan.",
              url: "https://id.wikipedia.org/wiki/Sistem_informasi_geografis",
            },
            {
              judul: "Javascript",
              teks: "Ia adalah bahasa selanjutnya untuk melengkapi bahasa pemrograman di Html. Dengan menggunakan ini, maka websiite akan menjadi lebih responsive.",
              url: "https://id.wikipedia.org/wiki/JavaScript",
            },
            {
              judul: "Photoshop",
              teks: "Photoshop adalah aplikasi pengedit gambar yang fiturnya saya rasa cukup melimpah sehhingga dapat digunakan dalam bidang yanng luas.",
              url: "https://id.wikipedia.org/wiki/Adobe_Photoshop",
            },
            {
              judul: "Illustrator",
              teks: "Berbeda dengan Photoshop, ia lebih dikhususkan untuk membuat sebuah illustrasi atau vector, dikarenakan fiturnya yang sudah dikhsusukan untuk menggab=mbar illustrasi.",
              url: "https://id.wikipedia.org/wiki/Adobe_Illustrator",
            },
          ]
        },
        tabel: {
          jtabel: ["Keterampilan","Tingkat"],
          data: [
            {
              nama_app: "Photoshop",
              tingkat_skill: "Tinggi",
            },
            {
              nama_app: "Premiere Pro",
              tingkat_skill: "Menengah",
            },
            {
              nama_app: "Ilustrator", 
              tingkat_skill: "Menengah",
            },
            {
              nama_app: "Figma",
              tingkat_skill: "Tinggi",
            },
            {
              nama_app: "Corel Draw",
              tingkat_skill: "Rendah",
            },
            
          ],
        },
        // Akhir page tentang
       
       
        // Untuk page index
        header: {
          nama: "Teguh Dwi Cahya Kusuma",
          des : {
            a: "Seorang Mahasiswa",
            b: "di Universitas Ahmad Dahlan",
            jrs: {
              title: "Sistem Informasi",
              url: "https://id.wikipedia.org/wiki/Mahasiswa",
            },
            kta: {
              title: "Yogyakarta",
              url: "https://www.jogjakota.go.id/",
            },
            
          },
        },
        sosial: {
          ig: {
            url: "https://www.instagram.com/u.diama/",
          },
          git: {
            url: "https://github.com/wicahma",
          },
          fb: {
            url: "https://www.facebook.com/people/Teguh-Dwi-Cahya-Kusuma/100011516138101/",
          },
          tw: {
            url: "https://twitter.com/wicahma",
          },
        },
        // Akhir page index

      };
    },
    methods: { //tempat menambahkan fungsi-fungsi
      getHeaderData(){} //contoh fungsi
    },
    beforeMount() { //fungsi yang dipanggil oleh vue sebelum mount terjadi
      this.getHeaderData() //contoh fungsi dalam methods yang dipanggil saat halaman terbuka
    },
  }).mount("#app");

  