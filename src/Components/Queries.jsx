import React, { useState } from "react";
import axios from "axios";
import "./styles/Queries.css";
const QueryIdentification = () => {
  const [url, setUrl] = useState("");
  const [queries, setQueries] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (event) => {
    setUrl(event.target.value);
  };

  const handleAnalyseClick = async () => {
    setLoading(true);
    try {
      const videoId = extractVideoId(url);
      let allComments = [];
      let nextPageToken = null;

      do {
        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=${videoId}&key=${
            process.env.REACT_APP_YOUTUBE_API_KEY
          }${nextPageToken ? `&pageToken=${nextPageToken}` : ""}`
        );
        const fetchedComments = response.data.items.map(
          (item) => item.snippet.topLevelComment.snippet.textDisplay
        );
        allComments = [...allComments, ...fetchedComments];
        nextPageToken = response.data.nextPageToken;
      } while (nextPageToken);

      generateQueries(allComments);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching comments:", error);
      setLoading(false);
    }
  };

  const extractVideoId = (videoUrl) => {
    const regExp =
      /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = videoUrl.match(regExp);
    return match && match[1] ? match[1] : "";
  };

  const generateQueries = (comments) => {
    const queries = comments.filter((comment) => {
      // Check if the comment ends with a question mark
      const endsWithQuestionMark =
        comment.trim().charAt(comment.trim().length - 1) === "?";

      // Check for Wh-words at the beginning of the sentence
      const hasWhWordsAtStart = /^(who|what|where|when|why|which|how)\b/i.test(
        comment.trim()
      );

      // Check for question marks within the comment
      const hasQuestionMarks = comment.includes("?");

      // Combine conditions to identify queries
      return endsWithQuestionMark || hasWhWordsAtStart || hasQuestionMarks;
    });
    setQueries(queries);
  };

  return (
    <div className="queries-container">
      <div className="queries-form-container">
        <div className="field">
          <label className="label">Please enter your YouTube URL here:</label>
          <input
            type="text"
            className="input"
            value={url}
            onChange={handleInputChange}
            disabled={loading}
          />
        </div>
        <button
          className="button"
          onClick={handleAnalyseClick}
          disabled={loading}
        >
          {loading ? "Loading..." : "Analyse"}
        </button>
      </div>
      <div className="queries-comments">
        <div>
          <h2>Queries</h2>
          <div className="query-cmt">
            {queries.map((query, index) => (
              <div className="query-cmts" key={index}>
                {query}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QueryIdentification;
