const { mat4 } = require('gl-matrix')
const ident = mat4.create()

class Scene {
  constructor(camera, perspective, shader) {
    this.objects = []
    this.shader = shader
    this.camera = camera
    this.perspective = perspective

    shader.attributes.position.location = 0
    shader.attributes.color.location = 1
  }
  push(...objects) {
    this.objects.push(...objects)
  }
  render() {
    this.shader.bind()
    this.shader.uniforms.u_camera = this.camera
    this.shader.uniforms.u_perspective = this.perspective

    this.objects.forEach(ob => {
      this.shader.uniforms.u_position = ob.position || ident
      ob.draw()
    })
  }
}

export default Scene
