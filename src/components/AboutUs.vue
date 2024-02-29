<template>
    <div id="aboutus">
        <v-parallax padding="0" height='100vh' width='1000vh' src="https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
        </v-parallax>

   
        <v-container class=" text-center">
            <v-layout class="d-flex justify-center">
                <h1>About us</h1>
            </v-layout>
            <v-layout>
                <v-divider></v-divider>
            </v-layout>
            <v-layout class="write">
                <p>Welcome to our football hub, your ultimate destination for everything related to the beautiful game! Whether you're a die-hard fan, a casual observer, or just getting started with football, our website is your one-stop-shop for the latest news, in-depth analysis, player profiles, match highlights, and much more.

Stay up-to-date with the latest happenings in the football world with our comprehensive coverage of domestic and international leagues, including the English Premier League, La Liga, Serie A, Bundesliga, and more. From transfer rumors to match previews and post-match analysis, we've got you covered.

Explore our rich database of player profiles, where you can learn about your favorite football stars, their career statistics, achievements, and much more. Dive into the history of the game with our archive of classic matches and iconic moments that have shaped the sport we love.

Join our passionate community of football enthusiasts to engage in lively discussions, share your thoughts and opinions, and connect with fellow fans from around the globe. Whether you're rooting for a local team or supporting a club halfway across the world, our website is your virtual stadium to celebrate the spirit of football.

So, grab your jersey, cheer on your team, and immerse yourself in the world of football right here on our website. Let the game begin!

</p>
            </v-layout>
        </v-container>

        <v-container>
            <v-parallax>
            <v-layout>
                <v-card class="mx-auto" width="40%" height="80vh" image="https://images.unsplash.com/photo-1606925797300-0b35e9d1794e?q=80&w=1781&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    title="Services"
                    text="We deliver straight to your doorstep!"
                    theme="dark"></v-card>
                <v-card class="mx-auto" width="40%" height="80vh" title="Welcome!" text="Welcome to our football website, where passion meets expertise! We are a dedicated team of football enthusiasts who live and breathe the beautiful game. Our mission is to provide football fans with a comprehensive platform where they can indulge in their love for the sport. From the latest news and updates to in-depth analysis, player profiles, and match highlights, we strive to deliver engaging content that caters to fans of all ages and backgrounds. With a deep understanding of the game and a commitment to quality, we aim to be your go-to destination for everything football-related. Join us on this exhilarating journey as we celebrate the magic of football together!"></v-card>
            </v-layout>
        </v-parallax>
        </v-container>
        <v-container>
            <v-parallax>
            <v-layout>
                <v-card class="mx-auto" width="40%" height="80vh" title="Location" text="Visit Our Football Shop

 Welcome to our football shop, your one-stop destination for all things football! Conveniently located in the heart of downtown, our shop is easily accessible from the main street, just a few blocks away from the city's central square.

Physical Location:

123 Main Street, City Center
Downtown, Anytown, USA
Zip Code: 12345

Contact Information:

Phone: (555) 123-4567
Email: info@footballshop.com

Store Hours:

Monday to Friday: 9:00 AM - 7:00 PM
Saturday: 10:00 AM - 5:00 PM
Sunday: Closed

Parking:

Ample parking space is available behind our store, accessible from Elm Street. Customers can enjoy free parking for up to two hours during their visit to our shop.

Online Presence:

Can't make it to our physical location? No problem! Browse and shop our extensive collection of football gear and merchandise online at www.footballshop.com. We offer nationwide shipping and hassle-free returns for your convenience.

Directions:

[Include a map or directions widget showing the location of the shop]

Whether you're a seasoned football player, a dedicated fan, or simply looking for quality football equipment and apparel, visit our shop today for a premium shopping experience. We look forward to welcoming you!">
                </v-card>
                <v-card class="mx-auto" width="40%" height="80vh" image="https://images.unsplash.com/photo-1589487391730-58f20eb2c308?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" title="Explore More"
                    text="Push Your Limits And Obtain Your Full Potential!" theme="dark">
                </v-card>
            </v-layout>
        </v-parallax>
        </v-container>

        <v-container class=" text-center">
            <v-layout class="d-flex justify-center">
                <h1>Our Staff</h1>
            </v-layout>
            <v-layout>
                <v-divider></v-divider>
            </v-layout>
        </v-container>
        <v-container>
            <v-container>
                <v-layout style="display: flex; justify-content: center;">
                    <div class="mr-15 mb-4">
                        <v-hover v-slot="{ isHovering, props }">
                            <v-card class="mx-auto" max-width="600" v-bind="props">
                                <v-img src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" height="340"></v-img>

                                <v-card-text>
                                    <h2 class="text-h6 text-primary">
                                        Robbert Wilson
                                    </h2>
                                    Head cheff
                                </v-card-text>
                                <v-overlay :model-value="isHovering" contained scrim="#036358"
                                    class="align-center justify-center">
                                    <v-btn variant="flat">See more info</v-btn>
                                </v-overlay>
                            </v-card>
                        </v-hover>
                    </div>

                    <div class="mr-15 mb-4">
                        <v-hover v-slot="{ isHovering, props }">
                            <v-card class="mx-auto" max-width="600" v-bind="props">
                                <v-img src="https://plus.unsplash.com/premium_photo-1674777843203-da3ebb9fbca0?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" height="340"></v-img>

                                <v-card-text>
                                    <h2 class="text-h6 text-primary">
                                        Francis Ogato
                                    </h2>
                                    Resident cook
                                </v-card-text>
                                <v-overlay :model-value="isHovering" contained scrim="#036358"
                                    class="align-center justify-center">
                                    <v-btn variant="flat">See more info</v-btn>
                                </v-overlay>
                            </v-card>
                        </v-hover>
                    </div>
                    <div class="mb-4">
                        <v-hover v-slot="{ isHovering, props }">
                            <v-card class="mx-auto" max-width="600" v-bind="props">
                                <v-img src="https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" height="340"></v-img>

                                <v-card-text>
                                    <h2 class="text-h6 text-primary">
                                        Alex Waywire
                                    </h2>
                                    Culinary master
                                </v-card-text>
                                <v-overlay :model-value="isHovering" contained scrim="#036358"
                                    class="align-center justify-center">
                                    <v-btn variant="flat">See more info</v-btn>
                                </v-overlay>
                            </v-card>
                        </v-hover>
                    </div>

                </v-layout>
            </v-container>

            <v-container>
                <v-layout style="display: flex; justify-content: center;">
                    <div class="mr-15 mb-4">
                        <v-hover v-slot="{ isHovering, props }">
                            <v-card class="mx-auto" max-width="344" v-bind="props">
                                <v-img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" height="340"></v-img>

                                <v-card-text>
                                    <h2 class="text-h6 text-primary">
                                        Maxwell Rogers
                                    </h2>
                                    Head Waiter
                                </v-card-text>
                                <v-overlay :model-value="isHovering" contained scrim="#036358"
                                    class="align-center justify-center">
                                    <v-btn variant="flat">See more info</v-btn>
                                </v-overlay>
                            </v-card>
                        </v-hover>
                    </div>

                    <div class="mr-15 mb-4">
                        <v-hover v-slot="{ isHovering, props }">
                            <v-card class="mx-auto" max-width="344"  v-bind="props">
                                <v-img src="https://plus.unsplash.com/premium_photo-1664453546896-ad5e0f895eab?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" height="340"></v-img>

                                <v-card-text>
                                    <h2 class="text-h6 text-primary">
                                        Chris Johnson
                                    </h2>
                                    Bar waiter
                                </v-card-text>
                                <v-overlay :model-value="isHovering" contained scrim="#036358"
                                    class="align-center justify-center">
                                    <v-btn variant="flat">See more info</v-btn>
                                </v-overlay>
                            </v-card>
                        </v-hover>
                    </div>
                    <div class="mb-4">
                        <v-hover v-slot="{ isHovering, props }">
                            <v-card class="mx-auto" max-width="344" v-bind="props">
                                <v-img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" height="340"></v-img>

                                <v-card-text>
                                    <h2 class="text-h6 text-primary">
                                        Jane Wattson
                                    </h2>
                                    Main area waiter
                                </v-card-text>
                                <v-overlay :model-value="isHovering" contained scrim="#036358"
                                    class="align-center justify-center">
                                    <v-btn variant="flat">See more info</v-btn>
                                </v-overlay>
                            </v-card>
                        </v-hover>
                    </div>

                </v-layout>
            </v-container>

    </v-container></div>       
</template>