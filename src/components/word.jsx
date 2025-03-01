import React, { useEffect, useState } from "react";
import ReactWordcloud from "react-wordcloud";
import Papa from "papaparse";

const Word = () => {
  const [commentData, setCommentData] = useState([]);

  useEffect(() => {
    // Fetch the CSV file
    const csvFileUrl = "modified_file.csv";
    Papa.parse(csvFileUrl, {
      download: true,
      header: true,
      complete: (results) => {
        const comments = results.data.map((row) => row.Comment);
        setCommentData(comments);
      },
    });
  }, []);

  // Prepare word frequency data for word cloud
  const wordFrequency = {};
  const stopWords = [
    "the", "and", "to", "a", "of", "in", "that", "but", "this", "what", "for", "like", 
    "was", "is", "an", "are", "can", "you", "all", "as", "why", "i", "with", "my",
    "it's", "your", "so", "not", "on", "am", "dont", "he", "she", "which", 
    "we", "us", "will", "were", "should", "would",
    "or", "about", "have", "had", "be", "me", "no", "yes", "just", "been", "much",
    "more", "their", "there", "they", "them", "don't", "every", "could", "from", 
    "after", "got", "go", "get", "been", "have", "has", "do", "does", "did", 
    "make", "made", "come", "came", "take", "took", "give", "gave", "find", 
    "found", "know", "knew", "think", "thought", "say", "said", "see", "saw", 
    "want", "wanted", "use", "used", "try", "tried", "thing", "things", "stuff", 
    "item", "items", "person", "people", "man", "woman", "child", "children", 
    "one", "ones", "place", "places", "time", "times", "day", "days", "year", 
    "years", "good", "bad", "better", "best", "big", "small", "large", "old", 
    "young", "new", "first", "last", "high", "low", "great", "little", "many", 
    "few", "some", "any", "other", "same", "different", "while", "since", 
    "until", "than", "to", "at", "by", "from", "into", "under", "over", 
    "between", "through", "before", "among", "against", "within", "without",
    "I", "he", "she", "it", "we", "they", "him", "her", "us", "them", "an", 
    "very", "really", "just", "still", "already", "again", "too", "never", 
    "always", "often", "sometimes", "now", "here", "oh", "wow", "hey", "hi", 
    "hello", "ouch", "oops", "ugh", "how","when","because","its","u","i'm", "getting"
    ,"where","even","if","up","down","going","lot","who","using","it.","in","lol","please"
    ,"doing","i've","you're","doesn't","?","me","im","can't","i'm","those","me"
    ,"didn't","didnt","well","then","our","-","his","gonna","on","me.","i’m","these","i'm","isn't",
    "kya","ki","being","also","tell"
];

  // Add more stop words as needed
  commentData.forEach((comment) => {
    const words = comment.split(" ");
    words.forEach((word) => {
      const formattedWord = word.trim().toLowerCase();
      if (!stopWords.includes(formattedWord)) {
        wordFrequency[formattedWord] = wordFrequency[formattedWord]
          ? wordFrequency[formattedWord] + 1
          : 1;
      }
    });
  });

  const wordCloudData = Object.keys(wordFrequency).map((word) => ({
    text: word,
    value: wordFrequency[word],
  }));

  return (
    <div>
      <div  style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "750px"}}>
        <ReactWordcloud 
            words={wordCloudData}
            options={{
              fontStyle: "normal",
              fontWeight: "bold",
              fontSizes: [10, 80], // Adjust the range of font sizes
            }}
        />
      </div>
    </div>
  );
};

export default Word;