if (process.env.NODE_ENV === 'production') {
  // Check to make sure service workers are supported in the current browser,
  // and that the current page is accessed from a secure origin. Using a
  // service worker from an insecure origin will trigger JS console errors.
  const isLocalhost = Boolean(window.location.hostname === 'localhost' ||
    // [::1] is the IPv6 localhost address.
    window.location.hostname === '[::1]' ||
    // 127.0.0.1/8 is considered localhost for IPv4.
    window.location.hostname.match(
      /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
    )
  )
    if ('serviceWorker' in navigator &&
      (window.location.protocol === 'https:' || isLocalhost)) {
  window.addEventListener('load', () => {

      navigator.serviceWorker
        .register('/service-worker.js')
        .then(registration => {
          // Registration was successful
          console.log(
            'ServiceWorker registration successful with scope: ',
            registration.scope
          )
        })
        .catch(err => {
          // registration failed :(
          console.log('ServiceWorker registration failed: ', err)
        })
        })
    }
  
}
