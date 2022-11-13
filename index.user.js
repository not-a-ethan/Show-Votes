// ==UserScript==
// @name         Total Score
// @namespace    http://tampermonkey.net/
// @version      1
// @description  try to take over the world!
// @author       Ethan (https://github.com/not-a-ethan)
// @match        *.codidact.com/*
// @match        *.codidact.org/*
// @downloadURL  https://github.com/not-a-ethan/Show-Votes/raw/main/index.user.js
// @updateURL    https://github.com/not-a-ethan/Show-Votes/raw/main/index.user.js
// ==/UserScript==

(function() {
  const upvotes = document.getElementsByClassName("js-upvote-count")
  const downvotes = document.getElementsByClassName("js-downvote-count")
  console.log(downvotes)
  // This is a spacer
  for (let i = 0; i < upvotes.length; i++) {
    let upvotesNum = upvotes.item(i).innerHTML.split("+")
    let downvotesNum = downvotes.item(i).innerHTML.split("−")
    upvotesNum = Number(upvotesNum[1])
    downvotesNum = Number(downvotesNum[1])
    const total = Number(upvotesNum) - Number(downvotesNum)
    if (total > 0) {
      upvotes.item(i).innerHTML = "+" + total
    } else {
      upvotes.item(i).innerHTML = total
    }
    downvotes.item(i).innerHTML = ""
    // Another spacer
    function showVotes() {
      upvotes.item(i).innerHTML = "+" + upvotesNum + "/-" + downvotesNum
      upvotes.item(i).style.cursor = "default"
    }
    upvotes.item(i).addEventListener("click", showVotes)
    upvotes.item(i).style.cursor = "pointer"
  }
})();
