const fallingElement = document.createElement("div");
fallingElement.id = "fallingElement";
document.body.appendChild(fallingElement);

var container = document.body;
var fallingElementDemo = document.getElementById("fallingElement");
// 不同元素的样式列表
const classList = [
  "fullMoon",
  "mooncakeWithCat1",
  "mooncake",
  "rabbit",
  "mooncakeWithCat2",
];
// 监听点击事件
document.addEventListener("click", function (event) {
  const num = Math.floor(Math.random() * classList.length);
  var newfallingElement = fallingElementDemo.cloneNode(true); // 创建新的元素
  newfallingElement.style.left = event.clientX + "px"; // 设置元素的水平位置
  newfallingElement.style.top = event.clientY + "px"; // 设置元素的水平位置
  newfallingElement.style.display = "block";
  newfallingElement.classList.add(classList[num]);
  container.appendChild(newfallingElement); // 将月亮添加到容器中

  // 移除元素
  setTimeout(function () {
    newfallingElement.remove();
  }, 2000);
});
