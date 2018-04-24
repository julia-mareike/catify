(() => {
  const images = document.getElementsByTagName('img')
  const videos = document.getElementsByTagName('a')

  function catify (images) {
    for (let cat of images) {
      if (cat.id === 'img') { cat.src = 'https://i.ytimg.com/vi/rNSnfXl1ZjU/hqdefault.jpg?sqp=-oaymwEXCPYBEIoBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDhBrX2aiVwZ0Ig4zooNuTQTq4teQ' }
    }
  }

  function hide (videos) {
    for (let element of videos) {
      if (element.id === 'video-title') { element.style.display = 'none' }
    }
  }

  //                        A___A
  //            A___A       |o o|
  //      ____ / o o \      |='=|
  // ___/~____   ='= /_____/    |_________
  //   (______)__m_m_)    /  ||||
  //                     |___||||]

  catify(images)
  hide(videos)
})()
