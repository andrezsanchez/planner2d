class VObject {
  constructor(vao, drawType, drawCount) {
    this.vao = vao
    this.drawType = drawType
    this.drawCount = drawCount
  }
  draw() {
    this.vao.bind()
    this.vao.draw(this.drawType, this.drawCount)
    this.vao.unbind()
  }
}

export default VObject
