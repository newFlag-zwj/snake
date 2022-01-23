// 定义食物类
class Food {
  element: HTMLElement

  constructor() {
    // 添加!确定food元素必须存在
    this.element = document.getElementById('food')!
  }

  get X() {
    return this.element.offsetLeft
  }

  get Y() {
    return this.element.offsetTop
  }

  change() {

    // 蛇的每次移动都是10px 所以食物出现的坐标都是整十的倍数
    // top和left的范围在0~290之间

    let top = Math.round(Math.random() * 29) * 10
    let left = Math.round(Math.random() * 29) * 10
    this.element.style.left = left + 'px'
    this.element.style.top = top + 'px'
  }
}


export default Food