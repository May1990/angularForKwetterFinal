/**
 * Created by Anna-May on 03/05/2017.
 */
import { Component } from 'angular2/core';
import {ServiceUser} from "../service/serviceUser";
import {ServiceTweet} from "../service/serviceTweet";
import {HTTP_PROVIDERS} from "angular2/http";
import {document} from "angular2/src/facade/browser";

@Component({
  selector: 'app-profile',
  templateUrl: 'app/profile.component.html',
  styleUrls: ['app/styles/general.css', 'app/styles/profile.component.css'],
  providers:[ServiceUser, ServiceTweet, HTTP_PROVIDERS]
})

export class ProfileComponent {
  adjust: string = "noAdjust";
  selectedUser: User;
  usernameTemp: string;
  usernameTempLogIn: string;
  tweets: Tweet[];
  following: User[];
  countFollowing: number;
  countFollower: number;
  countOwnTweets: number;
  btnDis: boolean = true;

  newUserName: string;
  userNameExist: string = "Username bestaat al!";
  email:string;
  name: string;
  web: string;
  bio: string;
  pictureUrl: string;

  selectedBtn;

  constructor(private serviceUser:ServiceUser, private serviceTweet:ServiceTweet){
    this.usernameTempLogIn = parent.window["userLogIn"].userName;
    this.usernameTemp = this.usernameTempLogIn;
    debugger;
    console.log(serviceUser.user);
    this.fillUser();
  }

  fillUser(){
    this.serviceUser.getUserByUserName(this.usernameTemp).subscribe(user => {
      this.selectedUser = user;
      this.name = this.selectedUser.name;
      this.email = this.selectedUser.email;
      this.newUserName = this.selectedUser.userName;
      this.web = this.selectedUser.website;
      this.bio = this.selectedUser.biografy;

      this.fillTweets();
      this.fillFollowing();
      this.fillCountFollowing();
      this.fillCountFollower();
    });
  }

  fillCountFollowing(){
    this.serviceUser.getCountFollowing(this.selectedUser.id).subscribe(count=>{
      this.countFollowing = count;
    });
  }

  fillCountFollower(){
    this.serviceUser.getCountFollower(this.selectedUser.id).subscribe(count=>{
      this.countFollower = count;
    });
  }

  fillFollowing(){
    this.serviceUser.getFollowing(this.selectedUser.userName).subscribe(users=>{
      this.following = users;
    });
  }

  fillTweets(){
    this.serviceTweet.getTweetsByUserName(this.selectedUser.userName).subscribe(tweets=>{
      this.tweets = tweets;
      this.countOwnTweets = this.tweets.length;
    });
  }

  fillTweetsFollowing(){
    this.serviceTweet.getTweetsOnlyFollowing(this.selectedUser.id).subscribe(tweets=>{
      this.tweets = tweets;
    });
  }

  fillTweetsFollowers(){
    this.serviceTweet.getTweetsOnlyFollower(this.selectedUser.id).subscribe(tweets=>{
      this.tweets = tweets;
    });
  }

  // adjust
  adjustUserName(){
    this.serviceUser.adjustUsername(this.newUserName, this.selectedUser.userName).subscribe(
        tweets => {
          this.usernameTemp = this.newUserName;
          this.fillUser();
    });
  }

  adjustDetails(){
    this.serviceUser.adjustUser(this.email,this.name,this.selectedUser.userName,this.bio,this.pictureUrl,this.web).subscribe(
        tweets => {
          this.usernameTemp = this.newUserName;
          this.fillUser();
    });
  }

  checkUserNameExist(){
    this.serviceUser.doesUserNameExist(this.newUserName).subscribe(succes => {
      debugger;
      if(succes == true){
        document.getElementById("userNameExist").style.display = "block";
        this.btnDis = true;
      }else{
        document.getElementById("userNameExist").style.display = "none";
        this.btnDis = false;
      }
    });
  }

  setAdjust(valueAdjust: string){
    this.adjust = valueAdjust;
  }

  refreshPage(){
    // To Do value to give
    this.usernameTemp = "";
    this.fillUser();
  }

  setTempUserName(event){
    this.selectedBtn = event.srcElement;
    this.usernameTemp = this.selectedBtn.innerHTML;
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
