class movie {
    constructor(title, studio, rating = 'PG') {
        this.title = title;
        this.studio = studio;
        this.rating = rating;


    }
    setRating() {
        this.rating;
    }


    getTitle() {
        console.log(this.title);
    }
    getStudio() {
        console.log(this.studio);
    }
    getRating() {
        console.log(this.rating);
    }


}
var aa = new movie("Casino Royale", "Eon Productions","PG13");
aa.getTitle();
aa.getStudio();
aa.getRating();




