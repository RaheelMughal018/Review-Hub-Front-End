import React, { useState, useEffect } from "react";
import {
  PieChart,
  Pie,
  Tooltip,
  Legend,
  BarChart,
  XAxis,
  YAxis,
  Bar,
} from "recharts";
import { useSelector } from "react-redux";
import WordCloud from "react-wordcloud";
import StarsCanvas from "./canvas/Star";
import { styles } from "../styles";
import Navbar from "./Navbar";
import html2pdf from "html2pdf.js";
// import say from 'say';

import landingPerson from "../assets/lottie/check2.json";
import DisplayLottie from "../components/displayLottie/DisplayLottie";

import Slideshow from "./slideshow";

const ChartComponent = () => {
  const [data, setData] = useState([]);
  const [recData, setRecData] = useState([]);
  const [text, setText] = useState(
    "Hello Their you Sexy Sexy Sexy sexy Zubair"
  );

  // const speak = () => {
  //   say.speak(text);
  // };
  const saveAsPDF = () => {
    console.log("Here");

    // Create a div element to wrap the entire page content
    const wrapper = document.createElement("div");
    wrapper.innerHTML = document.documentElement.innerHTML;

    // Remove scripts from the wrapper to avoid any unwanted behavior in the PDF
    wrapper.querySelectorAll("script").forEach((script) => script.remove());

    // Create options for PDF generation
    const opt = {
      margin: 0.5,
      filename: "chart.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    };

    // Generate and save the PDF
    html2pdf().set(opt).from(wrapper).save();
  };

  const speak = () => {
    if ("speechSynthesis" in window) {
      const speech = new SpeechSynthesisUtterance("You should " + text); // Prepend "You should" to the text
      window.speechSynthesis.speak(speech); // Speak the modified text
    } else {
      console.error("Speech synthesis not supported in this browser");
    }
  };

  const csvData = useSelector((state) => state.csvData);

  const sendRecommendationData = async (recommendationData) => {
    try {
      console.log("here");
      console.log(recData);
      console.log(JSON.stringify({ recommendation_comments: recData }));
      const response = await fetch(
        "http://127.0.0.1:8000/recommendation_summary/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ recommendation_comments: recData }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch recommendation summary");
      }

      const data = await response.json();

      setText(data.summary);
    } catch (error) {
      console.error("Error sending recommendation data:", error.message);
    }
  };

  useEffect(() => {
    const jsonData = csvData;
    const parsedData = JSON.parse(jsonData);

    console.log(parsedData, "12xxxx");

    // Filter recommendation comments
    const recommendationData = parsedData.filter(
      (item) => item.annotation === "Recommendation"
    );
    // Log recommendation comments for debugging
    console.log(recommendationData);

    setRecData(recommendationData);
    sendRecommendationData(recommendationData);
    setData(parsedData);
  }, [csvData]);

  // Function to count occurrences of each annotation
  const countAnnotations = () => {
    const counts = {};
    data.forEach((item) => {
      counts[item.annotation] = (counts[item.annotation] || 0) + 1;
    });
    return counts;
  };

  // Prepare data for word cloud
  const stopWords = [
    "the",
    "and",
    "to",
    "a",
    "of",
    "in",
    "that",
    "but",
    "this",
    "what",
    "for",
    "like",
    "was",
    "is",
    "an",
    "are",
    "can",
    "you",
    "all",
    "as",
    "why",
    "i",
    "with",
    "my",
    "it's",
    "your",
    "so",
    "not",
    "on",
    "am",
    "dont",
    "he",
    "she",
    "which",
    "we",
    "us",
    "will",
    "were",
    "should",
    "would",
    "or",
    "about",
    "have",
    "had",
    "be",
    "me",
    "no",
    "yes",
    "just",
    "been",
    "much",
    "more",
    "their",
    "there",
    "they",
    "them",
    "don't",
    "every",
    "could",
    "from",
    "after",
    "got",
    "go",
    "get",
    "been",
    "have",
    "has",
    "do",
    "does",
    "did",
    "make",
    "made",
    "come",
    "came",
    "take",
    "took",
    "give",
    "gave",
    "find",
    "found",
    "know",
    "knew",
    "think",
    "thought",
    "say",
    "said",
    "see",
    "saw",
    "want",
    "wanted",
    "use",
    "used",
    "try",
    "tried",
    "thing",
    "things",
    "stuff",
    "item",
    "items",
    "person",
    "people",
    "man",
    "woman",
    "child",
    "children",
    "one",
    "ones",
    "place",
    "places",
    "time",
    "times",
    "day",
    "days",
    "year",
    "years",
    "good",
    "bad",
    "better",
    "best",
    "big",
    "small",
    "large",
    "old",
    "young",
    "new",
    "first",
    "last",
    "high",
    "low",
    "great",
    "little",
    "many",
    "few",
    "some",
    "any",
    "other",
    "same",
    "different",
    "while",
    "since",
    "until",
    "than",
    "to",
    "at",
    "by",
    "from",
    "into",
    "under",
    "over",
    "between",
    "through",
    "before",
    "among",
    "against",
    "within",
    "without",
    "I",
    "he",
    "she",
    "it",
    "we",
    "they",
    "him",
    "her",
    "us",
    "them",
    "an",
    "very",
    "really",
    "just",
    "still",
    "already",
    "again",
    "too",
    "never",
    "always",
    "often",
    "sometimes",
    "now",
    "here",
    "oh",
    "wow",
    "hey",
    "hi",
    "hello",
    "ouch",
    "oops",
    "ugh",
    "how",
    "when",
    "because",
    "its",
    "u",
    "i'm",
    "getting",
    "where",
    "even",
    "if",
    "up",
    "down",
    "going",
    "lot",
    "who",
    "using",
    "it.",
    "in",
    "lol",
    "please",
    "doing",
    "i've",
    "you're",
    "doesn't",
    "?",
    "me",
    "im",
    "can't",
    "i'm",
    "those",
    "me",
    "didn't",
    "didnt",
    "well",
    "then",
    "our",
    "-",
    "his",
    "gonna",
    "on",
    "me.",
    "i’m",
    "these",
    "i'm",
    "isn't",
    "kya",
    "ki",
    "being",
    "also",
    "tell",
  ];
  const prepareWordCloudData = () => {
    const wordsCount = {};
    data.forEach((item) => {
      const words = item.comment.split(/\s+/); // Split comment into words
      words.forEach((word) => {
        // Remove punctuation and convert to lowercase for consistency
        const cleanedWord = word.replace(/[^\w\s]/g, "").toLowerCase();
        if (!stopWords.includes(cleanedWord)) {
          // Check if word is not in stopWords array
          wordsCount[cleanedWord] = (wordsCount[cleanedWord] || 0) + 1;
        }
      });
    });

    // Convert word count object to array of { text, value } objects for word cloud
    return Object.keys(wordsCount).map((word) => ({
      text: word,
      value: wordsCount[word],
    }));
  };

  // Prepare data for pie chart
  const preparePieChartData = () => {
    const counts = countAnnotations();
    const colors = ["#FF5733", "#33FF57", "#338AFF", "#FF33FB"]; // Different colors for each category
    return Object.keys(counts).map((annotation, index) => ({
      name: annotation,
      value: counts[annotation],
      fill: colors[index % colors.length],
    }));
  };

  // Prepare data for bar chart
  const prepareBarChartData = () => {
    const counts = countAnnotations();
    const colors = ["#FF5733", "#33FF57", "#338AFF", "#FF33FB"]; // Different colors for each category
    return Object.keys(counts).map((annotation, index) => ({
      annotation,
      count: counts[annotation],
      fill: colors[index % colors.length],
    }));
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Navbar />
      <StarsCanvas />
      {/* Word Cloud */}
      <h1
        className={`${styles.heroHeadText} text-white`}
        style={{ marginBottom: "20px", marginTop: "70px" }}
      >
        Word Cloud
      </h1>
      <div style={{ width: "1000%", maxWidth: "1500px", height: "400px" }}>
        {" "}
        {/* Adjust width as needed */}
        <WordCloud
          words={prepareWordCloudData()}
          options={{
            fontStyle: "normal",
            fontWeight: "bold",
            fontSizes: [20, 100], // Adjust the range of font sizes
          }}
        />
      </div>

      <h1
        className={`${styles.heroHeadText} text-white`}
        style={{ margin: "30px" }}
      >
        Summary by Rev
      </h1>
      <button
        onClick={sendRecommendationData}
        className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
        style={{ height: "50px" }} // Set the height of the button
      >
        Generate Summary
      </button>

      <DisplayLottie animationData={landingPerson} />
      <button
        onClick={speak}
        className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
        style={{ marginBottom: "20px" }}
      >
        Speak
      </button>
      <div
        style={{
          marginBottom: "20px",
          width: "100%",
          maxWidth: "1200px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        {/* Input Field */}
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          style={{
            padding: "15px",
            fontSize: "18px",
            border: "2px solid #ccc",
            borderRadius: "5px",
            width: "100%", // Make the textarea fill the container width
            maxWidth: "1000px", // Limit the maximum width as needed
            minHeight: "200px", // Set a minimum height for the textarea
            resize: "vertical", // Allow vertical resizing
          }}
        />
      </div>

      {/* Generate Summary Button */}

      {/* Pie Chart */}
      <h1 className={`${styles.heroHeadText} text-white`}>Donut Chart</h1>
      <div style={{ marginBottom: "20px" }}>
        <PieChart width={500} height={500}>
          <Pie
            data={preparePieChartData()}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={200}
            innerRadius={100} // Adjust the inner radius for the donut effect
            label
          />
          <Tooltip />
          <Legend />
        </PieChart>
      </div>
      {/* Bar Chart */}
      <h2 className={`${styles.heroHeadText} text-white`}>Bar Chart</h2>
      <div>
        <BarChart width={900} height={300} data={prepareBarChartData()}>
          <XAxis dataKey="annotation" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="count" />
        </BarChart>
      </div>

      <h1 className={`${styles.heroHeadText} text-white`}>Recommendation</h1>
      <Slideshow
        label="Recommendation"
        data={data}
        style={{ margin: "20px" }}
      />
      <h1 className={`${styles.heroHeadText} text-white`}>Question</h1>
      <Slideshow label="Question" data={data} />

      <button
        onClick={saveAsPDF}
        style={{ margin: "30px" }}
        className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
      >
        Save as PDF
      </button>
    </div>
  );
};

export default ChartComponent;
