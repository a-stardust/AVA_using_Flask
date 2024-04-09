// Check if the browser supports the mediaDevices API.
if ('mediaDevices' in navigator && 'getUserMedia' in navigator.mediaDevices) {
    // Request permission to use the camera.
    navigator.mediaDevices.getUserMedia({ video: true }).then(function(stream) {
      // Create a video element to display the camera stream.
      const video = document.createElement('video');
      video.srcObject = stream;
      video.play();
  
      // Add the video element to the page.
      document.body.appendChild(video);
    }).catch(function(err) {
      console.log(err);
    });
  } else {
    // The browser does not support the mediaDevices API.
    console.log('Your browser does not support the mediaDevices API.');
  }