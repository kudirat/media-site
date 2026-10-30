// constraints = {
//     audio: true,
//     video: true
// }

// getCam.addEventListener('click', async function (e) {
//     console.log('function called');
//     let stream = null;

//     try {
//         console.log('getting stream');
//         stream = await navigator.mediaDevices.getUserMedia(constraints).then((mediaStream) => {
//             const video = document.querySelector("userVideo");
//             video.srcObject = mediaStream;
//             video.onloadedmetadata = () => {
//                 video.play();
//                 /* use the stream */
//             } catch (err) {
//                 console.error('Error occurred:', err);
//             }
//         });