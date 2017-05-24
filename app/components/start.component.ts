/**
 * Created by Anna-May on 03/05/2017.
 */
import {Component, Input, Output} from 'angular2/core';
import {ServiceUser} from './../service/serviceUser';
import {ServiceTweet} from './../service/serviceTweet';
import {HTTP_PROVIDERS} from "angular2/http";

@Component({
  selector: 'app-start',
  templateUrl: 'app/start.component.html',
  styleUrls: ['app/styles/general.css', 'app/styles/start.component.css'],
  providers:[ServiceUser, ServiceTweet, HTTP_PROVIDERS]
})

export class StartComponent {
  following: User[];
  follower: User[];
  lastTweet: Tweet;
  content: string;
  searchWord: string;

  tweets: Tweet[];
  usernameTemp: string;

  constructor(private serviceUser:ServiceUser, private serviceTweet:ServiceTweet){
    debugger;
    this.usernameTemp = parent.window["userLogIn"].userName;
    serviceTweet.getTweetsWithFollowing(this.usernameTemp).subscribe(tweets => {
      this.tweets = tweets;
    });

    this.refreshLastTweet();
    this.fillFollowers();
    this.fillFollowing();
  }

  newTweet(){
    this.serviceTweet.createTweet(this.content, this.usernameTemp).subscribe(
        tweets => {
    });
  }

  refreshLastTweet(){
    this.serviceTweet.getTweetsByUserName(this.usernameTemp).subscribe(tweets=>{
      this.lastTweet = tweets[tweets.length-1];
    });
  }

  fillFollowers(){
    this.serviceUser.getFollowers(this.usernameTemp).subscribe(tweets=>{
      this.follower = tweets;
    });
  }

  fillFollowing(){
    this.serviceUser.getFollowing(this.usernameTemp).subscribe(users=>{
      this.following = users;
    });
  }

  search(){
    this.serviceTweet.getTweetsByUserName(this.searchWord).subscribe(tweets=>{
      this.tweets = tweets;
      console.log(this.tweets);
    });
  }
}

interface Tweet{
  id: string;
  content: string;
  owner: User;
  timeAgo: string;
}

interface User{
  id: string;
  name: string;
  userName: string;
  website: string;
  pictureUrl: string;
  biografy: string;
  email: string;
}
