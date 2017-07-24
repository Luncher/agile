class Image {
  constructor (filename) {
    this.filename = filename
  }

  displayImage () {

  }
}

class ImageRenderer extends Image {
  constructor (filename) {
    super(filename)
  }

  loadImage () {
    console.log('load image:' + this.filename)
  }

  displayImage () {
    console.log('display image: ' + this.filename)
  }
}

class ProxyImageRenderer extends Image {
  constructor (filename) {
    super(filename)
    this.image = null
  }

  displayImage () {
    if (this.image === null) {
      this.image = new ImageRenderer(this.filename)
      this.image.loadImage()
    }
    this.image.displayImage()
  }
}

const proxy = new ImageRendererProxy('abc.png')
proxy.displayImage()
proxy.displayImage()
proxy.displayImage()