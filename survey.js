function InjectSurvey() {
  console.log("Survey code initiated");
  const rectangle = document.createElement("div");
  rectangle.id = "survey";
  rectangle.text = "Random survey rectangle";
  rectangle.style.backgroundColor = "green";
  rectangle.style.height = "100px";
  rectangle.style.width = "200px";
  rectangle.style.position = "sticky";
  rectangle.style.bottom = "0px";
  rectangle.style.left = "75%";
  rectangle.style.zIndex = "1000";
  document.body.appendChild(rectangle);
}
InjectSurvey();
