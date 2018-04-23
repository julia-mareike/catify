(() => {

  const images = document.getElementsByTagName('img')
  catify(images)

  function catify (images) {
    for (let i = 0; i < images.length; i++) {
      if (images[i].id === 'img')
      images[i].src = "https://i.ytimg.com/vi/rNSnfXl1ZjU/hqdefault.jpg?sqp=-oaymwEXCPYBEIoBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDhBrX2aiVwZ0Ig4zooNuTQTq4teQ"
    }
  }

//                        A___A
//            A___A       |o o|
//      ____ / o o \      |='=|
// ___/~____   ='= /_____/    |_________
//   (______)__m_m_)    /  ||||
//                     |___||||]

})()