import React from "react";

function Article({ title, date = "January 1, 1970", preview, minutes }) {
    let displayEmoji = "";
    let minutesToRead;
    
    function minutesHelper(increment, emoji) {
        for (let i = 0; i <= minutes; i += increment) {
            displayEmoji += emoji;
        }
        minutesToRead = `${displayEmoji}${minutes} min read`;
    }

   if(minutes < 30) {
    minutesHelper(5, "☕️");
   } else {
    minutesHelper(10, "🍱");
   }

    return (
        <article>
            <h3>{title}</h3>
            <small>{date} | {minutesToRead}</small>
            <p>{preview}</p>
        </article>
    )
}

export default Article;