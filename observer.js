// Publisher class
// 1. state: State
// 2. list of subscribers:Array<Subscriber>
// 3. subscribe():boolean
// 4. unsubscribe():boolean
// 5. notify():void
// 6. triggerNotification():void
// 7. publish(state:State):void
var NewsPublisher = /** @class */ (function () {
    // methods
    function NewsPublisher() {
        this.subscribers = [];
    }
    NewsPublisher.prototype.subscribe = function (subscriber) {
        this.subscribers.push(subscriber);
        return true;
    };
    NewsPublisher.prototype.unsubscribe = function (subscriber) {
        return true;
    };
    NewsPublisher.prototype.notify = function () {
        for (var _i = 0, _a = this.subscribers; _i < _a.length; _i++) {
            var subscriber = _a[_i];
            subscriber.update(this.news);
        }
    };
    NewsPublisher.prototype.triggerNotification = function () {
        this.notify();
    };
    NewsPublisher.prototype.publish = function (news) {
        this.news = news;
        this.triggerNotification();
        return true;
    };
    return NewsPublisher;
}());
var UrbanSubscriber = /** @class */ (function () {
    function UrbanSubscriber() {
    }
    UrbanSubscriber.prototype.update = function (news) {
        console.log(news);
    };
    return UrbanSubscriber;
}());
// Testing our code
// News
var VisionNews = /** @class */ (function () {
    function VisionNews(timeOfPublication, heading, content, author) {
        this.timeOfPublication = timeOfPublication;
        this.heading = heading;
        this.content = content;
        this.author = author;
    }
    return VisionNews;
}());
// Publisher Object(s)
var NewVision = new NewsPublisher();
var urbanSubscriber1 = new UrbanSubscriber();
var urbanSubscriber2 = new UrbanSubscriber();
var urbanSubscriber3 = new UrbanSubscriber();
var urbanSubscriber4 = new UrbanSubscriber();
var urbanSubscriber5 = new UrbanSubscriber();
NewVision.subscribe(urbanSubscriber1);
NewVision.subscribe(urbanSubscriber2);
NewVision.subscribe(urbanSubscriber3);
NewVision.subscribe(urbanSubscriber4);
NewVision.subscribe(urbanSubscriber5);
var MondayNews = new VisionNews(new Date(), "14 million Ugandans mad", "14 million Ugandans mad...", "Phillip");
NewVision.publish(MondayNews);
var Bukedde = new NewsPublisher();
Bukedde.subscribe(urbanSubscriber1);
Bukedde.subscribe(urbanSubscriber2);
Bukedde.subscribe(urbanSubscriber3);
Bukedde.subscribe(urbanSubscriber4);
Bukedde.subscribe(urbanSubscriber5);
var amawulireKuBalaza = new VisionNews(new Date(), "Effujjo!!", "Abayizi abamalirizza emisomo gyabwe e Makerere, bakyekoze, banywedde Sooda nabayita ne munnyindo.....", "Brisa");
Bukedde.publish(amawulireKuBalaza);
