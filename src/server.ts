import app from "./app";

function main() {
  try {
    app.listen(3030, "localhost", async () => {
      console.log("starting server");
    });
  } catch (err) {
    console.error("Starting server Error", err);
  }
}
main();
