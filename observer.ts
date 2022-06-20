// State
    // timeOfPublication
    // heading
    // content
    // author
interface News {
    timeOfPublication:Date;
    heading: string;
    content:  string;
    author: string
}

// Subscriber interface
    // update(state:State)

interface Subscriber{
    update(news:News):void;
}

// Publisher class
    // 1. state: State
    // 2. list of subscribers:Array<Subscriber>
    // 3. subscribe():boolean
    // 4. unsubscribe():boolean
    // 5. notify():void
    // 6. triggerNotification():void
    // 7. publish(state:State):void

class NewsPublisher{
    // data
    private news: News;
    private subscribers: Array<Subscriber>;

    // methods
    constructor(){
        this.subscribers = [];
    }

    subscribe(subscriber:Subscriber):boolean{
        this.subscribers.push(subscriber);
        return true
    }

    unsubscribe(subscriber:Subscriber):boolean{
        for(subscriber of this.subscribers){
            subscriber = length._.remove(subscriber, this.subscribe)
        }
        return true
    }

    private notify():void{
        for (let subscriber of this.subscribers){
            subscriber.update(this.news);
        }        
    }

    private triggerNotification():void{
        this.notify();
    }

    publish(news: News):boolean{
        this.news = news;
        this.triggerNotification();
        return true;
    }
}


class UrbanSubscriber implements Subscriber{
    update(news: News): void {
        console.log(news);
        
    }
}

// Testing our code
    // News
    class VisionNews implements News {
        timeOfPublication: Date;
        heading: string;
        content:  string;
        author: string

        constructor(timeOfPublication:Date, heading: string, content:  string, author: string){
                this.timeOfPublication = timeOfPublication
                this.heading = heading;
                this.content = content;
                this.author= author;
        }
    }
    
    // Publisher Object(s)
    let NewVision = new NewsPublisher();
    let urbanSubscriber1 = new UrbanSubscriber()
    let urbanSubscriber2 = new UrbanSubscriber()
    let urbanSubscriber3 = new UrbanSubscriber()
    let urbanSubscriber4 = new UrbanSubscriber()
    let urbanSubscriber5 = new UrbanSubscriber()

    NewVision.subscribe(urbanSubscriber1)
    NewVision.subscribe(urbanSubscriber2)
    NewVision.subscribe(urbanSubscriber3)
    NewVision.subscribe(urbanSubscriber4)
    NewVision.subscribe(urbanSubscriber5)

    let MondayNews = new VisionNews(new Date(), "14 million Ugandans mad", "14 million Ugandans mad...", "Phillip");
    NewVision.publish(MondayNews);

    let Bukedde = new NewsPublisher();
    Bukedde.subscribe(urbanSubscriber1)
    Bukedde.subscribe(urbanSubscriber2)
    Bukedde.subscribe(urbanSubscriber3)
    Bukedde.subscribe(urbanSubscriber4)
    Bukedde.subscribe(urbanSubscriber5)

    let amawulireKuBalaza = new VisionNews(new Date(), "Effujjo!!", "Abayizi abamalirizza emisomo gyabwe e Makerere, bakyekoze, banywedde Sooda nabayita ne munnyindo.....", "Brisa");
    Bukedde.publish(amawulireKuBalaza)