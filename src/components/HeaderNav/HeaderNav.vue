<template>
    <div class="container">
        <div class="contact_us">
            <p>Contact us directly at <a href="tel:+0133943">01 33943</a>  <a href="tel:+2348073404890"> +234 807 340 4890</a> ( Local time 12: 00 )</p>
            <select class="">
                <option value="">EN</option>
                <option value="">FR</option>
            </select>
        </div>
        <b-navbar toggleable="lg" type="light" >
<!--            <b-navbar-brand href="/"><img src="../../assets/images/transcorp.png" alt="Hope Bank Logo" class="hope_logo"></b-navbar-brand>-->

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>

                <!-- Right aligned nav items -->
                <b-navbar-nav class=" white_bg">
                    <b-navbar-nav class="nav_header_inner">
                        <b-nav-item  href="/">HOME</b-nav-item>
                        <b-nav-item ><router-link to="">ABOUT</router-link></b-nav-item>
                        <b-nav-item ><router-link to="">OUR ROOMS</router-link></b-nav-item>
                    </b-navbar-nav>
                    <b-navbar-brand href="/"><img src="../../assets/images/transcorp.png" alt="Transcorp Logo" class="transcorp_logo"></b-navbar-brand>
                    <b-navbar-nav class="">
                        <b-nav-item class=""><router-link to=""><font-awesome-icon icon="lock" class="plus_icon"/> RESERVATIONS</router-link></b-nav-item>
                        <b-nav-item class=""><router-link to=""><font-awesome-icon icon="lock" class="plus_icon"/> BLOG</router-link></b-nav-item>
                        <b-nav-item class=""><router-link to=""><font-awesome-icon icon="lock" class="plus_icon"/> CONTACT</router-link></b-nav-item>
                    </b-navbar-nav>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
    export default {
        name: "HeaderNav.vue"
    }
</script>

<style scoped>
    a {
        color: #526173;
        text-decoration: none;
        background-color: transparent;
        font-family: SourceSansPro-Regular;
        font-size: 14px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: 0.58px;
        text-align: justify;
    }
    a:hover {
        color: #000;
        text-decoration: none;
    }

    .navbar-expand-lg .navbar-collapse{
        align-items: center;
        justify-content: space-around;
    }
    .navbar-nav{
        padding-top: 7px;
    }
    .nav-item{
        padding: 0 1.2rem;
    }

</style>