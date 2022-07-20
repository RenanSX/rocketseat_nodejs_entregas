import express from 'express';

const app = express();

app.get("/", (request, response) => {
  return response.json({
    message: "Hellow world"
  })
})

app.listen(3334, () => console.log("Server Running"));