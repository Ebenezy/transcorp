<template>
    <div class="transcorp-landing-page">
        <HeaderNav/>
        <div class="banner">
            <div></div>
            <div class="banner-text">
                <h6>WELCOME TO</h6>
                <h1>Transcorp Hotel</h1>
                <p>A place to experience and enjoy the life</p>
            </div>
            <div class="play-btn grow">
                <font-awesome-icon icon="play-circle" class="play-circle"/>
            </div>
            <div class="check-in-section">
                <div class="row no-gutters">
                    <div class="col-md-3">
                        <div class="check-in">
                            <label >CHECK-IN</label>
                            <div v-if="oneoff" class="check_in">
                                <datetime v-model="start_date" placeholder="24/JUNE" class="select-date"></datetime>
                                <font-awesome-icon icon="chevron-down" class="chevron_down"/>
                            </div>

                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="check-in">
                            <label >CHECK-OUT</label>
                            <div v-if="oneoff" class="check_in">
                                <datetime v-model="end_date" placeholder="24/JUNE" class="select-date"></datetime>
                                <font-awesome-icon icon="chevron-down" class="chevron_down"/>
                            </div>

                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="check-in">
                            <label >GUESTS</label>
                            <div v-if="oneoff" class="check_in">
                                <select name="" id="">
                                    <option value="">03</option>
                                    <option value="">04</option>
                                    <option value="">05</option>
                                    <option value="">06</option>
                                </select>
                                <font-awesome-icon icon="chevron-down" class="chevron_down"/>
                            </div>

                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="availability">
                            <div>
                                <p>Have a promotional code ?</p>
                                <button class="available-btn">CHECK AVAILABILITY</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
        <div class="container">
            <div class="about-section">
                <h6>ABOUT US</h6>
                <h1>A best place to enjoy<br>
                    your life</h1>
                <p>Transcorp Hilton Hotel is situated in the heart of Nigeria’s Federal Capital Territory,
                    a 40-minute drive from the Nnamdi Azikiwe International Airport in Abuja. It is a 670–room,
                    5-star hotel that provides luxury accommodation, exotic cuisine,
                    and fully equipped meeting rooms and to business travellers and tourists from all over the world</p>
                <div class="view-pictures">
                    <img src="../../assets/images/parlour.jpg" alt="Transcorp" class="grow">
                    <div class="view-more"><router-link to="" class="view-more-btn">VIEW MORE PHOTOS</router-link></div>
                </div>
            </div>
        </div>
        <div class="luxury-bg">

            <div class="luxury-interior">
                <div class="row no-gutters">
                    <div class="col-md-5">
                        <div class="discover-rooms">
                            <h6>DISCOVER OUR ROOMS</h6>
                            <h4>Luxury interior</h4>
                            <div class="room_category">
                                <div class="room_classic">
                                    <div class="row">
                                        <div class="col-md-5">
                                            <div class="room-small-img">
                                                <img src="../../assets/images/room-small.jpg" alt="Transcorp" class="">
                                            </div>
                                        </div>
                                        <div class="col-md-7">
                                            <div class="room-classic2">
                                                <h5>Classic Room</h5>
                                                <p>Starting from <span>$40.00</span>/Night</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="room_classic2">
                                    <div class="row">
                                        <div class="col-md-5">
                                            <div class="room-small-img">
                                                <img src="../../assets/images/room-small2.jpg" alt="Transcorp" class="">
                                            </div>
                                        </div>
                                        <div class="col-md-7">
                                            <div class="room-classic2">
                                                <h5>Classic Room</h5>
                                                <p>Starting from <span>$40.00</span>/Night</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="room_classic2">
                                    <div class="row">
                                        <div class="col-md-5">
                                            <div class="room-small-img">
                                                <img src="../../assets/images/room-small3.jpg" alt="Transcorp" class="">
                                            </div>
                                        </div>
                                        <div class="col-md-7">
                                            <div class="room-classic2">
                                                <h5>Classic Room</h5>
                                                <p>Starting from <span>$40.00</span>/Night</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="room_classic2">
                                    <div class="row">
                                        <div class="col-md-5">
                                            <div class="room-small-img">
                                                <img src="../../assets/images/room-small.jpg" alt="Transcorp" class="">
                                            </div>
                                        </div>
                                        <div class="col-md-7">
                                            <div class="room-classic2">
                                                <h5>Classic Room</h5>
                                                <p>Starting from <span>$40.00</span>/Night</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="room_classic2">
                                    <div class="row">
                                        <div class="col-md-5">
                                            <div class="room-small-img">
                                                <img src="../../assets/images/room-small2.jpg" alt="Transcorp" class="">
                                            </div>
                                        </div>
                                        <div class="col-md-7">
                                            <div class="room-classic2">
                                                <h5>Classic Room</h5>
                                                <p>Starting from <span>$40.00</span>/Night</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="room_classic2">
                                    <div class="row">
                                        <div class="col-md-5">
                                            <div class="room-small-img">
                                                <img src="../../assets/images/room-small3.jpg" alt="Transcorp" class="">
                                            </div>
                                        </div>
                                        <div class="col-md-7">
                                            <div class="room-classic2">
                                                <h5>Classic Room</h5>
                                                <p>Starting from <span>$40.00</span>/Night</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="col-md-7">
                        <div class="room-img">
                            <img src="../../assets/images/room2.jpg" alt="Transcorp" class="">
                        </div>
                    </div>
                </div>

                <div class="container">
                    <div class="testimonials">
                        <h5>TESTIMONIALS</h5>
                        <h2>What guests Say</h2>
                        <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Fusce commodo urna id neque finibus, ac sollicitudin arcu tempus.
                            In hac habitasse platea dictumst”</p>
                        <div class="d">
                            <img src="../../assets/images/user.jpg" alt="Transcorp" class="">
                            <h6>FARAH WILIAMS</h6>
                        </div>
                    </div>
                </div>

                <div class="container">
                    <div class="blog-latest">
                        <h1>Latest from our Blog</h1>
                        <div class="row">
                            <div class="col-md-4">
                                <div class="blog-card grow">
                                    <img src="../../assets/images/pool.jpg" alt="Transcorp" class="">
                                    <div class="blog-card-text">
                                        <h6>April 10th, 2018</h6>
                                        <p>Five reasons to  stay at the beautiful Transcorp Hotel</p>
                                        <button class="continue-btn">Continue <font-awesome-icon icon="arrow-right" class="arrow_icon"/></button>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="blog-card grow">
                                    <img src="../../assets/images/room.jpg" alt="Transcorp" class="">
                                    <div class="blog-card-text">
                                        <h6>April 10th, 2018</h6>
                                        <p>Five reasons to  stay at the beautiful Transcorp Hotel</p>
                                        <button class="continue-btn">Continue <font-awesome-icon icon="arrow-right" class="arrow_icon"/></button>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="blog-card grow">
                                    <img src="../../assets/images/outside-view.jpg" alt="Transcorp" class="">
                                    <div class="blog-card-text">
                                        <h6>April 10th, 2018</h6>
                                        <p>Five reasons to  stay at the beautiful Transcorp Hotel</p>
                                        <button class="continue-btn">Continue <font-awesome-icon icon="arrow-right" class="arrow_icon"/></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="location-section">
                <div class="row no-gutters">
                    <div class="col-md-7">
                        <div class="map">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.878448720092!2d7.4928350153639425!3d9.074836793489064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0a5bb96f7ab5%3A0x330725f9c60fa9ba!2s1%20Aguiyi%20Ironsi%20St%2C%20Wuse%20900001%2C%20Abuja!5e0!3m2!1sen!2sng!4v1575896447902!5m2!1sen!2sng" width="100%" height="600" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
                        </div>
                    </div>
                    <div class="col-md-5">
                        <div class="address-location">
                            <h6>DISCOVER OUR ROOMS</h6>
                            <h5>Luxury interior</h5>
                            <h4>Abuja, <span>Nigeria</span></h4>
                            <p>Address: 1 Aguiyi Ironsi St, Abuja 900001, Nigeria</p>
                            <p>Email: info@transcorphotelsplc.com</p>
                            <p>Call directly;</p>
                            <div class="mb-5"></div>
                            <h5><a href="tel:+234 708 060 3000">+234 708 060 3000</a></h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <back-to-top bottom="50px" right="50px">
            <button type="button" class="btn backtotop btn-to-top"><font-awesome-icon icon="chevron-up" class=""/></button>
        </back-to-top>

        <Footer/>
    </div>
</template>

<script>
    import HeaderNav from "../../components/HeaderNav/HeaderNav";
    import { Datetime } from 'vue-datetime';
    import BackToTop from 'vue-backtotop'
    import Footer from "../../components/Footer/Footer"

    export default {
        name: "Landing.vue",
        components: {
            HeaderNav,
            datetime: Datetime,
            BackToTop,
            Footer
        },
        data() {
            return {
                oneoff: true,
                start_date: null,
                end_date: null,
            }
        },
    }
</script>

<style scoped>

</style>