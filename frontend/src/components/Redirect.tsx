import axios from "axios";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Redirect() {
  const { url } = useParams();

  useEffect(() => {
    async function fetchOriginalLink() {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/controller/shortner/get/${url}`
        );
        if (res.data.originalLink) {
          if (!/^https?:\/\//.test(res.data.originalLink)) {
            window.location.href = `https://${res.data.originalLink}`;
          } else {
            window.location.href = res.data.originalLink; // Redirect to the original link
          }
        } else {
          console.error("Original link not found");
        }
      } catch (error) {
        console.error("Error fetching original link:", error);
      }
    }

    fetchOriginalLink();
  }, [url]);

  return (
    <div>
      <p>Redirecting...</p>
    </div>
  );
}

export default Redirect;
