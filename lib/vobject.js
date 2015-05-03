class VObject {
  constructor(vao, drawType, drawCount) {
    this.vao = vao
    this.drawType = drawType
    this.drawCount = drawCount
    this.visible = true
  }
  draw() {
    if (this.visible) {
      this.vao.bind()
      this.vao.draw(this.drawType, this.drawCount)
      this.vao.unbind()
    }
  }
  destroy() {
    this.vao.dispose()
    delete this.vao
  }
}

export default VObject
