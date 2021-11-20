# Bongo's Frontend Developer Position Assigment 
## Problem: Anagram
Write a function that detects if two strings are anagram e.g. ‘bleat’ and ‘table’ are
anagrams but ‘eat’ and ‘tar’ are not.
### [Code Snippet](https://github.com/depjoti/BongoBD_Recruitment_Assignments/tree/main/Anagram)


## Problem: Design Pattern
Explain the design pattern used in following:
~~~
interface common.Vehicle {
int set_num_of_wheels()
int set_num_of_passengers()
boolean has_gas()
}
~~~
- Explain how can you use the pattern to create car and plane class?
- Use a different design pattern for this solution.
### [Code Snippet](https://github.com/depjoti/BongoBD_Recruitment_Assignments/tree/main/Design_Pattern)

## Problem:Video Player App
#Write a video player application with ‘Play’, ‘Forward’ , ‘Rewind’ functionalities. 
### [Code Snippet1](https://github.com/depjoti/BongoBD_Recruitment_Assignments/tree/main/video_player)
With react-player NPM Package
### [Code Snippet2](https://github.com/depjoti/BongoBD_Recruitment_Assignments/tree/main/videoplayer)


#Please write pseudocode for this program and explain the design pattern you will use to develop
these three functionalities.
-The psudocode defines the steps and algorithm behind the actual code, psudo code for the 'play', 'rewind' and 'fast forward' functionalities are written below:

- play and pause
~~~javascript
const videoHandler = (control) => {
    if (control === "play") {
      videoRef.current.play();
      setPlaying(true);
      var vid = document.getElementById("video1");
      setVideoTime(vid.duration);
    } else if (control === "pause") {
      videoRef.current.pause();
      setPlaying(false);
    }
  };
~~~
- rewind
~~~javascript
 const rewind = () => {
    videoRef.current.currentTime -= 5;
  };
~~~
- forward
~~~javascript
const fastForward = () => {
    videoRef.current.currentTime += 5;
  };
~~~
