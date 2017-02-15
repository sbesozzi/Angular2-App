// Properties of JSON
interface ArticleJSON {
  title: string;
  url: string;
  votes: string;
  publishedAt: string;
  description: string;
  author: string;
  urlToImage: string;
}

export class Article {
  public publishedAt: Date;

  // Article.fromJSON()
  // Instance of article class/bypass the contructor
  static fromJSON(json: ArticleJSON): Article {
    let article = Object.create(Article.prototype);

    return Object.assign(article, json, {
      votes: json.votes ? json.votes : 0,
      imageUrl: json.urlToImage,
      publishedAt: json.publishedAt ?
        new Date(json.publishedAt) :
        new Date()
    });
  }

  // Define instance variables inside constructor & value of attributes on model
  constructor(
    public title: string,
    public description: string,
    public imageUrl: string,
    // Optional ?
    public votes?: number
  ) {
    // votes = votes or 0
    this.votes = votes || 0;
    this.publishedAt = new Date();
  }



  public voteUp(): void {
    this.votes = this.votes + 1;
  }

  public voteDown(): void {
    this.votes = this.votes - 1;
  }

}
