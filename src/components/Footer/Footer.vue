<template>
    <footer class="footer">
        <div class="container">
            <div class="row">
                <div class="col-md-3">
                    <div class="sitemap">
                        <ul>
                            <li><router-link to="">SIte Map</router-link></li>
                            <li><router-link to="">Terms and Condition</router-link></li>
                            <li><router-link to="">Privacy Policy</router-link></li>
                            <li><router-link to="">Help</router-link></li>
                            <li><router-link to="">Affiliate</router-link></li>
                        </ul>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="sitemap">
                        <ul>
                            <li><router-link to="">Our Location</router-link></li>
                            <li><router-link to="">Career</router-link></li>
                            <li><router-link to="">About</router-link></li>
                            <li><router-link to="">Contact</router-link></li>
                        </ul>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="sitemap">
                        <ul>
                            <li><router-link to="">FAQs</router-link></li>
                            <li><router-link to="">Blog</router-link></li>
                            <li><router-link to="">Car Blog</router-link></li>
                            <li><router-link to="">Location</router-link></li>
                            <li><router-link to="">Press</router-link></li>
                        </ul>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="sitemap">
                        <p>Sign up to get our newsletter</p>
                        <div class="newsletter">
                            <input type="email" class="newsletter-input" placeholder="Your email….">
                            <font-awesome-icon icon="paper-plane" class="send_icon"/>
                        </div>
                    </div>
                </div>
            </div>
            <div class="foot">
                <div class="social">
                    <router-link to="https://www.facebook.com/" target="_blank">
                        <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'facebook-square' }" class="fb"/>
                    </router-link>
                </div>
                <div class="social">
                    <router-link to="https://www.twitter.com/" target="_blank">
                        <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'twitter' }" class="fb"/>
                    </router-link>
                </div>
                <div class="social">
                    <router-link to="https://www.google.com/" target="_blank">
                        <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'google-plus-g' }" class="fb"/>
                    </router-link>
                </div>
                <div class="social">
                    <router-link to="https://www.twitter.com/" target="_blank">
                        <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'linkedin-in' }" class="fb"/>
                    </router-link>
                </div>
                <div class="social">
                    <router-link to="https://www.twitter.com/" target="_blank">
                        <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'instagram' }" class="fb"/>
                    </router-link>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
    export default {
        name: "Footer.vue"
    }
</script>

<style scoped>

</style>