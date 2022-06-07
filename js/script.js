let vm = new Vue({
  el: "#app",
  data: {
    movies: [],
    cart: [],
    currentMovie: null,
    isCartOpen: false,
    isCartCheckOut: false,
    dict: {},
    amount: {},
    movieName: "",
    msg: "",
  },
  created() {
    let apiUrl = "movie.json";

    axios.get(apiUrl).then((res) => {
      this.movies = res.data;
    });
  },
  methods: {
    bgcss(url) {
      return {
        "background-image": "url(" + url + ")",
        "background-position": "center center",
        "background-size": "cover",
      };
    },
    wheel(evt) {
      TweenMax.to(".cards", 0.8, {
        left: "+=" + evt.deltaY * 2 + "px",
      });
      return;
    },
    addCart(movie, evt) {
      this.currentMovie = movie;
      let target = evt.target;
      TweenMax.from(".buybox", 0.8, {
        left: $(target).offset().left,
        top: $(target).offset().top,
        opacity: 1,
      });
      setTimeout(() => {
        if (this.cart.indexOf(movie) != -1) {
          this.dict[movie._id] += parseInt(this.amount[movie._id]);
          return;
        }
        this.cart.push(movie);
        if (isNaN(parseInt(this.amount[movie._id]))) this.amount[movie._id] = 1;
        this.dict[movie._id] = parseInt(this.amount[movie._id]);
      }, 800);
      return;
    },
    deleteItem(movie) {
      let item = this.cart.indexOf(movie);
      this.cart.splice(item, 1);
      this.dict[movie._id] = 0;
      return;
    },
    allDelete() {
      this.cart.splice(0, this.cart.length);
      for (let key in this.dict) {
        this.dict[key] = 0;
      }
      return;
    },
    cartAmount(movie) {
      return this.dict[movie._id];
    },
    AmountPlus(movie) {
      this.dict[movie._id] += 1;
      this.isCartOpen = false;
      this.isCartOpen = true;
      return;
    },
    AmountMinus(movie) {
      if (this.dict[movie._id] != 0) {
        this.dict[movie._id] -= 1;
        this.isCartOpen = false;
        this.isCartOpen = true;
      }
      return;
    },
    totalMovies() {
      let count = 0;
      for (let key in this.dict) {
        count += this.dict[key];
      }
      return count;
    },
    notFoundIt() {
      return this.movieName.length == 0;
    },
  },
  watch: {
    cart() {
      TweenMax.from(".fa-shopping-cart", 0.3, {
        scale: 0.5,
      });
    },
  },
  computed: {
    totalPrice() {
      return this.cart
        .map((movie) => movie.price * this.dict[movie._id])
        .reduce((total, p) => total + p, 0);
    },
  },
});
