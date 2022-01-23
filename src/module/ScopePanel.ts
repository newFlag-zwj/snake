// 定义分数面板类
class ScorePanel {
  score = 0
  level = 1
  scoreElm: HTMLElement
  levelElm: HTMLElement
  // 最大等级
  maxLevel: number
  // 多少分数一个等级
  upScore: number

  constructor(maxLevel: number = 10, upScore: number = 10) {
    this.scoreElm = document.getElementById('score')!
    this.levelElm = document.getElementById('level')!
    this.maxLevel = maxLevel
    this.upScore = upScore
  }

  // 添加分数
  addScore() {
    this.scoreElm.innerHTML = ++this.score + ''
    if (this.score % this.upScore === 0) {
      this.upLevel()
    }
  }

  // 提升等级
  upLevel() {
    if (this.level < this.maxLevel) {
      this.levelElm.innerHTML = ++this.level + ''
    }
  }
}

export default ScorePanel