import express from "express";
import axios from "axios";

const app = express();
const port = 3000;

app.use(express.static("public"));

function getRandomId(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

app.get("/", async (req, res) => {
  try {
      // Fetch data from the first API
      const locationID = getRandomId(1, 126);
      const locationResponse = await axios.get("https://rickandmortyapi.com/api/location/" + locationID);
      
      // Fetch data from the second API
      const friendID = getRandomId(1, 826);
      const friendResponse = await axios.get("https://rickandmortyapi.com/api/character/" + friendID);

      // Fetch data from the third API
      const enemyID = getRandomId(1, 126);
      while (enemyID === friendID) {
        enemyID = getRandomId(1, 826);
      }
      const enemyResponse = await axios.get("https://rickandmortyapi.com/api/character/" + enemyID);

      // Render the response data into the template
      res.render("index.ejs", {
          friend: friendResponse.data,
          enemy: enemyResponse.data,
          location: locationResponse.data
      });
  } catch (error) {
      console.error("Failed to make request:", error.message);
      res.render("index.ejs", { error: error.message });
  }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})