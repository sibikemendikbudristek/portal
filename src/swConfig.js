/* eslint-disable import/no-anonymous-default-export */
export default {
 onUpdate: registration => {
   registration.unregister().then(() => {
   window.location.reload()
 })
},
onSuccess: registration => {
  console.info('service worker on success state')
  console.log(registration)
 },
}