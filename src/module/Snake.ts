// 创建蛇的类
class Snake {
  // 蛇头
  head: HTMLElement
  // 蛇身(包含蛇头)
  bodies: HTMLCollection
  // 蛇
  element: HTMLElement

  constructor() {
    this.element = document.getElementById('snake')!
    this.head = document.querySelector('#snake>div')!
    this.bodies = this.element.getElementsByTagName('div')
  }

  // 获取蛇头的坐标
  get X() {
    return this.head.offsetLeft
  }
  get Y() {
    return this.head.offsetTop
  }

  // 设置蛇头的坐标
  set X(value: number) {
    if (this.X === value) return

    // 禁止蛇掉头
    if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft === value) {
      
      if (value > this.X) {
        value = this.X - 10
      } else {
        value = this.X + 10
      }
    }

    // 判断蛇是否撞墙
    if (value < 0 || value > 290) {
      throw new Error("Game Over")
    }

    this.moveBody()
    this.head.style.left = value + 'px'
    this.checkHeatBody()
    
  }
  set Y(value: number) {
    if (this.Y === value) return

    // 禁止蛇掉头
    if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === value) {
      
      if (value > this.Y) {
        value = this.Y - 10
      } else {
        value = this.Y + 10
      }
    }

    if (value < 0 || value > 290) {
      throw new Error("Game Over")
    }
    
    this.moveBody()
    this.head.style.top = value + 'px'
    this.checkHeatBody()
    
  }

  // 蛇增加身体的长度
  addBody() {
    this.element.insertAdjacentHTML("beforeend", "<div></div>");
  }

  // 移动蛇的身体
  moveBody() {
    for (let i = this.bodies.length - 1; i > 0; i--) {
      // 从后往前移动蛇的身体，后一块移动到前一块的位置

      // 获取前一块的位置
      let X = (this.bodies[i - 1] as HTMLElement).offsetLeft;
      let Y = (this.bodies[i - 1] as HTMLElement).offsetTop;

      // 更新该块的位置
      (this.bodies[i] as HTMLElement).style.left = X + 'px';
      (this.bodies[i] as HTMLElement).style.top = Y + 'px';
    }
  }

  // 检测撞到自己
  checkHeatBody() {
    for (let i = 1; i < this.bodies.length; i++) {
      if ((this.bodies[i] as HTMLElement).offsetLeft === this.X && (this.bodies[i] as HTMLElement).offsetTop === this.Y) {
        throw new Error("Game Over")
      }
    }
  }
}

export default Snake