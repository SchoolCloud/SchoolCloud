<template>
    <div class="mt-4">
        <h2 class="row justify-content-center">Contact Us!</h2>
        <div class="row justify-content-center">
            <b-form id="contactForm" name="contactForm" method="POST" v-on:submit.prevent="submitContact" netlify>
                <p  class="mb-0">
                    <label>Your Name</label>   
                </p>
                <p>
                    <input type="text" name="name">
                </p>
                <p  class="mb-0">
                  <label>Your Email</label>
                </p>
                <p>
                    <input type="email" name="email">
                </p>
                <p class="mb-0">
                  <label>Message</label>
                </p>
                <p>
                    <textarea name="message"></textarea>
                </p>
                <p>
                  <button v-on:click="submitContact()" type="button" class="btn btn-success">Send</button>
                </p>
            </b-form>
        </div>
        <!-- <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSchYn-fvKVMFiXG_mGS_EMPwBkva8NqAWNKLqAGiJrgWzQbUg/viewform?embedded=true" width="700" height="520" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe> -->
    </div>
</template>

<script>

// var form = new Vue({
//     el: '#contactForm',
//     data: {
//         form:{
//             name,
//             email,
//             message
//         }
//     },
//     methods: {
//         submitContact: function(e){
//             axiox.post(e.target.action, this.form)
//                 .then(function (response) {
//                     console.log(response);
//                 })
//                 .catch(function (error) {
//                   console.log(error);
//                 });
//         }
//     }
// });
// function submitContact(){

// // $("#contactForm").submit(function(e) {
// //   e.preventDefault();

// //   var $form = $(this);
// //   $.post($form.attr("action"), $form.serialize()).then(function() {
// //     alert("Thank you!");
// //   });
// // });
// }

</script>