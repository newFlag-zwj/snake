import Food from "./Food";
import Snake from "./Snake";
import ScorePanel from "./ScopePanel";

class GameControl {
  food: Food
  snake: Snake
  scopePanel: ScorePanel
  // 蛇的移动方向
  direction: string = ''
  // 控制游戏是否结束
  isLive = true
  constructor() {
    this.food = new Food()
    this.snake = new Snake()
    this.scopePanel = new ScorePanel()
    this.init()
  }

  init() {
    document.addEventListener('keydown', this.keydownHandle.bind(this))
    this.run()
  }

  // 蛇的移动
  run() {
    let X = this.snake.X
    let Y = this.snake.Y

    switch (this.direction) {
      case "ArrowUp":
      case "Up":
        Y -= 10
        break;
      case "ArrowDown":
      case "Down":
        Y += 10
        break;
      case "ArrowLeft":
      case "Left":
        X -= 10
        break;
      case "ArrowRight":
      case "Right":
        X += 10
        break;
    }

    try {
      this.snake.X = X
      this.snake.Y = Y
    } catch (e) {
      alert(e)
      this.isLive = false
    }

    this.checkFood(X, Y)
    this.isLive && setTimeout(this.run.bind(this), 300 - (this.scopePanel.level - 1) * 30)

  }

  // 判断蛇吃到食物
  checkFood(X: number, Y: number) {
    if (X === this.food.X && Y === this.food.Y) {
      this.food.change()
      this.scopePanel.addScore()
      this.snake.addBody()
   }
  }

  keydownHandle(event: KeyboardEvent) {
    // 检测所按按键是否合法
    // 给direction赋值
    this.direction = event.key
  }
}

export default GameControl